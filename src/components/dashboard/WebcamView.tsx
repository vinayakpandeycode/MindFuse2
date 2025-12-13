import { motion } from "framer-motion";
import { Camera, CameraOff, Loader2 } from "lucide-react";
import { EmotionData } from "@/hooks/useEmotionDetector";
import { emotionConfig } from "@/lib/emotionConfig";

interface WebcamViewProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  isActive: boolean;
  isLoading: boolean;
  isDetecting: boolean;
  isModelLoading: boolean;
  currentEmotion: EmotionData | null;
  error: string | null;
  onStart: () => void;
  onStop: () => void;
}

const WebcamView = ({
  videoRef,
  isActive,
  isLoading,
  isDetecting,
  isModelLoading,
  currentEmotion,
  error,
  onStart,
  onStop,
}: WebcamViewProps) => {
  const config = currentEmotion ? emotionConfig[currentEmotion.emotion] : null;

  return (
    <div className="card-glass h-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
          <Camera className="w-5 h-5 text-primary" />
          Live Webcam
        </h2>
        {isActive && (
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
            <span className="text-xs text-muted-foreground">LIVE</span>
          </div>
        )}
      </div>

      {/* Video Container */}
      <div className="relative aspect-video bg-secondary rounded-xl overflow-hidden mb-4">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className={`w-full h-full object-cover ${isActive ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Overlay when inactive */}
        {!isActive && !isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <CameraOff className="w-16 h-16 text-muted-foreground mb-4" />
            <p className="text-muted-foreground text-center mb-4">
              Camera is off
            </p>
            <button onClick={onStart} className="btn-primary">
              <Camera className="w-4 h-4" />
              Start Camera
            </button>
          </div>
        )}

        {/* Loading state */}
        {(isLoading || isModelLoading) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-secondary/80">
            <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
            <p className="text-muted-foreground">
              {isModelLoading ? "Loading AI models..." : "Starting camera..."}
            </p>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-secondary/80 p-4">
            <p className="text-destructive text-center mb-4">{error}</p>
            <button onClick={onStart} className="btn-secondary">
              Try Again
            </button>
          </div>
        )}

        {/* Face detection overlay */}
        {isActive && isDetecting && currentEmotion && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute bottom-4 left-4 right-4"
          >
            <div className="glass rounded-xl p-4 flex items-center gap-4">
              <div className="text-4xl">{config?.emoji}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-foreground">{config?.label}</span>
                  <span className={`text-sm font-bold ${config?.colorClass}`}>
                    {Math.round(currentEmotion.confidence * 100)}%
                  </span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${currentEmotion.confidence * 100}%` }}
                    className={`h-full ${config?.bgClass} rounded-full`}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Controls */}
      {isActive && (
        <div className="flex gap-3">
          <button onClick={onStop} className="btn-secondary flex-1 justify-center">
            <CameraOff className="w-4 h-4" />
            Stop Camera
          </button>
        </div>
      )}
    </div>
  );
};

export default WebcamView;
