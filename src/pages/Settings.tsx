
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Bell, Target, Heart, Save } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Settings = () => {
  const [reminderTime, setReminderTime] = useState('09:00');
  const [notificationTone, setNotificationTone] = useState('gentle');
  const [goalStatement, setGoalStatement] = useState('I am someone who exercises daily and prioritizes my health');
  const [moodTrackingEnabled, setMoodTrackingEnabled] = useState(true);
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pl-64">
      <div className="max-w-2xl mx-auto p-6 space-y-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground font-primary mb-2">
            Settings
          </h1>
          <p className="text-muted-foreground font-body">
            Customize your GRYT experience
          </p>
        </div>

        {/* Daily Reminders Section */}
        <Card className="border-border shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 text-xl font-primary">
              <div className="p-2 bg-gradient-to-r from-gryt-orange to-gryt-gold rounded-full">
                <Bell className="text-white" size={20} />
              </div>
              Daily Reminders
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="reminder-time" className="font-medium font-body">
                Reminder Time
              </Label>
              <Input
                id="reminder-time"
                type="time"
                value={reminderTime}
                onChange={(e) => setReminderTime(e.target.value)}
                className="w-full max-w-xs"
              />
              <p className="text-sm text-muted-foreground font-body">
                When would you like to receive your daily check-in reminder?
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notification-tone" className="font-medium font-body">
                Notification Tone
              </Label>
              <select
                id="notification-tone"
                value={notificationTone}
                onChange={(e) => setNotificationTone(e.target.value)}
                className="w-full max-w-xs px-3 py-2 border border-input rounded-md bg-background text-foreground font-body"
              >
                <option value="gentle">Gentle Chime</option>
                <option value="upbeat">Upbeat Tone</option>
                <option value="classic">Classic Bell</option>
                <option value="none">Silent</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Goal & Identity Section */}
        <Card className="border-border shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 text-xl font-primary">
              <div className="p-2 bg-gradient-to-r from-gryt-orange to-gryt-gold rounded-full">
                <Target className="text-white" size={20} />
              </div>
              Goal & Identity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="goal-statement" className="font-medium font-body">
                Your Identity Statement
              </Label>
              <Textarea
                id="goal-statement"
                value={goalStatement}
                onChange={(e) => setGoalStatement(e.target.value)}
                placeholder="I am someone who..."
                className="min-h-[100px] resize-none"
              />
              <p className="text-sm text-muted-foreground font-body">
                This statement defines who you're becoming. Keep it positive and present-tense.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Features Section */}
        <Card className="border-border shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 text-xl font-primary">
              <div className="p-2 bg-gradient-to-r from-gryt-orange to-gryt-gold rounded-full">
                <Heart className="text-white" size={20} />
              </div>
              Features
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label className="font-medium font-body">Mood Tracking</Label>
                <p className="text-sm text-muted-foreground font-body">
                  Track your daily mood and emotional patterns
                </p>
              </div>
              <Switch
                checked={moodTrackingEnabled}
                onCheckedChange={setMoodTrackingEnabled}
              />
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <Button
          onClick={handleSave}
          className="w-full bg-gradient-to-r from-gryt-orange to-gryt-gold hover:from-gryt-orange-dark hover:to-gryt-gold-dark text-white font-semibold py-3 rounded-2xl shadow-lg transition-all duration-200 font-primary"
        >
          <Save className="mr-2" size={20} />
          Save Settings
        </Button>

        <div className="text-center pt-4">
          <p className="text-sm text-muted-foreground font-body">
            Your settings are automatically synced across all devices
          </p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
