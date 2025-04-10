"use client";

import Heading from "@/components/Heading";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building, DotIcon, HomeIcon, ReceiptText } from "lucide-react";
import React, { useEffect, useRef } from "react";
import CTA from "@/components/CTA";

gsap.registerPlugin(ScrollTrigger);

const AboutCompany = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = containerRef.current.querySelectorAll(".gsap-animate");

    gsap.from(elements, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      duration: 0.6,
      stagger: 0.3,
      delay: 0.3,
    });
  }, []);

  const aboutItems = [
    {
      icon: HomeIcon,
      title: "Properties Monitored",
      amount: 1453,
    },
    {
      icon: ReceiptText,
      title: "Corrected Violations",
      amount: 9852,
    },
    {
      icon: Building,
      title: "Square Foot Developed",
      amount: 4853018,
    },
  ];

  const services = [
    "Compliance Inspections",
    "Expediting & Permitting",
    "Annual Mailings",
    "Owner Representation",
    "Portfolio Management",
    "Consultancy over your Projects",
  ];

  const reasons = [
    "30+ years of Combined expertise in the industry in navigating NYC’s Complex & ever-changing regulatory landscape.",
    "Pro-active audits of compliance gaps pre official inspections to ensure compliance & avoid penalties.",
    "Full transparency certifications, handling every step of the process for you.",
    "One-Stop-Shop streamlined services covering the needs of code compliance.",
    "360° Compliance Guardians full spectrum plan offerings, from design to final inspections, ensuring no stone is left unturned.",
    "One-Stop Documentation multi disciplines, and experts for full transparency.",
    "Proactive Approach we anticipate challenges, mitigate risks, and navigate regulatory complexities to keep your project on track.",
  ];

  return (
    <div className="bg-brand-dark text-brand-light py-16 md:py-32" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-10 lg:px-12 py-8 flex flex-col xl:flex-row justify-between gap-16 bg-[#1E2322] bg-opacity-25 rounded-2xl border-2 border-brand-gray1/50 mb-6">
        {/* Left Side - Numbers That Matter */}
        <div className="lg:w-1/2 gsap-animate p-2">
          <h2 className="text-lg md:text-xl font-conthrax font-semibold text-brand-light mb-3">
            Numbers That Matter
          </h2>
          <p className="text-brand-gray3 text-sm mb-3">
            We have ensured the success across all projects, bringing 30+ years of experience to leasing proactive alert systems.
          </p>
          <div className="flex justify-center items-center bg-[#1E2322] rounded-2xl p-3 min-h-[40vh] mb-0">
            <Image
              src="/pics/group9.png"
              alt="Underline"
              width={618}
              height={191}
              className="mx-auto mb-4"
              loading="lazy"
              unoptimized={true}
            />
            
          </div>
        </div>

        {/* Right Side - Why NYC Trusts PBS? */}
        <div className="lg:w-1/2 gsap-animate p-2">
          {/* What we Specialize in */}
          <div className="mb-12 ">
            <h2 className="text-sm md:text-xl font-conthrax font-semibold text-brand-light mb-3">
              What we Specialize in
            </h2>
            <p className="mb-7 text-base text-brand-gray3">Precision Trust vision Transformation</p>
            <div className="w-full flex flex-col md:flex-row justify-between gap-6 px-6 text-brand-gray3 min-h-[40vh] bg-[#1E2322] rounded-xl py-3">
            <ul className="space-y-2 w-full md:w-2/3">
              {services.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <DotIcon/>
                  <span className="text-sm">{service}</span>
                </li>
              ))}
            </ul>
            <div className="w-full py-2 md:py-0 md:w-1/3 flex flex-col items-center justify-center gap-3">
              <img src="/pics/asset61.png" alt="" width={80}/>
              <CTA text={"Our Offerings"} href="/services" styling="rounded-full bg-[#8AD5B7] text-black hover:from-brand-green1 hover:to-brand-green2 text-base font-semibold w-full md:px-20 px-4 py-4 transition-colors mt-0" />
            </div>
            </div>
           
          </div>

         
        </div>

 

      </div>
      {/* Why NYC Trusts PBS? */}
 <div>
            <h2 className="text-3xl text-center md:text-4xl font-conthrax font-semibold text-brand-light mb-6">
              Why NYC Trusts PBS?
            </h2>
               {/* Underline heading line */}
        <div className="w-[30%] h-1 bg-[#7CE2B8] mx-auto mb-6"></div>
            <div className="text-brand-gray3 max-w-full flex justify-center items-center gap-6 flex-wrap">
              {reasons.map((reason, index) => (
                <div key={index} className="min-h-32 flex items-center  gap-3 w-2/3 lg:w-1/3 rounded-xl p-3 bg-[#2B3331]">
                  <span className="w-3 h-3 rounded-full mt-2"></span>
                  <span className="text-base">{reason}</span>
                </div>
              ))}
            </div>
          </div>
    </div>
  );
};

export default AboutCompany;