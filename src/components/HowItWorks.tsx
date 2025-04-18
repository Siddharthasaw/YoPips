import { ArrowRight, LogIn, Upload, TrendingUp, Wallet } from 'lucide-react';
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      icon: LogIn,
      title: "Sign up in minutes",
      description: "Create your account with just a few clicks and verify your KYC to get started."
    },
    {
      icon: Upload,
      title: "Deposit your capital",
      description: "Start with as little as $500 and fund your account via crypto."
    },
    {
      icon: TrendingUp,
      title: "Our robot trades for you",
      description: "Our XAUUSD trading algorithm works 24/5 to earn you a fixed 1% daily return."
    },
    {
      icon: Wallet,
      title: "Withdraw anytime",
      description: "Access your funds whenever you want with no lock-in periods or penalties."
    },
    {
      icon: Wallet,
      title: "Flexible Funding",
      description: "Add funds anytime above $200."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[hsl(0deg 0% 14.65%)] text-white" style={{ borderTop: "1px solid rgba(100, 100, 99, 0.3)" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Our streamlined process makes it easy to start earning a fixed 1% daily return on your investment
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Horizontal Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[#FFD700]/30 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="h-20 w-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-6 shadow-md relative">
                    <step.icon className="h-10 w-10 text-[#FFD700]" />
                    <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-[#FFD700] text-black font-bold flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>

                  {/* Mobile arrow between steps */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center my-4">
                      <ArrowRight className="h-6 w-6 text-[#FFD700]" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
