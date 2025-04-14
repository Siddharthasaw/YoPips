
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import ProfitCalculator from '@/components/ProfitCalculator';
import MT5Transparency from '@/components/MT5Transparency';
import KeyFeatures from '@/components/KeyFeatures';
import Promotions from '@/components/Promotions';

import LiveChat from '@/components/LiveChat';
import ReturnsCalculator from '@/components/ReturnsCalculator';
import HowItWorks from '@/components/HowItWorks';

const Index = () => {
  useEffect(() => {
    // Set up intersection observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with the animate-fade-in class
    document.querySelectorAll('.animate-fade-in').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
    
      <main>
        <Hero />
        <ProfitCalculator />
        <MT5Transparency />
        <HowItWorks />
        <KeyFeatures />
        <Promotions />
    
        
      </main>
    
      <LiveChat />
    </div>
  );
};

export default Index;
