
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChoiceCard from '@/components/ui/ChoiceCard';
import GradientButton from '@/components/ui/GradientButton';
import { Target, Zap, Dumbbell, Heart, Briefcase, Book } from 'lucide-react';

const Onboarding = () => {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const navigate = useNavigate();

  const goals = [
    {
      id: 'fitness',
      icon: Dumbbell,
      title: 'Get Fit & Strong',
      description: 'Build a consistent workout routine and transform your body'
    },
    {
      id: 'habits',
      icon: Target,
      title: 'Build Better Habits',
      description: 'Create positive daily routines that stick long-term'
    },
    {
      id: 'quit',
      icon: Zap,
      title: 'Quit Bad Habits',
      description: 'Break free from habits that hold you back'
    },
    {
      id: 'wellness',
      icon: Heart,
      title: 'Mental Wellness',
      description: 'Develop mindfulness, reduce stress, improve mental health'
    },
    {
      id: 'career',
      icon: Briefcase,
      title: 'Career Growth',
      description: 'Level up your skills and advance your professional life'
    },
    {
      id: 'learning',
      icon: Book,
      title: 'Learn Something New',
      description: 'Master a new skill, language, or area of knowledge'
    }
  ];

  const handleContinue = () => {
    if (selectedGoal) {
      // Store selected goal in localStorage for now
      localStorage.setItem('selectedGoal', selectedGoal);
      navigate('/contract');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4">
      <div className="container mx-auto max-w-4xl py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Choose Your GRYT Goal
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pick one meaningful goal to focus on. GRYT works best when you commit to doing one thing really well.
          </p>
        </div>

        {/* Goal Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {goals.map((goal) => (
            <ChoiceCard
              key={goal.id}
              icon={goal.icon}
              title={goal.title}
              description={goal.description}
              isSelected={selectedGoal === goal.id}
              onClick={() => setSelectedGoal(goal.id)}
            />
          ))}
        </div>

        {/* Continue Button */}
        <div className="text-center">
          <GradientButton
            size="lg"
            onClick={handleContinue}
            disabled={!selectedGoal}
            className="min-w-64"
          >
            Continue to Contract
          </GradientButton>
          
          {!selectedGoal && (
            <p className="text-gray-500 text-sm mt-4">
              Please select a goal to continue
            </p>
          )}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/80">
          <p className="text-gray-600">
            <strong>Remember:</strong> You can only work on one goal at a time. Choose the one that matters most to you right now.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
