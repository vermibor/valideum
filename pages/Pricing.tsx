import React, { useState } from 'react';
import { PRICING_TIERS } from '../constants';
import { Check, Loader2 } from 'lucide-react';

const Pricing: React.FC = () => {
  const [loadingTier, setLoadingTier] = useState<string | null>(null);

  const handleTierSelection = async (tierId: string) => {
    setLoadingTier(tierId);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      alert(`Success! You've selected the ${tierId.toUpperCase()} plan. Redirecting to checkout...`);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingTier(null);
    }
  };

  return (
    <div className="bg-strategic-light py-20 px-4 sm:px-6 lg:px-8">
       {/* Header */}
       <div className="text-center max-w-3xl mx-auto mb-16 pt-10">
        <h1 className="text-4xl font-bold font-heading text-strategic-dark mb-4">Invest In Answers</h1>
        <div className="w-16 h-1 bg-strategic-primary mx-auto mb-6"></div>
        <p className="text-lg text-gray-500">
          We charge per idea validation. The cost of validation is a fraction of the cost of failure.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {PRICING_TIERS.map((tier) => (
          <div 
            key={tier.id} 
            className={`relative flex flex-col p-10 bg-white transition-all duration-300 ${
              tier.highlight 
                ? 'shadow-xl border-t-4 border-strategic-primary z-10' 
                : 'shadow-card border border-gray-100 hover:shadow-card-hover'
            }`}
          >
            {tier.highlight && (
              <div className="absolute top-0 right-0 bg-strategic-primary text-white text-xs font-bold uppercase px-4 py-1 tracking-wide">
                Best Value
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold font-heading text-strategic-dark">{tier.name}</h3>
              <p className="text-gray-400 text-sm mt-2 font-light">{tier.description}</p>
            </div>

            <div className="flex items-baseline mb-8 pb-8 border-b border-gray-100">
              <span className="text-5xl font-bold text-strategic-dark tracking-tighter">{tier.price}</span>
              {tier.period && <span className="text-gray-400 ml-2 text-sm uppercase tracking-wide">{tier.period}</span>}
            </div>

            <ul className="flex-grow space-y-5 mb-10">
              {tier.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-600 text-sm">
                  <div className="bg-strategic-secondary p-1 mt-0.5 shrink-0">
                    <Check className="w-3 h-3 text-strategic-primary" />
                  </div>
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleTierSelection(tier.id)}
              disabled={loadingTier !== null}
              className={`w-full py-4 font-bold transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-widest rounded-none ${
                tier.highlight
                  ? 'bg-strategic-primary text-white hover:bg-strategic-primaryHover shadow-lg'
                  : 'bg-strategic-dark text-white hover:bg-gray-800'
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {loadingTier === tier.id ? (
                <>
                  <Loader2 className="animate-spin w-4 h-4" /> Processing...
                </>
              ) : (
                tier.cta
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;