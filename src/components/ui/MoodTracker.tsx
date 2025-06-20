
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
    { emoji: '😕', label: 'Poor', value: 2, color: 'text-orange-500' },
    { emoji: '😐', label: 'Okay', value: 3, color: 'text-yellow-500' },
    { emoji: '😊', label: 'Good', value: 4, color: 'text-green-500' },
    { emoji: '😄', label: 'Amazing', value: 5, color: 'text-purple-500' },
  ];

  return (
    <div className={cn("bg-white rounded-2xl p-6 shadow-sm border border-gray-100", className)}>
      <h3 className="font-semibold text-gray-800 mb-4 text-center">How are you feeling today?</h3>
      <div className="flex justify-between items-center gap-2">
        {moods.map((moodOption) => (
          <button
            key={moodOption.value}
            onClick={() => onMoodChange(moodOption.value)}
            className={cn(
              "flex flex-col items-center p-3 rounded-xl transition-all duration-200 hover:bg-gray-50",
              mood === moodOption.value && "bg-gradient-to-br from-purple-50 to-pink-50 ring-2 ring-purple-300"
            )}
          >
            <span className="text-3xl mb-1">{moodOption.emoji}</span>
            <span className={cn("text-xs font-medium", moodOption.color)}>{moodOption.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodTracker;
