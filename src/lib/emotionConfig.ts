import { Emotion } from "@/hooks/useEmotionDetector";
import { Smile, Frown, Angry, AlertCircle, Skull, Zap, Meh } from "lucide-react";

export const emotionConfig: Record<Emotion, {
  label: string;
  icon: typeof Smile;
  colorClass: string;
  bgClass: string;
  emoji: string;
}> = {
  happy: {
    label: "Happy",
    icon: Smile,
    colorClass: "text-emotion-happy",
    bgClass: "bg-emotion-happy",
    emoji: "😊",
  },
  sad: {
    label: "Sad",
    icon: Frown,
    colorClass: "text-emotion-sad",
    bgClass: "bg-emotion-sad",
    emoji: "😢",
  },
  angry: {
    label: "Angry",
    icon: Angry,
    colorClass: "text-emotion-angry",
    bgClass: "bg-emotion-angry",
    emoji: "😠",
  },
  fearful: {
    label: "Fear",
    icon: AlertCircle,
    colorClass: "text-emotion-fear",
    bgClass: "bg-emotion-fear",
    emoji: "😨",
  },
  disgusted: {
    label: "Disgust",
    icon: Skull,
    colorClass: "text-emotion-angry",
    bgClass: "bg-emotion-angry",
    emoji: "🤢",
  },
  surprised: {
    label: "Surprise",
    icon: Zap,
    colorClass: "text-emotion-surprise",
    bgClass: "bg-emotion-surprise",
    emoji: "😲",
  },
  neutral: {
    label: "Neutral",
    icon: Meh,
    colorClass: "text-emotion-neutral",
    bgClass: "bg-emotion-neutral",
    emoji: "😐",
  },
};

export const getEmotionConfig = (emotion: Emotion) => emotionConfig[emotion];
