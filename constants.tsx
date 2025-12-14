import { PricingTier, ServiceStep, BlogPost } from './types';
import { Search, MessageSquare, Layout, Megaphone, BarChart3, FileText } from 'lucide-react';
import React from 'react';

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'silver',
    name: 'Validator',
    price: '$199',
    period: '/idea',
    description: 'Essential market testing with design choices and real ad data.',
    features: [
      'Advanced Niche & Forum Research',
      '2 Website Designs for Approval',
      '2-Week Live Facebook Ad Campaign',
      'Comprehensive Final Report',
      'Domain Transfer Available (+$50 USD)'
    ],
    cta: 'Validate Now',
    highlight: false
  },
  {
    id: 'gold',
    name: 'Launcher',
    price: '$499',
    period: '/idea',
    description: 'Complete brand setup with extended reach and social presence.',
    features: [
      'Everything in Validator',
      '3 High-End Landing Page Ideas',
      'Company LinkedIn Profile Setup',
      'Additional Social Media Engagement',
      '4-8 Week Full Campaign Management',
      'Free post-test domain transfer',
      'Investor-Ready Strategic Dossier'
    ],
    cta: 'Launch Campaign',
    highlight: true
  }
];

export const SERVICE_STEPS: ServiceStep[] = [
  {
    stepNumber: 1,
    title: 'Niche Research',
    description: 'Our proprietary algorithms scan global market trends to identify the most profitable sub-niches for your core idea.',
    icon: Search
  },
  {
    stepNumber: 2,
    title: 'Deep Forum Analysis',
    description: 'We crawl Reddit, Quora, and specialized forums to validate if users are actively complaining about the problem you solve.',
    icon: MessageSquare
  },
  {
    stepNumber: 3,
    title: 'Real Webpage Creation',
    description: 'We deploy a fully functional, high-conversion landing page tailored to your specific value proposition on a premium domain.',
    icon: Layout
  },
  {
    stepNumber: 4,
    title: 'Live Marketing Campaign',
    description: 'We purchase real ad inventory on Google & Meta. We run this for 4-8 weeks to measure actual user behavior, not simulations.',
    icon: Megaphone
  },
  {
    stepNumber: 5,
    title: 'Intent Data Collection',
    description: 'Collect real intent metrics: actual email signups, button clicks, and time-on-page from real human visitors.',
    icon: BarChart3
  },
  {
    stepNumber: 6,
    title: 'Strategic Dossier',
    description: 'Receive a detailed report containing your CAC, LTV estimates, and a definitive go/no-go recommendation based on hard data.',
    icon: FileText
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'yc-validation-steps',
    title: 'The YC Approach to Startup Validation',
    excerpt: 'A breakdown of the 5-step framework for validating ideas, based on Y Combinator methodology.',
    date: 'Oct 12, 2023',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800',
    content: (
      <div className="space-y-4">
        <p>Validating a startup idea is not about guessing; it is a systematic process. Based on the insights from Y Combinator's "How to Validate Your Startup Idea", here is the definitive 5-step framework.</p>
        
        <h3 className="text-xl font-bold mt-4">1. Find the Problem</h3>
        <p>Great startups are not "ideas" looking for a problem; they are solutions to existing problems. The best problems are ones you experience yourself.</p>
        
        <h3 className="text-xl font-bold mt-4">2. Determine if it's a "Hair-on-Fire" Problem</h3>
        <p>Is this a mild inconvenience or a critical issue? Users should be desperate for a solution. Valideum assists here by analyzing forum sentiment to measure the "desperation level" of your potential niche.</p>
        
        <h3 className="text-xl font-bold mt-4">3. Find Customers (Talk to Them)</h3>
        <p>You cannot validate in a vacuum. You need to verify that people exist who have this problem. <strong>This is where Valideum shines.</strong> We automate the process of finding these users via targeted ads and bringing them to a landing page to measure their intent.</p>
        
        <h3 className="text-xl font-bold mt-4">4. Build an MVP (Wizard of Oz)</h3>
        <p>Don't build the full product. Build the manual version. Do things that don't scale to prove the value proposition.</p>
        
        <h3 className="text-xl font-bold mt-4">5. Iterate</h3>
        <p>Use the feedback to refine the solution. If Valideum's report shows low conversion, you iterate the offer, not the code.</p>
        
        <div className="bg-gray-100 p-4 border-l-4 border-strategic-primary mt-6">
          <p className="italic font-bold">Valideum specifically automates Steps 1, 2, and 3 of this framework, saving you hundreds of hours of manual research and ad management.</p>
        </div>
      </div>
    )
  },
  {
    id: 'real-vs-simulated',
    title: 'Why "AI Predictions" Are Not Enough',
    excerpt: 'The danger of relying on LLM hallucinations for market research versus collecting real user data.',
    date: 'Nov 03, 2023',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    content: (
      <div className="space-y-4">
        <p>Many new tools promise to "validate" your idea by asking ChatGPT if it's a good idea. This is dangerous.</p>
        <p>AI models are trained on past data. They cannot predict if a specific human being, today, will click "Buy" on your specific value proposition.</p>
        <p>True validation requires <strong>Skin in the Game</strong>. A user must trade their attention, email, or money for your promise. That is why Valideum runs <strong>real ads</strong> on real networks. We don't guess; we measure.</p>
      </div>
    )
  },
  {
    id: 'landing-page-mistakes',
    title: '3 Landing Page Mistakes That Kill Validation',
    excerpt: 'How to structure your validation page to ensure your data isn\'t skewed by bad design.',
    date: 'Dec 15, 2023',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    content: (
      <div className="space-y-4">
        <p>When testing a business idea, the Landing Page is your laboratory. If the lab is dirty, the results are useless.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Vague Value Props:</strong> Be specific. "We help you work better" vs "We save you 10 hours a week on Excel."</li>
          <li><strong>Too Much Friction:</strong> Don't ask for a credit card just to gauge interest. An email is often enough for Step 1 validation.</li>
          <li><strong>Talking About Features, Not Benefits:</strong> Users buy the hole, not the drill.</li>
        </ul>
      </div>
    )
  }
];