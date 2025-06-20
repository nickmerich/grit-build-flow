
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { format } from 'date-fns';
import { CalendarIcon, ChevronLeft } from 'lucide-react';
import ChoiceCard from '@/components/ui/ChoiceCard';
import GradientButton from '@/components/ui/GradientButton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { cn } from '@/lib/utils';
import { Target, Zap, Dumbbell, Heart, Briefcase, Book } from 'lucide-react';

const goalFormSchema = z.object({
  specificGoal: z.string().min(5, 'Please describe your goal in at least 5 characters'),
  targetDate: z.date({
    required_error: 'Please select a target date',
  }),
  difficulty: z.enum(['easy', 'medium', 'hard'], {
    required_error: 'Please select a difficulty level',
  }),
  motivation: z.string().optional(),
});

type GoalFormValues = z.infer<typeof goalFormSchema>;

const Onboarding = () => {
  const [step, setStep] = useState<'category' | 'details'>('category');
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const navigate = useNavigate();

  const form = useForm<GoalFormValues>({
    resolver: zodResolver(goalFormSchema),
    defaultValues: {
      specificGoal: '',
      motivation: '',
    },
  });

  const goals = [
    {
      id: 'fitness',
      icon: Dumbbell,
      title: 'Get Fit & Strong',
      description: 'Build a consistent workout routine and transform your body'
    },
    {
      id: 'habits',
      icon: Target,
      title: 'Build Better Habits',
      description: 'Create positive daily routines that stick long-term'
    },
    {
      id: 'quit',
      icon: Zap,
      title: 'Quit Bad Habits',
      description: 'Break free from habits that hold you back'
    },
    {
      id: 'wellness',
      icon: Heart,
      title: 'Mental Wellness',
      description: 'Develop mindfulness, reduce stress, improve mental health'
    },
    {
      id: 'career',
      icon: Briefcase,
      title: 'Career Growth',
      description: 'Level up your skills and advance your professional life'
    },
    {
      id: 'learning',
      icon: Book,
      title: 'Learn Something New',
      description: 'Master a new skill, language, or area of knowledge'
    }
  ];

  const goalExamples = {
    fitness: ['Run 3x a week for 30 days', 'Do 100 push-ups every day', 'Hit the gym 5 days a week'],
    habits: ['Wake up at 6am every day for a month', 'Meditate daily for 10 minutes', 'Read for 30 minutes daily'],
    quit: ['Go 30 days without sugar', 'No social media for 2 weeks', 'Stop smoking for 90 days'],
    wellness: ['Practice gratitude daily', 'Take a 20-minute walk every day', 'Journal every morning'],
    career: ['Apply to 10 jobs in 4 weeks', 'Complete 3 online courses', 'Network with 5 people weekly'],
    learning: ['Launch a side project in 45 days', 'Learn Spanish for 30 minutes daily', 'Code every day for a month']
  };

  const selectedGoalData = goals.find(goal => goal.id === selectedGoal);

  const handleCategorySelect = (goalId: string) => {
    setSelectedGoal(goalId);
    setStep('details');
  };

  const handleBackToCategory = () => {
    setStep('category');
    form.reset();
  };

  const onSubmit = (data: GoalFormValues) => {
    // Store all goal data in localStorage
    const goalData = {
      category: selectedGoal,
      specificGoal: data.specificGoal,
      targetDate: data.targetDate.toISOString(),
      difficulty: data.difficulty,
      motivation: data.motivation,
    };
    
    localStorage.setItem('goalData', JSON.stringify(goalData));
    localStorage.setItem('selectedGoal', selectedGoal || '');
    navigate('/contract');
  };

  const difficultyOptions = [
    { value: 'easy', label: 'Easy', description: "I've done it before", color: 'text-green-600' },
    { value: 'medium', label: 'Medium', description: 'This will push me', color: 'text-yellow-600' },
    { value: 'hard', label: 'Hard', description: "I've never done this before, but I'm ready", color: 'text-red-600' },
  ];

  if (step === 'category') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4">
        <div className="container mx-auto max-w-4xl py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Choose Your GRYT Goal
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pick one meaningful goal to focus on. GRYT works best when you commit to doing one thing really well.
            </p>
          </div>

          {/* Goal Selection Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {goals.map((goal) => (
              <ChoiceCard
                key={goal.id}
                icon={goal.icon}
                title={goal.title}
                description={goal.description}
                isSelected={false}
                onClick={() => handleCategorySelect(goal.id)}
              />
            ))}
          </div>

          {/* Bottom Note */}
          <div className="text-center mt-12 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/80">
            <p className="text-gray-600">
              <strong>Remember:</strong> You can only work on one goal at a time. Choose the one that matters most to you right now.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4">
      <div className="container mx-auto max-w-3xl py-8">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={handleBackToCategory}
            className="mb-4 text-gray-600 hover:text-gray-800"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Categories
          </Button>
          
          <div className="text-center">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <selectedGoalData.icon className="w-5 h-5 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">{selectedGoalData?.title}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              ✨ Define Your Goal
            </h1>
            <p className="text-lg text-gray-600">
              You've chosen <strong>{selectedGoalData?.title}</strong> — let's make it real.
            </p>
          </div>
        </div>

        {/* Goal Definition Form */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/80">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Specific Goal */}
              <FormField
                control={form.control}
                name="specificGoal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold text-gray-800">
                      📝 What's your specific goal?
                    </FormLabel>
                    <FormDescription className="text-gray-600">
                      e.g., "Run 3x a week for 30 days" or "Post my writing every day for 2 weeks"
                    </FormDescription>
                    <FormControl>
                      <Input
                        placeholder="Describe your specific goal..."
                        className="text-base p-4 border-2 border-gray-200 focus:border-purple-400 rounded-xl"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Target Date */}
              <FormField
                control={form.control}
                name="targetDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-lg font-semibold text-gray-800">
                      📅 What's your target date to finish this goal?
                    </FormLabel>
                    <FormDescription className="text-gray-600">
                      Don't worry — you can adjust later if life happens.
                    </FormDescription>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full p-4 text-base justify-start text-left font-normal border-2 border-gray-200 hover:border-purple-400 rounded-xl",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a target date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Difficulty Level */}
              <FormField
                control={form.control}
                name="difficulty"
                render={({ field }) => (
                  <FormItem className="space-y-4">
                    <FormLabel className="text-lg font-semibold text-gray-800">
                      🔥 How hard does this goal feel?
                    </FormLabel>
                    <FormDescription className="text-gray-600">
                      This helps us match the right support and motivation.
                    </FormDescription>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="space-y-3"
                      >
                        {difficultyOptions.map((option) => (
                          <div key={option.value} className="flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-200 hover:border-purple-300 transition-colors">
                            <RadioGroupItem value={option.value} id={option.value} />
                            <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                              <div className="flex items-center space-x-2">
                                <span className={`font-semibold ${option.color}`}>
                                  {option.value === 'easy' && '🟢'} 
                                  {option.value === 'medium' && '🟡'} 
                                  {option.value === 'hard' && '🔴'} 
                                  {option.label}
                                </span>
                                <span className="text-gray-600">– {option.description}</span>
                              </div>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Motivation */}
              <FormField
                control={form.control}
                name="motivation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold text-gray-800">
                      🧠 Why does this goal matter to you?
                    </FormLabel>
                    <FormDescription className="text-gray-600">
                      Optional — but powerful.
                    </FormDescription>
                    <FormControl>
                      <Textarea
                        placeholder="Because..."
                        className="text-base p-4 border-2 border-gray-200 focus:border-purple-400 rounded-xl min-h-24"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Examples Section */}
              <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">💡 Need ideas? Here are some examples:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {goalExamples[selectedGoal as keyof typeof goalExamples]?.map((example, index) => (
                    <div key={index} className="bg-white rounded-lg p-3 text-sm text-gray-700 border border-purple-100">
                      "{example}"
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <GradientButton
                  type="submit"
                  size="lg"
                  className="min-w-64"
                >
                  Continue → Contract Step
                </GradientButton>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
