
import React from 'react';
import { cn } from '@/lib/utils';
import { Flame } from 'lucide-react';

interface StreakCounterProps {
  streak: number;
  className?: string;
}

const StreakCounter = ({ streak, className }: StreakCounterProps) => {
  return (
    <div className={cn("bg-card rounded-3xl p-6 shadow-sm border border-border", className)}>
      <div className="flex items-center justify-center space-x-3">
        <div className="p-3 bg-gradient-to-r from-gryt-orange to-gryt-gold rounded-full">
          <Flame className="text-white" size={24} />
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold font-primary gradient-text">
            {streak}
          </div>
          <div className="text-sm text-muted-foreground font-medium font-body">
            Day{streak !== 1 ? 's' : ''} Streak
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreakCounter;
