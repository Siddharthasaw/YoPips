
import { Share2, Clock, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Promotions = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: "Michael S.",
      location: "New York, USA",
      quote: "I've been with YoPips for 6 months now and the 1% daily return has been consistent. Their MT5 transparency gives me complete confidence.",
      rating: 5
    },
    {
      name: "Sarah L.",
      location: "London, UK",
      quote: "Made $200 in my first month with just a $1,000 investment! The customer support via WhatsApp is incredible.",
      rating: 5
    },
    {
      name: "David T.",
      location: "Sydney, Australia",
      quote: "After trying various trading platforms, YoPips stands out with its transparency and consistent returns. I can see every trade in MT5.",
      rating: 5
    }
  ];
  
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Calculate remaining time for the promo (24 hours from now)
  const endTime = new Date();
  endTime.setHours(endTime.getHours() + 24);
  
  const getTimeRemaining = () => {
    const total = endTime.getTime() - new Date().getTime();
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const seconds = Math.floor((total / 1000) % 60);
    
    return {
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0')
    };
  };
  
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());
  
  // Update countdown every second
  useState(() => {
    const timer = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);
    
    return () => clearInterval(timer);
  });

  return (
    <section id="promotions" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Referral Program */}
          <div className="bg-muted/30 rounded-lg p-8 border border-muted">
            <div className="flex items-start mb-6">
              <div className="bg-yopips-yellow/10 p-3 rounded-lg mr-4">
                <Share2 className="h-8 w-8 text-yopips-yellow" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Invite Friends, Earn 5% Bonus!</h3>
                <p className="text-white/70">
                  Share YoPips with your friends and receive a 5% bonus on their initial deposit
                </p>
              </div>
            </div>
            
            <div className="bg-muted/50 p-4 rounded-lg mb-6">
              <div className="flex flex-col md:flex-row md:items-center">
                <input 
                  type="text" 
                  value="https://yopips.com/ref/user123" 
                  readOnly
                  className="w-full bg-background border border-muted rounded-md px-4 py-2 mb-3 md:mb-0 md:mr-4 text-white"
                />
                <Button className="bg-yopips-yellow hover:bg-yopips-yellow/90 text-black whitespace-nowrap">
                  Copy Link
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="flex items-center justify-center gap-2">
                <svg className="h-5 w-5" fill="#25D366" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M11.5 0C5.149 0 0 5.148 0 11.5 0 13.394.324 15.183.92 16.816L.0265 22.728c-.045.157-.008.32.09.435.099.116.25.174.404.174.032 0 .065-.003.097-.008l6.092-1.082c1.59.558 3.32.856 5.142.856 6.351 0 11.5-5.148 11.5-11.5C23 5.148 17.851 0 11.5 0z" fillRule="nonzero"/>
                </svg>
                Share on WhatsApp
              </Button>
              <Button variant="outline" className="flex items-center justify-center gap-2">
                <svg className="h-5 w-5" fill="#00acee" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                Share on Twitter
              </Button>
            </div>
          </div>
          
          {/* Limited Time Offer */}
          <div className="bg-yopips-yellow/10 rounded-lg p-8 border border-yopips-yellow/30">
            <div className="flex items-start mb-6">
              <div className="bg-yopips-yellow/20 p-3 rounded-lg mr-4">
                <Clock className="h-8 w-8 text-yopips-yellow" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Limited Time Offer!</h3>
                <p className="text-white/70">
                  Join within 24 hours and receive a 10% bonus on your first deposit
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-muted/50 p-4 rounded-lg text-center">
                <span className="text-2xl font-bold text-yopips-yellow">{timeRemaining.hours}</span>
                <p className="text-sm text-white/70">Hours</p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg text-center">
                <span className="text-2xl font-bold text-yopips-yellow">{timeRemaining.minutes}</span>
                <p className="text-sm text-white/70">Minutes</p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg text-center">
                <span className="text-2xl font-bold text-yopips-yellow">{timeRemaining.seconds}</span>
                <p className="text-sm text-white/70">Seconds</p>
              </div>
            </div>
            
            <Button className="w-full bg-yopips-yellow hover:bg-yopips-yellow/90 text-black font-bold">
              Claim Your 10% Bonus Now
            </Button>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">What Our Traders Say</h3>
            <p className="text-white/70 max-w-xl mx-auto">
              Join thousands of satisfied traders who are earning daily profits with YoPips
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto relative">
            <div className="bg-muted/30 p-8 rounded-lg border border-muted">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yopips-yellow/20 rounded-full flex items-center justify-center text-yopips-yellow font-bold mr-4">
                  {testimonials[activeTestimonial].name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold">{testimonials[activeTestimonial].name}</h4>
                  <p className="text-sm text-white/70">{testimonials[activeTestimonial].location}</p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yopips-yellow text-yopips-yellow" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-lg italic text-white/80 mb-4">
                "{testimonials[activeTestimonial].quote}"
              </blockquote>
              
              <div className="flex justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full ${
                      index === activeTestimonial ? 'bg-yopips-yellow' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background rounded-full p-2 shadow-lg hover:bg-muted transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-yopips-yellow" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background rounded-full p-2 shadow-lg hover:bg-muted transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-yopips-yellow" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
