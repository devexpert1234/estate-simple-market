
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { Search, Filter, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Buy = () => {
  const properties = [
    {
      id: 1,
      image: "photo-1487958449943-2429e8be8625",
      price: "$750,000",
      address: "123 Oak Street",
      city: "San Francisco, CA",
      beds: 4,
      baths: 3,
      sqft: 2500,
      status: "For Sale" as const,
    },
    {
      id: 2,
      image: "photo-1518005020951-eccb494ad742",
      price: "$950,000",
      address: "456 Pine Avenue",
      city: "Los Angeles, CA",
      beds: 5,
      baths: 4,
      sqft: 3200,
      status: "For Sale" as const,
    },
    {
      id: 3,
      image: "photo-1459767129954-1b1c1f9b9ace",
      price: "$1,200,000",
      address: "321 Cedar Lane",
      city: "New York, NY",
      beds: 4,
      baths: 3,
      sqft: 2800,
      status: "For Sale" as const,
    },
    {
      id: 4,
      image: "photo-1551038247-3d9af20df552",
      price: "$680,000",
      address: "654 Birch Street",
      city: "Portland, OR",
      beds: 3,
      baths: 2,
      sqft: 2100,
      status: "For Sale" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <section className="bg-blue-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Find Your Dream Home
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse thousands of properties for sale in prime locations
            </p>
          </div>

          {/* Search and Filters */}
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
                <select className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Any Price</option>
                  <option>Under $500k</option>
                  <option>$500k - $750k</option>
                  <option>$750k - $1M</option>
                  <option>$1M+</option>
                </select>
              </div>
              
              <div className="flex gap-2">
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
                <Button variant="outline">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {properties.length} Properties Found
            </h2>
            <select className="px-4 py-2 border border-gray-300 rounded-md">
              <option>Sort by: Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Square Feet</option>
            </select>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Properties
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Buy;
