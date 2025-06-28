
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import MarketIntelligenceSection from "@/components/MarketIntelligenceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  const handleGetStarted = () => {
    console.log("Get Started button clicked");
    // Add your signup/registration logic here
  };

  const handleWatchDemo = () => {
    console.log("Watch Demo button clicked");
    // Add your demo video/modal logic here
  };

  const handleStartTrial = (planName: string) => {
    console.log(`Starting trial for ${planName} plan`);
    // Add your trial signup logic here
  };

  const handleContactSales = () => {
    console.log("Contact Sales button clicked");
    // Add your contact sales logic here
  };

  const handleScheduleDemo = () => {
    console.log("Schedule Demo button clicked");
    // Add your demo scheduling logic here
  };

  const handleNavigation = (section: string) => {
    console.log(`Navigating to ${section}`);
    // Add smooth scroll to section logic here
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation onNavigate={handleNavigation} onGetStarted={handleGetStarted} />
      <HeroSection onGetStarted={handleGetStarted} onWatchDemo={handleWatchDemo} />
      <FeaturesSection />
      <MarketIntelligenceSection />
      <TestimonialsSection />
      <PricingSection onStartTrial={handleStartTrial} onContactSales={handleContactSales} />
      <CTASection onGetStarted={handleGetStarted} onScheduleDemo={handleScheduleDemo} />
      <Footer onNavigate={handleNavigation} />
    </div>
  );
};

export default Index;
