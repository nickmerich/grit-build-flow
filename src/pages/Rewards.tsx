
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Gift, 
  Trophy, 
  Star, 
  Target, 
  Calendar, 
  Users, 
  ExternalLink,
  Filter,
  Share2,
  Crown,
  Zap,
  DollarSign,
  Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Rewards = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Mock user data
  const userStats = {
    grytPoints: 1247,
    currentStreak: 12,
    level: 4,
    completedChallenges: 8
  };

  const categories = ['All', 'Health', 'Career', 'Creativity', 'Mindset', 'Finance'];

  const featuredRewards = [
    {
      id: 1,
      brand: 'Athletic Greens',
      logo: '🥬',
      reward: '25% off AG1 Subscription',
      category: 'Health',
      requirement: 'Complete 30-day fitness streak',
      currentProgress: 12,
      totalRequired: 30,
      description: 'Fuel your consistency with premium nutrition',
      featured: true,
      pointsValue: 500,
      rewardValue: '$89',
      sponsored: true
    },
    {
      id: 2,
      brand: 'MasterClass',
      logo: '🎓',
      reward: '3 Months Free Access',
      category: 'Creativity',
      requirement: 'Complete 21-day learning challenge',
      currentProgress: 8,
      totalRequired: 21,
      description: 'Learn from the best in the world',
      featured: true,
      pointsValue: 750,
      rewardValue: '$540',
      sponsored: true
    },
    {
      id: 3,
      brand: 'Notion',
      logo: '📝',
      reward: 'Pro Plan - 6 Months Free',
      category: 'Career',
      requirement: 'Journal daily for 14 days',
      currentProgress: 7,
      totalRequired: 14,
      description: 'Organize your life like a pro',
      featured: false,
      pointsValue: 300,
      rewardValue: '$240',
      sponsored: true
    },
    {
      id: 4,
      brand: 'Headspace',
      logo: '🧘',
      reward: 'Premium Annual Subscription',
      category: 'Mindset',
      requirement: 'Meditate 10 days in a row',
      currentProgress: 3,
      totalRequired: 10,
      description: 'Master your mind, master your life',
      featured: false,
      pointsValue: 400,
      rewardValue: '$399',
      sponsored: true
    },
    {
      id: 5,
      brand: 'YNAB',
      logo: '💰',
      reward: '3 Months Free Trial',
      category: 'Finance',
      requirement: 'Track expenses for 30 days',
      currentProgress: 0,
      totalRequired: 30,
      description: 'Take control of your financial future',
      featured: false,
      pointsValue: 450,
      rewardValue: '$210',
      sponsored: true
    }
  ];

  const activeChallenges = [
    {
      id: 1,
      title: 'Morning Momentum',
      description: 'Wake up before 7 AM for 21 days',
      participants: 2847,
      daysLeft: 15,
      reward: 'Premium Coffee Subscription',
      icon: '☀️',
      sponsor: 'Blue Bottle Coffee',
      rewardValue: '$150'
    },
    {
      id: 2,
      title: 'Creative Sprint',
      description: 'Create something daily for 30 days',
      participants: 1203,
      daysLeft: 22,
      reward: 'Adobe Creative Suite',
      icon: '🎨',
      sponsor: 'Adobe',
      rewardValue: '$600'
    },
    {
      id: 3,
      title: 'Strength Stack',
      description: 'Workout 5x/week for 8 weeks',
      participants: 3421,
      daysLeft: 35,
      reward: 'Premium Gym Membership',
      icon: '💪',
      sponsor: 'Equinox',
      rewardValue: '$300'
    }
  ];

  const filteredRewards = selectedCategory === 'All' 
    ? featuredRewards 
    : featuredRewards.filter(reward => reward.category === selectedCategory);

  const getProgressPercentage = (current: number, total: number) => {
    return Math.min((current / total) * 100, 100);
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pl-64">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-gryt-orange to-gryt-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Gift className="text-white" size={24} />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2 font-primary">GRYT Rewards</h1>
          <p className="text-muted-foreground font-body mb-2">Earn it. Level up your life.</p>
          <p className="text-sm text-muted-foreground font-body">GRYT recognizes GRYT.</p>
          
          {/* Free for Users Message */}
          <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-full px-6 py-3 mt-4 inline-block">
            <div className="flex items-center gap-2 text-emerald-700">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">100% Free for Users • Sponsored by Partner Brands</span>
            </div>
          </div>
        </div>

        {/* Business Model Explanation */}
        <Card className="mb-8 border-blue-200 bg-gradient-to-r from-blue-50/50 to-indigo-50/50">
          <CardContent className="p-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <DollarSign className="text-blue-600" size={20} />
                <h3 className="text-lg font-semibold text-blue-900">How GRYT Rewards Work</h3>
              </div>
              <p className="text-blue-800 text-sm leading-relaxed max-w-3xl mx-auto">
                Our partner brands sponsor these rewards because they believe in your growth. 
                When you unlock a reward, the brand pays us a fee (typically $3-$10) - you never pay anything. 
                This way, we can keep GRYT completely free while rewarding your hard work!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* User Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 text-center border-border">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Star className="text-gryt-orange" size={20} />
              <span className="font-bold text-foreground font-primary">{userStats.grytPoints.toLocaleString()}</span>
            </div>
            <p className="text-sm text-muted-foreground font-body">GRYT Points</p>
          </Card>
          
          <Card className="p-4 text-center border-border">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Trophy className="text-gryt-gold" size={20} />
              <span className="font-bold text-foreground font-primary">Level {userStats.level}</span>
            </div>
            <p className="text-sm text-muted-foreground font-body">Current Level</p>
          </Card>
          
          <Card className="p-4 text-center border-border">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Zap className="text-gryt-orange" size={20} />
              <span className="font-bold text-foreground font-primary">{userStats.currentStreak}</span>
            </div>
            <p className="text-sm text-muted-foreground font-body">Day Streak</p>
          </Card>
          
          <Card className="p-4 text-center border-border">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Target className="text-gryt-gold" size={20} />
              <span className="font-bold text-foreground font-primary">{userStats.completedChallenges}</span>
            </div>
            <p className="text-sm text-muted-foreground font-body">Completed</p>
          </Card>
        </div>

        {/* Active Challenges Carousel */}
        <Card className="mb-8 border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-primary">
              <Crown className="text-gryt-orange" size={20} />
              Sponsored Challenges
              <Badge variant="secondary" className="ml-2 text-xs">Partner Funded</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {activeChallenges.map((challenge) => (
                <Card key={challenge.id} className="p-4 border-border hover:shadow-lg transition-shadow">
                  <div className="text-center mb-4">
                    <div className="text-3xl mb-2">{challenge.icon}</div>
                    <h3 className="font-semibold text-foreground font-primary">{challenge.title}</h3>
                    <p className="text-sm text-muted-foreground font-body mt-1">{challenge.description}</p>
                    <div className="mt-2">
                      <Badge variant="outline" className="text-xs">
                        Sponsored by {challenge.sponsor}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm font-body">
                      <span className="text-muted-foreground">{challenge.participants.toLocaleString()} joined</span>
                      <span className="text-gryt-orange font-semibold">{challenge.daysLeft} days left</span>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground font-body mb-1">Reward: {challenge.reward}</p>
                      <p className="text-xs text-green-600 font-semibold mb-2">Value: {challenge.rewardValue}</p>
                      <Button className="w-full bg-gradient-to-r from-gryt-orange to-gryt-gold hover:from-gryt-orange-dark hover:to-gryt-gold-dark text-white font-semibold">
                        Join Challenge
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Category Filter */}
        <div className="flex items-center gap-4 mb-6">
          <Filter className="text-muted-foreground" size={20} />
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "bg-gradient-to-r from-gryt-orange to-gryt-gold text-white" 
                  : "border-border text-muted-foreground hover:text-foreground"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Brand Rewards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredRewards.map((reward) => (
            <Card key={reward.id} className={`border-border hover:shadow-lg transition-all duration-200 ${reward.featured ? 'ring-2 ring-gryt-orange/20' : ''}`}>
              {reward.featured && (
                <div className="bg-gradient-to-r from-gryt-orange to-gryt-gold text-white text-center py-2 text-sm font-semibold font-primary">
                  ⭐ FEATURED REWARD
                </div>
              )}
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{reward.logo}</div>
                    <div>
                      <h3 className="font-semibold text-foreground font-primary">{reward.brand}</h3>
                      <div className="flex gap-2 mt-1">
                        <Badge variant="secondary" className="text-xs">
                          {reward.category}
                        </Badge>
                        {reward.sponsored && (
                          <Badge variant="outline" className="text-xs text-blue-600">
                            Sponsored
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-gryt-orange font-body">{reward.pointsValue} GP</div>
                    <div className="text-xs text-green-600 font-semibold">Value: {reward.rewardValue}</div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2 font-primary">{reward.reward}</h4>
                  <p className="text-sm text-muted-foreground font-body">{reward.description}</p>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2 font-body">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-semibold text-foreground">
                      {reward.currentProgress}/{reward.totalRequired} days
                    </span>
                  </div>
                  <Progress 
                    value={getProgressPercentage(reward.currentProgress, reward.totalRequired)} 
                    className="h-2"
                  />
                </div>

                <p className="text-sm text-muted-foreground mb-4 font-body">
                  Complete: {reward.requirement}
                </p>

                <div className="flex gap-2">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-gryt-orange to-gryt-gold hover:from-gryt-orange-dark hover:to-gryt-gold-dark text-white font-semibold"
                    disabled={reward.currentProgress < reward.totalRequired}
                  >
                    {reward.currentProgress >= reward.totalRequired ? 'Redeem Now' : 'Keep Going'}
                  </Button>
                  <Button variant="outline" size="icon" className="border-border">
                    <Share2 size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partner Application CTA */}
        <Card className="border-2 border-dashed border-gryt-orange/30 bg-gradient-to-br from-gryt-orange/5 to-gryt-gold/5 mb-8">
          <CardContent className="p-8 text-center">
            <div className="mb-4">
              <div className="bg-gradient-to-r from-gryt-orange to-gryt-gold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={20} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 font-primary">Partner with GRYT</h3>
              <p className="text-muted-foreground font-body mb-6">
                Are you a brand that believes in rewarding discipline? Join our reward partner program and only pay when users achieve their goals.
              </p>
            </div>
            
            <Link to="/partners">
              <Button className="bg-gradient-to-r from-gryt-orange to-gryt-gold hover:from-gryt-orange-dark hover:to-gryt-gold-dark text-white font-semibold">
                <ExternalLink size={16} className="mr-2" />
                Apply as Partner
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Business Model Transparency */}
        <Card className="border-gray-200 bg-gray-50/50">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Why Rewards Are Free for You</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="text-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="text-blue-600" size={20} />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Brand Sponsorship</h4>
                  <p className="text-gray-600">Partners sponsor rewards to reach motivated users who complete goals</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="text-green-600" size={20} />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Performance-Based</h4>
                  <p className="text-gray-600">Brands only pay when you successfully unlock rewards through achievement</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="text-purple-600" size={20} />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Always Free</h4>
                  <p className="text-gray-600">GRYT's core functionality will always remain completely free for users</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Rewards;
