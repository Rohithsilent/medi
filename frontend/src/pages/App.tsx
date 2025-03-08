import React from "react";
import { Header } from "components/Header";
import { Hero } from "components/Hero";
import { Features } from "components/Features";
import { Statistics } from "components/Statistics";
import { Testimonials } from "components/Testimonials";
import { CallToAction } from "components/CallToAction";
import { Footer } from "components/Footer";

export default function App() {
  const handleGetStarted = () => {
    // This will be implemented later when we have authentication
    console.log("Get started clicked");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header transparent={true} />
      <Hero onGetStarted={handleGetStarted} />
      <Features />
      <Statistics />
      <Testimonials />
      <CallToAction onGetStarted={handleGetStarted} />
      <Footer />
    </div>
  );
}