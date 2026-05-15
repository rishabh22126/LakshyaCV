import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TemplateSection } from './components/TemplateSection';
import { HowItWorks } from './components/HowItWorks';
import { PreviewSection } from './components/PreviewSection';
import { Craftsmanship } from './components/Craftsmanship';
import { FeedbackShowcase } from './components/FeedbackShowcase';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { TemplatesPage } from './pages/TemplatesPage';
import { CareersPage } from './pages/CareersPage';
import ScrollToTop from './components/ScrollToTop';

function LandingPage() {
  return (
    <main className="bg-[#0B0E23]">
      <Hero />
      <TemplateSection />
      <HowItWorks />
      <PreviewSection />
      <Craftsmanship />
      <FeedbackShowcase />
      <Testimonials />
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans selection:bg-[#FF7A60]/30 selection:text-white">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/templates" element={<TemplatesPage />} />
            {/* Career page route */}
            <Route path="/careers" element={<CareersPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
