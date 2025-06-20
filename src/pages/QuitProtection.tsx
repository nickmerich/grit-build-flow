
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import GradientButton from '@/components/ui/GradientButton';
import { 
  Shield, 
  DollarSign, 
  Target, 
  TrendingUp, 
  Users, 
  CheckCircle,
  ArrowLeft,
  Brain,
  Lock
} from 'lucide-react';

const QuitProtection = () => {
  const [selectedAmount, setSelectedAmount] = useState(5);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const protectionOptions = [
    { amount: 3, description: 'Light motivation', popularity: 'Most popular' },
    { amount: 5, description: 'Balanced commitment', popularity: 'Recommended' },
    { amount: 10, description: 'Strong deterrent', popularity: 'For serious goals' }
  ];

  const handleActivateProtection = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      localStorage.setItem('quitProtectionActive', 'true');
      localStorage.setItem('quitProtectionAmount', selectedAmount.toString());
      localStorage.setItem('quitProtectionDate', new Date().toISOString());
      setIsProcessing(false);
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 p-4">
      <div className="container mx-auto max-w-4xl py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="text-white/80 hover:text-white mb-6"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back
        </Button>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="text-white" size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Quit Protection
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Add a small financial commitment to strengthen your resolve and boost your success rate by 3x
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Psychology & Benefits */}
          <div className="space-y-6">
            <Card className="bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="text-purple-600" size={24} />
                  The Psychology of Commitment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 rounded-full p-2">
                    <TrendingUp className="text-purple-600" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Loss Aversion</h4>
                    <p className="text-gray-600 text-sm">Humans are 2x more motivated to avoid losses than to achieve gains</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 rounded-full p-2">
                    <Target className="text-blue-600" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Skin in the Game</h4>
                    <p className="text-gray-600 text-sm">Financial commitment creates genuine accountability</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full p-2">
                    <Users className="text-green-600" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Proven Results</h4>
                    <p className="text-gray-600 text-sm">Studies show 3x higher completion rates with financial stakes</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-700 mb-2">73%</div>
                  <p className="text-green-800 font-semibold mb-2">Success Rate with Quit Protection</p>
                  <p className="text-green-600 text-sm">vs 24% without any commitment mechanism</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-800 mb-4">How It Works</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center text-purple-600 font-semibold text-sm">1</div>
                    <p className="text-gray-700">Choose your commitment amount ($3-$10)</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center text-purple-600 font-semibold text-sm">2</div>
                    <p className="text-gray-700">We hold the amount securely (not charged yet)</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center text-purple-600 font-semibold text-sm">3</div>
                    <p className="text-gray-700">Complete your goal = money returned + bonus rewards</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-red-100 rounded-full w-8 h-8 flex items-center justify-center text-red-600 font-semibold text-sm">4</div>
                    <p className="text-gray-700">Quit early = amount donated to charity of your choice</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Protection Options */}
          <div className="space-y-6">
            <Card className="bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="text-orange-600" size={24} />
                  Choose Your Protection Level
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {protectionOptions.map((option) => (
                  <div
                    key={option.amount}
                    className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                      selectedAmount === option.amount
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedAmount(option.amount)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-3">
                          <div className="text-2xl font-bold text-gray-800">${option.amount}</div>
                          {option.popularity && (
                            <Badge className="bg-purple-100 text-purple-700 text-xs">
                              {option.popularity}
                            </Badge>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm mt-1">{option.description}</p>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 ${
                        selectedAmount === option.amount
                          ? 'border-purple-500 bg-purple-500'
                          : 'border-gray-300'
                      }`}>
                        {selectedAmount === option.amount && (
                          <CheckCircle className="text-white w-full h-full" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
              <CardContent className="p-6">
                <div className="text-center">
                  <DollarSign className="text-orange-600 w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-orange-800 mb-2">Your Commitment</h3>
                  <div className="text-3xl font-bold text-orange-700 mb-2">${selectedAmount}</div>
                  <p className="text-orange-600 text-sm mb-4">Held securely, returned on success</p>
                  
                  <div className="bg-white/60 rounded-lg p-3 text-sm text-orange-800">
                    <strong>Success Bonus:</strong> Complete your goal and get your ${selectedAmount} back 
                    PLUS bonus GRYT rewards worth ${selectedAmount * 2}!
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <GradientButton
                size="lg"
                onClick={handleActivateProtection}
                disabled={isProcessing}
                className="w-full h-14 text-lg font-bold"
              >
                {isProcessing ? 'Processing...' : `Activate ${selectedAmount} Protection`}
              </GradientButton>
              
              <Button
                variant="ghost"
                onClick={() => navigate('/dashboard')}
                className="w-full text-white/80 hover:text-white"
              >
                Skip for now (you can activate this later)
              </Button>
            </div>

            <div className="text-center text-white/70 text-xs">
              <p>🔒 Secure payment processing • 30-day money-back guarantee</p>
              <p>No hidden fees • Cancel anytime before goal completion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Badge = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${className}`}>
    {children}
  </span>
);

export default QuitProtection;
