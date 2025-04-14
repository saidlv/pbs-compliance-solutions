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
    <div className="relative bg-brand-dark w-full h-screen overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0, x: 0, scale: 0.75 }}
        animate={{
          opacity: 1,
          x: isSmallScreen && isOpen ? -50 : 0,
          scale: [0.75, 1.05, 1],
        }}
        transition={{
          duration: initialRender ? 1.2 : 0.5,
          ease: "easeOut",
          delay: initialRender ? 0.5 : 0,
        }}
        aria-hidden="true"
      >
        <CustomImage
          src="/pics/homebg.png"
          alt="Background skyscrapers"
          className="w-full h-full object-cover z-0"
          layout="fill"
          priority={true}
          quality={100}
        />
      </motion.div>

      {/* Content Container */}
      <div className="relative h-screen flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24">
        {/* Left Side - Image */}
        <motion.div
          className="w-full lg:w-1/3 h-[400px] lg:h-[850px] flex items-center justify-start relative z-20"
          initial={{ opacity: 0, y: 1000, scale: 0.95, x: 0 }}
          animate={{
            opacity: 1,
            y: [1000, -20, 0],
            scale: [0.95, 1.2, 1],
            x: isSmallScreen && isOpen ? -50 : 0,
          }}
          transition={{
            duration: initialRender ? 1.2 : 0.5,
            ease: "easeOut",
            delay: initialRender ? 0.5 : 0,
          }}
          aria-hidden="true"
        >
          <Image
            src="/pics/Building.png"
            alt="Modern skyscrapers"
            className="w-full h-full object-cover md:object-contain lg:object-cover object-top"
            width={600}
            height={800}
            unoptimized={true}
            loading="lazy"
          />
        </motion.div>

        {/* Right Side - Text Content */}
        <motion.div
          className="z-20 w-full lg:w-2/3 flex flex-col justify-center items-start text-left p-6 lg:p-10"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          {/* Main Heading */}
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl/[1.2] font-conthrax font-semibold text-brand-light mb-6 max-w-2xl"
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

          {/* Subheading */}
          <motion.p
            className="text-base md:text-lg font-poppins text-brand-light mb-4 max-w-xl"
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
            Your Trusted Partner for Construction Compliance Inspections, Expediting and Property Solutions
          </motion.p>

          <motion.p
            className="text-base md:text-lg font-poppins text-brand-light mb-6 max-w-xl"
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
            More than 30+ Years Combined Experience in the industry.
          </motion.p>

          {/* CTA Button */}
          <CTA
            text="Schedule your Consulting Today"
            href="/contacts"
            styling="rounded-full bg-brand-green2 text-black font-semibold font-poppins px-8 py-4 transition-colors hover:bg-brand-green1 max-w-full lg:max-w-md my-6"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;