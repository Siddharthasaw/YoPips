
import { ArrowDown, Bot, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSignUp = () => {
    const element = document.getElementById('sign-up');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center " style={{paddingTop: '-100px'}}>
      <div className="absolute inset-0 bg-crypto-gradient opacity-95 z-0"></div>
      
      {/* Animated pattern overlay */}
      <div className="absolute inset-0 bg-[url('/images/crypto-pattern.png')] bg-repeat opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <div className="inline-flex items-center bg-muted px-3 py-1 rounded-full mb-6">
              <TrendingUp size={16} className="text-yopips-yellow mr-2" />
              <span className="text-sm">Trusted by <span className="text-yopips-yellow font-medium">10,000+</span> traders</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Earn <span className="text-gradient">1% Daily</span> with YoPips
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-xl">
              Maximize your wealth with our MT5-integrated trading platform delivering a fixed 20% monthly return over 20 trading days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                onClick={scrollToSignUp} 
                size="lg"
                className="text-lg px-8 py-6 bg-yopips-yellow hover:bg-yopips-yellow/90 text-black font-bold"
              >
                Start Trading Now
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('calculator')?.scrollIntoView({behavior: 'smooth'})}
                className="text-lg px-8 py-6 bg-transparent border-white/20 text-white hover:bg-white/10"
              >
                Calculate Returns
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
            {/* Animated Robot Icon */}
            <div className="absolute top-10 right-10 md:top-0 md:right-0 animate-float">
              <div className="bg-muted rounded-full p-4 shadow-lg">
                <Bot size={40} className="text-primary" />
              </div>
            </div>
            
            {/* Trading Chart Preview */}
            <div className="bg-card/70 backdrop-blur-sm rounded-lg p-6 border border-white/10 shadow-xl max-w-md">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-primary mb-2">Automated Trading</h3>
                <p className="text-white/80 text-lg">24/7 automated trades with MT5 integration</p>
              </div>
              
              <div className="bg-muted rounded-lg p-4 mb-6">
                {/* Animated Candlestick Chart Placeholder */}
                <div className="h-32 w-full overflow-hidden relative">
                  <div className="absolute inset-0 flex items-end space-x-2">
                    {[...Array(20)].map((_, i) => {
                      const height = 20 + Math.random() * 60;
                      const isGreen = Math.random() > 0.4;
                      return (
                        <div key={i} className="flex-1 flex flex-col items-center">
                          <div 
                            className={`w-[3px] ${isGreen ? 'bg-profit' : 'bg-loss'}`} 
                            style={{ height: `${height}%` }}
                          ></div>
                          <div 
                            className={`w-1 ${isGreen ? 'bg-profit' : 'bg-loss'}`} 
                            style={{ height: '2px' }}
                          ></div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Daily Return:</span>
                  <span className="text-yopips-yellow font-bold">1.0%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Monthly Return:</span>
                  <span className="text-yopips-yellow font-bold">20.0%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Annual Return:</span>
                  <span className="text-yopips-yellow font-bold">240.0%+</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center mt-4">
                <div className="flex items-center bg-muted/50 px-3 py-1 rounded-full">
                  <Users size={14} className="text-white/70 mr-2" />
                  <span className="text-xs">10,000+ active traders</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <button 
            onClick={() => document.getElementById('calculator')?.scrollIntoView({behavior: 'smooth'})} 
            className="flex flex-col items-center"
          >
            <span className="mb-2 text-white/70">Scroll to learn more</span>
            <ArrowDown size={24} className="text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
