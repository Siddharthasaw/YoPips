import { useEffect } from 'react';
import { Helmet } from 'react-helmet'; // Import React Helmet
import Hero from '@/components/Hero';
import ProfitCalculator from '@/components/ProfitCalculator';
import MT5Transparency from '@/components/MT5Transparency';
import KeyFeatures from '@/components/KeyFeatures';
import Promotions from '@/components/Promotions';
import LiveChat from '@/components/LiveChat';
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
      {/* SEO Meta Tags */}
      <Helmet>
        <title>YoPips - Earn 1% Daily with XAUUSD Trading</title>
        <meta
          name="description"
          content="Our gold trading robot delivers a fixed 1% daily return on your investment. Start earning passive income today with our XAUUSD algorithmic trading system."
        />
        <meta name="keywords" content="YoPips, XAUUSD Trading, Gold Trading, Passive Income, Algorithmic Trading, MT5 Transparency" />
        <meta name="author" content="YoPips" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="YoPips - Earn 1% Daily with XAUUSD Trading" />
        <meta
          property="og:description"
          content="Our gold trading robot delivers a fixed 1% daily return on your investment. Start earning passive income today with our XAUUSD algorithmic trading system."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yopips.com" />
        <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@lovable_dev" />
        <meta name="twitter:title" content="YoPips - Earn 1% Daily with XAUUSD Trading" />
        <meta
          name="twitter:description"
          content="Our gold trading robot delivers a fixed 1% daily return on your investment. Start earning passive income today with our XAUUSD algorithmic trading system."
        />
        <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://yopips.com" />
      </Helmet>

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
