"use client";
import CustomImage from "@/app/CustomImage";
import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import React from "react";
import { coreValues, features } from "./data";
import Image from "next/image";
import { DotIcon } from "lucide-react";

const Page = () => {
  const colors = {
    background: "#2d2d2d",
    cardBg: "#3a3a3a",
    textPrimary: "#f3f4f6",
    textSecondary: "#d1d5db",
    accent: "#2d8b6f",
    border: "#6b5f54",
  };

  return (
    <div className="bg-[#37403D] min-h-screen overflow-hidden">
      <HeroSection
        heading="Building Compliance, Trust, and results in the heart of new york"
        text="At PBS, we don’t just inspect-we protect. From permits to final sign-off, our values ensure your 
        project stays on time, on budget and above board."
        className="text-3xl md:text-5xl font-conthrax font-semibold "
        img="/pics/Rectangle 123.png"
        isLine={true}
        bgStyle="bg-top md:bg-top bg-cover"
        textStyle="text-xl font-semibold"
      />

      {/* Custom 'About Us' Label Divider */}
      <div className="w-[100vw] relative">
        <div className="bg-[#8AD5B7] w-full text-white py-1"></div>
        <div className="bg-[#8AD5B7] w-[60%] sm:w-1/2 lg:w-1/3 absolute left-[20%] sm:left-[25%] lg:left-[33%] -top-5 lg:-top-6 rounded-full text-[#37403D] p-2 flex justify-center items-center font-conthrax text-2xl lg:text-4xl z-20">
          Our Values
        </div>
      </div>

      {/* Fixed Section 1: Moved title outside the motion div */}
      <section className="bg-[#37403D] pt-10 pb-20 px-6 md:px-12 xl:px-16">
        <div className="container mx-auto">
          {/* Moved title section here and fixed spacing */}
          <div className="text-center my-2 mb-10 py-2">
            <h3 className="text-[#DCE2E2] text-xl font-poppins tracking-widest mb-3">
              <span className="uppercase">The PBS Promise:</span> Six Pillars of
              Excellence
            </h3>
            <h1 className="lg:text-4xl text-3xl font-conthrax px-10 text-[#f3f4f6]">
              Principles we hold are Built on Integrity, Driven by Excellence
            </h1>
          </div>

          <motion.div
            className="flex flex-col items-center gap-6 sm:gap-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center w-full gap-4 sm:gap-6 lg:gap-8"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, delay: index * 0.1 }}
              >
                {/* Greenish Background Div with Image (Hidden on smaller screens, Perfect Square on larger screens) */}
                <div className="hidden lg:flex w-full lg:w-[300px] flex-shrink-0 h-auto lg:h-[300px] rounded-3xl bg-[#8AD5B7] justify-center items-center overflow-hidden">
                  <Image
                    src={feature.img}
                    alt={feature.title}
                    width={400}
                    height={400}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>

                {/* Dark Background Div */}
                <div className="w-full lg:flex-1 flex flex-col lg:flex-row justify-between items-start lg:items-center text-left rounded-3xl bg-[#1E2322] p-4 xl:p-6 h-auto lg:h-[300px] box-border shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Title and Tagline */}
                  <div className="w-full lg:w-[45%] flex flex-col items-start justify-center gap-2 sm:gap-3 mb-4 lg:mb-0">
                    <h2 className="text-xl sm:text-2xl xl:text-4xl w-full text-center lg:text-left font-semibold font-conthrax text-[#8AD5B7]">
                      {feature.title}
                    </h2>
                    <p className="w-full text-center lg:text-left text-sm sm:text-base font-semibold text-[#DCE2E2]">
                      {feature.tagline}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="w-full lg:w-[2%] flex justify-center items-center mb-4 lg:mb-0">
                    <div className="w-full lg:w-2 h-1 lg:h-52 bg-[#D9D9D9] rounded-full"></div>
                  </div>

                  {/* Description List */}
                  <div className="w-full lg:w-[45%] flex flex-col items-start justify-center gap-2 sm:gap-3">
                    {feature.description.map((item, index) => (
                      <div className="text-[#DCE2E2]" key={index}>
                        <h4 className="flex justify-start items-center text-sm sm:text-base pb-1 sm:pb-2">
                          <DotIcon className="text-[#DCE2E2]" />
                          <span className="font-semibold">
                            {item.split(":")[0]}
                          </span>
                        </h4>
                        <p className="text-xs font-semibold text-[#89A096] mb-2 pl-5">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Fixed Section 2: Why pillars matter */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-screen bg-[#1e2322] pt-10 pb-20 px-6 md:px-12 xl:px-16"
        style={{
          backgroundImage: `url('/pics/Brand Patterns-01 1.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-[#DCE2E2] text-center text-5xl font-semibold font-conthrax mb-6 max-w-4xl mx-auto">
          Why These Pillars Matter
        </h2>

        <p className="text-[#8AD5B7] text-2xl font-semibold text-center max-w-3xl mx-auto mb-10">
          In NYC’s Construction Landscape, Delays Cost $12k/Day. Missteps Risk
          Reputations.
        </p>

        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-6 sm:gap-8 lg:gap-12 text-[#DCE2E2] w-[96%] mx-auto">
          {coreValues?.map((value, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                key={index}
                className="flex flex-col items-start justify-around w-full gap-4 sm:gap-6 lg:gap-8 bg-[#37403D] rounded-3xl p-4 sm:p-4 lg:p-6 "
              >
                <div className="w-full flex justify-center items-center h-1/3">
                  <img src={value.icon} alt="icon" className="w-24 h-24" />
                </div>
                <div className="w-full h-2/3 flex flex-col items-start justify-end gap-2 sm:gap-3 mb-4 lg:mb-0">
                  {value.title && (
                    <h2 className="text-xl lg:text-2xl font-semibold font-conthrax text-[#8AD5B7] flex flex-col ">
                      <span>{value.title.split("—")[0]}</span>
                      <span>{value.title.split("—")[1]}</span>
                    </h2>
                  )}
                  <ul className="w-full list-decimal text-left space-y-1">
                    {value.description.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="w-full text-sm sm:text-base font-semibold flex gap-2 justify-start"
                        >
                          <DotIcon className="" />
                          <span className="w-[90%]">{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
    </div>
  );
};

export default Page;
