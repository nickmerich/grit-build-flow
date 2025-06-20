
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 pb-20">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 font-primary mb-4">
            Settings
          </h1>
          <p className="text-gray-600 font-body text-lg">
            Customize your GRYT experience
          </p>
        </div>

        {/* Daily Reminders Section */}
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <CardHeader className="pb-6">
            <CardTitle className="flex items-center gap-4 text-2xl font-primary text-gray-800">
              <div className="p-3 bg-gryt-orange rounded-full">
                <Bell className="text-white" size={24} />
              </div>
              Daily Reminders
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="reminder-time" className="text-gray-700 font-medium font-body text-base">
                Reminder Time
              </Label>
              <Input
                id="reminder-time"
                type="time"
                value={reminderTime}
                onChange={(e) => setReminderTime(e.target.value)}
                className="w-full max-w-xs border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-gryt-orange focus:ring-2 focus:ring-gryt-orange/20"
              />
              <p className="text-sm text-gray-600 font-body">
                When would you like to receive your daily check-in reminder?
              </p>
            </div>

            <div className="space-y-3">
              <Label htmlFor="notification-tone" className="text-gray-700 font-medium font-body text-base">
                Notification Tone
              </Label>
              <select
                id="notification-tone"
                value={notificationTone}
                onChange={(e) => setNotificationTone(e.target.value)}
                className="w-full max-w-xs px-4 py-3 border-2 border-gray-200 rounded-xl bg-white text-gray-800 font-body focus:border-gryt-orange focus:ring-2 focus:ring-gryt-orange/20"
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
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <CardHeader className="pb-6">
            <CardTitle className="flex items-center gap-4 text-2xl font-primary text-gray-800">
              <div className="p-3 bg-gryt-orange rounded-full">
                <Target className="text-white" size={24} />
              </div>
              Goal & Identity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="goal-statement" className="text-gray-700 font-medium font-body text-base">
                Your Identity Statement
              </Label>
              <Textarea
                id="goal-statement"
                value={goalStatement}
                onChange={(e) => setGoalStatement(e.target.value)}
                placeholder="I am someone who..."
                className="min-h-[120px] resize-none border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-gryt-orange focus:ring-2 focus:ring-gryt-orange/20"
              />
              <p className="text-sm text-gray-600 font-body">
                This statement defines who you're becoming. Keep it positive and present-tense.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Features Section */}
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <CardHeader className="pb-6">
            <CardTitle className="flex items-center gap-4 text-2xl font-primary text-gray-800">
              <div className="p-3 bg-gryt-orange rounded-full">
                <Heart className="text-white" size={24} />
              </div>
              Features
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <Label className="text-gray-700 font-medium font-body text-base">Mood Tracking</Label>
                <p className="text-sm text-gray-600 font-body">
                  Track your daily mood and emotional patterns
                </p>
              </div>
              <Switch
                checked={moodTrackingEnabled}
                onCheckedChange={setMoodTrackingEnabled}
                className="data-[state=checked]:bg-gryt-orange"
              />
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <Button
          onClick={handleSave}
          className="w-full bg-gradient-to-r from-gryt-orange to-gryt-gold hover:from-gryt-orange-dark hover:to-gryt-gold-dark text-white font-semibold py-4 text-lg rounded-2xl shadow-lg transition-all duration-200 font-primary"
        >
          <Save className="mr-3" size={20} />
          Save Settings
        </Button>

        <div className="text-center pt-6">
          <p className="text-sm text-gray-600 font-body">
            Your settings are automatically synced across all devices
          </p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
