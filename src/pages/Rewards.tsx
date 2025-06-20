
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
  Zap
} from 'lucide-react';

const Rewards = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Mock user data
  const userStats = {
    grytPoints: 1,247,
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
      pointsValue: 500
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
      pointsValue: 750
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
      pointsValue: 300
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
      pointsValue: 400
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
      pointsValue: 450
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
      icon: '☀️'
    },
    {
      id: 2,
      title: 'Creative Sprint',
      description: 'Create something daily for 30 days',
      participants: 1203,
      daysLeft: 22,
      reward: 'Adobe Creative Suite',
      icon: '🎨'
    },
    {
      id: 3,
      title: 'Strength Stack',
      description: 'Workout 5x/week for 8 weeks',
      participants: 3421,
      daysLeft: 35,
      reward: 'Premium Gym Membership',
      icon: '💪'
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
        </div>

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
              Active Challenges
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
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm font-body">
                      <span className="text-muted-foreground">{challenge.participants.toLocaleString()} joined</span>
                      <span className="text-gryt-orange font-semibold">{challenge.daysLeft} days left</span>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground font-body mb-2">Reward: {challenge.reward}</p>
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
                      <Badge variant="secondary" className="text-xs">
                        {reward.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-gryt-orange font-body">{reward.pointsValue} GP</div>
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
        <Card className="border-2 border-dashed border-gryt-orange/30 bg-gradient-to-br from-gryt-orange/5 to-gryt-gold/5">
          <CardContent className="p-8 text-center">
            <div className="mb-4">
              <div className="bg-gradient-to-r from-gryt-orange to-gryt-gold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={20} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 font-primary">Partner with GRYT</h3>
              <p className="text-muted-foreground font-body mb-6">
                Are you a brand that believes in rewarding discipline? Join our reward partner program.
              </p>
            </div>
            
            <Button className="bg-gradient-to-r from-gryt-orange to-gryt-gold hover:from-gryt-orange-dark hover:to-gryt-gold-dark text-white font-semibold">
              <ExternalLink size={16} className="mr-2" />
              Apply as Partner
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Rewards;
