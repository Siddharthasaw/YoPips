import React from "react";

import TransparencyHero from "../components/TranceperencyHero";
import KeyFeatures from "../components/KeyFeatures";
import MT5Transparency from "../components/MT5Transparency";
import AboutUs from "@/components/AbouUs";
import FAQ from "@/components/FAQ";


const Transparency = () => {
  return (
  <>
   <TransparencyHero />
   <MT5Transparency />

   <AboutUs />
   <KeyFeatures />
   <FAQ />
  </>
  );
};

export default Transparency;