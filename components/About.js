'use client';

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaLocationDot } from "react-icons/fa6";
import { CiBookmarkPlus } from "react-icons/ci";
import Carousl from "./Carousel";

export default function AboutBrand() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 lg:p-16 bg-white text-gray-800">
        <div className="flex flex-col justify-center text-balance">
          <h2 className="text-4xl font-bold mb-6">About the Brand</h2>
          <p className="mb-4 leading-relaxed text-lg">
            I’m an event producer with a passion for <strong>floral design</strong>—blending
            creativity, elegance, and intention to curate unforgettable experiences. At
            <strong> Floral by Shamyra Aliceia & Co.</strong>, we bring your vision to life through
            thoughtful floral artistry that elevates every occasion.
          </p>
          <p className="mb-4 leading-relaxed text-lg">
            With expertise in <strong>event planning and custom arrangements</strong>, I design
            everything from romantic bridal bouquets to luxe floral installations, ensuring
            each detail speaks your story and sets the perfect mood.
          </p>
          <p className="mb-4 leading-relaxed text-lg">
            At <strong>Floral by Shamyra Aliceia</strong>, florals are more than decor—they’re an
            expression. Every bloom, palette, and texture is curated for elegance and harmony.
          </p>
          <div className="space-y-2 mt-6">
            <div className="flex items-center gap-2 text-base font-medium">
              <span className="bg-gold-2 rounded-full w-8 h-8 flex justify-center items-center"><FaLocationDot size={20} color="#fff"/></span> Based in NYC | Available for Destination Events
            </div>
            <div className="flex items-center gap-2 text-base font-medium">
              <span className="bg-gold-2 rounded-full w-8 h-8 flex justify-center items-center">
                <CiBookmarkPlus size={20} color="#fff"/>
              </span> Book a Consultation Today
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full shadow-md hover:bg-gray-900 transition w-[30%] hover:animate-pulse"
          >
            Contact Me <ArrowRight size={16} />
          </motion.button>
        </div>

        <div className="w-full h-full">
          <Carousl />
        </div>
      </div>
    </section>
  );
}