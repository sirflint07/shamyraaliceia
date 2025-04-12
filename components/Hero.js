"use client";

import { useEffect, useRef } from "react";
import { Flower2 } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function Hero() {
  const bgRef = useRef(null);

  useEffect(() => {
    if (!bgRef.current) return;

    gsap.to(bgRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: bgRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="relative min-h-[200vh]">
      
      <div
        ref={bgRef}
        className="fixed inset-0 w-full h-screen overflow-hidden z-[-1]"
      >
        <img
          src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=2070"
          alt="Floral Installation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Flower2 className="h-16 w-16 text-white animate-pulse" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
            Shamyra Aliceia & Co.
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Creating timeless moments with nature&apos;s finest blooms
          </p>
        </div>
      </div>

      <div className="relative bg-white min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mt-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gold-2 mb-8">
            Our Floral Story
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Every arrangement tells a unique story, carefully crafted to create unforgettable moments.
            From intimate gatherings to grand celebrations, we transform spaces into botanical wonderlands.
          </p>
          <p className="text-lg text-gray-600">
            Let us bring your floral dreams to life with our bespoke installations and artistic vision.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;