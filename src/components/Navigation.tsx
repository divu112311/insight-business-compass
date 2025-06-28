
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  onNavigate: (section: string) => void;
  onGetStarted: () => void;
}

const Navigation = ({ onNavigate, onGetStarted }: NavigationProps) => {
  return (
    <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">DueDiligence.ai</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => onNavigate('features')}>Features</Button>
            <Button variant="ghost" onClick={() => onNavigate('pricing')}>Pricing</Button>
            <Button variant="ghost" onClick={() => onNavigate('about')}>About</Button>
            <Button variant="outline">Sign In</Button>
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700" onClick={onGetStarted}>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
