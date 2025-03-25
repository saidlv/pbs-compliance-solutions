"use client";

import HeroSection from "@/components/HeroSection";
import { localLawDataArray } from "../data";
import { motion } from "framer-motion";

const page = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Increased stagger for better visual flow
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // Increased initial y for more pronounced slide-up
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-[#101010] text-white min-h-screen">
      <HeroSection
        heading={localLawDataArray[0].heading}
        text={localLawDataArray[0].text}
        staggerVal={0.1}
      />

      <motion.section
        className="container mx-auto px-6 md:px-12 lg:px-24 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {localLawDataArray.slice(1).map((item, index) => (
          <motion.div
            key={index}
            className="mb-12 md:mb-16 lg:mb-20 p-6 border border-gray-800 rounded-lg" // Added border and padding
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-brand-bright border-b border-gray-700 pb-4"> {/*Added border bottom and padding bottom*/}
              {item.heading}
            </h2>
            {item.subheadline && (
              <h3 className="text-xl md:text-2xl text-brand-midGray mb-4">
                {item.subheadline}
              </h3>
            )}
            <div
              className="text-gray-300 leading-relaxed md:leading-relaxed text-base md:text-lg"
              dangerouslySetInnerHTML={{ __html: item.body }}
            />
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
};

export default page;