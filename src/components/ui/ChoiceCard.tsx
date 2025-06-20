
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ChoiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  isSelected?: boolean;
  onClick?: () => void;
  className?: string;
}

const ChoiceCard = ({ icon: Icon, title, description, isSelected, onClick, className }: ChoiceCardProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "p-6 rounded-2xl border-2 cursor-pointer transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1",
        isSelected
          ? "border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50 shadow-lg"
          : "border-gray-200 bg-white hover:border-purple-300",
        className
      )}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className={cn(
          "p-4 rounded-full",
          isSelected
            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
            : "bg-gray-100 text-gray-600"
        )}>
          <Icon size={32} />
        </div>
        <div>
          <h3 className="font-bold text-lg text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ChoiceCard;
