import React from 'react';

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

export enum ValidationStep {
  NicheResearch = 'Niche Research',
  ForumAnalysis = 'Forum Analysis',
  WebpageCreation = 'Webpage Creation',
  MarketingCampaign = 'Marketing Campaign',
  StatsCollection = 'Stats Collection',
  FinalReport = 'Final Report'
}

export interface ServiceStep {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  stepNumber: number;
}

export interface QuickAnalysisResult {
  niches: string[];
  score: number;
  verdict: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: React.ReactNode; // Using ReactNode to allow rich text/JSX in the content
  date: string;
  readTime: string;
  imageUrl?: string;
}