import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0B0E23] liquid-gradient">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-accent-purple/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-slate-300 text-xs font-bold uppercase tracking-widest leading-none mt-0.5">The Future of Resume Building</span>
            </div>
            
            <h1 className="text-5xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-8 uppercase">
              WE <span className="gradient-text">DESIGN</span> <br />
              <span className="text-slate-500">FOR CAREERS</span>
            </h1>
            
            <p className="text-xl text-slate-400 mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
              Land your dream job with industry-approved templates. Just fill, pay ₹49, and download your polished resume instantly.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <Link
                to="/templates"
                className="group relative inline-flex items-center justify-center bg-[#FF7A60] hover:bg-[#ff8b75] text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-2xl shadow-[#FF7A60]/30 hover:-translate-y-1 active:translate-y-0"
              >
                Start Building Now
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
              <a 
                href="#templates" 
                className="inline-flex items-center text-white/70 hover:text-white font-bold px-4 py-4 transition-colors border-b-2 border-white/10 hover:border-primary"
              >
                Explore Templates
              </a>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/100?u=${i}`} 
                    className="w-12 h-12 rounded-full border-4 border-[#0B0E23] transition-transform hover:scale-110 hover:z-10 cursor-pointer" 
                    alt="User"
                    referrerPolicy="no-referrer"
                  />
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-[#0B0E23] bg-primary flex items-center justify-center text-white font-black text-xs">
                  +12k
                </div>
              </div>
              <p className="text-sm font-semibold text-slate-400">
                Trusted by <span className="text-white font-bold">12,000+</span> professionals worldwide
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 relative"
          >
            <div className="relative z-10 glass p-3 rounded-[40px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] transition-all duration-700 hover:rotate-0 hover:scale-[1.02]">
              <div className="bg-[#0B0E23] rounded-[32px] overflow-hidden border border-white/5">
                <img 
                  src='/A1.jpg' 
                  alt="Resume Preview" 
                  className="w-full h-auto object-cover opacity-90"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floaties */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 glass p-6 rounded-3xl shadow-2xl hidden lg:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 text-green-500" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</p>
                    <p className="text-white font-bold text-sm">ATS Optimized</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-10 glass p-6 rounded-3xl shadow-2xl hidden lg:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center">
                    <FileCheck className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Type</p>
                    <p className="text-white font-bold text-sm">Premium PDF</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Glow backing */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent-purple/20 rounded-full blur-[140px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
