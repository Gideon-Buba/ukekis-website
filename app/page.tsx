import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import FeatureCTA from "./components/FeatureCTA";
import WhatWeOffer from "./components/WhatWeOffer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
      <HowItWorks />
      <WhyChooseUs />
      <WhatWeOffer />
      <FeatureCTA />
    </>
  );
}
