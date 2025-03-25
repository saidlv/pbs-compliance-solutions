"use client"; // Marks this as a client-side component in Next.js

import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import React from "react";
import { localLawData } from "../data"; // Import the data

const page = () => {
  return (
    <div>
      {/* Hero section with title and introductory text */}
      {/* <div className="bg-[#282828] py-16 px-6 md:px-12 lg:px-24 w-full"> */}
      <HeroSection
        heading="LL 126 Parking Structure Inspection"
        text="Ensure Compliance, Prevent risks & Protect your property by our simplified 
processes through the assessments of our qualified licensed experts."
        staggerVal={0.1}
      />
      {/* </div> */}

      {/* Main content section with dark background and responsive padding */}
      <div className="bg-[#101010] py-16 px-6 md:px-12 lg:px-24">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(localLawData).map(([key, section], index) => (
            <motion.div
              key={key}
              className="bg-[#1a1a1a] p-8 rounded-lg shadow-md mb-8 border-l-4 border-[#4CAF50]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <h2 className="text-2xl font-semibold mb-4 text-white">
                {section.heading}
              </h2>
              <div
                className="text-[#9ca3af]"
                dangerouslySetInnerHTML={{ __html: section.body }}
              ></div>
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default page;