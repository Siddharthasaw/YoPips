
import { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';

const ReturnsCalculator = () => {
  const [investment, setInvestment] = useState(1000);
  const [days, setDays] = useState(30);
  const [dailyReturn, setDailyReturn] = useState(0);
  const [weeklyReturn, setWeeklyReturn] = useState(0);
  const [monthlyReturn, setMonthlyReturn] = useState(0);
  const [totalReturn, setTotalReturn] = useState(0);

  useEffect(() => {
    // Calculate returns
    const dailyRate = 0.01; // 1%
    const daily = investment * dailyRate;
    const weekly = daily * 7;
    const monthly = daily * 30;
    const total = daily * days;

    setDailyReturn(daily);
    setWeeklyReturn(weekly);
    setMonthlyReturn(monthly);
    setTotalReturn(total);
  }, [investment, days]);

  const handleInvestmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setInvestment(value);
    } else if (e.target.value === '') {
      setInvestment(0);
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };

  return (
    <section id="calculator" className="py-20 bg-dark-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-4">
            Returns Calculator
          </h2>
          <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
            See how much you could earn with our fixed 1% daily return on your investment
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-blue-dark/10 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-blue-dark p-8 text-white">
                  <div className="flex items-center mb-8">
                    <Calculator className="h-8 w-8 text-gold mr-3" />
                    <h3 className="text-2xl font-bold">Calculate Your Returns</h3>
                  </div>
                  
                  <div className="space-y-8">
                    <div>
                      <label className="block text-white/80 mb-2">Initial Investment ($)</label>
                      <Input
                        type="number"
                        value={investment}
                        onChange={handleInvestmentChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                        placeholder="Enter investment amount"
                        min="100"
                      />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="text-white/80">Time Period</label>
                        <span className="text-gold font-medium">{days} days</span>
                      </div>
                      <Slider 
                        value={[days]} 
                        onValueChange={(value) => setDays(value[0])} 
                        max={365}
                        min={1}
                        step={1}
                        className="cursor-pointer"
                      />
                      <div className="flex justify-between mt-2 text-sm text-white/60">
                        <span>1 day</span>
                        <span>1 week</span>
                        <span>1 month</span>
                        <span>1 year</span>
                      </div>
                    </div>
                    
                    <div className="text-white/80 text-sm italic">
                      Based on a fixed 1% daily return. Results may vary based on market conditions.
                    </div>
                  </div>
                </div>
                
                <div className="p-8 bg-blue-dark">
                  <h3 className="text-2xl font-bold text-blue-dark mb-8">Your Potential Returns</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-charcoal/70 mb-1">Daily Return</h4>
                      <p className="text-3xl font-bold text-blue-dark">{formatCurrency(dailyReturn)}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-charcoal/70 mb-1">Weekly Return</h4>
                      <p className="text-3xl font-bold text-blue-dark">{formatCurrency(weeklyReturn)}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-charcoal/70 mb-1">Monthly Return</h4>
                      <p className="text-3xl font-bold text-blue-dark">{formatCurrency(monthlyReturn)}</p>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <h4 className="text-charcoal/70 mb-1">Total Returns After {days} Days</h4>
                      <p className="text-4xl font-bold text-gold">{formatCurrency(totalReturn)}</p>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <h4 className="text-charcoal/70 mb-1">Total Balance After {days} Days</h4>
                      <p className="text-4xl font-bold text-blue-dark">{formatCurrency(investment + totalReturn)}</p>
                      <p className="text-sm text-charcoal/60 mt-2">
                        (Initial Investment + Total Returns)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReturnsCalculator;
