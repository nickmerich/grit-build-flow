
import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

const FAQ = () => {
  const [helpfulResponses, setHelpfulResponses] = useState<Record<string, 'up' | 'down' | null>>({});

  const handleHelpfulClick = (questionId: string, type: 'up' | 'down') => {
    setHelpfulResponses(prev => ({
      ...prev,
      [questionId]: prev[questionId] === type ? null : type
    }));
  };

  const faqData = [
    {
      id: "different",
      question: "What makes GRYT different from other habit or goal apps?",
      answer: "GRYT doesn't track 10 things at once. It helps you finish one thing that actually matters.\n\nIt's a personal growth system that blends emotional coaching, gamification, and real-world rewards—designed to help you focus, follow through, and change your identity from the inside out."
    },
    {
      id: "one-goal",
      question: "Why only one goal at a time?",
      answer: "Because overwhelm kills momentum.\n\nScience shows that trying to do too much leads to burnout. GRYT helps you pick one meaningful thing, focus on it deeply, and build momentum with full commitment and accountability."
    },
    {
      id: "goal-types",
      question: "What kind of goals can I pick?",
      answer: "Anything that changes your life.\n\nPopular categories include:\n\n• Health (e.g. Quit sugar, Move 3x/week)\n• Mindset (e.g. Journal daily, Stop negative self-talk)\n• Productivity (e.g. Wake up at 6am, Deep work hour)\n• Sobriety (e.g. No alcohol for 30 days)\n• Creativity (e.g. Write daily, Launch a project)"
    },
    {
      id: "rewards",
      question: "How do the rewards work?",
      answer: "You earn real perks from real brands for making real progress.\n\nOnce you hit a milestone (like 7 days of focus or 30 days alcohol-free), you unlock rewards like 25% off AG1, a free month of Notion, or discounts on Liquid Death, Skillshare, and more."
    },
    {
      id: "pricing",
      question: "Is GRYT free to use?",
      answer: "Yes. GRYT is 100% free for users.\n\nBrands sponsor rewards and placements, so you can focus on your growth without a paywall."
    },
    {
      id: "fall-off",
      question: "What happens if I fall off track?",
      answer: "We don't shame. We coach.\n\nIf you miss a day or break a streak, GRYT checks in with you emotionally, offers a reset, and gives you tools to restart stronger. Your journey isn't over—it's evolving."
    },
    {
      id: "for-who",
      question: "Who is GRYT for?",
      answer: "Anyone who's ready to stop talking and start becoming.\n\nWhether you're a student, creator, founder, parent, or just someone tired of spinning your wheels—GRYT helps you lock in and finish."
    },
    {
      id: "what-is",
      question: "Is this therapy? Coaching? A game?",
      answer: "A little of all three.\n\nGRYT is powered by emotional prompts, identity psychology, and science-backed routines—wrapped in a gamified experience that rewards real effort."
    },
    {
      id: "privacy",
      question: "Do you sell my data?",
      answer: "Never.\n\nWe're ad-free, distraction-free, and privacy-first. Your growth is your own."
    },
    {
      id: "friends",
      question: "Can I use GRYT with friends?",
      answer: "Coming soon: team challenges and community rewards.\n\nFor now, share your streak and rewards with others to inspire them—or invite a friend to start their own one-goal journey."
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-black mb-4 text-white">
          🧠 Got Questions?
        </h2>
        <p className="text-xl text-white/80 font-light">
          We've got answers. GRYT is built different—here's how.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
            💬 FAQ: Questions + Answers
          </h3>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((item, index) => (
            <AccordionItem 
              key={item.id} 
              value={item.id}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300"
            >
              <AccordionTrigger className="px-8 py-6 text-left hover:no-underline group">
                <div className="flex items-start gap-4 w-full">
                  <span className="text-orange-400 font-bold text-lg shrink-0">
                    {index + 1}.
                  </span>
                  <span className="text-white font-bold text-lg font-serif leading-tight group-hover:text-orange-300 transition-colors duration-200">
                    {item.question}
                  </span>
                </div>
              </AccordionTrigger>
              
              <AccordionContent className="px-8 pb-8">
                <div className="ml-8 space-y-6">
                  <div className="text-white/90 leading-relaxed font-mono text-base whitespace-pre-line">
                    {item.answer}
                  </div>
                  
                  {/* Did this help? Section */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <span className="text-white/70 text-sm font-medium">Did this help?</span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleHelpfulClick(item.id, 'up')}
                        className={`p-2 rounded-full transition-all duration-200 ${
                          helpfulResponses[item.id] === 'up'
                            ? 'bg-emerald-500/20 text-emerald-400 scale-110'
                            : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white/80 hover:scale-105'
                        }`}
                      >
                        <ThumbsUp size={16} />
                      </button>
                      <button
                        onClick={() => handleHelpfulClick(item.id, 'down')}
                        className={`p-2 rounded-full transition-all duration-200 ${
                          helpfulResponses[item.id] === 'down'
                            ? 'bg-red-500/20 text-red-400 scale-110'
                            : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white/80 hover:scale-105'
                        }`}
                      >
                        <ThumbsDown size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
