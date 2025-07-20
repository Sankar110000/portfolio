import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import ProjectSection from "../components/ProjectSection";
import Testimonial from "../components/Testimonial";
import ContactSection from "../components/ContactSection";
import { LoaderFive } from "../components/ui/loader";
import { Carousel } from "../components/ui/slide-data";
import { HeroScrollDemo } from "../components/HeroScroll";

function LandingPage() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-700 min-h-screen flex justify-center items-center">
      <div>
          <Hero />
          <HeroScrollDemo/>
          <Skills />
          <ProjectSection />
          <Testimonial />
          <ContactSection />
        </div>
    </div>
  );
}

export default LandingPage;
