import { Mail, Phone, Linkedin, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#07091B] text-white pt-32 pb-10 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-accent-purple/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="bg-white/5 p-2 rounded-2xl border border-white/10 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                 <img
                    src="/logo.png"
                    alt="LakshyaCV Logo"
                    className="w-12 h-12 object-contain"/>
              </div>
              <span className="text-3xl font-black tracking-tight uppercase">
                Lakshya<span className="gradient-text">CV</span>
              </span>
            </Link>
            <p className="text-slate-400 font-medium leading-relaxed">
              Precision-engineered resume tools for the modern career hunter. Build, optimize, and land your dream role.
            </p>
            <div className="flex space-x-5">
              {[Linkedin].map((Icon, i) => (
                <a key={i} href="https://www.linkedin.com/in/lakshyacv/" className="w-12 h-12 glass rounded-2xl flex items-center justify-center hover:bg-[#FF7A60] hover:text-white transition-all transform hover:-translate-y-1 shadow-xl">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-8 font-sans">Ecosystem</h4>
            <ul className="space-y-4 font-bold text-sm">
              <li><a href="#templates" className="text-slate-400 hover:text-primary transition-colors">Resume Engine</a></li>
              <li><a href="#how-it-works" className="text-slate-400 hover:text-primary transition-colors">The Process</a></li>
              {/* Career page link */}
              <li><Link to="/careers" className="text-slate-400 hover:text-primary transition-colors">Careers</Link></li>
              <li><a href="/templates" className="text-slate-400 hover:text-primary transition-colors">Browse Layouts</a></li>
              <li><Link to="/build/classic" className="text-slate-400 hover:text-primary transition-colors">Instant Build</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-8 font-sans">Legal & Privacy</h4>
            <ul className="space-y-4 font-bold text-sm">
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Privacy Guard</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Refund Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Security</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-2 font-sans">Support Hub</h4>
            <div className="space-y-5">
              <a href="mailto:support@lakshyacv.in" className="flex items-center space-x-4 group">
                <div className="w-10 h-10 glass rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-bold text-slate-400 group-hover:text-white transition-colors">supportlakshyacv@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">
            © {new Date().getFullYear()} LakshyaCV. DESIGNED FOR SUCCESS.
          </p>
          <div className="flex space-x-10 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
            <span className="text-primary">Professional</span>
            <span>Reliable</span>
            <span>Fast</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
