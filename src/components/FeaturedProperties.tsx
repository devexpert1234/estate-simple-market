
import PropertyCard from "./PropertyCard";

const FeaturedProperties = () => {
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
      image: "photo-1431576901776-e539bd916ba2",
      price: "$425,000",
      address: "789 Maple Drive",
      city: "Seattle, WA",
      beds: 3,
      baths: 2,
      sqft: 1800,
      status: "Pending" as const,
    },
    {
      id: 4,
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
      id: 5,
      image: "photo-1551038247-3d9af20df552",
      price: "$680,000",
      address: "654 Birch Street",
      city: "Portland, OR",
      beds: 3,
      baths: 2,
      sqft: 2100,
      status: "For Sale" as const,
    },
    {
      id: 6,
      image: "photo-1524230572899-a752b3835840",
      price: "$890,000",
      address: "987 Elm Court",
      city: "Denver, CO",
      beds: 4,
      baths: 3,
      sqft: 2600,
      status: "Sold" as const,
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties in the most desirable locations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
