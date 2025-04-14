
import { Award, Shield, Clock, BarChart4 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const TradingRobot = () => {
  return (
    <section id="robot" className="py-20 bg-blue-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Gold Trading Robot</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Built with advanced algorithms, our robot trades XAUUSD (Gold) – a globally trusted asset – to deliver a fixed 1% daily return, rain or shine.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 shadow-xl mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gold">Advanced XAUUSD Trading</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-gold/20 rounded-lg">
                    <BarChart4 className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Algorithmic Precision</h4>
                    <p className="text-white/80">
                      Our robot uses machine learning to identify optimal entry and exit points in the gold market.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-gold/20 rounded-lg">
                    <Clock className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">24/7 Operation</h4>
                    <p className="text-white/80">
                      The robot trades continuously across all markets, capturing opportunities around the clock.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-gold/20 rounded-lg">
                    <Shield className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Risk Management</h4>
                    <p className="text-white/80">
                      Sophisticated stop-loss mechanisms and diversification strategies protect your capital.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-gold/20 rounded-lg">
                    <Award className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Proven Performance</h4>
                    <p className="text-white/80">
                      Consistent 1% daily returns through various market conditions validate our approach.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="bg-transparent border-gold text-gold hover:bg-gold/10">
                      See How It Works
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-blue-dark border-gold/30 text-white max-w-3xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-gold">How Our Trading Robot Works</DialogTitle>
                      <DialogDescription className="text-white/80">
                        An inside look at our advanced XAUUSD trading technology
                      </DialogDescription>
                    </DialogHeader>
                    <div className="p-4">
                      <div className="aspect-video bg-black/30 rounded-lg flex items-center justify-center mb-6">
                        <p className="text-gold/60 text-center">Video presentation placeholder</p>
                      </div>
                      <div className="space-y-4">
                        <p className="text-white/90">
                          Our robot utilizes a proprietary combination of technical analysis, machine learning, and real-time market data to trade XAUUSD (Gold) with precision.
                        </p>
                        <p className="text-white/90">
                          By analyzing patterns across multiple timeframes and employing risk management strategies, we're able to deliver consistent 1% daily returns regardless of market conditions.
                        </p>
                        <p className="text-white/90">
                          The system executes trades automatically, 24/7, eliminating human emotion and capturing opportunities around the clock in the global gold markets.
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-center text-gold">Performance Chart</h3>
              
              <div className="aspect-video bg-gradient-to-r from-blue-dark/80 to-blue-dark rounded-lg border border-white/10 p-4 relative overflow-hidden">
                {/* Chart graph placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-3/4">
                    <div className="relative h-full">
                      {/* Growing line chart - simplified representation */}
                      <div className="absolute bottom-0 left-0 right-0 h-[85%] overflow-hidden">
                        <div 
                          className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-gold/20 to-transparent"
                          style={{
                            clipPath: "polygon(0 100%, 0 15%, 10% 12%, 20% 25%, 30% 20%, 40% 35%, 50% 30%, 60% 45%, 70% 40%, 80% 55%, 90% 45%, 100% 20%, 100% 100%)"
                          }}
                        ></div>
                        <div 
                          className="absolute bottom-0 left-0 w-full border-t-2 border-gold"
                          style={{
                            clipPath: "polygon(0 15%, 10% 12%, 20% 25%, 30% 20%, 40% 35%, 50% 30%, 60% 45%, 70% 40%, 80% 55%, 90% 45%, 100% 20%)"
                          }}
                        ></div>
                      </div>
                      
                      {/* Baseline */}
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20"></div>
                      
                      {/* Y-axis markers */}
                      <div className="absolute bottom-0 left-0 h-full w-px bg-white/20 flex flex-col justify-between items-end">
                        <span className="text-xs text-white/60 pr-2">30%</span>
                        <span className="text-xs text-white/60 pr-2">20%</span>
                        <span className="text-xs text-white/60 pr-2">10%</span>
                        <span className="text-xs text-white/60 pr-2">0%</span>
                      </div>
                      
                      {/* X-axis markers */}
                      <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-white/60">
                        <span>Day 1</span>
                        <span>Day 10</span>
                        <span>Day 20</span>
                        <span>Day 30</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Success Rate:</span>
                  <span className="text-gold font-bold">97.3%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Average Daily Return:</span>
                  <span className="text-gold font-bold">1.1%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Managed Assets:</span>
                  <span className="text-gold font-bold">$12M+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Operational Since:</span>
                  <span className="text-gold font-bold">2019</span>
                </div>
              </div>
              
              <div className="mt-6 text-center text-white/60 text-sm italic">
                *Past performance is not indicative of future results. The 1% daily return is our fixed target.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingRobot;
