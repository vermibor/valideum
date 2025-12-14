import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Clock, Calendar } from 'lucide-react';

const Knowledge: React.FC = () => {
  return (
    <div className="bg-white py-20">
       {/* Header */}
       <div className="bg-strategic-secondary py-24 mb-16 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-strategic-dark mb-6">Knowledge Base</h1>
            <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
              Expert insights on lean startup methodology, market validation, and data-driven decision making.
            </p>
          </div>
       </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {BLOG_POSTS.map((post) => (
          <article key={post.id} className="flex flex-col border-b border-gray-100 pb-16 last:border-0">
            {post.imageUrl && (
              <div className="w-full aspect-video mb-8 overflow-hidden bg-gray-100">
                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
              </div>
            )}
            
            <div className="flex items-center gap-6 text-xs text-gray-400 uppercase tracking-widest font-bold mb-4">
               <span className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {post.date}</span>
               <span className="flex items-center gap-2"><Clock className="w-3 h-3" /> {post.readTime}</span>
            </div>

            <h2 className="text-3xl font-bold font-heading text-strategic-dark mb-6 leading-tight">{post.title}</h2>
            
            <div className="prose prose-lg text-gray-500 font-light leading-relaxed max-w-none">
              {post.content}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Knowledge;