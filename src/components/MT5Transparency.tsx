
import { Eye, BarChart2, Clock, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import {Link} from 'react-router-dom';

const MT5Transparency = () => {
  // Sample trade data
  const recentTrades = [
    { id: '#28752', pair: 'XAUUSD', entry: '1932.45', exit: '1938.72', profit: '+$63.27', isProfit: true, time: '2 mins ago' },
    { id: '#28751', pair: 'XAUUSD', entry: '1929.18', exit: '1932.45', profit: '+$32.70', isProfit: true, time: '15 mins ago' },
    { id: '#28750', pair: 'XAUUSD', entry: '1935.60', exit: '1929.18', profit: '-$64.20', isProfit: false, time: '32 mins ago' },
    { id: '#28749', pair: 'XAUUSD', entry: '1927.33', exit: '1935.60', profit: '+$82.70', isProfit: true, time: '1 hour ago' },
  ];

  return (
    <section id="mt5" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-muted px-3 py-1 rounded-full mb-4">
            <Eye size={16} className="text-yopips-yellow mr-2" />
            <span className="text-sm">Full Transparency</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trade with <span className="text-yopips-yellow">Full Transparency</span>
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Monitor every trade in real-time with our MetaTrader 5 integration. See exactly how we achieve our consistent 1% daily returns.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Card className="border-muted bg-card h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <BarChart2 className="mr-2 h-5 w-5 text-yopips-yellow" />
                  Live Trading Feed
                </h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-muted">
                        <th className="text-left pb-3 text-white/70 font-medium">Trade ID</th>
                        <th className="text-left pb-3 text-white/70 font-medium">Pair</th>
                        <th className="text-left pb-3 text-white/70 font-medium">Entry</th>
                        <th className="text-left pb-3 text-white/70 font-medium">Exit</th>
                        <th className="text-left pb-3 text-white/70 font-medium">Profit/Loss</th>
                        <th className="text-left pb-3 text-white/70 font-medium">Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentTrades.map((trade, index) => (
                        <tr key={index} className="border-b border-muted/30">
                          <td className="py-3 text-white/90 font-medium">{trade.id}</td>
                          <td className="py-3 text-white/90">{trade.pair}</td>
                          <td className="py-3 text-white/90">{trade.entry}</td>
                          <td className="py-3 text-white/90">{trade.exit}</td>
                          <td className={`py-3 font-medium ${trade.isProfit ? 'text-profit' : 'text-loss'}`}>
                            {trade.profit}
                          </td>
                          <td className="py-3 text-white/70">
                            <div className="flex items-center">
                              <Clock size={14} className="mr-1" />
                              {trade.time}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="flex justify-center mt-6">
                 <Link to="/TradeHistory"> <Button variant="outline" className="border-yopips-yellow text-yopips-yellow hover:bg-yopips-yellow/10">
                    View All Trades
                  </Button> </Link>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="border-muted bg-card h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Lock className="mr-2 h-5 w-5 text-yopips-yellow" />
                  MT5 Access
                </h3>
                
                <div className="mb-6">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4 overflow-hidden relative">
                    {/* Mini candlestick chart */}
                    <div className="absolute inset-0 flex items-end justify-between p-2">
                      {[...Array(40)].map((_, i) => {
                        const height = 10 + Math.random() * 80;
                        const isGreen = Math.random() > 0.4;
                        const width = 100 / 40 - 0.5;
                        return (
                          <div 
                            key={i} 
                            className={`${isGreen ? 'bg-profit' : 'bg-loss'}`}
                            style={{ 
                              height: `${height}%`, 
                              width: `${width}%`,
                              maxWidth: '4px'
                            }}
                          ></div>
                        );
                      })}
                    </div>
                    <div className="z-10 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-lg text-yopips-yellow/80 text-sm">
                      Live MT5 Chart Feed
                    </div>
                  </div>
                  
                  <p className="text-white/80 mb-6">
                    Get full access to our MT5 account to monitor all trading activities in real-time. Complete transparency ensures you can verify our 1% daily returns.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-yopips-yellow mr-2"></div>
                      <span className="text-white/80 text-sm">Real-time trade monitoring</span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-yopips-yellow mr-2"></div>
                      <span className="text-white/80 text-sm">Verify all entries and exits</span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-yopips-yellow mr-2"></div>
                      <span className="text-white/80 text-sm">See profit calculations</span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-yopips-yellow mr-2"></div>
                      <span className="text-white/80 text-sm">Download trade history</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-yopips-yellow hover:bg-yopips-yellow/90 text-black font-medium">
                    Access MT5 Dashboard
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MT5Transparency;
