
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { 
  Users, 
  Trophy, 
  Star, 
  Target, 
  Heart,
  MessageCircle,
  Search,
  Filter,
  Plus,
  Fire,
  Award,
  Crown,
  Zap,
  Share2
} from 'lucide-react';

const Community = () => {
  const [selectedGroup, setSelectedGroup] = useState('All');
  const [showPostForm, setShowPostForm] = useState(false);

  const goalGroups = ['All', 'Fitness', 'Mindset', 'Career', 'Creativity', 'Health', 'Finance'];

  const topStreaks = [
    {
      id: 1,
      name: 'Sarah M.',
      avatar: 'SM',
      goal: 'Morning workouts',
      streak: 47,
      grytPoints: 2850,
      badge: '🏃‍♀️'
    },
    {
      id: 2,
      name: 'Mike Chen',
      avatar: 'MC',
      goal: 'Daily meditation',
      streak: 32,
      grytPoints: 1920,
      badge: '🧘‍♂️'
    },
    {
      id: 3,
      name: 'Alex Rivera',
      avatar: 'AR',
      goal: 'Learning Spanish',
      streak: 28,
      grytPoints: 1680,
      badge: '🗣️'
    }
  ];

  const winFeed = [
    {
      id: 1,
      user: 'Nick Thompson',
      avatar: 'NT',
      achievement: 'Hit 15 days on sobriety goal',
      timeAgo: '2 hours ago',
      reactions: { fire: 12, hundred: 8, praise: 15 },
      comments: 4,
      category: 'Health',
      streak: 15,
      grytPoints: 450,
      message: 'Each day gets a little easier. Thanks for the support, everyone! 🙏'
    },
    {
      id: 2,
      user: 'Maria Santos',
      avatar: 'MS',
      achievement: 'Completed first marathon training week',
      timeAgo: '4 hours ago',
      reactions: { fire: 18, hundred: 12, praise: 22 },
      comments: 7,
      category: 'Fitness',
      streak: 7,
      grytPoints: 210,
      message: 'My legs are sore but my spirit is stronger! Week 1 ✅'
    },
    {
      id: 3,
      user: 'David Park',
      avatar: 'DP',
      achievement: 'Launched side project after 60 days of daily coding',
      timeAgo: '6 hours ago',
      reactions: { fire: 25, hundred: 19, praise: 31 },
      comments: 12,
      category: 'Career',
      streak: 60,
      grytPoints: 1800,
      message: 'From zero to deployed! Consistency beats perfection every time.'
    },
    {
      id: 4,
      user: 'Emma Wilson',
      avatar: 'EW',
      achievement: 'Wrote 10,000 words this month',
      timeAgo: '8 hours ago',
      reactions: { fire: 14, hundred: 9, praise: 18 },
      comments: 5,
      category: 'Creativity',
      streak: 31,
      grytPoints: 930,
      message: 'Novel is taking shape! Some days were just 100 words, but I showed up.'
    }
  ];

  const trendingGroups = [
    {
      name: 'Morning Warriors',
      members: 1247,
      category: 'Fitness',
      description: 'Rise before 6 AM, conquer the day',
      activeNow: 34
    },
    {
      name: 'Code Builders',
      members: 892,
      category: 'Career',
      description: 'Daily coding practice & project building',
      activeNow: 28
    },
    {
      name: 'Mindful Moments',
      members: 1580,
      category: 'Mindset',
      description: 'Daily meditation & mindfulness practice',
      activeNow: 42
    },
    {
      name: 'Creative Daily',
      members: 634,
      category: 'Creativity',
      description: 'Create something every single day',
      activeNow: 19
    }
  ];

  const getReactionTotal = (reactions: any) => {
    return reactions.fire + reactions.hundred + reactions.praise;
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pl-64">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-gryt-orange to-gryt-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="text-white" size={24} />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2 font-primary">GRYT Community</h1>
          <p className="text-muted-foreground font-body mb-2">One goal. Many warriors.</p>
          <p className="text-sm text-muted-foreground font-body">We see your effort.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-3 space-y-6">
            {/* Post Update Section */}
            <Card className="border-border">
              <CardContent className="p-6">
                {!showPostForm ? (
                  <Button 
                    onClick={() => setShowPostForm(true)}
                    className="w-full bg-gradient-to-r from-gryt-orange to-gryt-gold hover:from-gryt-orange-dark hover:to-gryt-gold-dark text-white font-semibold"
                  >
                    <Plus size={16} className="mr-2" />
                    Share Your Win
                  </Button>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <Avatar>
                        <AvatarFallback className="bg-gryt-orange text-white">YU</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold font-primary">Your Update</p>
                        <p className="text-sm text-muted-foreground font-body">Your win could unlock theirs.</p>
                      </div>
                    </div>
                    <Textarea 
                      placeholder="What did you accomplish today? Share your progress, breakthrough, or milestone..."
                      className="min-h-[100px]"
                    />
                    <div className="flex gap-2">
                      <Button className="bg-gradient-to-r from-gryt-orange to-gryt-gold hover:from-gryt-orange-dark hover:to-gryt-gold-dark text-white font-semibold">
                        Post Win
                      </Button>
                      <Button variant="outline" onClick={() => setShowPostForm(false)}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Category Filter */}
            <div className="flex items-center gap-4">
              <Filter className="text-muted-foreground" size={20} />
              <div className="flex flex-wrap gap-2">
                {goalGroups.map((group) => (
                  <Button
                    key={group}
                    variant={selectedGroup === group ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedGroup(group)}
                    className={selectedGroup === group 
                      ? "bg-gradient-to-r from-gryt-orange to-gryt-gold text-white" 
                      : "border-border text-muted-foreground hover:text-foreground"
                    }
                  >
                    {group}
                  </Button>
                ))}
              </div>
            </div>

            {/* Win Wall Feed */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold font-primary flex items-center gap-2">
                <Trophy className="text-gryt-orange" size={20} />
                Win Wall
              </h2>
              
              {winFeed
                .filter(post => selectedGroup === 'All' || post.category === selectedGroup)
                .map((post) => (
                <Card key={post.id} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-gryt-orange text-white font-semibold">
                          {post.avatar}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-foreground font-primary">{post.user}</h3>
                          <Badge variant="secondary" className="text-xs">
                            {post.category}
                          </Badge>
                          <div className="flex items-center gap-1 text-gryt-orange">
                            <Star size={14} />
                            <span className="text-xs font-semibold">{post.grytPoints} GP</span>
                          </div>
                        </div>
                        
                        <p className="text-foreground font-body mb-2">
                          <strong>{post.achievement}</strong> 💪
                        </p>
                        
                        {post.message && (
                          <p className="text-muted-foreground font-body mb-3 italic">
                            "{post.message}"
                          </p>
                        )}
                        
                        <div className="flex items-center gap-1 mb-3">
                          <Fire className="text-gryt-orange" size={16} />
                          <span className="text-sm font-semibold text-foreground">{post.streak} day streak</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <button className="flex items-center gap-1 text-muted-foreground hover:text-gryt-orange transition-colors">
                              <Fire size={16} />
                              <span className="text-sm">{post.reactions.fire}</span>
                            </button>
                            <button className="flex items-center gap-1 text-muted-foreground hover:text-gryt-orange transition-colors">
                              <span className="text-sm">💯</span>
                              <span className="text-sm">{post.reactions.hundred}</span>
                            </button>
                            <button className="flex items-center gap-1 text-muted-foreground hover:text-gryt-orange transition-colors">
                              <span className="text-sm">🙌</span>
                              <span className="text-sm">{post.reactions.praise}</span>
                            </button>
                            <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                              <MessageCircle size={16} />
                              <span className="text-sm">{post.comments}</span>
                            </button>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground">{post.timeAgo}</span>
                            <Button variant="outline" size="sm">
                              Cheer Them On
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Streaks */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-primary">
                  <Crown className="text-gryt-gold" size={20} />
                  Top Streaks This Week
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {topStreaks.map((user, index) => (
                  <div key={user.id} className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-gryt-orange">#{index + 1}</span>
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-gryt-orange text-white text-sm">
                          {user.avatar}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    
                    <div className="flex-1">
                      <p className="font-semibold text-foreground font-primary text-sm">{user.name}</p>
                      <p className="text-xs text-muted-foreground font-body">{user.goal}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-1">
                          <Fire className="text-gryt-orange" size={12} />
                          <span className="text-xs font-semibold">{user.streak}</span>
                        </div>
                        <span className="text-lg">{user.badge}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Trending Groups */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-primary">
                  <Target className="text-gryt-orange" size={20} />
                  Trending Goal Groups
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {trendingGroups.map((group, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-foreground font-primary text-sm">{group.name}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {group.category}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground font-body">{group.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{group.members.toLocaleString()} members</span>
                        <span className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          {group.activeNow} active
                        </span>
                      </div>
                      <Button size="sm" variant="outline" className="text-xs">
                        Join Group
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Motivational Message */}
            <Card className="border-2 border-dashed border-gryt-orange/30 bg-gradient-to-br from-gryt-orange/5 to-gryt-gold/5">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <Zap className="text-gryt-orange mx-auto mb-2" size={24} />
                  <h3 className="font-bold text-foreground mb-2 font-primary">Weekly Founder Note</h3>
                  <p className="text-sm text-muted-foreground font-body italic">
                    "Every streak starts with a single day. Every breakthrough begins with showing up when you don't feel like it."
                  </p>
                  <p className="text-xs text-muted-foreground font-body mt-2">— Team GRYT</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
