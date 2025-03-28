"use client";

import CustomImage from "@/app/CustomImage";
import CTA from "@/components/CTA";
import { useMenu } from "@/context/MenuContext";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = () => {
  const { isOpen } = useMenu();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    setInitialRender(false);
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="relative bg-brand-dark">
      <div className="mx-auto container overflow-hidden h-screen relative">
        {/* ... (image animations remain the same) ... */}

        <motion.div
          className="relative flex flex-col justify-center items-center h-screen p-6 md:p-8 lg:p-10 xl:p-12 text-center" // Added text-center here
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl/[1.2] font-conthrax font-semibold text-brand-light mb-6" // Adjusted font size and margin
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.5,
            }}
          >
            Ensuring Compliance, Excellence and Peace of Mind in New York Construction
          </motion.h1>

          <div className="w-16 h-1 bg-brand-green mb-4" /> {/* Added top line separator */}

          <motion.p
            className="text-lg md:text-xl font-poppins text-brand-light mb-6" // Adjusted font size and margin
            initial={{ opacity: 0, x: 100 }}
            animate={{
              opacity: [0, 0.25, 0.75, 1],
              x: [100, 75, 25, 0],
            }}
            transition={{
              duration: 1,
              times: [0, 0.3, 0.6, 1],
            }}
          >
            Your Trusted Partner for Construction Compliance Inspections,<br />
            Expediting and Property Solutions
          </motion.p>

          <div className="w-16 h-1 bg-brand-green mb-6" /> {/* Added bottom line separator */}

          <motion.p
            className="text-md font-poppins text-brand-light" // Removed pl-5
            initial={{ opacity: 0, x: 100 }}
            animate={{
              opacity: [0, 0.25, 0.75, 1],
              x: [100, 75, 25, 0],
            }}
            transition={{
              duration: 1,
              times: [0, 0.3, 0.6, 1],
            }}
          >
            More than 100 Years Combined Experience in the industry.
          </motion.p>

          <CTA text="Schedule your Consultation Today" href="/contacts" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;