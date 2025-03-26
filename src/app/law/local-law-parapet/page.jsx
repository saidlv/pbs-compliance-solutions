"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import { parapetData } from "../data"; // Import parapetData

const page = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-[#101010] text-white min-h-screen">
      <HeroSection
        heading="Comply with LL 126 Parapet Inspection"
        text="Prevent Hazards, avoid Penalties by the help our licensed experts"
        staggerVal={0.1}
      />

      <div className="py-16 px-6 md:px-12 lg:px-24">
        <section className="container mx-auto sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%]">
          <motion.div
            className="bg-[#1a1a1a] p-8 rounded-lg shadow-md mb-8 border-l-4 border-[#4CAF50]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">
              {parapetData[0].heading}
            </h2>
            <div
              dangerouslySetInnerHTML={{ __html: parapetData[0].body }}
              className="text-[#9ca3af]"
            />
          </motion.div>

          <motion.div
            className="bg-[#262626] p-8 rounded-lg shadow-md mb-8 border-l-4 border-[#2196F3]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">
              {parapetData[1].heading}
            </h2>
            <div
              dangerouslySetInnerHTML={{ __html: parapetData[1].body }}
              className="text-[#9ca3af]"
            />
          </motion.div>

          <motion.div
            className="bg-[#333333] p-8 rounded-lg shadow-md mb-8 border-l-4 border-[#FF9800]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">
              {parapetData[2].heading}
            </h2>
            <div
              dangerouslySetInnerHTML={{ __html: parapetData[2].body }}
              className="text-[#9ca3af]"
            />
          </motion.div>



          <motion.div
            className="bg-[#4d4d4d] p-8 rounded-lg shadow-md border-l-4 border-[#9C27B0]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">
              {parapetData[3].heading}
            </h2>
            <div
              dangerouslySetInnerHTML={{ __html: parapetData[3].body }}
              className="text-[#9ca3af]"
            />
          </motion.div>

          <motion.div
            className="bg-[#5a5a5a] p-8 rounded-lg shadow-md border-l-4 border-[#673AB7]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">
              {parapetData[4].heading}
            </h2>
            <div
              dangerouslySetInnerHTML={{ __html: parapetData[4].body }}
              className="text-[#9ca3af]"
            />
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default page;