
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calculator, Camera, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Sell = () => {
  const steps = [
    {
      icon: Calculator,
      title: "Get Your Home Value",
      description: "Receive an instant estimate of your home's current market value"
    },
    {
      icon: Camera,
      title: "Professional Photos",
      description: "We arrange professional photography to showcase your home"
    },
    {
      icon: TrendingUp,
      title: "Marketing Strategy",
      description: "Your property gets maximum exposure across all platforms"
    },
    {
      icon: Users,
      title: "Expert Negotiation",
      description: "Our agents handle all negotiations to get you the best price"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Sell Your Home
            <span className="text-green-600 block">For Top Dollar</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Get the highest price for your home with our proven marketing strategy and expert agents.
          </p>
          
          {/* Home Value Form */}
          <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Get Your Home Value
            </h3>
            <div className="space-y-4">
              <Input placeholder="Enter your address" />
              <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
                Get Free Estimate
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              No obligation • Results in minutes
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Sell Your Home
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our proven 4-step process ensures you get the best price in the shortest time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Sell Your Home?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of satisfied sellers who got top dollar for their homes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Get Free Home Valuation
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
              Speak with an Agent
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sell;
