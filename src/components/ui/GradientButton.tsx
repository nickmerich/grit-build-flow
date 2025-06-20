
import React from 'react';
import { cn } from '@/lib/utils';

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const GradientButton = ({ variant = 'primary', size = 'md', className, children, ...props }: GradientButtonProps) => {
  const baseStyles = "font-semibold rounded-2xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary/20 disabled:opacity-50 disabled:cursor-not-allowed font-primary";
  
  const variantStyles = {
    primary: "bg-gradient-to-r from-gryt-orange to-gryt-gold text-white hover:from-gryt-orange-dark hover:to-gryt-gold-dark shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
  };
  
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default GradientButton;
