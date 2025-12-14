import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, BarChart2, BookOpen, Users } from 'lucide-react';
import DemoWidget from '../components/DemoWidget';
import { SERVICE_STEPS, BLOG_POSTS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-strategic-dark min-h-[600px] flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Abstract Background Image Overlay - BW Architecture */}
        <div 
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000&sat=-100')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-strategic-dark via-strategic-dark/95 to-strategic-dark/90 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto pt-20 pb-32">
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-8 font-heading leading-tight tracking-tight">
            Real Market Validation<br />
            <span className="text-gray-400">With Real Customers</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Stop guessing with AI simulations. We build actual landing pages and run 4-8 week live advertising campaigns to measure real user intent and conversion.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
             <Link to="/pricing" className="bg-white text-strategic-dark font-bold py-4 px-10 hover:bg-gray-200 transition-all shadow-xl text-xs uppercase tracking-widest rounded-none">
               Start Live Test
             </Link>
             <Link to="/service" className="border border-gray-600 text-gray-300 font-bold py-4 px-10 hover:border-white hover:text-white transition-all text-xs uppercase tracking-widest rounded-none">
               Our Process
             </Link>
          </div>
        </div>
      </section>

      {/* Widget overlap section */}
      <div className="bg-strategic-secondary pb-24 px-4">
        <DemoWidget />
      </div>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold font-heading text-strategic-dark mb-6">Why Choose Valideum?</h2>
            <div className="w-24 h-0.5 bg-strategic-primary mx-auto"></div>
            <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg font-light">
              Competitors give you AI predictions. We give you actual customers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-10 bg-white border border-gray-100 shadow-card hover:shadow-card-hover transition-all group rounded-none">
              <div className="w-16 h-16 bg-strategic-secondary flex items-center justify-center mb-8 group-hover:bg-strategic-dark transition-colors">
                <Target className="w-8 h-8 text-strategic-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-strategic-dark mb-4 font-heading">Real Traffic</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                We purchase actual ad inventory on Google and Facebook. Your data comes from real humans clicking on real ads.
              </p>
            </div>

            <div className="p-10 bg-white border border-gray-100 shadow-card hover:shadow-card-hover transition-all group rounded-none">
              <div className="w-16 h-16 bg-strategic-secondary flex items-center justify-center mb-8 group-hover:bg-strategic-dark transition-colors">
                <Users className="w-8 h-8 text-strategic-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-strategic-dark mb-4 font-heading">Behavior Analysis</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                We track time-on-page, scroll depth, and button clicks over a 4-8 week period to gauge genuine interest.
              </p>
            </div>

            <div className="p-10 bg-white border border-gray-100 shadow-card hover:shadow-card-hover transition-all group rounded-none">
              <div className="w-16 h-16 bg-strategic-secondary flex items-center justify-center mb-8 group-hover:bg-strategic-dark transition-colors">
                <BarChart2 className="w-8 h-8 text-strategic-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-strategic-dark mb-4 font-heading">Hard Data</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                No "estimated" metrics. You get a report with Cost Per Click (CPC), Customer Acquisition Cost (CAC), and Signup Rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-24 bg-strategic-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold font-heading text-strategic-dark mb-6">The Live Testing Process</h2>
            <div className="w-24 h-0.5 bg-strategic-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICE_STEPS.map((step) => {
               const Icon = step.icon;
               return (
                 <div key={step.stepNumber} className="bg-white p-8 border border-gray-100 hover:border-strategic-dark transition-colors flex flex-col gap-6 group">
                    <div className="w-12 h-12 bg-gray-100 flex items-center justify-center group-hover:bg-strategic-dark transition-colors">
                      <Icon className="w-6 h-6 text-strategic-primary group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-strategic-dark mb-3 font-heading text-lg">{step.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                    </div>
                 </div>
               )
            })}
          </div>
          <div className="text-center mt-16">
             <Link to="/service" className="text-strategic-dark font-bold hover:text-strategic-primary transition-colors inline-flex items-center gap-3 uppercase tracking-widest text-xs border-b-2 border-strategic-dark pb-1 hover:border-strategic-primary">
               Compare vs AI Only Tools <ArrowRight className="w-4 h-4"/>
             </Link>
          </div>
        </div>
      </section>

      {/* Knowledge Preview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex justify-between items-end mb-12">
             <div>
                <h2 className="text-4xl font-extrabold font-heading text-strategic-dark mb-2">Knowledge Base</h2>
                <div className="w-24 h-0.5 bg-strategic-primary mb-4"></div>
                <p className="text-gray-500">Learn the theory behind successful startup validation.</p>
             </div>
             <Link to="/knowledge" className="hidden md:inline-flex items-center gap-2 font-bold text-strategic-dark hover:text-strategic-primary uppercase tracking-widest text-xs">
                View All Articles <ArrowRight className="w-4 h-4" />
             </Link>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8">
             {BLOG_POSTS.slice(0, 3).map((post) => (
               <Link to="/knowledge" key={post.id} className="group cursor-pointer">
                 <div className="overflow-hidden mb-4 bg-gray-100 aspect-video">
                    <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                 </div>
                 <div className="text-xs font-bold text-strategic-primary mb-2 uppercase tracking-widest">{post.date}</div>
                 <h3 className="text-xl font-bold font-heading text-strategic-dark mb-3 group-hover:text-strategic-primary transition-colors">{post.title}</h3>
                 <p className="text-gray-500 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                 <span className="text-xs font-bold border-b border-gray-300 pb-0.5 group-hover:border-strategic-primary">READ ARTICLE</span>
               </Link>
             ))}
           </div>
           
           <div className="mt-8 md:hidden text-center">
             <Link to="/knowledge" className="inline-flex items-center gap-2 font-bold text-strategic-dark hover:text-strategic-primary uppercase tracking-widest text-xs">
                View All Articles <ArrowRight className="w-4 h-4" />
             </Link>
           </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-strategic-dark text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-8 font-heading">Ready to get real data?</h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg font-light">
            Don't build until you've validated with real customers.
          </p>
          <Link to="/pricing" className="bg-white text-strategic-dark font-bold py-5 px-12 hover:bg-gray-200 transition-all uppercase tracking-widest text-xs rounded-none">
             See Validator Plans
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;