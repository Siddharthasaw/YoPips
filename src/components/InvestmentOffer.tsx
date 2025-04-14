
import { CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const InvestmentOffer = () => {
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
    <section id="investment-offer" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-4">
            Fixed 1% Daily Return – <span className="text-gold">Guaranteed</span>
          </h2>
          <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
            Invest with us and watch your capital grow with a steady 1% return every day, powered by our expert trading robot focused on the gold market (XAUUSD).
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-2 border-blue-dark/10 shadow-lg card-hover">
            <CardContent className="p-6">
              <div className="h-16 w-16 rounded-full bg-blue-dark/10 flex items-center justify-center mb-4 mx-auto">
                <CheckCircle className="h-8 w-8 text-blue-dark" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-blue-dark">Fixed Returns</h3>
              <p className="text-charcoal/80 text-center">
                We offer a guaranteed 1% daily return on your investment, providing predictable and steady income you can count on.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-gold shadow-lg card-hover transform scale-105 bg-gradient-to-br from-blue-dark to-blue-dark/90">
            <CardContent className="p-6">
              <div className="h-16 w-16 rounded-full bg-gold/90 flex items-center justify-center mb-4 mx-auto">
                <CheckCircle className="h-8 w-8 text-blue-dark" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-white">XAUUSD Trading</h3>
              <p className="text-white/90 text-center">
                Our robot exclusively trades XAUUSD (Gold), a globally trusted asset with consistent market patterns our algorithms excel at navigating.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-blue-dark/10 shadow-lg card-hover">
            <CardContent className="p-6">
              <div className="h-16 w-16 rounded-full bg-blue-dark/10 flex items-center justify-center mb-4 mx-auto">
                <CheckCircle className="h-8 w-8 text-blue-dark" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-blue-dark">Full Control</h3>
              <p className="text-charcoal/80 text-center">
                Withdraw your capital and earnings anytime with no lock-in periods or penalties. Your money remains under your control.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-16">
          <Button onClick={scrollToSignUp} className="bg-gold hover:bg-gold/90 text-charcoal font-bold text-lg px-8 py-6">
            Start Investing Now
          </Button>
          <p className="text-sm text-charcoal/60 mt-4 max-w-lg mx-auto">
            *Returns are fixed at 1%. Investing involves risks; consult our terms for details.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvestmentOffer;
