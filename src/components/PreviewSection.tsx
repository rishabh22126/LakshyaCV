import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Briefcase, Mail, Phone, MapPin, Sparkles, Layout, Palette, FileText } from 'lucide-react';

export function PreviewSection() {
  const [formData, setFormData] = useState({
    name: 'Rohan Sharma',
    role: 'Senior Software Engineer',
    summary: 'Dedicated and innovative software engineer with 6+ years of experience in full-stack development. Passionate about building scalable applications and mentoring junior developers.',
    email: 'rohan.sharma@example.com',
    phone: '+91 98765 43210',
    location: 'Bangalore, India'
  });

  const [activeTemplate, setActiveTemplate] = useState('modern');

  const templates = [
    { id: 'modern', name: 'Modern Creative', icon: Layout, color: '#FF7A60' },
    { id: 'minimal', name: 'Minimalist Clean', icon: FileText, color: '#6366f1' },
    { id: 'creative', name: 'Stylish Portfolio', icon: Palette, color: '#10b981' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-24 bg-[#0B0E23] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[#FF7A60] font-black tracking-[0.3em] uppercase mb-4 text-[10px]">Real-time Magic</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
            SEE IT IN <span className="gradient-text">ACTION</span>
          </h3>
          <p className="text-slate-400 font-medium">
            Try our real-time preview. Type your details and watch how our templates instantly adapt to your professional story.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-10 rounded-[40px] border border-white/10"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-[#FF7A60]/20 flex items-center justify-center text-[#FF7A60]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-bold text-white tracking-tight">Personalize Your Resume</h4>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-[#0F1229] border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-white focus:border-[#FF7A60] focus:ring-1 focus:ring-[#FF7A60] outline-none transition-all placeholder:text-slate-700" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Job Title</label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input 
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="w-full bg-[#0F1229] border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-white focus:border-[#FF7A60] focus:ring-1 focus:ring-[#FF7A60] outline-none transition-all placeholder:text-slate-700" 
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Professional Summary</label>
                <textarea 
                  name="summary"
                  value={formData.summary}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-[#0F1229] border border-white/10 rounded-2xl py-4 px-4 text-white focus:border-[#FF7A60] focus:ring-1 focus:ring-[#FF7A60] outline-none transition-all resize-none" 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {templates.map((tpl) => (
                  <button
                    key={tpl.id}
                    onClick={() => setActiveTemplate(tpl.id)}
                    className={`flex items-center justify-center space-x-2 py-3 rounded-2xl border transition-all ${
                      activeTemplate === tpl.id 
                      ? 'bg-[#FF7A60]/20 border-[#FF7A60] text-white' 
                      : 'border-white/5 text-slate-500 hover:bg-white/5'
                    }`}
                  >
                    <tpl.icon className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">{tpl.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Preview Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Browser frame */}
            <div className="bg-[#1C2145] rounded-t-[32px] p-4 flex items-center space-x-2 border-x border-t border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <div className="flex-1 text-center text-[10px] font-bold text-slate-500 uppercase tracking-widest">Preview Mode</div>
            </div>

            <div className="bg-white rounded-b-[32px] overflow-hidden shadow-[0_0_100px_rgba(255,122,96,0.15)] min-h-[500px]">
              <AnimatePresence mode="wait">
                {activeTemplate === 'modern' && (
                  <motion.div
                    key="modern"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-12 text-[#1a1a1a]"
                  >
                    <div className="flex justify-between items-start mb-8">
                       <div>
                          <h1 className="text-3xl font-black uppercase tracking-tight mb-1">{formData.name}</h1>
                          <p className="text-[#FF7A60] font-black uppercase tracking-widest text-[10px]">{formData.role}</p>
                       </div>
                       <div className="text-[9px] text-zinc-500 space-y-1 text-right font-medium">
                          <p className="flex items-center justify-end space-x-2"><Mail size={10} /> <span>{formData.email}</span></p>
                          <p className="flex items-center justify-end space-x-2"><Phone size={10} /> <span>{formData.phone}</span></p>
                          <p className="flex items-center justify-end space-x-2"><MapPin size={10} /> <span>{formData.location}</span></p>
                       </div>
                    </div>
                    <div className="h-1 bg-[#FF7A60] w-20 mb-8"></div>
                    <div className="mb-10">
                      <h2 className="text-xs font-black uppercase tracking-[0.2em] mb-4 text-zinc-400">Professional Summary</h2>
                      <p className="text-sm leading-relaxed text-zinc-600 italic">"{formData.summary}"</p>
                    </div>
                    <div className="space-y-6">
                      <h2 className="text-xs font-black uppercase tracking-[0.2em] mb-4 text-zinc-400">Selected Experience</h2>
                      <div className="border-l-2 border-zinc-100 pl-6 relative">
                        <div className="absolute top-0 -left-[5px] w-2 h-2 rounded-full bg-[#FF7A60]"></div>
                        <h3 className="text-sm font-bold uppercase tracking-tight">Lead Developer &middot; Global Systems</h3>
                        <p className="text-[10px] text-zinc-400 font-bold mb-2 uppercase">2020 — Present</p>
                        <p className="text-[11px] text-zinc-500 leading-relaxed">Spearheaded the development of a high-traffic e-commerce platform, increasing conversion rates by 25% through optimized performance and modern UI practices.</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTemplate === 'minimal' && (
                  <motion.div
                    key="minimal"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-12 text-zinc-900 font-serif"
                  >
                    <div className="text-center mb-10 border-b border-zinc-200 pb-10">
                      <h1 className="text-4xl mb-2 font-light">{formData.name}</h1>
                      <p className="text-zinc-500 text-sm tracking-widest uppercase">{formData.role}</p>
                      <div className="mt-4 flex justify-center space-x-4 text-[10px] text-zinc-400 uppercase font-sans font-bold">
                        <span>{formData.email}</span>
                        <span>&bull;</span>
                        <span>{formData.phone}</span>
                        <span>&bull;</span>
                        <span>{formData.location}</span>
                      </div>
                    </div>
                    <div className="max-w-2xl mx-auto">
                      <div className="grid grid-cols-[100px_1fr] gap-10">
                        <h2 className="text-[10px] uppercase tracking-[0.3em] font-sans font-black text-zinc-300">About</h2>
                        <p className="text-xs leading-relaxed text-zinc-600">{formData.summary}</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTemplate === 'creative' && (
                  <motion.div
                    key="creative"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="h-full flex flex-col"
                  >
                    <div className="bg-[#1a1a1a] p-12 text-white">
                      <h1 className="text-5xl font-black mb-2 tracking-tighter">{formData.name.split(' ')[0]}<span className="text-[#10b981]">.</span></h1>
                      <p className="text-white/60 font-medium uppercase tracking-[0.2em] text-[10px]">{formData.role}</p>
                    </div>
                    <div className="p-12 flex-1 bg-white relative overflow-hidden">
                       <div className="absolute top-0 right-0 w-32 h-32 bg-[#10b981]/5 rounded-bl-full"></div>
                       <div className="max-w-md">
                        <p className="text-2xl font-bold text-zinc-900 leading-tight mb-8">
                          I help businesses <span className="text-[#10b981]">scale</span> through digital excellence.
                        </p>
                        <p className="text-sm text-zinc-500 leading-relaxed bg-[#10b981]/5 p-6 rounded-2xl border border-[#10b981]/10">
                          {formData.summary}
                        </p>
                       </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-[#FF7A60]/10 rounded-[40px] blur-2xl -z-10 group-hover:bg-[#FF7A60]/20 transition-all"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
