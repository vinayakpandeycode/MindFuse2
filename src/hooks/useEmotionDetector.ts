import { useRef, useEffect, useState, useCallback } from "react";
import * as faceapi from "face-api.js";

export type Emotion = "happy" | "sad" | "angry" | "fearful" | "disgusted" | "surprised" | "neutral";

export interface EmotionData {
  emotion: Emotion;
  confidence: number;
  timestamp: Date;
  allEmotions: Record<Emotion, number>;
}

export interface EmotionDetectorState {
  isLoading: boolean;
  isModelLoaded: boolean;
  isDetecting: boolean;
  currentEmotion: EmotionData | null;
  error: string | null;
}

const MODEL_URL = "https://justadudewhohacks.github.io/face-api.js/models";

export const useEmotionDetector = (videoRef: React.RefObject<HTMLVideoElement>) => {
  const [state, setState] = useState<EmotionDetectorState>({
    isLoading: true,
    isModelLoaded: false,
    isDetecting: false,
    currentEmotion: null,
    error: null,
  });
  
  const detectionInterval = useRef<NodeJS.Timeout | null>(null);
  const emotionHistory = useRef<EmotionData[]>([]);

  // Load face-api models
  useEffect(() => {
    const loadModels = async () => {
      try {
        setState(prev => ({ ...prev, isLoading: true, error: null }));
        
        await Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
          faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
        ]);
        
        setState(prev => ({ ...prev, isLoading: false, isModelLoaded: true }));
      } catch (error) {
        console.error("Error loading models:", error);
        setState(prev => ({ 
          ...prev, 
          isLoading: false, 
          error: "Failed to load emotion detection models" 
        }));
      }
    };

    loadModels();
  }, []);

  const mapEmotions = (expressions: faceapi.FaceExpressions): Record<Emotion, number> => {
    return {
      happy: expressions.happy,
      sad: expressions.sad,
      angry: expressions.angry,
      fearful: expressions.fearful,
      disgusted: expressions.disgusted,
      surprised: expressions.surprised,
      neutral: expressions.neutral,
    };
  };

  const getDominantEmotion = (emotions: Record<Emotion, number>): Emotion => {
    return Object.entries(emotions).reduce((a, b) => 
      emotions[a[0] as Emotion] > emotions[b[0] as Emotion] ? a : b
    )[0] as Emotion;
  };

  const detectEmotion = useCallback(async () => {
    if (!videoRef.current || !state.isModelLoaded) return;

    try {
      const detections = await faceapi
        .detectSingleFace(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceExpressions();

      if (detections) {
        const allEmotions = mapEmotions(detections.expressions);
        const dominantEmotion = getDominantEmotion(allEmotions);
        
        const emotionData: EmotionData = {
          emotion: dominantEmotion,
          confidence: allEmotions[dominantEmotion],
          timestamp: new Date(),
          allEmotions,
        };

        emotionHistory.current.push(emotionData);
        if (emotionHistory.current.length > 100) {
          emotionHistory.current.shift();
        }

        setState(prev => ({ ...prev, currentEmotion: emotionData }));
      }
    } catch (error) {
      console.error("Detection error:", error);
    }
  }, [videoRef, state.isModelLoaded]);

  const startDetection = useCallback(() => {
    if (!state.isModelLoaded || state.isDetecting) return;

    setState(prev => ({ ...prev, isDetecting: true }));
    detectionInterval.current = setInterval(detectEmotion, 500);
  }, [detectEmotion, state.isModelLoaded, state.isDetecting]);

  const stopDetection = useCallback(() => {
    if (detectionInterval.current) {
      clearInterval(detectionInterval.current);
      detectionInterval.current = null;
    }
    setState(prev => ({ ...prev, isDetecting: false }));
  }, []);

  const getEmotionHistory = useCallback(() => {
    return [...emotionHistory.current];
  }, []);

  const clearHistory = useCallback(() => {
    emotionHistory.current = [];
    setState(prev => ({ ...prev, currentEmotion: null }));
  }, []);

  useEffect(() => {
    return () => {
      if (detectionInterval.current) {
        clearInterval(detectionInterval.current);
      }
    };
  }, []);

  return {
    ...state,
    startDetection,
    stopDetection,
    getEmotionHistory,
    clearHistory,
  };
};
