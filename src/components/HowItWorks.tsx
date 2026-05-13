import { motion } from 'motion/react';
import { Layout, FileEdit, CreditCard, Download } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      title: 'Choose Template',
      description: 'Select from our library of professional, ATS-friendly designs.',
      icon: Layout,
      color: 'bg-blue-50 text-blue-500',
    },
    {
      title: 'Fill Your Details',
      description: 'Input your experience, skills, and education in our easy form.',
      icon: FileEdit,
      color: 'bg-amber-50 text-amber-500',
    },
    {
      title: 'Pay ₹49',
      description: 'Complete the payment securely via UPI or QR code.',
      icon: CreditCard,
      color: 'bg-green-50 text-green-500',
    },
    {
      title: 'Get Your Resume',
      description: 'Your polished resume will be sent to your Gmail & WhatsApp instantly.',
      icon: Download,
      color: 'bg-purple-50 text-purple-500',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#0B0E23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass p-12 rounded-[48px] border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-[80px] -z-10" />
          
          <div className="mb-16">
            <h2 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-4">The Platform</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase">4 SIMPLE <span className="gradient-text">STEPS</span></h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group pr-8"
              >
                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[22px] left-14 right-0 h-px border-t border-dashed border-white/20" />
                )}

                <div className="flex flex-col gap-6">
                  <div className={`w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center font-black text-xl transition-all duration-500 ${index === 0 ? 'bg-[#FF7A60] text-white shadow-lg shadow-[#FF7A60]/20' : 'glass text-slate-500 group-hover:bg-[#FF7A60] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#FF7A60]/20'}`}>
                    0{index + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-extrabold text-white mb-3 tracking-tight group-hover:text-primary transition-colors">{step.title}</h4>
                    <p className="text-sm font-medium text-slate-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
