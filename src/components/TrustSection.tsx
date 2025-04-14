
import { Shield, Users, Star, Clock } from 'lucide-react';

const TrustSection = () => {
  const testimonials = [
    {
      name: "Michael R.",
      location: "Toronto, Canada",
      quote: "I've been investing for over a decade, and this is the first platform that consistently delivers on its promise. The 1% daily return has been clockwork for 6 months now.",
      avatar: "/images/avatar-1.jpg"
    },
    {
      name: "Sarah L.",
      location: "London, UK",
      quote: "What I appreciate most is the transparency and the ability to withdraw whenever I want. Been earning 1% daily for 3 months with no issues.",
      avatar: "/images/avatar-2.jpg"
    },
    {
      name: "David T.",
      location: "Sydney, Australia",
      quote: "After trying various trading bots with mixed results, this gold trading robot has been a game-changer. Consistent returns and excellent customer support.",
      avatar: "/images/avatar-3.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-4">
            Trusted by Investors Worldwide
          </h2>
          <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
            Join thousands of satisfied investors who rely on our gold trading robot for consistent returns
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-100">
            <div className="flex justify-center mb-4">
              <div className="h-12 w-12 rounded-full bg-blue-dark/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-dark" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-blue-dark mb-2">10,000+</h3>
            <p className="text-charcoal/80">Active Investors</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-100">
            <div className="flex justify-center mb-4">
              <div className="h-12 w-12 rounded-full bg-blue-dark/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-blue-dark" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-blue-dark mb-2">$15M+</h3>
            <p className="text-charcoal/80">Assets Managed</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-100">
            <div className="flex justify-center mb-4">
              <div className="h-12 w-12 rounded-full bg-blue-dark/10 flex items-center justify-center">
                <Star className="h-6 w-6 text-blue-dark" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-blue-dark mb-2">97%</h3>
            <p className="text-charcoal/80">Satisfaction Rate</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-100">
            <div className="flex justify-center mb-4">
              <div className="h-12 w-12 rounded-full bg-blue-dark/10 flex items-center justify-center">
                <Clock className="h-6 w-6 text-blue-dark" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-blue-dark mb-2">4+ Years</h3>
            <p className="text-charcoal/80">Operational History</p>
          </div>
        </div>
        
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-blue-dark mb-8">What Our Investors Say</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                  <div className="w-full h-full bg-blue-dark/20 flex items-center justify-center text-blue-dark">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-blue-dark">{testimonial.name}</h4>
                  <p className="text-sm text-charcoal/60">{testimonial.location}</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-gold mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold" />
                  ))}
                </div>
                <p className="text-charcoal/80 italic">"{testimonial.quote}"</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <div className="flex space-x-4">
            <div className="h-16 w-auto bg-white rounded-lg shadow-sm p-3 flex items-center justify-center">
              <img src="/images/trust-badge-1.svg" alt="SSL Secured" className="h-full" />
            </div>
            <div className="h-16 w-auto bg-white rounded-lg shadow-sm p-3 flex items-center justify-center">
              <img src="/images/trust-badge-2.svg" alt="24/7 Support" className="h-full" />
            </div>
            <div className="h-16 w-auto bg-white rounded-lg shadow-sm p-3 flex items-center justify-center">
              <img src="/images/trust-badge-3.svg" alt="Bank Grade Security" className="h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
