/**
 * Careers Page Component
 * Created to showcase open positions and company culture.
 */
import { motion } from 'motion/react';
import { Briefcase, Users, Zap, Globe, Heart, Rocket, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GOOGLE_FORM_CONFIG } from '../constants';

const VALUES = [
  {
    icon: Rocket,
    title: "Innovate Daily",
    description: "We are redefining how people build their careers. We value bold ideas and rapid experimentation."
  },
  {
    icon: Users,
    title: "People First",
    description: "Our users are at the heart of everything we do. We build tools that empower individuals."
  },
  {
    icon: Zap,
    title: "Think Fast",
    description: "In the fast-paced world of tech, we prioritize speed and efficiency without compromising quality."
  },
  {
    icon: Heart,
    title: "Work with Passion",
    description: "We love what we do, and it shows in the details of the templates and tools we create."
  }
];

const OPEN_ROLES = [
  {
    title: "Frontend Engineer (React)",
    department: "Engineering",
    location: "Remote",
    type: "Full-time"
  },
  {
    title: "Content Strategist",
    department: "Marketing",
    location: "Remote",
    type: "Part-time / Contract"
  },
  {
    title: "Customer Success Lead",
    department: "Operations",
    location: "Remote",
    type: "Full-time"
  }
];

export function CareersPage() {
  const handleApply = (roleTitle: string) => {
    // Open specialized Career Google Form when Apply Now is clicked
    const url = new URL(GOOGLE_FORM_CONFIG.careerUrl);
    // If we wanted to prefill the role, we could use a specific entry ID here if available
    window.open(url.toString(), '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0B0E23] pt-32 pb-24 liquid-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tight uppercase mb-8"
          >
            JOIN THE <span className="gradient-text">TEAM</span> BEHIND THE MAGIC
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-xl md:text-2xl font-medium leading-relaxed"
          >
            We're on a mission to empower 100 million professionals with tools that command attention. 
            Want to build the future of career branding? We're looking for you.
          </motion.p>
        </div>

        {/* Culture Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {VALUES.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-[32px] border border-white/5 hover:border-[#FF7A60]/30 transition-all group"
            >
              <div className="w-14 h-14 bg-[#FF7A60]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#FF7A60] transition-colors duration-500">
                <val.icon className="w-6 h-6 text-[#FF7A60] group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-black text-white uppercase tracking-tight mb-4">{val.title}</h3>
              <p className="text-slate-400 font-medium leading-relaxed group-hover:text-slate-200 transition-colors">
                {val.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Roles Section */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-[#FF7A60] font-black tracking-[0.3em] uppercase mb-4 text-xs">Opportunities</h2>
              <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-none">
                OPEN <span className="gradient-text">ROLES</span>
              </h3>
            </div>
            <div className="flex items-center space-x-2 text-slate-500 font-bold uppercase tracking-[0.2em] text-[10px]">
              <Globe size={14} className="text-[#FF7A60]" />
              <span>We Hire Globally</span>
            </div>
          </div>

          <div className="space-y-4">
            {OPEN_ROLES.map((role, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 md:p-10 rounded-[32px] border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/5 transition-all group"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-[10px] font-black text-[#FF7A60] uppercase tracking-widest bg-[#FF7A60]/10 px-3 py-1 rounded-full">
                      {role.department}
                    </span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest italic">
                      {role.type}
                    </span>
                  </div>
                  <h4 className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-[#FF7A60] transition-colors">
                    {role.title}
                  </h4>
                  <p className="text-slate-500 font-bold mt-1 uppercase tracking-[0.1em] text-xs">
                    {role.location}
                  </p>
                </div>
                <button 
                  onClick={() => handleApply(role.title)}
                  className="flex items-center justify-center space-x-3 bg-white/5 hover:bg-[#FF7A60] text-slate-300 hover:text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all group-hover:shadow-2xl group-hover:shadow-[#FF7A60]/30"
                >
                  <span>Apply Now</span>
                  <ArrowRight size={14} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA
        <div className="glass p-12 md:p-20 rounded-[64px] border border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF7A60]/5 rounded-full blur-[100px] -z-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10"></div>
          
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-8">
            Don't see a role for you?
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
            We're always looking for exceptional talent. If you're passionate about what we're building, drop us a line.
          </p>
          <a 
            href="mailto:supportlakshyacv.com"
            className="inline-flex items-center space-x-4 bg-white text-[#0B0E23] px-10 py-5 rounded-[20px] font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-white/10"
          >
            <span>General Application</span>
            <ArrowRight size={18} />
          </a>
        </div> */}
      </div>
    </div>
  );
}
