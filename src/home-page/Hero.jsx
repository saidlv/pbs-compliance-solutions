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
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0, y: 1000, scale: 0.95, x: 0 }}
          animate={{
            opacity: 1,
            y: [1000, -20, 0],
            scale: [0.95, 1.2, 1],
            x: isSmallScreen && isOpen ? -50 : 50,
          }}
          transition={{
            duration: initialRender ? 1.2 : 0.5,
            ease: "easeOut",
            delay: initialRender ? 0.5 : 0,
          }}
          aria-hidden="true"
        >
          <Image
            src="/PBS%20Assets/Brand%20Language/front-view-modern-skyscrapers-office-buildings-removebg-preview.png"
            alt="Modern skyscrapers"
            className="w-full h-full object-contain"
            width={100}
            height={100}
            unoptimized
            loading="lazy"
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 w-full h-full opacity-[.1]"
          initial={{ opacity: 0, x: 0, scale: 0.75 }}
          animate={{
            opacity: 0.1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          aria-hidden="true"
        >
          <CustomImage
            src="/PBS%20Assets/Brand%20Language/glass-u-shaped-structure-with-blue-sky.jpg"
            alt="Glass U-shaped structure"
            className="w-full h-full object-cover"
            width={100}
            height={100}
            loading="lazy"
          />
        </motion.div>

        <motion.div
          className="relative flex flex-col justify-center items-center h-screen p-6 md:p-8 lg:p-10 xl:p-12 text-center"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl/[1.2] font-conthrax font-semibold text-brand-light mb-6"
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

          <div className="w-16 h-1 bg-brand-green mb-4" />

          <motion.p
            className="text-lg md:text-xl font-poppins text-brand-light mb-6"
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

          <div className="w-16 h-1 bg-brand-green mb-6" />

          <motion.p
            className="text-md font-poppins text-brand-light"
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