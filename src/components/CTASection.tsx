
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  onGetStarted: () => void;
  onScheduleDemo: () => void;
}

const CTASection = ({ onGetStarted, onScheduleDemo }: CTASectionProps) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Find Your Perfect Business?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Join thousands of successful business buyers who trust DueDiligence.ai for their acquisitions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 text-lg px-8 py-6" onClick={onGetStarted}>
            Start Your Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6" onClick={onScheduleDemo}>
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
