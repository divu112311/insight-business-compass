
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PricingSectionProps {
  onStartTrial: (planName: string) => void;
  onContactSales: () => void;
}

const PricingSection = ({ onStartTrial, onContactSales }: PricingSectionProps) => {
  const pricingPlans = [
    {
      name: "First-Time Buyer",
      price: "$20",
      period: "/month",
      description: "Perfect for individuals buying their first business",
      features: [
        "Evaluate up to 3 businesses per month",
        "Basic financial document analysis",
        "Comparable sales database access",
        "Standard due diligence checklist",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Active Buyer",
      price: "$50",
      period: "/month",
      description: "Ideal for buyers evaluating multiple opportunities",
      features: [
        "Evaluate up to 15 businesses per month",
        "Advanced AI risk assessment",
        "Real-time market alerts",
        "Custom due diligence workflows",
        "Collaboration with advisors",
        "Priority support",
        "Market trend reports"
      ],
      popular: true
    },
    {
      name: "Professional",
      price: "Custom",
      period: "",
      description: "For business brokers and acquisition professionals",
      features: [
        "Unlimited business evaluations",
        "White-label client reports",
        "Custom integrations",
        "Dedicated account manager",
        "Advanced analytics dashboard",
        "SLA guarantees",
        "Training and onboarding"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600">
            Flexible pricing options for every type of business buyer
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`relative border-2 ${plan.popular ? 'border-blue-500 shadow-2xl scale-105' : 'border-gray-200'} hover:shadow-xl transition-all duration-300`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <CardDescription className="mt-2 text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700' : ''}`}
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => plan.name === "Professional" ? onContactSales() : onStartTrial(plan.name)}
                >
                  {plan.name === "Professional" ? "Contact Sales" : "Start Free Trial"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
