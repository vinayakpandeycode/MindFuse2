import { useMemo } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { TrendingUp } from "lucide-react";
import { EmotionData, Emotion } from "@/hooks/useEmotionDetector";
import { emotionConfig } from "@/lib/emotionConfig";

interface EmotionChartProps {
  emotionHistory: EmotionData[];
}

const emotionColors: Record<Emotion, string> = {
  happy: "#facc15",
  sad: "#3b82f6",
  angry: "#ef4444",
  fearful: "#a855f7",
  disgusted: "#f97316",
  surprised: "#f97316",
  neutral: "#64748b",
};

const EmotionChart = ({ emotionHistory }: EmotionChartProps) => {
  const chartData = useMemo(() => {
    return emotionHistory.slice(-30).map((data, index) => ({
      time: index,
      happy: Math.round(data.allEmotions.happy * 100),
      sad: Math.round(data.allEmotions.sad * 100),
      angry: Math.round(data.allEmotions.angry * 100),
      neutral: Math.round(data.allEmotions.neutral * 100),
      surprised: Math.round(data.allEmotions.surprised * 100),
    }));
  }, [emotionHistory]);

  if (emotionHistory.length === 0) {
    return (
      <div className="card-glass h-full flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Emotion Timeline</h2>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground text-center">
            Start detection to see emotion trends
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="card-glass h-full">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 text-primary" />
        <h2 className="text-lg font-semibold text-foreground">Emotion Timeline</h2>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <XAxis 
              dataKey="time" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              domain={[0, 100]}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "hsl(var(--foreground))" }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="happy"
              stroke={emotionColors.happy}
              strokeWidth={2}
              dot={false}
              name="Happy"
            />
            <Line
              type="monotone"
              dataKey="sad"
              stroke={emotionColors.sad}
              strokeWidth={2}
              dot={false}
              name="Sad"
            />
            <Line
              type="monotone"
              dataKey="neutral"
              stroke={emotionColors.neutral}
              strokeWidth={2}
              dot={false}
              name="Neutral"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EmotionChart;
