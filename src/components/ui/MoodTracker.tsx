
import React from 'react';
import { cn } from '@/lib/utils';

interface MoodTrackerProps {
  mood: number;
  onMoodChange: (mood: number) => void;
  className?: string;
}

const MoodTracker = ({ mood, onMoodChange, className }: MoodTrackerProps) => {
  const moods = [
    { emoji: '😞', label: 'Terrible', value: 1, color: 'text-red-500' },
    { emoji: '😕', label: 'Poor', value: 2, color: 'text-gryt-orange' },
    { emoji: '😐', label: 'Okay', value: 3, color: 'text-gryt-gold' },
    { emoji: '😊', label: 'Good', value: 4, color: 'text-green-500' },
    { emoji: '😄', label: 'Amazing', value: 5, color: 'text-primary' },
  ];

  return (
    <div className={cn("bg-card rounded-3xl p-6 shadow-sm border border-border", className)}>
      <h3 className="font-semibold text-foreground mb-4 text-center font-primary">How are you feeling today?</h3>
      <div className="flex justify-between items-center gap-2">
        {moods.map((moodOption) => (
          <button
            key={moodOption.value}
            onClick={() => onMoodChange(moodOption.value)}
            className={cn(
              "flex flex-col items-center p-3 rounded-2xl transition-all duration-200 hover:bg-muted/50",
              mood === moodOption.value && "bg-gradient-to-br from-primary/5 to-accent/5 ring-2 ring-primary"
            )}
          >
            <span className="text-3xl mb-1">{moodOption.emoji}</span>
            <span className={cn("text-xs font-medium font-body", moodOption.color)}>{moodOption.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodTracker;
