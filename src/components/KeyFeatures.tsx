
import { Bot, LineChart, Wallet, Headset } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const KeyFeatures = () => {
  const features = [
    {
      icon: <Bot className="h-10 w-10 text-yopips-yellow" />,
      title: "Automated Trading",
      description: "Our proprietary robot delivers consistent 1% daily returns through advanced algorithms and market analysis.",
    },
    {
      icon: <LineChart className="h-10 w-10 text-yopips-yellow" />,
      title: "MT5 Access",
      description: "See every trade live with full transparency through our MetaTrader 5 integration.",
    },
    {
      icon: <Wallet className="h-10 w-10 text-yopips-yellow" />,
      title: "Instant Withdrawals",
      description: "Access your funds anytime with no lock-in periods. We process withdrawals within 24 hours.",
    },
    {
      icon: <Headset className="h-10 w-10 text-yopips-yellow" />,
      title: "24/7 Support",
      description: "Get help via Telegram or live chat whenever you need it. Our team is always available.",
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Key <span className="text-yopips-yellow">Features</span>
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            YoPips combines cutting-edge technology with transparency to deliver consistent returns
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-muted bg-card hover:border-yopips-yellow/50 transition-all duration-300 card-hover">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-muted/30 rounded-full p-4 mb-6 mt-2">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
