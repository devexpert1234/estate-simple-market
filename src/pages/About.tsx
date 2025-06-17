
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, Users, Award, TrendingUp, Heart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "We put our clients' needs and dreams at the center of everything we do."
    },
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "Building lasting relationships through honest, transparent communication."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Striving for the highest standards in every transaction and interaction."
    }
  ];

  const milestones = [
    { year: "2010", event: "EstateHub Founded", description: "Started with a vision to revolutionize real estate" },
    { year: "2015", event: "1,000+ Homes Sold", description: "Reached our first major milestone" },
    { year: "2018", event: "National Expansion", description: "Expanded to 15 major cities across the country" },
    { year: "2024", event: "50,000+ Happy Clients", description: "Helping families find their dream homes nationwide" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                About EstateHub
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                For over a decade, we've been connecting families with their perfect homes. 
                Our mission is to make real estate transactions simple, transparent, and successful for everyone.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">50,000+</div>
                  <div className="text-gray-600">Happy Families</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Expert Agents</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern home interior"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-blue-50 rounded-2xl p-8">
              <Target className="h-12 w-12 text-blue-600 mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg">
                To revolutionize the real estate experience by providing exceptional service, 
                cutting-edge technology, and unmatched expertise to help people find their perfect home.
              </p>
            </div>
            <div className="bg-indigo-50 rounded-2xl p-8">
              <TrendingUp className="h-12 w-12 text-indigo-600 mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 text-lg">
                To be the most trusted and innovative real estate platform, 
                where every transaction is seamless and every client feels empowered throughout their journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and every decision we make.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones that shaped EstateHub into what it is today.
            </p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-blue-600 text-white rounded-full px-4 py-2 font-bold mr-6 flex-shrink-0">
                  {milestone.year}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="bg-blue-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Users className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Growing Team
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            We're always looking for passionate professionals to join our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              View Careers
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
