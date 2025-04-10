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
      <div className="mx-auto container h-screen relative flex flex-col lg:flex-row items-center justify-between px-2 sm:px-6 md:px-12 lg:px-24">
        {/* Background Image - Optional */}

        <motion.div
          className="absolute inset-0 w-full h-full opacity-[.1]"
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
            alt="Modern skyscrapers"
            className="w-full h-full object-cover"
            width={100}
            height={100}
            priority={true}
            quality={100}
          />
        </motion.div>
        {/* Left Side - Image */}
        <motion.div
          className="w-full lg:w-1/3 h-full flex items-center justify-start relative"
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
            className="w-full h-full object-contain absolute -left-0 md:-left-12"
            width={500}
            height={500}
            unoptimized
            loading="lazy"
          />
        </motion.div>

        {/* Right Side - Text Content */}
        <motion.div
          className="w-full lg:w-2/3 flex flex-col justify-center items-start text-left mt-10 p-6 md:p-8 lg:p-10"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          {/* Main Heading */}
          <motion.h1
            className="text-xl md:text-2xl lg:text-3xl font-conthrax font-semibold text-brand-light mb-6 max-w-lg"
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

          <div className="w-[30%] h-1 bg-[#7CE2B8] mb-4"></div>


          {/* Subheading */}
          <motion.p
            className="text-base md:text-lg font-poppins text-[#8AD5B7] mb-6 max-w-md"
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
            className="text-base md:text-lg font-poppins text-[#8AD5B7] mb-2 max-w-md"
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
            styling="rounded-full bg-[#8AD5B7] text-black hover:from-brand-green1 hover:to-brand-green2 font-semibold px-8 py-4 transition-colors mt-0"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;