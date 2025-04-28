import { useState, useEffect } from 'react';
import { Calculator, TrendingUp, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';

import {Link} from 'react-router-dom';

const ProfitCalculator = () => {
  const [investment, setInvestment] = useState(1000);
  const [months, setMonths] = useState(1);
  const [dailyReturn, setDailyReturn] = useState(0);
  const [monthlyReturn, setMonthlyReturn] = useState(0);
  const [yearlyReturn, setYearlyReturn] = useState(0);
  const [totalReturn, setTotalReturn] = useState(0);

  useEffect(() => {
    // Calculate returns based on 1% daily over 20 trading days per month
    const dailyRate = 0.01; // 1%
    const tradingDaysPerMonth = 20;
    
    const daily = investment * dailyRate;
    const monthly = investment * (Math.pow(1 + dailyRate, tradingDaysPerMonth) - 1);
    const yearly = investment * (Math.pow(1 + dailyRate, tradingDaysPerMonth * 12) - 1);
    const total = investment * (Math.pow(1 + dailyRate, tradingDaysPerMonth * months) - 1);

    setDailyReturn(daily);
    setMonthlyReturn(monthly);
    setYearlyReturn(yearly);
    setTotalReturn(total);
  }, [investment, months]);

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
      minimumFractionDigits: 0, // Remove decimal places
      maximumFractionDigits: 0 // Remove decimal places
    }).format(value);
  };

  return (
    <section id="calculator" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-muted px-3 py-1 rounded-full mb-4">
            <Calculator size={16} className="text-yopips-yellow mr-2" />
            <span className="text-sm">Profit Calculator</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Calculate Your <span className="text-yopips-yellow">YoPips</span> Returns
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            See how much you could earn with our fixed 1% daily return over trading days per month
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-muted shadow-lg overflow-hidden bg-card">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-background p-8 text-white">
                  <div className="flex items-center mb-8">
                    <Calculator className="h-8 w-8 text-yopips-yellow mr-3" />
                    <h3 className="text-2xl font-bold">Input Your Investment</h3>
                  </div>
                  
                  <div className="space-y-8">
                    <div>
                      <label className="block text-white/80 mb-2">Initial Investment ($)</label>
                      <Input
                        type="number"
                        value={investment}
                        onChange={handleInvestmentChange}
                        className="bg-muted border-white/20 text-white placeholder:text-white/40"
                        placeholder="Enter investment amount"
                        min="100"
                      />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="text-white/80">Time Period</label>
                        <span className="text-yopips-yellow font-medium">{months} month{months > 1 ? 's' : ''}</span>
                      </div>
                      <Slider 
                        value={[months]} 
                        onValueChange={(value) => setMonths(value[0])} 
                        max={12}
                        min={1}
                        step={1}
                        className="cursor-pointer"
                      />
                      <div className="flex justify-between mt-2 text-sm text-white/60">
                        <span>1 month</span>
                        <span>6 months</span>
                        <span>12 months</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex-1 h-px bg-muted"></div>
                      <span className="px-4 text-sm text-white/60">Fixed 1% Daily Return</span>
                      <div className="flex-1 h-px bg-muted"></div>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg border border-muted">
                      <span className="text-sm text-white/80">Based on 20 trading days per month</span>
                      <Calendar size={16} className="text-white/60" />
                    </div>
                  </div>
                </div>
                
                <div className="p-8 bg-card">
                  <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                    <TrendingUp className="h-7 w-7 text-yopips-yellow mr-3" />
                    Your Potential Returns
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-white/70 mb-1">Daily Return</h4>
                      <p className="text-3xl font-bold text-yopips-yellow">{formatCurrency(dailyReturn)}</p>
                      <p className="text-sm text-white/60 mt-1">
                        1% of your initial investment
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-white/70 mb-1">Monthly Return (20 trading days)</h4>
                      <p className="text-3xl font-bold text-yopips-yellow">{formatCurrency(monthlyReturn)}</p>
                      <p className="text-sm text-white/60 mt-1">
                        Approximately 20% of your initial investment
                      </p>
                    </div>
                    
                    <div className="pt-4 border-t border-muted">
                      <h4 className="text-white/70 mb-1">Total Returns After {months} Month{months > 1 ? 's' : ''}</h4>
                      <p className="text-4xl font-bold text-yopips-yellow">{formatCurrency(totalReturn)}</p>
                      <p className="text-sm text-white/60 mt-1">
                        Compounded returns over {months} month{months > 1 ? 's' : ''}
                      </p>
                    </div>
                    
                    <div className="pt-4 border-t border-muted">
                      <h4 className="text-white/70 mb-1">Total Balance After {months} Month{months > 1 ? 's' : ''}</h4>
                      <p className="text-4xl font-bold text-white">{formatCurrency(investment + totalReturn)}</p>
                      <p className="text-sm text-white/60 mt-1">
                        Initial Investment + Total Returns
                      </p>
                    </div>
                    
                    <Link to={"/signup"}>
                    <Button className="w-full bg-yopips-yellow hover:bg-yopips-yellow/90 text-black font-bold mt-4">
                      Start Trading Now
                    </Button>
                    </Link>
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

export default ProfitCalculator;
