import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, ArrowLeft, Filter, Search, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

import { TEMPLATES, GOOGLE_FORM_CONFIG } from '../constants';

export function TemplatesPage() {
  const [selectedStyle, setSelectedStyle] = useState<string>('All');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const styles = useMemo(() => ['All', ...new Set(TEMPLATES.map(t => t.style))], []);
  const industries = useMemo(() => ['All', ...new Set(TEMPLATES.map(t => t.industry))], []);

  const filteredTemplates = useMemo(() => {
    return TEMPLATES.filter(template => {
      const matchesStyle = selectedStyle === 'All' || template.style === selectedStyle;
      const matchesIndustry = selectedIndustry === 'All' || template.industry === selectedIndustry;
      const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           template.tag.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesStyle && matchesIndustry && matchesSearch;
    });
  }, [selectedStyle, selectedIndustry, searchQuery]);

  const getGoogleFormUrl = (templateName: string) => {
    const url = new URL(GOOGLE_FORM_CONFIG.baseUrl);
    url.searchParams.append(GOOGLE_FORM_CONFIG.templateEntryId, templateName);
    return url.toString();
  };

  return (
    <div className="min-h-screen bg-[#0B0E23] pt-32 pb-20 liquid-gradient">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center text-slate-400 hover:text-primary font-bold mb-8 transition-colors group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight uppercase mb-6">
                EXPLORE ALL <span className="gradient-text">TEMPLATES</span>
              </h1>
              <p className="text-slate-400 max-w-2xl text-xl font-medium">
                Choose from our extensive collection of professional resume designs. Every template is crafted for your career success.
              </p>
            </div>
            
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input 
                type="text" 
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0F1229] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-[#FF7A60] focus:ring-1 focus:ring-[#FF7A60] outline-none transition-all placeholder:text-slate-700 font-bold"
              />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-8 mb-12 items-start md:items-center">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400">
              <SlidersHorizontal className="w-5 h-5" />
            </div>
            <div className="flex flex-wrap gap-2">
              {styles.map((style) => (
                <button
                  key={style}
                  onClick={() => setSelectedStyle(style)}
                  className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                    selectedStyle === style 
                    ? 'bg-[#FF7A60] text-white shadow-lg shadow-[#FF7A60]/20' 
                    : 'bg-white/5 text-slate-500 hover:bg-white/10 border border-white/5'
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          <div className="h-8 w-px bg-white/10 hidden md:block"></div>

          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400">
              <Filter className="w-5 h-5" />
            </div>
            <div className="flex flex-wrap gap-2">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                    selectedIndustry === industry 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'bg-white/5 text-slate-500 hover:bg-white/10 border border-white/5'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredTemplates.map((template, index) => (
              <motion.div
                key={template.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
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
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-md">
                    <a
                      href={getGoogleFormUrl(template.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#FF7A60] text-white px-8 py-3 rounded-2xl font-bold flex items-center space-x-2 shadow-2xl shadow-[#FF7A60]/30"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Use Template</span>
                    </a>
                  </div>
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <div className="glass px-3 py-1 rounded-full shadow-sm text-[10px] font-black uppercase tracking-widest text-white border border-white/10">
                      {template.tag}
                    </div>
                    {/* Secondary tags based on category if needed */}
                  </div>
                </div>
                <div className="mt-6 px-2">
                  <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{template.name}</h4>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{template.style}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{template.industry}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {filteredTemplates.length === 0 && (
            <div className="col-span-full py-32 text-center">
              <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 text-4xl">
                🔍
              </div>
              <h4 className="text-3xl font-black text-white mb-4 uppercase tracking-tight">No templates found</h4>
              <p className="text-slate-500 text-lg font-medium">Try adjusting your filters or search keywords.</p>
              <button 
                onClick={() => { setSelectedStyle('All'); setSelectedIndustry('All'); setSearchQuery(''); }}
                className="mt-8 text-[#FF7A60] font-black uppercase tracking-widest text-xs hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Coming Soon Card - only show if search is empty */}
          {searchQuery === '' && selectedStyle === 'All' && selectedIndustry === 'All' && (
            <div className="relative aspect-[3/4] rounded-[32px] overflow-hidden glass border-2 border-dashed border-white/10 flex flex-col items-center justify-center p-8 text-center bg-white/5">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl">✨</span>
              </div>
              <h4 className="text-2xl font-black text-white mb-3 uppercase tracking-tight">More Soon</h4>
              <p className="text-slate-500 font-medium leading-relaxed">We're designing new premium templates every week to help you stand out.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
