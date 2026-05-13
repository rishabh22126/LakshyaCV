import { motion } from 'motion/react';
import { Quote, Star, ArrowRight } from 'lucide-react';

const FEATURED_FEEDBACK = [
  {
    name: 'Priya Patel',
    role: 'HR Manager at Global Solutions',
    feedback: 'The structures are ATS-friendly, which is the most important part of getting noticed by recruiters today. I recommend this to all my candidates.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
    tag: 'HR Choice'
  },
  {
    name: 'Rahul Verma',
    role: 'Project Manager at TechCorp',
    feedback: 'Changed my career trajectory. The emphasis on quantifiable results in their templates helped me land a high-paying role in a top MNC.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul',
    tag: 'Career Growth'
  },
  {
    name: 'Anjali Gupta',
    role: 'Marketing Associate',
    feedback: 'The ₹49 investment was totally worth it. The templates are clean and modern. The support team is very responsive and helpful.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali',
    tag: 'Best Value'
  }
];

export function FeedbackShowcase() {
  return (
    <section className="py-24 bg-[#0B0E23] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-[#FF7A60] font-black tracking-[0.3em] uppercase mb-4 text-xs">Testimonial Template</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-none mb-6">
              HEAR IT FROM OUR <span className="gradient-text">LEGENDS</span>
            </h3>
            <p className="text-slate-400 text-lg font-medium leading-relaxed">
              We asked real users how LakshyaCV transformed their job search. Here are the templates of their success stories.
            </p>
          </div>
          <div className="flex -space-x-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-12 h-12 rounded-full border-4 border-[#0B0E23] overflow-hidden bg-slate-800">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=User${i}`} alt="User" />
              </div>
            ))}
            <div className="w-12 h-12 rounded-full border-4 border-[#0B0E23] bg-[#FF7A60] flex items-center justify-center text-white text-xs font-bold">
              +2k
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_FEEDBACK.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A60]/10 to-transparent rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative h-full glass p-10 rounded-[40px] border border-white/5 group-hover:border-[#FF7A60]/30 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="glass px-4 py-1.5 rounded-full border border-white/10 text-[#FF7A60] text-[10px] font-black uppercase tracking-widest">
                      {item.tag}
                    </div>
                    <Quote className="w-8 h-8 text-[#FF7A60]/10 group-hover:text-[#FF7A60]/30 transition-colors" />
                  </div>
                  
                  <div className="flex space-x-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FF7A60] text-[#FF7A60]" />
                    ))}
                  </div>
                  
                  <p className="text-xl text-white font-bold leading-snug group-hover:text-[#FF7A60] transition-colors mb-8">
                    "{item.feedback}"
                  </p>
                </div>

                <div className="flex items-center space-x-5 pt-8 border-t border-white/5">
                  <img src={item.image} alt={item.name} className="w-14 h-14 rounded-2xl bg-slate-800 border-2 border-transparent group-hover:border-[#FF7A60] transition-all" />
                  <div>
                    <h5 className="text-white font-black uppercase tracking-tight">{item.name}</h5>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{item.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-center space-y-6">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
          <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-[10px]">Ready to build yours?</p>
          <button className="flex items-center space-x-3 text-white font-black uppercase tracking-widest text-xs group">
            <span>Join These Professionals</span>
            <ArrowRight className="w-4 h-4 text-[#FF7A60] group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
