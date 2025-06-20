
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Handshake, 
  TrendingUp, 
  Target, 
  Users, 
  DollarSign, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  Mail,
  Building,
  Star,
  Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Partners = () => {
  const partnershipBenefits = [
    {
      icon: Target,
      title: 'Reach Motivated Users',
      description: 'Connect with users who complete goals and demonstrate discipline'
    },
    {
      icon: DollarSign,
      title: 'Pay-Per-Performance',
      description: 'Only pay when users successfully unlock rewards through achievement'
    },
    {
      icon: BarChart3,
      title: 'Detailed Analytics',
      description: 'Track engagement, completion rates, and ROI with comprehensive reporting'
    },
    {
      icon: Users,
      title: 'Quality Audience',
      description: 'Access users actively working on self-improvement and personal growth'
    }
  ];

  const revenueStreams = [
    {
      title: 'Pay-Per-Redemption',
      description: 'Brands pay $3-$10 when users successfully unlock sponsored rewards',
      icon: Target
    },
    {
      title: 'Premium Sponsorship Slots',
      description: 'Featured placement in challenges and reward categories',
      icon: Star
    },
    {
      title: 'Analytics & Insights',
      description: 'Optional premium data packages for partner brands',
      icon: BarChart3
    }
  ];

  const existingPartners = [
    { name: 'Athletic Greens', category: 'Health & Nutrition', logo: '🥬' },
    { name: 'MasterClass', category: 'Education', logo: '🎓' },
    { name: 'Notion', category: 'Productivity', logo: '📝' },
    { name: 'Headspace', category: 'Wellness', logo: '🧘' },
    { name: 'YNAB', category: 'Finance', logo: '💰' }
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pl-64">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-gryt-orange to-gryt-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Handshake className="text-white" size={24} />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4 font-primary">Partner with GRYT</h1>
          <p className="text-xl text-muted-foreground font-body mb-6 max-w-2xl mx-auto">
            Reward users who achieve their goals while growing your brand with our performance-based partnership model.
          </p>
          <Button className="bg-gradient-to-r from-gryt-orange to-gryt-gold hover:from-gryt-orange-dark hover:to-gryt-gold-dark text-white font-semibold text-lg px-8 py-3">
            <Mail className="mr-2" size={20} />
            Apply for Partnership
          </Button>
        </div>

        {/* Value Proposition */}
        <Card className="mb-12 border-border">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4 font-primary">Why Partner with GRYT?</h2>
              <p className="text-muted-foreground font-body">
                Connect with the most motivated audience - users who complete challenging goals and demonstrate real discipline.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnershipBenefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-gryt-orange/10 to-gryt-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="text-gryt-orange" size={24} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 font-primary">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">{benefit.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Revenue Model */}
        <Card className="mb-12 border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-primary">
              <TrendingUp className="text-gryt-orange" size={24} />
              Partnership Revenue Streams
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {revenueStreams.map((stream, index) => (
                <Card key={index} className="p-6 border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <stream.icon className="text-gryt-orange" size={20} />
                    <h3 className="font-semibold text-foreground font-primary">{stream.title}</h3>
                  </div>
                  <p className="text-muted-foreground font-body">{stream.description}</p>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center border-border">
            <div className="text-3xl font-bold text-gryt-orange mb-2 font-primary">87%</div>
            <p className="text-muted-foreground font-body">User Goal Completion Rate</p>
          </Card>
          <Card className="p-6 text-center border-border">
            <div className="text-3xl font-bold text-gryt-gold mb-2 font-primary">$47</div>
            <p className="text-muted-foreground font-body">Average Revenue Per User</p>
          </Card>
          <Card className="p-6 text-center border-border">
            <div className="text-3xl font-bold text-gryt-orange mb-2 font-primary">4.8x</div>
            <p className="text-muted-foreground font-body">Partner ROI Multiplier</p>
          </Card>
        </div>

        {/* Current Partners */}
        <Card className="mb-12 border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-primary">
              <Building className="text-gryt-orange" size={24} />
              Trusted by Leading Brands
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {existingPartners.map((partner, index) => (
                <Card key={index} className="p-4 text-center border-border hover:shadow-md transition-shadow">
                  <div className="text-2xl mb-2">{partner.logo}</div>
                  <h4 className="font-semibold text-foreground text-sm font-primary">{partner.name}</h4>
                  <p className="text-xs text-muted-foreground font-body">{partner.category}</p>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Partnership Process */}
        <Card className="mb-12 border-border">
          <CardHeader>
            <CardTitle className="font-primary">How Partnership Works</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-gryt-orange/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gryt-orange font-bold">1</span>
                </div>
                <h4 className="font-semibold mb-2 font-primary">Apply</h4>
                <p className="text-sm text-muted-foreground font-body">Submit partnership application with your brand details</p>
              </div>
              <div className="text-center">
                <div className="bg-gryt-orange/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gryt-orange font-bold">2</span>
                </div>
                <h4 className="font-semibold mb-2 font-primary">Setup</h4>
                <p className="text-sm text-muted-foreground font-body">We integrate your rewards into relevant challenges</p>
              </div>
              <div className="text-center">
                <div className="bg-gryt-orange/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gryt-orange font-bold">3</span>
                </div>
                <h4 className="font-semibold mb-2 font-primary">Launch</h4>
                <p className="text-sm text-muted-foreground font-body">Users start working toward your sponsored rewards</p>
              </div>
              <div className="text-center">
                <div className="bg-gryt-orange/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gryt-orange font-bold">4</span>
                </div>
                <h4 className="font-semibold mb-2 font-primary">Pay</h4>
                <p className="text-sm text-muted-foreground font-body">Only pay when users successfully unlock rewards</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <Card className="border-2 border-dashed border-gryt-orange/30 bg-gradient-to-br from-gryt-orange/5 to-gryt-gold/5">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4 font-primary">Ready to Partner?</h3>
            <p className="text-muted-foreground font-body mb-6 max-w-2xl mx-auto">
              Join leading brands who are rewarding real achievement and connecting with motivated users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-gryt-orange to-gryt-gold hover:from-gryt-orange-dark hover:to-gryt-gold-dark text-white font-semibold">
                <Mail className="mr-2" size={16} />
                Apply Now
              </Button>
              <Link to="/pricing">
                <Button variant="outline" className="border-border">
                  Learn More About Our Model
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Partners;
