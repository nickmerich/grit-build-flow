
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  DollarSign, 
  Shield, 
  Users, 
  Zap, 
  CheckCircle, 
  XCircle,
  Target,
  Gift,
  TrendingUp,
  AlertTriangle,
  Crown,
  Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const freeFeatures = [
    'Goal setting and tracking',
    'Daily journaling',
    'AI coaching conversations',
    'Progress analytics',
    'Community leaderboards',
    'Sponsored reward challenges',
    'Brand partnership rewards',
    'Streak tracking',
    'Achievement badges'
  ];

  const quitProtectionFeatures = [
    'Financial commitment to your goals',
    'Money returned when you succeed',
    'Donated to charity if you quit',
    'Higher completion rates (studies show 3x improvement)',
    'Optional feature - totally your choice'
  ];

  const businessModelSteps = [
    {
      icon: Users,
      title: 'Users Set Goals',
      description: 'People join GRYT and commit to meaningful challenges',
      color: 'blue'
    },
    {
      icon: Target,
      title: 'Brands Sponsor Rewards',
      description: 'Companies sponsor rewards for users who complete goals',
      color: 'green'
    },
    {
      icon: Gift,
      title: 'Users Earn Rewards',
      description: 'Successful users unlock valuable brand rewards',
      color: 'purple'
    },
    {
      icon: DollarSign,
      title: 'Brands Pay GRYT',
      description: 'We earn $3-$10 per successful reward redemption',
      color: 'orange'
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pl-64">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-emerald-500 to-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="text-white" size={24} />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4 font-primary">100% Free for Users</h1>
          <p className="text-xl text-muted-foreground font-body mb-6 max-w-3xl mx-auto">
            GRYT will always be completely free. Our brand partners fund the platform because they believe in rewarding your achievements.
          </p>
          
          {/* Free Badge */}
          <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-full px-8 py-4 inline-block mb-8">
            <div className="flex items-center gap-3 text-emerald-700">
              <Shield className="w-6 h-6" />
              <span className="text-lg font-semibold">Always Free • No Hidden Fees • No Subscriptions</span>
            </div>
          </div>
        </div>

        {/* Free Features */}
        <Card className="mb-12 border-emerald-200 bg-gradient-to-br from-emerald-50/50 to-green-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-emerald-800 font-primary">
              <CheckCircle className="text-emerald-600" size={24} />
              Everything Free Forever
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {freeFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="text-emerald-500 flex-shrink-0" size={16} />
                  <span className="text-emerald-800 font-body">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Business Model Explanation */}
        <Card className="mb-12 border-border">
          <CardHeader>
            <CardTitle className="font-primary">How We Keep It Free</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {businessModelSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className={`bg-${step.color}-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <step.icon className={`text-${step.color}-600`} size={24} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 font-primary">{step.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">{step.description}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <h4 className="font-semibold text-blue-900 mb-2 font-primary">The Result</h4>
              <p className="text-blue-800 font-body">
                You get amazing rewards for achieving your goals, brands reach motivated customers, 
                and GRYT earns enough to keep the platform free and growing.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Optional Quit Protection */}
        <Card className="mb-12 border-orange-200 bg-gradient-to-br from-orange-50/50 to-red-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-800 font-primary">
              <AlertTriangle className="text-orange-600" size={24} />
              Optional: Quit Protection
              <Badge variant="secondary" className="text-xs">Completely Optional</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-orange-800 font-body mb-6">
              Want extra motivation? Optionally put your own money on the line. Studies show this increases success rates by 3x.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-orange-900 mb-4 font-primary">How It Works</h4>
                <div className="space-y-3">
                  {quitProtectionFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="text-orange-500 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-orange-800 font-body text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/70 rounded-lg p-6 border border-orange-200">
                <h4 className="font-semibold text-orange-900 mb-4 font-primary">Example</h4>
                <div className="space-y-2 text-sm font-body">
                  <div className="flex justify-between">
                    <span className="text-orange-700">Goal:</span>
                    <span className="text-orange-900">Exercise 5x/week for 30 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-orange-700">Your commitment:</span>
                    <span className="text-orange-900">$50</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-orange-700">If you succeed:</span>
                    <span className="text-green-600 font-semibold">You get your $50 back</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-orange-700">If you quit:</span>
                    <span className="text-red-600">Donated to charity</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-orange-100 rounded-lg border border-orange-200">
              <p className="text-orange-800 text-sm font-body text-center">
                <Heart className="inline w-4 h-4 mr-1" />
                This is completely optional and only for users who want extra accountability. 
                GRYT works great without any financial commitment.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Transparency Guarantee */}
        <Card className="mb-12 border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-primary">
              <Shield className="text-gryt-orange" size={24} />
              Our Transparency Promise
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3 font-primary">What We Do</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-sm font-body">Keep all core features free forever</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-sm font-body">Partner with brands that align with our values</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-sm font-body">Only earn when you succeed at your goals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-sm font-body">Publish transparent revenue reports</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-3 font-primary">What We Don't Do</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <XCircle className="text-red-500" size={16} />
                    <span className="text-sm font-body">Sell your personal data</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <XCircle className="text-red-500" size={16} />
                    <span className="text-sm font-body">Charge subscription fees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <XCircle className="text-red-500" size={16} />
                    <span className="text-sm font-body">Force you into partnerships</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <XCircle className="text-red-500" size={16} />
                    <span className="text-sm font-body">Hide our business model</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="border-2 border-dashed border-gryt-orange/30 bg-gradient-to-br from-gryt-orange/5 to-gryt-gold/5">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <Crown className="text-gryt-orange w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2 font-primary">Ready to Build GRYT?</h3>
              <p className="text-muted-foreground font-body">
                Join thousands of users who are achieving their goals with our completely free platform.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/onboarding">
                <Button className="bg-gradient-to-r from-gryt-orange to-gryt-gold hover:from-gryt-orange-dark hover:to-gryt-gold-dark text-white font-semibold">
                  <Target className="mr-2" size={16} />
                  Start Your First Goal
                </Button>
              </Link>
              <Link to="/rewards">
                <Button variant="outline" className="border-border">
                  <Gift className="mr-2" size={16} />
                  Explore Rewards
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Pricing;
