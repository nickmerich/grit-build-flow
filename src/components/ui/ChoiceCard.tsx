
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
        "p-6 rounded-3xl border-2 cursor-pointer transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1",
        isSelected
          ? "border-primary bg-gradient-to-br from-primary/5 to-accent/5 shadow-lg"
          : "border-border bg-card hover:border-primary/30",
        className
      )}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className={cn(
          "p-4 rounded-full",
          isSelected
            ? "bg-gradient-to-r from-gryt-orange to-gryt-gold text-white"
            : "bg-muted text-muted-foreground"
        )}>
          <Icon size={32} />
        </div>
        <div>
          <h3 className="font-bold text-lg text-foreground mb-2 font-primary">{title}</h3>
          <p className="text-muted-foreground text-sm font-body">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ChoiceCard;
