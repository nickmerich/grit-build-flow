
import React from 'react';
import { cn } from '@/lib/utils';
import { Flame } from 'lucide-react';

interface StreakCounterProps {
  streak: number;
  className?: string;
}

const StreakCounter = ({ streak, className }: StreakCounterProps) => {
  return (
    <div className={cn("bg-white rounded-2xl p-6 shadow-sm border border-gray-100", className)}>
      <div className="flex items-center justify-center space-x-3">
        <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full">
          <Flame className="text-white" size={24} />
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            {streak}
          </div>
          <div className="text-sm text-gray-600 font-medium">
            Day{streak !== 1 ? 's' : ''} Streak
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreakCounter;
