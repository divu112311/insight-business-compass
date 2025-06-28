
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeroSectionProps {
  onGetStarted: () => void;
  onWatchDemo: () => void;
}

const HeroSection = ({ onGetStarted, onWatchDemo }: HeroSectionProps) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <Badge className="mb-6 bg-blue-50 text-blue-700 border-blue-200">
          AI-Powered Business Buying Platform
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Buy Your Dream
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Business </span>
          with Confidence
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Make informed business acquisition decisions with AI-powered financial analysis, 
          market comparisons, and comprehensive due diligence tools designed for business buyers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-6" onClick={onGetStarted}>
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={onWatchDemo}>
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
