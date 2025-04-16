import React from 'react';
import { Helmet } from 'react-helmet'; // Import React Helmet
import MT5Hero from '@/components/MT5Hero';
import ContactForm from '@/components/ContactForm';
import Promotions from '../components/Promotions';
import FAQ from '@/components/FAQ';

const MT5 = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Trade with MT5 - YoPips</title>
        <meta
          name="description"
          content="Start trading with MT5 using YoPips' advanced algorithmic trading system. Enjoy transparency, fixed daily returns, and a seamless trading experience."
        />
        <meta name="keywords" content="MT5 Trading, YoPips, Algorithmic Trading, Transparent Trading, Daily Returns" />
        <meta name="author" content="YoPips" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Trade with MT5 - YoPips" />
        <meta
          property="og:description"
          content="Start trading with MT5 using YoPips' advanced algorithmic trading system. Enjoy transparency, fixed daily returns, and a seamless trading experience."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yopips.com/mt5" />
        <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@lovable_dev" />
        <meta name="twitter:title" content="Trade with MT5 - YoPips" />
        <meta
          name="twitter:description"
          content="Start trading with MT5 using YoPips' advanced algorithmic trading system. Enjoy transparency, fixed daily returns, and a seamless trading experience."
        />
        <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://yopips.com/mt5" />
      </Helmet>

      {/* Page Components */}
      <MT5Hero />
      <Promotions />
      <ContactForm />
      <FAQ />
    </>
  );
};

export default MT5;