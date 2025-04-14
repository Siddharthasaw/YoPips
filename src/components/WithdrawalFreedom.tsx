
import { Wallet, Calendar, Clock, ArrowDownRight } from 'lucide-react';

const WithdrawalFreedom = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-6">
                Withdraw Anytime You Want
              </h2>
              <p className="text-lg text-charcoal/80 mb-8">
                Your money, your rules. Access your investment and profits whenever you need them – no lock-ins, no delays, no questions asked.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-gold/20 rounded-lg">
                    <Clock className="h-6 w-6 text-blue-dark" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 text-blue-dark">Same-Day Processing</h4>
                    <p className="text-charcoal/80">
                      All withdrawal requests are processed within 24 hours, with most completed same-day.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-gold/20 rounded-lg">
                    <Calendar className="h-6 w-6 text-blue-dark" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 text-blue-dark">No Lock-In Periods</h4>
                    <p className="text-charcoal/80">
                      Unlike traditional investments, we don't restrict when you can access your funds.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-gold/20 rounded-lg">
                    <ArrowDownRight className="h-6 w-6 text-blue-dark" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 text-blue-dark">No Minimum Investment Time</h4>
                    <p className="text-charcoal/80">
                      Even if you've only been invested for a day, you can withdraw your full balance.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-gold/20 rounded-lg">
                    <Wallet className="h-6 w-6 text-blue-dark" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 text-blue-dark">Multiple Withdrawal Options</h4>
                    <p className="text-charcoal/80">
                      Withdraw to your bank account, credit card, or cryptocurrency wallet with ease.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-blue-dark to-blue-dark/80 p-1 rounded-lg shadow-xl max-w-md">
                <div className="bg-white rounded-lg p-8">
                  <div className="flex justify-center mb-6">
                    <div className="h-20 w-20 rounded-full bg-gold/20 flex items-center justify-center">
                      <Wallet className="h-10 w-10 text-blue-dark" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-center text-blue-dark mb-6">
                    Freedom To Access Your Funds
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="text-charcoal font-medium">Withdrawal Fee:</span>
                      <span className="text-blue-dark font-bold">0%</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="text-charcoal font-medium">Processing Time:</span>
                      <span className="text-blue-dark font-bold">Same Day*</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="text-charcoal font-medium">Minimum Withdrawal:</span>
                      <span className="text-blue-dark font-bold">$10</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-charcoal font-medium">Frequency Limit:</span>
                      <span className="text-blue-dark font-bold">None</span>
                    </div>
                  </div>
                  
                  <div className="text-center text-charcoal/60 text-sm italic">
                    *Most withdrawals are processed within hours. Maximum processing time is 24 hours.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WithdrawalFreedom;
