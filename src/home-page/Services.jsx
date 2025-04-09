"use client";

import CTA from "@/components/CTA";
import { cn } from "@/lib/utils"; // assuming you use a utility for className merge

const Services = () => {
  return (
    <section className="relative bg-[#2A3532] text-white py-20 px-6 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Underline heading line */}
        <div className="w-[30%] h-1 bg-[#7CE2B8] mx-auto mb-4"></div>

        {/* Main Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-conthrax">
          <span className="block text-white">Introduction to</span>
          <span className="block text-[#E4F3ED] font-extrabold mt-1">
            PROACTIVE BUILDING <br /> SOLUTIONS
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-300 mt-4 text-sm sm:text-base font-medium">
          Compliance Made Simple, Projects Done Right
        </p>

        {/* Description */}
        <p className="text-gray-400 mt-6 text-sm sm:text-base leading-relaxed">
          Proactive Building Solutions is a collaboration of its core team members and fellow New Yorkers, each representing a crucial subdivision that together form the foundation for the PBS network. PBS has honed the skills and built the relationships necessary to revolutionize the industry.
        </p>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <CTA text="Know more about us" href="/about-us" styling="bg-[#7CE2B8]" />
        </div>
      </div>

      {/* Background Skyline (optional) */}
      <div className="absolute inset-0 z-0 bg-[url('/images/skyline.svg')] bg-bottom bg-no-repeat opacity-20"></div>
    </section>
  );
};

export default Services;
