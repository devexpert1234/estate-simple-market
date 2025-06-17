
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Star, Phone, Mail, Award, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Agents = () => {
  const agents = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Real Estate Agent",
      image: "photo-1472396961693-142e6e269027",
      rating: 4.9,
      reviews: 127,
      sales: 89,
      specialties: ["Luxury Homes", "First-Time Buyers"],
      phone: "(555) 123-4567",
      email: "sarah@estatehub.com"
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Real Estate Expert",
      image: "photo-1466721591366-2d5fba72006d",
      rating: 4.8,
      reviews: 98,
      sales: 67,
      specialties: ["Investment Properties", "Commercial"],
      phone: "(555) 234-5678",
      email: "michael@estatehub.com"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Property Specialist",
      image: "photo-1493962853295-0fd70327578a",
      rating: 5.0,
      reviews: 156,
      sales: 112,
      specialties: ["Family Homes", "Relocations"],
      phone: "(555) 345-6789",
      email: "emily@estatehub.com"
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Expert Agents" },
    { icon: Award, value: "15", label: "Years Experience" },
    { icon: TrendingUp, value: "98%", label: "Success Rate" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-indigo-50 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Expert Agents
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Work with the best real estate professionals who know your local market inside and out.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-indigo-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Top Performing Agents
            </h2>
            <p className="text-gray-600">
              Our agents are ranked by performance, client satisfaction, and market expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map((agent) => (
              <div key={agent.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={`https://images.unsplash.com/${agent.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80`}
                      alt={agent.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{agent.name}</h3>
                      <p className="text-gray-600">{agent.title}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center mr-4">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="ml-1 font-semibold">{agent.rating}</span>
                    </div>
                    <span className="text-gray-600 text-sm">({agent.reviews} reviews)</span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-2">
                      <strong>{agent.sales}</strong> properties sold this year
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {agent.specialties.map((specialty, index) => (
                        <span key={index} className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="h-4 w-4 mr-2" />
                      {agent.phone}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="h-4 w-4 mr-2" />
                      {agent.email}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-indigo-600 hover:bg-indigo-700">
                      Contact Agent
                    </Button>
                    <Button variant="outline" className="flex-1">
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work with an Expert?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Get matched with the perfect agent for your real estate needs.
          </p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
            Find My Agent
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Agents;
