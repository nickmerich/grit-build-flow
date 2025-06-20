
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
    <div className={cn("bg-white rounded-2xl p-6 shadow-sm border border-gray-100", className)}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full">
            <Star className="text-white" size={16} />
          </div>
          <span className="font-semibold text-gray-800">Level {level}</span>
        </div>
        <span className="text-sm text-gray-600">{currentXP}/{maxXP} GP</span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
    </div>
  );
};

export default XPBar;
