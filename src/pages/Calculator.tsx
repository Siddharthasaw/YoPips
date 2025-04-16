import React from "react";
import { Helmet } from "react-helmet"; // Import React Helmet
import ProfitCalculator from "@/components/ProfitCalculator";

const Calculator = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Profit Calculator - YoPips</title>
        <meta
          name="description"
          content="Use YoPips' Profit Calculator to estimate your daily and monthly returns with our advanced XAUUSD trading system. Start planning your passive income today!"
        />
        <meta name="keywords" content="Profit Calculator, YoPips, XAUUSD Trading, Passive Income, Algorithmic Trading" />
        <meta name="author" content="YoPips" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Profit Calculator - YoPips" />
        <meta
          property="og:description"
          content="Use YoPips' Profit Calculator to estimate your daily and monthly returns with our advanced XAUUSD trading system. Start planning your passive income today!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yopips.com/calculator" />
        <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@lovable_dev" />
        <meta name="twitter:title" content="Profit Calculator - YoPips" />
        <meta
          name="twitter:description"
          content="Use YoPips' Profit Calculator to estimate your daily and monthly returns with our advanced XAUUSD trading system. Start planning your passive income today!"
        />
        <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://yopips.com/calculator" />
      </Helmet>

      {/* Page Component */}
      <ProfitCalculator />
    </>
  );
};

export default Calculator;