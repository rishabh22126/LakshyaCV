import { Star, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';

export function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  
  const testimonials = [
    {
      name: 'Rohan Sharma',
      role: 'SDE at Tech-M',
      content: 'I was struggling with my resume for months. LakshyaCV helped me create a professional CV in 10 minutes, and I got my first interview the next week!',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan',
    },
    {
      name: 'Anjali Gupta',
      role: 'Marketing Associate',
      content: 'The ₹49 investment was totally worth it. The templates are clean and modern. The support team is very responsive and helpful.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali',
    },
    {
      name: 'Vikram Singh',
      role: 'Fresher / Data Analyst',
      content: 'As a fresher, I didn\'t know what to include. The forms are so intuitive and guided me through the entire process. High quality resume guaranteed!',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram',
    },
    {
      name: 'Priya Patel',
      role: 'HR Manager',
      content: 'I recommend this to all my candidates. The structures are ATS-friendly, which is the most important part of getting noticed by recruiters today.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
    },
    {
      name: 'Amit Kumar',
      role: 'Business Developer',
      content: 'Fast, efficient, and professional. I needed a quick update for a senior role and the premium templates here completely fit the vibe I wanted.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amit',
    },
    {
      name: 'Sneha Reddy',
      role: 'UI/UX Designer',
      content: 'The design quality is top-notch. It\'s hard to find good Indian resume builders that actually care about aesthetics. Highly recommended!',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha',
    },
    {
      name: 'Rahul Verma',
      role: 'Project Manager',
      content: 'Changed my career trajectory. The emphasis on quantifiable results in their templates helped me land a high-paying role in a top MNV.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul',
    },
    {
      name: 'Megha Iyer',
      role: 'Content Strategist',
      content: 'I love how clean the layout is. No clutter, just pure impact. The process is seamless and the final PDF is ready to be sent out immediately.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Megha',
    },
    {
      name: 'Arjun Malhotra',
      role: 'Sales Director',
      content: 'Serious tools for serious professionals. If you want to stand out in a crowded market, LakshyaCV is the weapon you need in your arsenal.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun',
    },
    {
      name: 'Kavita Desai',
      role: 'Finance Consultant',
      content: 'Reliable and affordable. For the price of a coffee, I got a resume that helped me secure five interviews in just two weeks of applying.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kavita',
    },
    {
      name: 'Sameer Khan',
      role: 'Full Stack Developer',
      content: 'The technical section is perfectly structured. It allows me to showcase my stack without looking messy. Great job on the layouts!',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sameer',
    },
    {
      name: 'Pooja Joshi',
      role: 'Education Counselor',
      content: 'I tell all my students to use this. It teaches them how to present their skills effectively. The best career tool I\'ve found recently.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Pooja',
    },
    {
      name: 'Aditya Nair',
      role: 'Operations Lead',
      content: 'Super impressed with the speed. I filled out the details, chose a template, and had a high-end resume ready before my lunch break ended.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aditya',
    },
    {
      name: 'Neha Saxena',
      role: 'Digital Marketer',
      content: 'The social media integration and links sections are great. It makes it very easy for recruiters to find my portfolio and LinkedIn profile.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Neha',
    },
    {
      name: 'Vivek Mishra',
      role: 'System Architect',
      content: 'Minimalist but powerful. The templates don\'t waste space with useless decorations. They focus on what matters: my experience and impact.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vivek',
    },
    {
      name: 'Divya Choudhary',
      role: 'Graphic Designer',
      content: 'Even as a designer, I used this to get a base layout for my formal corporate applications. It saved me hours of alignment and formatting.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Divya',
    },
    {
      name: 'Manish Pandey',
      role: 'Logistics Manager',
      content: 'Excellent service. The WhatsApp support helped me when I had a doubt about field placement. Very helpful for non-tech professionals.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Manish',
    },
    {
      name: 'Shweta Kulkarni',
      role: 'Bank Officer',
      content: 'Professional and formal. The resumes perfectly match the standard required for banking and public sector applications. Very reliable.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Shweta',
    },
    {
      name: 'Nitin Gupta',
      role: 'Civil Engineer',
      content: 'The project section is what I liked most. It allowed me to detail my construction site experiences in a very readable format.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nitin',
    },
    {
      name: 'Rashmi Yadav',
      role: 'Healthcare Professional',
      content: 'Clean and readable. Essential for medical roles where clarity of credentials is key. I\'m very happy with my new resume.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rashmi',
    },
    {
      name: 'Kartik Sethi',
      role: 'E-commerce Specialist',
      content: 'The best investment for my career this year. Highly professional finish that gives you an immediate confidence boost when applying.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kartik',
    },
  ];

  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 6);

  return (
    <section id="testimonials" className="py-32 bg-[#0B0E23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-[#FF7A60] font-black tracking-[0.3em] uppercase mb-4 text-[10px]">Voices of Success</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">TRUSTED BY <span className="gradient-text">THOUSANDS</span></h3>
          <p className="mt-4 text-slate-400 font-medium tracking-wide">Real results from over 2,000+ professionals across India</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {displayedTestimonials.map((t, index) => (
              <motion.div
                key={t.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass p-8 rounded-[32px] border border-white/5 hover:bg-white/5 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Star className="w-16 h-16 fill-white" />
                </div>
                
                <div className="flex space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#FF7A60] text-[#FF7A60]" />
                  ))}
                </div>
                
                <p className="text-slate-400 mb-8 font-medium leading-relaxed group-hover:text-white transition-colors relative z-10">"{t.content}"</p>
                
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-xl border-2 border-[#FF7A60]/20 group-hover:border-[#FF7A60] transition-colors bg-slate-800" />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-[#0B0E23] rounded-full"></div>
                  </div>
                  <div>
                    <h5 className="font-black text-sm text-white uppercase tracking-tight">{t.name}</h5>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="group relative px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-white font-black uppercase tracking-[0.2em] text-xs transition-all flex items-center space-x-3 mx-auto"
          >
            <span>{showAll ? 'Show Regular' : 'View All 20+ Feedbacks'}</span>
            {showAll ? <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" /> : <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />}
          </button>
        </div>
      </div>
    </section>
  );
}
