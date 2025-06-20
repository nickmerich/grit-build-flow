
import React, { useState } from 'react';
import GradientButton from '@/components/ui/GradientButton';
import { MessageSquare, Send, Sparkles, Heart, Zap } from 'lucide-react';

const Coach = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      message: "Hey there! I'm your GRYT AI coach. I'm here to support you on your journey and help you stay motivated. How are you feeling about your progress today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const quickResponses = [
    "I'm struggling today",
    "Feeling motivated!",
    "Need encouragement",
    "Share progress tips"
  ];

  const handleSendMessage = async (message?: string) => {
    const messageToSend = message || inputMessage.trim();
    if (!messageToSend) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      message: messageToSend,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "I hear you, and that's completely normal. Every journey has tough days. What matters is that you're here, you're showing up, and you're not giving up on yourself. That takes real strength. What's one tiny thing you can do right now to move forward?",
        "That's amazing energy! I love seeing your motivation. Let's channel that into action - what specific step can you take today to build on this momentum? Remember, consistency beats intensity every time.",
        "You're doing something incredible by committing to change, and I want you to know that. The fact that you're here, working on yourself, puts you ahead of 90% of people. What's been your biggest win this week, even if it seems small?",
        "Here's what I've learned from coaching thousands of people: start impossibly small. If your goal is to work out, commit to 2 minutes. If it's journaling, write one sentence. Make it so easy you can't say no. What would 'impossibly small' look like for your goal?"
      ];
      
      const aiMessage = {
        id: messages.length + 2,
        type: 'ai',
        message: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 pb-20 md:pl-64">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Sparkles className="text-white" size={24} />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">AI Coach</h1>
          <p className="text-gray-600">Your personal motivation and guidance system</p>
        </div>

        {/* Chat Container */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 flex flex-col h-[60vh]">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] ${msg.type === 'user' ? 'order-2' : 'order-1'}`}>
                  {msg.type === 'ai' && (
                    <div className="flex items-center mb-2">
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                        <Sparkles className="text-white" size={12} />
                      </div>
                      <span className="text-sm font-medium text-gray-600">GRYT Coach</span>
                    </div>
                  )}
                  <div
                    className={`p-4 rounded-2xl ${
                      msg.type === 'user'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                        : 'bg-gray-50 text-gray-800'
                    }`}
                  >
                    <p className="leading-relaxed">{msg.message}</p>
                  </div>
                  <span className="text-xs text-gray-500 mt-1 block">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%]">
                  <div className="flex items-center mb-2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                      <Sparkles className="text-white" size={12} />
                    </div>
                    <span className="text-sm font-medium text-gray-600">GRYT Coach</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-2xl">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Responses */}
          <div className="p-4 border-t border-gray-100">
            <div className="flex flex-wrap gap-2 mb-4">
              {quickResponses.map((response, index) => (
                <button
                  key={index}
                  onClick={() => handleSendMessage(response)}
                  className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm hover:bg-purple-200 transition-colors"
                >
                  {response}
                </button>
              ))}
            </div>

            {/* Message Input */}
            <div className="flex space-x-3">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 p-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all"
              />
              <GradientButton
                onClick={() => handleSendMessage()}
                disabled={!inputMessage.trim() || isLoading}
                className="px-4"
              >
                <Send size={16} />
              </GradientButton>
            </div>
          </div>
        </div>

        {/* Coach Tips */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
            <Heart className="text-red-500 w-8 h-8 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Compassionate</h3>
            <p className="text-gray-600 text-sm">Your coach understands struggles and meets you where you are</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
            <Zap className="text-yellow-500 w-8 h-8 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Motivating</h3>
            <p className="text-gray-600 text-sm">Get the push you need to take action and stay consistent</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
            <MessageSquare className="text-blue-500 w-8 h-8 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Personalized</h3>
            <p className="text-gray-600 text-sm">Advice tailored to your specific goals and progress</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coach;
