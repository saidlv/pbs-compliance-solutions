"use client";

import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import SplitType from "split-type";

const HeroSection = ({ heading, text, button, img, staggerVal = 0.15, className }) => {
  const [bgImage, setBgImage] = useState("");
  const textRef = useRef(null);

  useEffect(() => {
    const image = new Image();
    image.src = img || "/PBS%20Assets/Brand%20Language/city-building.jpg";
    image.onload = () => {
      setBgImage(image.src);
    };
  }, [img]);

  useEffect(() => {
    if (textRef.current) {
      const text = new SplitType(textRef.current, { types: "words" });
      gsap.fromTo(
        text.words,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: staggerVal,
          ease: "power2.out",
        }
      );
    }
  }, [staggerVal]);

  return (
    <section className="relative bg-gray-900 text-white overflow-hidden text-center py-16 px-4 md:px-6 lg:px-8">
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: bgImage ? 0.2 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage || "/PBS%20Assets/Brand%20Language/placeholder.jpg"})` }}
        aria-hidden="true"
      ></motion.div>

      {/* Content Wrapper */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className={`text-4xl md:text-6xl font-bold mb-6 ${className || ""}`}
          ref={textRef}
          style={{
            wordBreak: "keep-all",
            hyphens: "auto",
            lineHeight: "1.2",
          }}
        >
          {heading}
        </motion.h1>

        {text && (
          <motion.p
            className="text-lg md:text-xl text-gray-300 tracking-wide mb-6 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {text}
          </motion.p>
        )}

        {button && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {button}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default HeroSection;