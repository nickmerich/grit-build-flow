
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Target, Calendar, BookOpen, MessageSquare, Trophy, Gift, Users, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard' },
    { icon: Target, label: 'Goal', path: '/onboarding' },
    { icon: BookOpen, label: 'Journal', path: '/journal' },
    { icon: MessageSquare, label: 'Coach', path: '/coach' },
    { icon: Trophy, label: 'Progress', path: '/progress' },
    { icon: Gift, label: 'Rewards', path: '/rewards' },
    { icon: Users, label: 'Community', path: '/leaderboard' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  // Don't show navigation on landing and onboarding pages
  if (location.pathname === '/' || location.pathname === '/onboarding' || location.pathname === '/contract') {
    return null;
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 md:top-0 md:left-0 md:bottom-auto md:w-64 md:h-screen md:border-r md:border-t-0">
      <div className="flex md:flex-col md:h-full">
        <div className="hidden md:block p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            GRYT
          </h1>
          <p className="text-sm text-gray-600 mt-1">Build Yourself. Do the Thing.</p>
        </div>
        
        <div className="flex md:flex-col flex-1 overflow-x-auto md:overflow-y-auto md:p-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-3 p-3 md:p-3 md:rounded-lg transition-colors min-w-0 flex-1 md:flex-none",
                  isActive
                    ? "text-purple-600 bg-purple-50 md:bg-gradient-to-r md:from-purple-600 md:to-pink-600 md:text-white"
                    : "text-gray-600 hover:text-purple-600 hover:bg-gray-50"
                )}
              >
                <Icon size={20} className="flex-shrink-0" />
                <span className="text-xs md:text-sm font-medium truncate">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
