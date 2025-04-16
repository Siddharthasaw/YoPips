import React from "react";
import { Helmet } from "react-helmet"; // Import React Helmet

import ContactForm from "@/components/ContactForm";

const Support = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Support - YoPips</title>
        <meta
          name="description"
          content="Need help? Contact YoPips support team for assistance with your trading account, MT5 platform, or any other queries. We're here to help 24/7."
        />
        <meta name="keywords" content="Support, YoPips, Customer Support, MT5 Assistance, Trading Help" />
        <meta name="author" content="YoPips" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Support - YoPips" />
        <meta
          property="og:description"
          content="Need help? Contact YoPips support team for assistance with your trading account, MT5 platform, or any other queries. We're here to help 24/7."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yopips.com/support" />
        <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@lovable_dev" />
        <meta name="twitter:title" content="Support - YoPips" />
        <meta
          name="twitter:description"
          content="Need help? Contact YoPips support team for assistance with your trading account, MT5 platform, or any other queries. We're here to help 24/7."
        />
        <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://yopips.com/support" />
      </Helmet>

      {/* Page Component */}
      <ContactForm />
    </>
  );
};

export default Support;