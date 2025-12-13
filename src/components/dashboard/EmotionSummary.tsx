import { useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { PieChart as PieChartIcon } from "lucide-react";
import { EmotionData, Emotion } from "@/hooks/useEmotionDetector";
import { emotionConfig } from "@/lib/emotionConfig";

interface EmotionSummaryProps {
  emotionHistory: EmotionData[];
}

const emotionColors: Record<Emotion, string> = {
  happy: "#facc15",
  sad: "#3b82f6",
  angry: "#ef4444",
  fearful: "#a855f7",
  disgusted: "#f97316",
  surprised: "#fb923c",
  neutral: "#64748b",
};

const EmotionSummary = ({ emotionHistory }: EmotionSummaryProps) => {
  const summaryData = useMemo(() => {
    if (emotionHistory.length === 0) return [];

    const counts: Record<Emotion, number> = {
      happy: 0,
      sad: 0,
      angry: 0,
      fearful: 0,
      disgusted: 0,
      surprised: 0,
      neutral: 0,
    };

    emotionHistory.forEach(data => {
      counts[data.emotion]++;
    });

    const total = emotionHistory.length;
    
    return Object.entries(counts)
      .filter(([_, count]) => count > 0)
      .map(([emotion, count]) => ({
        name: emotionConfig[emotion as Emotion].label,
        value: Math.round((count / total) * 100),
        color: emotionColors[emotion as Emotion],
        emotion: emotion as Emotion,
      }))
      .sort((a, b) => b.value - a.value);
  }, [emotionHistory]);

  if (emotionHistory.length === 0) {
    return (
      <div className="card-glass h-full flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <PieChartIcon className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Emotion Summary</h2>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground text-center">
            Start detection to see emotion distribution
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="card-glass h-full">
      <div className="flex items-center gap-2 mb-4">
        <PieChartIcon className="w-5 h-5 text-primary" />
        <h2 className="text-lg font-semibold text-foreground">Emotion Summary</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Pie Chart */}
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={summaryData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={70}
                paddingAngle={2}
                dataKey="value"
              >
                {summaryData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="space-y-2">
          {summaryData.slice(0, 5).map((item) => (
            <div key={item.name} className="flex items-center gap-3">
              <div className="text-xl">{emotionConfig[item.emotion].emoji}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-foreground">{item.name}</span>
                  <span className="text-sm font-bold" style={{ color: item.color }}>
                    {item.value}%
                  </span>
                </div>
                <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${item.value}%`, backgroundColor: item.color }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-border">
        <p className="text-xs text-muted-foreground">
          Based on {emotionHistory.length} data points
        </p>
      </div>
    </div>
  );
};

export default EmotionSummary;
