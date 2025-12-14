import React, { useState } from 'react';
import { Loader2, Search, ArrowRight, BarChart } from 'lucide-react';
import { analyzeIdea } from '../services/geminiService';
import { QuickAnalysisResult } from '../types';

const DemoWidget: React.FC = () => {
  const [idea, setIdea] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<QuickAnalysisResult | null>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!idea.trim()) return;

    setLoading(true);
    setResult(null);
    try {
      const data = await analyzeIdea(idea);
      setResult(data);
    } catch (err) {
      console.error(err);
      setResult({
        niches: ["Error fetching data", "Try again later"],
        score: 0,
        verdict: "Could not connect to analysis service."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-card border-t-4 border-strategic-primary max-w-3xl mx-auto mt-[-4rem] relative z-20">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold font-heading text-strategic-dark">Test Your Market Viability</h3>
        <p className="text-sm text-gray-500 mt-2">Enter your business idea below for an instant AI assessment.</p>
      </div>
      
      <form onSubmit={handleAnalyze} className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <input
            type="text"
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="e.g. 'A subscription box for artisanal tea'"
            className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 pl-4 text-strategic-dark focus:outline-none focus:ring-2 focus:ring-strategic-primary focus:border-transparent transition-all"
          />
        </div>
        <button
          type="submit"
          disabled={loading || !idea.trim()}
          className="bg-strategic-primary text-white hover:bg-strategic-primaryHover font-bold px-8 py-3 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 uppercase tracking-wide text-sm whitespace-nowrap"
        >
          {loading ? <Loader2 className="animate-spin w-4 h-4" /> : 'Analyze'}
        </button>
      </form>

      {result && (
        <div className="mt-8 pt-8 border-t border-gray-100 animate-in fade-in duration-500">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="col-span-1 bg-strategic-secondary/50 p-6 rounded text-center border border-strategic-secondary">
               <span className="block text-xs font-bold text-strategic-text uppercase tracking-wider mb-2">Viability Score</span>
               <div className="flex items-center justify-center gap-2">
                 <BarChart className="w-6 h-6 text-strategic-primary" />
                 <span className="text-4xl font-bold text-strategic-dark">{result.score}</span>
               </div>
               <span className="text-xs text-gray-400">out of 100</span>
            </div>

            <div className="col-span-2">
              <h4 className="font-bold text-strategic-dark text-sm uppercase tracking-wide mb-3">Potential Niches</h4>
              <ul className="space-y-2 mb-4">
                {result.niches.map((niche, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600 bg-white p-2 rounded shadow-sm border border-gray-100">
                    <ArrowRight className="w-4 h-4 text-strategic-primary" />
                    {niche}
                  </li>
                ))}
              </ul>
              <div className="bg-strategic-primary/5 p-3 rounded border-l-4 border-strategic-primary">
                <p className="text-sm text-strategic-dark italic">"{result.verdict}"</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DemoWidget;