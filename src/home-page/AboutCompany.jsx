"use client";

import Heading from "@/components/Heading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building, HomeIcon, ReceiptText } from "lucide-react";
import React, { useEffect, useRef } from "react";

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
    "Annual Filings",
    "Facade Management",
    "Projects",
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
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-16 flex flex-col xl:flex-row justify-between gap-16 bg-brand-green1 rounded-2xl border-2 border-brand-gray1/50 mb-6">
        {/* Left Side - Numbers That Matter */}
        <div className="lg:w-2/3 gsap-animate p-2">
          <h2 className="text-lg md:text-xl font-conthrax font-semibold text-brand-light mb-3">
            Numbers That Matter
          </h2>
          <p className="text-brand-gray3 text-base mb-3">
            We have ensured the success across all projects, bringing 30+ years of experience to leasing proactive alert systems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-stone-900 rounded-xl p-3 min-h-44">
            {aboutItems.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center">
                  <item.icon
                    className="text-brand-green2 w-8 h-8 md:w-10 md:h-10"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-base text-brand-gray2 font-semibold border-b-[3px] border-brand-gray1 inline-block pb-[2px] mt-4">
                  {item.title}
                </h3>
                <p className="text-brand-light md:text-xl font-bold pt-4">
                  {item.amount.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Why NYC Trusts PBS? */}
        <div className="lg:w-1/3 gsap-animate py-2">
          {/* What we Specialize in */}
          <div className="mb-12 ">
            <h2 className="text-xl md:text-xl font-conthrax font-semibold text-brand-light mb-3">
              What we Specialize in
            </h2>
            <p className="mb-9 text-base text-brand-gray3">Precision Trust vision Transformation</p>
            <ul className="text-brand-gray3 space-y-4 bg-stone-900 min-h-44 rounded-xl p-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-brand-green2 rounded-full"></span>
                  <span className="text-base">{service}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                href="#"
                className="flex items-center gap-2 text-brand-green2 font-poppins font-semibold text-lg hover:underline"
              >
                Our Offerings
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
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
                <div key={index} className="min-h-32 flex items-center  gap-3 w-2/3 lg:w-1/3 rounded-xl p-3 bg-stone-900">
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