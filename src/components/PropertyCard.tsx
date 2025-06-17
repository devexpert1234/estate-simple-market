
import { Heart, MapPin, Bed, Bath, Square } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropertyCardProps {
  id: number;
  image: string;
  price: string;
  address: string;
  city: string;
  beds: number;
  baths: number;
  sqft: number;
  status: "For Sale" | "Sold" | "Pending";
}

const PropertyCard = ({ image, price, address, city, beds, baths, sqft, status }: PropertyCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img 
          src={`https://images.unsplash.com/${image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
          alt="Property"
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            status === "For Sale" 
              ? "bg-green-100 text-green-800" 
              : status === "Sold" 
              ? "bg-red-100 text-red-800"
              : "bg-yellow-100 text-yellow-800"
          }`}>
            {status}
          </span>
        </div>
        <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
          <Heart className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="mb-3">
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{price}</h3>
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{address}, {city}</span>
          </div>
        </div>
        
        {/* Property Details */}
        <div className="flex items-center space-x-4 mb-4 text-gray-600">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span className="text-sm">{beds} beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span className="text-sm">{baths} baths</span>
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            <span className="text-sm">{sqft.toLocaleString()} sqft</span>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Button variant="outline" className="flex-1">
            View Details
          </Button>
          <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
            Contact Agent
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
