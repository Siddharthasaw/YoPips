import React from "react";
import { Helmet } from "react-helmet"; // Import React Helmet

import TransparencyHero from "../components/TranceperencyHero";
import KeyFeatures from "../components/KeyFeatures";
import MT5Transparency from "../components/MT5Transparency";
import AboutUs from "@/components/AbouUs";
import FAQ from "@/components/FAQ";

const Transparency = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Transparency - YoPips</title>
        <meta
          name="description"
          content="YoPips ensures full transparency in trading with MT5. Learn about our algorithmic trading system, key features, and how we maintain trust with our users."
        />
        <meta name="keywords" content="Transparency, YoPips, MT5 Trading, Algorithmic Trading, Trust, Key Features" />
        <meta name="author" content="YoPips" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Transparency - YoPips" />
        <meta
          property="og:description"
          content="YoPips ensures full transparency in trading with MT5. Learn about our algorithmic trading system, key features, and how we maintain trust with our users."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yopips.com/transparency" />
        <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@lovable_dev" />
        <meta name="twitter:title" content="Transparency - YoPips" />
        <meta
          name="twitter:description"
          content="YoPips ensures full transparency in trading with MT5. Learn about our algorithmic trading system, key features, and how we maintain trust with our users."
        />
        <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://yopips.com/transparency" />
      </Helmet>

      {/* Page Components */}
      <TransparencyHero />
      <MT5Transparency />
      <AboutUs />
      <KeyFeatures />
      <FAQ />
    </>
  );
};

export default Transparency;