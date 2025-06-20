
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GradientButton from '@/components/ui/GradientButton';
import { PenTool, Target } from 'lucide-react';

const Contract = () => {
  const [signature, setSignature] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);
  const navigate = useNavigate();

  const selectedGoal = localStorage.getItem('selectedGoal') || 'fitness';
  
  const goalTexts = {
    fitness: 'commit to working out consistently and building physical strength',
    habits: 'build positive daily habits that align with my values',
    quit: 'break free from habits that no longer serve me',
    wellness: 'prioritize my mental health and emotional wellbeing',
    career: 'invest in my professional growth and skills development',
    learning: 'dedicate time to learning and expanding my knowledge'
  };

  const goalText = goalTexts[selectedGoal as keyof typeof goalTexts] || goalTexts.fitness;

  const handleSign = () => {
    if (signature.trim() && isAgreed) {
      // Store signature and agreement
      localStorage.setItem('contractSigned', 'true');
      localStorage.setItem('signature', signature);
      localStorage.setItem('contractDate', new Date().toISOString());
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 p-4">
      <div className="container mx-auto max-w-3xl py-8">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="text-white" size={32} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Your GRYT Contract
            </h1>
            <p className="text-gray-600">
              This is your commitment to yourself. Make it count.
            </p>
          </div>

          {/* Contract Text */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-8 border-l-4 border-purple-600">
            <div className="text-lg leading-relaxed text-gray-800">
              <p className="mb-6">
                <strong>I, _______________, commit to using GRYT to {goalText}.</strong>
              </p>
              
              <div className="space-y-4 text-base">
                <p><strong>I understand that:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Success requires consistent daily action, not perfection</li>
                  <li>Building new habits takes time, patience, and self-compassion</li>
                  <li>I will show up for myself even when motivation is low</li>
                  <li>Progress is more important than perfection</li>
                  <li>I deserve to become the person I want to be</li>
                </ul>
              </div>

              <p className="mt-6">
                <strong>I commit to:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Checking in daily with GRYT</li>
                <li>Being honest about my progress and setbacks</li>
                <li>Using the AI coach for support when needed</li>
                <li>Celebrating small wins along the way</li>
                <li>Not giving up on myself</li>
              </ul>

              <p className="text-gray-600 text-sm">
                Signed on {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>

          {/* Signature Section */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                <PenTool size={16} className="inline mr-2" />
                Your Digital Signature
              </label>
              <input
                type="text"
                value={signature}
                onChange={(e) => setSignature(e.target.value)}
                placeholder="Type your full name here"
                className="w-full p-4 border border-gray-300 rounded-xl text-lg focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all"
              />
            </div>

            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="agreement"
                checked={isAgreed}
                onChange={(e) => setIsAgreed(e.target.checked)}
                className="mt-1 w-5 h-5 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label htmlFor="agreement" className="text-sm text-gray-700 leading-relaxed">
                I agree to this commitment and understand that lasting change requires consistent effort. 
                I'm ready to build myself and do the thing.
              </label>
            </div>

            <div className="text-center pt-6">
              <GradientButton
                size="lg"
                onClick={handleSign}
                disabled={!signature.trim() || !isAgreed}
                className="min-w-64"
              >
                Sign My Contract
              </GradientButton>
              
              {(!signature.trim() || !isAgreed) && (
                <p className="text-gray-500 text-sm mt-4">
                  Please sign and agree to the terms to continue
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contract;
