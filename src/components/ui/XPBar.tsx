
import React from 'react';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

interface XPBarProps {
  currentXP: number;
  maxXP: number;
  level: number;
  className?: string;
}

const XPBar = ({ currentXP, maxXP, level, className }: XPBarProps) => {
  const percentage = (currentXP / maxXP) * 100;

  return (
    <div className={cn("bg-card rounded-3xl p-6 shadow-sm border border-border", className)}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-gradient-to-r from-gryt-orange to-gryt-gold rounded-full">
            <Star className="text-white" size={16} />
          </div>
          <span className="font-semibold text-foreground font-primary">Level {level}</span>
        </div>
        <span className="text-sm text-muted-foreground font-body">{currentXP}/{maxXP} GP</span>
      </div>
      
      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-gryt-orange to-gryt-gold rounded-full transition-all duration-500 ease-out"
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
    </div>
  );
};

export default XPBar;
