import { motion } from 'motion/react';
import { Target, Search, PenTool, CheckCircle2, Zap, Layers } from 'lucide-react';

const PRECISION_POINTS = [
  {
    icon: Search,
    title: "ATS Optimization",
    description: "Every keyword and character is verified to pass through modern Applicant Tracking Systems with 99.9% accuracy."
  },
  {
    icon: PenTool,
    title: "Manual Polish",
    description: "Our system replicates the eye of a pro designer, ensuring perfect margin alignment and white space balance."
  },
  {
    icon: Target,
    title: "Impact Analysis",
    description: "We help you quantify achievements using the STAR method, just like an expensive career consultant would."
  },
  {
    icon: CheckCircle2,
    title: "Grammar Check",
    description: "Zero-tolerance policy for typos. We scan every sentence to ensure your persona remains professional."
  },
  {
    icon: Zap,
    title: "Smart Hierarchy",
    description: "We organize your experience to highlight your strongest skills first, ensuring recruiters see your value in 6 seconds."
  },
  {
    icon: Layers,
    title: "Modern Layouts",
    description: "Ditch the boring templates. We use editorial-grade typography and layouts that command attention."
  }
];

export function Craftsmanship() {
  return (
    <section className="py-32 bg-[#0B0E23] relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF7A60]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-[#FF7A60] font-black tracking-[0.3em] uppercase mb-4 text-[10px]">Precision Built</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6">
            BUILT WITH <span className="gradient-text">CARE</span> FOR EVERY POINT
          </h3>
          <p className="text-slate-400 text-lg font-medium leading-relaxed">
            We don't just generate text; we craft your identity. Our process mirrors the attention of a manual resume consultant, ensuring every bullet point serves your career goal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRECISION_POINTS.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-[32px] border border-white/5 hover:bg-white/5 transition-all duration-500 group"
            >
              <div className="w-14 h-14 bg-[#FF7A60]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#FF7A60] transition-colors duration-500">
                <point.icon className="w-6 h-6 text-[#FF7A60] group-hover:text-white transition-colors duration-500" />
              </div>
              <h4 className="text-xl font-black text-white uppercase tracking-tight mb-4">{point.title}</h4>
              <p className="text-slate-400 font-medium leading-relaxed group-hover:text-slate-300 transition-colors">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-10 rounded-[40px] bg-gradient-to-br from-white/5 to-transparent border border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#FF7A60]"></div>
          <div className="relative z-10">
            <span className="text-[10px] font-black text-[#FF7A60] uppercase tracking-[0.4em] mb-4 block">The Lakshya Standard</span>
            <p className="text-2xl md:text-3xl text-white font-bold max-w-4xl mx-auto italic leading-tight">
              "We treat your resume as if it's our own. Every single pixel and word is scrutinized to ensure you don't just apply, but you get hired."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
