
import { FileText, TrendingUp, Shield, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: FileText,
      title: "Document Analysis",
      description: "AI-powered analysis of financial statements, contracts, and business records with risk detection"
    },
    {
      icon: TrendingUp,
      title: "Market Intelligence",
      description: "Compare similar businesses for sale, recent sales data, and local market trends"
    },
    {
      icon: Shield,
      title: "Due Diligence Support",
      description: "Comprehensive checklists and automated risk assessment for business acquisitions"
    },
    {
      icon: Users,
      title: "Expert Collaboration",
      description: "Share reports with lawyers, accountants, and business brokers securely"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Buy Smart
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our comprehensive platform gives you the tools and insights needed to 
            evaluate any business opportunity with confidence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
