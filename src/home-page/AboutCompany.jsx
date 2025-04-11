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
    "30+ years of Combined expertise: Decades of hands-on experience in industry for navigating NYC’s Complex & ever-evolving  Building Codes,zoning Laws, and permit processes",
    "360° Compliance Guardrails: Full-spectrum code adherence, from design to final inspection, ensuring no detail slips through cracks",
"Pre-inspection audits: Identification and resolving of compliance gaps before official inspections to guarantee first-time approval",
"Real-time documentations:Digital tracking of permits, revisions, and approvals for full transparency and audit readiness",
"End-to-End Solutions: From blueprint reviews to occupancy certificates, handling of every step to save time and stress",
"Proactive Approach: We anticipate challenges, mitigate risks, and adapt to regulatory changes before they impact your project",
"One-Stop Shop: Streamlined services covering your needs for codes regulation"
  ];

  return (
    <div className="bg-brand-dark text-brand-light py-8 md:py-10 px-4 lg:px-0 lg:pl-24" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-10 pt-8 lg:px-12 flex flex-col xl:flex-row justify-between gap-8 lg:gap-16 bg-[#1E2322] bg-opacity-25 rounded-3xl lg:rounded-none lg:rounded-bl-3xl lg:rounded-tl-3xl  border-2 border-brand-gray1/50 mb-16">
        {/* Left Side - Numbers That Matter */}
        <div className="lg:w-1/2 gsap-animate p-2">
          <h2 className="text-lg md:text-3xl font-conthrax font-semibold text-brand-light mb-3">
            Numbers That Matter
          </h2>
          <p className="text-brand-gray3 text-sm mb-3">
            We have ensured the success across all projects, bringing 30+ years of experience to leasing proactive alert systems.
          </p>
          <div className="flex justify-center items-center bg-[#1E2322] rounded-2xl p-3 min-h-[40vh] mb-0">
            <Image
              src="/pics/Group9.png"
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
          <div className="mb-12">
            <h2 className="text-sm md:text-4xl font-conthrax font-semibold text-brand-light mb-3">
              What we Specialize in
            </h2>
            <p className="mb-7 text-sm text-brand-gray3">Precision Trust vision Transformation</p>
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
              <img src="/pics/Asset61.png" alt="green man" width={80}/>
              <CTA text={"Our Offerings"} href="/services" styling="rounded-full bg-[#8AD5B7] text-black hover:from-brand-green1 hover:to-brand-green2 text-base font-semibold w-full md:px-20 px-4 py-4 transition-colors mt-0" />
            </div>
            </div>
           
          </div>

         
        </div>

 

      </div>
      {/* Why NYC Trusts PBS? */}
 <div className="">
            <h2 className="text-3xl text-center md:text-4xl font-conthrax font-semibold text-brand-light mb-6">
              Why NYC Trusts PBS?
            </h2>
               {/* Underline heading line */}
        <div className="w-[30%] h-1 bg-[#7CE2B8] mx-auto mb-6"></div>
            <div className="text-white max-w-full grid grid-cols-1 lg:grid-cols-2 gap-3 flex-wrap">
              {reasons.map((reason, index) => (
                <div key={index} className={`min-h-32 flex flex-col justify-center items-start gap-3 w-full  rounded-xl py-2 px-3 bg-[#2B3331] ${index === 6 ? "ml-0 lg:ml-[300]":""} `}>
                  <p className="text-left text-sm font-extrabold">{reason.split(":")[0] + ":"}</p>
                  <p className="text-sm">{reason.split(":")[1]}</p>
                </div>
              ))}
            </div>
          </div>
    </div>
  );
};

export default AboutCompany;