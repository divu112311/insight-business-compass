
import { CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const MarketIntelligenceSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
              Market Intelligence
            </Badge>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Know What Businesses Are Really Worth
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Get access to real-time data on similar business sales, current listings, and market trends. 
              Our AI analyzes thousands of transactions to help you negotiate the right price.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Recent business sales in your area</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Current listings and asking prices</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Industry valuation benchmarks</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Market trend analysis and forecasts</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Market Analysis</span>
                  <Badge className="bg-green-100 text-green-700">Live Data</Badge>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium">Similar Businesses Sold</span>
                    <span className="text-lg font-bold text-green-600">18</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium">Average Sale Price</span>
                    <span className="text-lg font-bold text-blue-600">$285K</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium">Market Activity</span>
                    <span className="text-lg font-bold text-indigo-600">↗ Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketIntelligenceSection;
