import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import { EmotionData, Emotion } from "@/hooks/useEmotionDetector";
import { emotionConfig } from "@/lib/emotionConfig";

interface CurrentEmotionDisplayProps {
  currentEmotion: EmotionData | null;
  isDetecting: boolean;
}

const CurrentEmotionDisplay = ({ currentEmotion, isDetecting }: CurrentEmotionDisplayProps) => {
  if (!isDetecting || !currentEmotion) {
    return (
      <div className="card-glass h-full flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <Activity className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Current Emotion</h2>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground text-center">
            Start detection to see real-time emotions
          </p>
        </div>
      </div>
    );
  }

  const config = emotionConfig[currentEmotion.emotion];

  return (
    <div className="card-glass h-full">
      <div className="flex items-center gap-2 mb-6">
        <Activity className="w-5 h-5 text-primary" />
        <h2 className="text-lg font-semibold text-foreground">Current Emotion</h2>
      </div>

      {/* Main Emotion Display */}
      <motion.div
        key={currentEmotion.emotion}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center mb-6"
      >
        <div className="text-7xl mb-3">{config.emoji}</div>
        <h3 className={`text-3xl font-bold ${config.colorClass}`}>{config.label}</h3>
        <p className="text-muted-foreground">
          {Math.round(currentEmotion.confidence * 100)}% confident
        </p>
      </motion.div>

      {/* All Emotions Breakdown */}
      <div className="space-y-3">
        {(Object.entries(currentEmotion.allEmotions) as [Emotion, number][])
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([emotion, value]) => {
            const emotionInfo = emotionConfig[emotion];
            return (
              <div key={emotion} className="flex items-center gap-3">
                <div className="w-6 text-center">{emotionInfo.emoji}</div>
                <span className="text-sm text-muted-foreground w-16">{emotionInfo.label}</span>
                <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${value * 100}%` }}
                    transition={{ duration: 0.3 }}
                    className={`h-full ${emotionInfo.bgClass} rounded-full`}
                  />
                </div>
                <span className="text-xs font-medium text-foreground w-12 text-right">
                  {Math.round(value * 100)}%
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CurrentEmotionDisplay;
