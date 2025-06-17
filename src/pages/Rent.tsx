
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { Search, Filter, MapPin, Shield, Clock, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Rent = () => {
  const rentalProperties = [
    {
      id: 1,
      image: "photo-1721322800607-8c38375eef04",
      price: "$3,200/month",
      address: "789 Downtown Loft",
      city: "Seattle, WA",
      beds: 2,
      baths: 2,
      sqft: 1200,
      status: "For Sale" as const,
    },
    {
      id: 2,
      image: "photo-1487958449943-2429e8be8625",
      price: "$2,800/month",
      address: "456 Garden Apartment",
      city: "Portland, OR",
      beds: 1,
      baths: 1,
      sqft: 800,
      status: "For Sale" as const,
    },
    {
      id: 3,
      image: "photo-1518005020951-eccb494ad742",
      price: "$4,500/month",
      address: "123 Luxury Tower",
      city: "San Francisco, CA",
      beds: 3,
      baths: 2,
      sqft: 1800,
      status: "For Sale" as const,
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Verified Listings",
      description: "All properties are verified and scam-free"
    },
    {
      icon: Clock,
      title: "Quick Application",
      description: "Apply online in minutes with instant approval"
    },
    {
      icon: CreditCard,
      title: "Flexible Payment",
      description: "Multiple payment options for your convenience"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <section className="bg-purple-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Find Your Perfect Rental
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover amazing rental properties in your desired neighborhood
            </p>
          </div>

          {/* Search */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input 
                    placeholder="Enter city, neighborhood, or ZIP code"
                    className="pl-10 h-12"
                  />
                </div>
              </div>
              
              <div>
                <select className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>Any Price</option>
                  <option>Under $2,000</option>
                  <option>$2,000 - $3,000</option>
                  <option>$3,000 - $4,000</option>
                  <option>$4,000+</option>
                </select>
              </div>
              
              <div className="flex gap-2">
                <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
                <Button variant="outline">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Available Rentals
            </h2>
            <select className="px-4 py-2 border border-gray-300 rounded-md">
              <option>Sort by: Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Move-in Date</option>
            </select>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rentalProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View More Rentals
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rent;
