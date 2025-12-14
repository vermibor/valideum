import React from 'react';
import { SERVICE_STEPS } from '../constants';
import { Check, X } from 'lucide-react';

const ServiceDeepDive: React.FC = () => {
  return (
    <div className="py-20 bg-white">
       {/* Header */}
       <div className="bg-strategic-dark text-white py-24 mb-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Our Methodology</h1>
            <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
              We go beyond "asking AI". We build, launch, and measure real-world interactions.
            </p>
          </div>
       </div>

       {/* Comparison Section */}
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
         <div className="bg-strategic-secondary p-8 md:p-12 border border-gray-200">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-bold font-heading text-strategic-dark mb-4">The Valideum Difference</h2>
             <p className="text-gray-500">Why real data wins over AI predictions.</p>
           </div>
           
           <div className="overflow-x-auto">
             <table className="w-full text-left border-collapse">
               <thead>
                 <tr className="border-b-2 border-gray-200">
                   <th className="py-4 pl-4 text-sm font-bold text-gray-400 uppercase tracking-widest w-1/3">Feature</th>
                   <th className="py-4 text-sm font-bold text-strategic-dark uppercase tracking-widest w-1/3 bg-white border-x border-gray-100 text-center">Valideum</th>
                   <th className="py-4 text-sm font-bold text-gray-400 uppercase tracking-widest w-1/3 text-center">Others / AI Tools</th>
                 </tr>
               </thead>
               <tbody className="text-sm">
                 <tr className="border-b border-gray-200">
                   <td className="py-6 pl-4 font-bold text-strategic-dark">Validation Method</td>
                   <td className="py-6 text-center bg-white border-x border-gray-100 font-bold text-strategic-primary">Real Ad Campaigns (Google/Meta)</td>
                   <td className="py-6 text-center text-gray-500">LLM / AI Predictions</td>
                 </tr>
                 <tr className="border-b border-gray-200">
                   <td className="py-6 pl-4 font-bold text-strategic-dark">Web Presence</td>
                   <td className="py-6 text-center bg-white border-x border-gray-100 font-bold text-strategic-primary">High-Conversion Landing Page</td>
                   <td className="py-6 text-center text-gray-500">None / Static Mockup</td>
                 </tr>
                 <tr className="border-b border-gray-200">
                   <td className="py-6 pl-4 font-bold text-strategic-dark">Duration</td>
                   <td className="py-6 text-center bg-white border-x border-gray-100 font-bold text-strategic-primary">4-8 Weeks Live Data</td>
                   <td className="py-6 text-center text-gray-500">Instant (Hallucinated)</td>
                 </tr>
                 <tr className="border-b border-gray-200">
                   <td className="py-6 pl-4 font-bold text-strategic-dark">User Intent</td>
                   <td className="py-6 text-center bg-white border-x border-gray-100 font-bold text-strategic-primary">Credit Card / Email Collection</td>
                   <td className="py-6 text-center text-gray-500">Theoretical Interest</td>
                 </tr>
                 <tr>
                   <td className="py-6 pl-4 font-bold text-strategic-dark">Outcome</td>
                   <td className="py-6 text-center bg-white border-x border-gray-100 font-bold text-strategic-primary">Hard Metric Validation (CAC/LTV)</td>
                   <td className="py-6 text-center text-gray-500">Subjective Opinion</td>
                 </tr>
               </tbody>
             </table>
           </div>
         </div>
       </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-0">
          {SERVICE_STEPS.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <div key={step.stepNumber} className="flex flex-col md:flex-row group border-b border-gray-100 last:border-0">
                
                {/* Number / Icon Column */}
                <div className="w-full md:w-1/4 py-12 flex flex-col items-center justify-start md:border-r border-gray-100">
                   <div className="w-16 h-16 bg-strategic-secondary text-strategic-primary flex items-center justify-center mb-4 group-hover:bg-strategic-dark group-hover:text-white transition-colors duration-300">
                     <Icon className="w-8 h-8" />
                   </div>
                   <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Step 0{step.stepNumber}</span>
                </div>

                {/* Content Column */}
                <div className="w-full md:w-3/4 p-12 hover:bg-strategic-light transition-colors duration-300">
                   <h3 className="text-2xl font-bold text-strategic-dark mb-4 font-heading group-hover:text-strategic-primary transition-colors">{step.title}</h3>
                   <p className="text-gray-500 leading-relaxed text-lg font-light">
                     {step.description}
                   </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceDeepDive;