import { motion } from 'motion/react';
import { Eye, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { TEMPLATES, GOOGLE_FORM_CONFIG } from '../constants';

export function TemplateSection() {
  const templates = TEMPLATES.slice(0, 4);

  const getGoogleFormUrl = (templateName: string) => {
    const url = new URL(GOOGLE_FORM_CONFIG.baseUrl);
    // Add pre-fill parameter. User needs to ensure templateEntryId matches their form's field ID
    url.searchParams.append(GOOGLE_FORM_CONFIG.templateEntryId, templateName);
    return url.toString();
  };

  return (
    <section id="templates" className="py-24 bg-[#0B0E23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-[#FF7A60] font-bold tracking-wider uppercase mb-3">Premium Layouts</h2>
            <h3 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight uppercase">Choose Your <span className="gradient-text">Template</span></h3>
          </div>
          <p className="text-slate-400 max-w-md font-medium">
            Every template is designed to pass Applicant Tracking Systems (ATS) while looking beautiful for recruiters.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {templates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-[32px] overflow-hidden glass shadow-2xl border border-white/5 p-1">
                <div className="w-full h-full rounded-[28px] overflow-hidden">
                  <img
                    src={template.image}
                    alt={template.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-md">
                  <a
                    href={getGoogleFormUrl(template.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FF7A60] text-white px-8 py-3 rounded-2xl font-bold flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-2xl shadow-[#FF7A60]/30"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Use Template</span>
                  </a>
                </div>

                {/* Tag */}
                <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full shadow-sm text-[10px] font-black uppercase tracking-widest text-white border border-white/10">
                  {template.tag}
                </div>
              </div>
              
              <div className="mt-6 flex items-center justify-between px-2">
                <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{template.name}</h4>
                <div className="p-2 glass rounded-full opacity-0 group-hover:opacity-100 transition-all">
                  <Eye className="w-4 h-4 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            to="/templates"
            className="inline-flex items-center space-x-3 glass hover:bg-white/10 text-white px-12 py-5 rounded-2xl font-black transition-all shadow-2xl active:scale-95"
          >
            <span className="uppercase tracking-widest text-sm">View All Templates</span>
            <ArrowRight className="w-5 h-5 text-primary" />
          </Link>
        </div>
      </div>
    </section>
  );
}
