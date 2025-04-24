"use client";

import { motion } from "framer-motion";
import HeroSection from "../../../components/HeroSection";
import { parking } from "../data";
import Image from "next/image";
import { DotIcon } from "lucide-react";
import CTA2 from "@/components/CTA2";
import ImageCarousel from "@/components/ImageCarousel";

const Page = () => {
  const section01 = {
    title: "2- Parking Garage Inspections (Local law 126)",
    heading: "Your Garage isn’t just Parking, it’s a liability",
    text: "Concrete cracks, Fines Stack, We Act ",
    items: [
      "For over 30 years, PBS has been safeguarding NYC properties through rigorous & proactive engineering inspections, our licensed experts combine technology with deep local code knowledge to ensure your parking garage meets every requirement of local law 126, Parking Structures.",
    ],
    additionalText:
      "Parking Garages require regular checks to ensure safety and avoid violations",
  };

  const List_Sec1 = [
    {
      heading: "1. Critical Documentation (if Available)",
      items: [
        "Structural design or repair drawings",
        "Open Violations related to the parking structure",
        "Previous FISP (Facade Inspection Safety Program) reports",
      ],
    },
    {
      heading: "2. For Cycle 2+ Inspections",
      items: [
        "Most recent compliance report",
        "All prior Inspection reports",
        "Annual observation checklists from the previous cycle",
      ],
    },
  ];

  const Compliance_Deadlines = {
    title: "LL126 Compliance deadlines by community districts",
    text: "Local law 126 divides parking structure inspections deadlines into 3-year cycles, further split into sub-cycles (A,B,C) based on your property’s NYC Community District",
    table: {
      headers: ["Sub-Cycle", "Community District", "Deadline Window"],
      rows: [
        {
          Sub_Cycle: "Sub-Cycle A",
          Comm_Dist: "Manhattan CD 1,2,3,4,5,6,7",
          Deadline: "January 1, 2022 - December 31, 2023",
        },
        {
          Sub_Cycle: "Sub-Cycle B",
          Comm_Dist: "Manhattan CD 8.9.10.11.12 + All Brooklyn CD’s",
          Deadline: "January 1 2024 - December 31, 2025",
        },
        {
          Sub_Cycle: "Sub-Cycle C",
          Comm_Dist: "Bronx, Queens, & Staten Island CD’s",
          Deadline: "January 1, 2026 - December 31, 2027",
        },
      ],
    },
  };

  const WhatThisMeans = {
    first: {
      title: "1- Identify your Community District",
      text: "Use the NYC Community District Map to confirm your district number",
    },
    second: {
      title: "2- Act before your window closes",
      items: [
        "Sub-Cycle A: Past Due - Schedule repairs/re-inspections immediately if not compliant",
        "Sub-Cycle B: Deadlines approaching - Inspections must be completed by 31st January 2025",
        "Sub-Cycle C: Prepare Early - Proactive Inspections recommended to avoid delays",
      ],
    },
  };

  const keyTakeaways = [
    "Mandatory for most commercial/residential parking garages",
    "Inspections must occur every 6 years",
    "non-Compliance risks fines up to $1K per month and increases IF YOU do not comply on time Current Cycle 2022–2027",
    "Future Cycle WILL follow the same 6-yr renewal pattern (2028-2033)",
    "Commercial, condos, co-ops, mixed used buildings MUST stay compliant with the CODE, only exempted Buildings are garages serving 1-2 family homes",
  ];

  const WhyItMatter = [
    "Being Compliant with LL 126 you can avoid fines, legal disputes and operational shutdowns.",
    "You can prolong the lifespan of your parking structure by getting your inspections done on time",
    "Tenant safety is what matters most for you, and your’s safety is what matters most to us",
  ];

  const whyPBS = {
    img: "/pics/local-law-parking-pic3.png",
    title: "Why Choose PBS",
    text1:
      "Don't Risk Fines or Compromise Safety, Act Now to secure your property’s failure",
    text2: "Schedule your inspection and get a quote in 24 Hour",
    list1: [
      "30+, Years in NYC 1300+ Facades Inspected",
      "Our DOB Certified experience for your Full DOB acceptance",
      "Emergencies don't wait, neither do we",
    ],
    list2: [
      "What if my Garage Fails?",
      "We Prioritize critical repairs to minimize liability and keep your property                                    operational",
      "Managing Multiple Properties is Complex?",
      "We Own our Alert System Portal where everything is managed for us, for our clients",
    ],
  };

  const timelineItems = [
    {
      title: "1- Schedule your inspection",
      description: "Quick Online Booking or through phone call",
      position: "left",
    },
    {
      title: "2- Expert Evaluation",
      description:
        "Licensed QPSI engineers will conduct a thorough assessment of your property and will determine the rating of your parking structure",
      position: "right",
    },
    {
      title: "3- DOB Reporting",
      description: "QPSI engineer will submit a report to the department",
      position: "left",
    },
    {
      title: "4- Repairing",
      description:
        "Our network of the vetted contractors will come on board for the repairing",
      position: "right",
    },
  ];

  return (
    <div
      className="bg-[#37403D]"
      style={{
        backgroundImage: `url('/pics/Brand Patterns-01 1.png')`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      {/* Hero Section */}
      <HeroSection
        heading="LL 126 Parking Structure Inspection"
        text="Ensure Compliance, Prevent risks & Protect your property by our simplified processes through the assessments of our qualified licensed experts"
        className="font-conthrax max-w-[90%] sm:max-w-2xl md:max-w-4xl lg:max-w-5xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold"
        bgStyle="bg-right lg:bg-top bg-cover mix-blend-luminosity"
        isLine={false}
        textStyle="text-base sm:text-lg md:text-xl font-semibold text-[#89A096]"
        img="/pics/local-law-parking-hero.png"
      />

      {/* Custom 'About Us' Label Divider */}
      <div className="w-[100vw] relative">
        <div className="bg-[#8AD5B7] w-full text-[#DCE2E2] py-1"></div>
        <div className="bg-[#8AD5B7] w-[60%] absolute left-[20%] -top-8 md:-top-5 lg:-top-6 rounded-full text-[#37403D] p-2 flex justify-center items-center font-conthrax text-center text-xl md:text-2xl lg:text-4xl z-20">
          Local Law 126 (Parking)
        </div>
      </div>

      {/*Section 01  */}
      <section className="px-6 md:px-10 xl:px-16 pt-24 md:pt-16 lg:pt-24 text-[#DCE2E2]">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between 2xl:justify-center 2xl:gap-16 w-full">
          <Image
            src="/pics/local-law-parking-pic1.png"
            alt="Inspection Services"
            width={500}
            height={500}
            className="w-[80%] lg:w-[45%] h-auto object-cover object-right-top rounded-[16%] mb-6 lg:mb-0 lg:mx-0 mx-auto mix-blend-luminosity"
          />
          <div className="w-full lg:w-[55%] flex flex-col gap-3 justify-between items-center lg:items-start 2xl:justify-center 2xl:gap-6 p-6 rounded-2xl">
            <span className="bg-[#1E2322] w-auto rounded-full py-2 px-3 text-lg xl:text-xl font-semibold text-[#89A096]">
              {section01.title}
            </span>
            <h2 className="text-2xl lg:text-4xl 2xl:text-5xl text-center lg:text-left font-semibold text-[#8AD5B7] font-conthrax">
              {section01.heading}
            </h2>
            <p className="text-base font-semibold text-[#89A096]">
              {section01.text}
            </p>

            <div className="flex items-stretch justify-start gap-6">
              <div className="space-y-2 w-[98%]">
                {section01.items.map((item, index) => {
                  return (
                    <p
                      key={index}
                      className="text-xs text-center lg:text-left font-semibold text-[#89A096]"
                    >
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="flex items-stretch justify-start gap-6">
              <div className="bg-[#8AD5B7] w-2 h-auto hidden lg:block"></div>
              <p className="text-[#89A096] text-base font-semibold text-center lg:text-left w-full lg:w-2/3">
                {section01.additionalText}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#8AD5B7] w-[30%] mx-auto text-[#DCE2E2] h-2 my-10"></div>

        <div className="flex flex-col items-center justify-center gap-6 lg:gap-10 w-full lg:w-[80%] mx-auto">
          <h2 className="text-[#8AD5B7] text-3xl lg:text-5xl font-semibold font-conthrax">
            Know About LL 126
          </h2>
          <p className="text-[#89A096] text-lg lg:text-xl text-center font-semibold">
            Local Law 126 requires all NYC parking structures to undergo
            periodic inspections by licensed inspectors (QPSIs), these
            evaluations ensure structural integrity, identify hazards, and keep
            your property compliant with evolving safety regulations
          </p>
          <div className="bg-[#2E3734] rounded-lg p-6 lg:p-10 flex flex-col lg:flex-row lg:items-stretch justify-center lg:justify-between gap-6 lg:gap-0">
            <div className="w-full lg:w-[53%] 2xl:w-[40%] h-auto flex justify-center items-center">
              <h2 className="text-2xl md:text-3xl xl:text-4xl text-[#DCE2E2] font-semibold">
                What’s Reviewed During this Inspection
              </h2>
            </div>
            <div className="w-full lg:w-[45%]">
              {List_Sec1.map((list, index) => {
                return (
                  <div
                    key={index}
                    className="text-[#DCE2E2] text-base font-semibold"
                  >
                    <h4 className="italic">{list.heading}</h4>
                    <ul className="list-disc list-inside">
                      {list.items.map((item, index) => {
                        return (
                          <li key={index} className="flex gap-2 text-[#89A096]">
                            <DotIcon
                              className="text-[#89A096] w-[5%]"
                              size={32}
                            />
                            <span className="w-[95%]">{item}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/*Section 02 */}
      <section className="px-6 md:px-10 xl:px-16 pt-6 lg:pt-16 text-[#DCE2E2]">
        <div className="flex flex-col items-center justify-center gap-6 lg:gap-10 w-full lg:w-[90%] mx-auto pb-10">
          <h2 className="text-center text-3xl lg:text-5xl font-semibold font-conthrax text-[#8AD5B7]">
            {Compliance_Deadlines.title}
          </h2>
          <p className="text-[#89A096] text-base font-semibold text-center">
            {Compliance_Deadlines.text}
          </p>
          <table className="border-collapse border border-[#8AD5B7] w-full">
            <thead className="text-[#DCE2E2]">
              <tr>
                {Compliance_Deadlines.table.headers.map((header, index) => (
                  <th
                    key={index}
                    className="border-2 border-[#8AD5B7] p-4 text-center text-xl font-semibold"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-[#89A096]">
              {Compliance_Deadlines.table.rows.map((row, index) => (
                <tr key={index} className="border-2 border-[#8AD5B7]">
                  {Object.values(row).map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="border-2 border-[#8AD5B7] p-4"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 lg:gap-10 w-full lg:w-[95%] mx-auto pb-10">
          <h2 className="text-[#8AD5B7] text-3xl lg:text-5xl font-semibold font-conthrax text-center">
            What This Means for you
          </h2>

          <div className="flex flex-col items-start justify-center gap-6 lg:gap-10">
            <div className="w-full flex flex-col md:flex-row items-stretch text-center md:text-left justify-start gap-6 lg:w-[70%]">
              <h2 className="text-[#DCE2E2] text-2xl md:text-3xl font-semibold w-full mx-auto lg:w-[50%] xl:w-[40%] xl:mx-0">
                {WhatThisMeans.first.title}
              </h2>
              <p className="text-[#89A096] text-lg lg:text-xl text-left font-semibold w-full lg:w-[50%] xl:w-[45%]">
                {WhatThisMeans.first.text}
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-start justify-start gap-6 w-full lg:w-[85%]">
              <h4 className="text-[#DCE2E2] text-2xl md:text-3xl text-center md:text-left font-semibold w-full lg:w-[55%] xl:w-[45%]">
                {WhatThisMeans.second.title}
              </h4>
              <ul className="list-disc list-inside w-full">
                {WhatThisMeans.second.items.map((subItem, subIndex) => {
                  return (
                    <li key={subIndex} className="flex gap-2 text-[#89A096]">
                      <DotIcon className="text-[#89A096] w-[5%]" size={32} />
                      <span className="w-[95%]">{subItem}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full mx-auto flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8 sm:gap-12">
          <Image
            src="/pics/local-law-parking-pic2.png"
            alt="Inspection Services"
            width={500}
            height={500}
            className="w-[80%] lg:w-[40%] xl:w-[25%] 2xl:w-[25%] h-auto object-contain rounded-lg mb-4 sm:mb-6 lg:mb-0 mx-auto"
          />
          <div className="text-left w-full lg:w-[60%] xl:w-[70%] 2xl:w-[70%] flex flex-col items-start justify-center gap-3 sm:gap-6 p-6 bg-[#2D3533] rounded-3xl">
            {/* Heading */}
            <h2 className="text-[#8AD5B7] text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 lg:mb-8">
              Key Take-aways
            </h2>

            {/* List */}
            <ul className="flex flex-col gap-3 sm:gap-4 lg:gap-5">
              {keyTakeaways.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-2 sm:gap-3 items-start text-[#89A096]"
                >
                  <DotIcon
                    className="text-[#89A096] w-4 sm:w-5 flex-shrink-0 mt-1"
                    size={32}
                  />
                  <span className="text-sm italic lg:text-base font-semibold">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 03 */}
      <section className="px-6 md:px-10 xl:px-16 py-6 lg:py-16 text-[#DCE2E2]">
        <h2 className="text-center text-[#8AD5B7] text-3xl lg:text-5xl font-semibold font-conthrax mb-6 lg:mb-10">
          Our Offerings
        </h2>

        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-10 w-full lg:w-[90%] mx-auto pb-10">
            {[
              "Comprehensive Inspections",
              "Hassle-free Reporting",
              "Repairs & Maintenance",
              "Portfolio Management",
            ].map((item, index) => {
              return (
                <button
                  key={index}
                  className="bg-[#1E2322] text-2xl font-semibold text-[#DCE2E2] px-5 py-2 rounded-2xl min-h-24"
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        <h2 className="text-center text-[#8AD5B7] text-3xl lg:text-5xl font-semibold font-conthrax mb-2"> How It Works</h2>
        <p className="text-[#89A096] text-sm lg:text-base text-center font-semibold mb-6 lg:mb-10">Your Path to Compliance in 4 Easy Steps
        </p>

        <div className="relative flex flex-col items-center w-full py-4 sm:py-6 lg:py-8">
  {/* Vertical Line with Circles at Both Ends (Hidden on Mobile) */}
  <div className="hidden sm:flex absolute top-0 bottom-0 w-2 bg-[#DCE2E2] flex-col justify-between items-center">
    <div className="w-6 h-6 rounded-full bg-[#8AD5B7]"></div>
    <div className="w-6 h-6 rounded-full bg-[#8AD5B7]"></div>
  </div>

  {/* Timeline Items */}
  {timelineItems.map((item, index) => (
    <div
      key={index}
      className={`relative flex flex-col sm:flex-row w-full max-w-3xl ${
        item.position === "left" ? "sm:justify-start" : "sm:justify-end"
      } mb-6 sm:mb-8 lg:mb-10`}
    >
      {/* Horizontal Line and Circle (Mobile: Centered, Desktop: Positioned) */}
      <div
        className={`relative w-full sm:w-1/2 h-px rounded-full bg-[#DCE2E2] flex sm:hidden justify-center mb-2 sm:mb-0 sm:absolute sm:top-1/2 sm:transform sm:-translate-y-1/2 ${
          item.position === "left" ? "sm:right-0" : "sm:left-0"
        }`}
      >
        <div className="w-3 h-3 rounded-full bg-[#8AD5B7] absolute -top-2"></div>
      </div>

      <div
        className={`hidden sm:flex sm:absolute sm:top-1/2 sm:transform sm:-translate-y-1/2 sm:w-1/2 h-2 rounded-full bg-[#DCE2E2] ${
          item.position === "left" ? "sm:right-0" : "sm:left-0"
        }`}
      ></div>

      {/* Circle on the Text Side (Desktop Only) */}
      <div
        className={`hidden sm:block absolute top-1/2 transform -translate-y-1/2 w-6 h-6 z-50 rounded-full bg-[#8AD5B7] ${
          item.position === "left" ? "right-0" : "left-0"
        }`}
      ></div>

      {/* Content */}
      <div
        className={`flex items-center sm:items-start w-full sm:w-1/2 ${
          item.position === "left" ? "sm:pr-4 lg:pr-6" : "sm:pl-4 lg:pl-6"
        }`}
      >
        {/* Text */}
        <div
          className={`flex flex-col gap-1 sm:gap-1 lg:gap-2 w-full ${
            item.position === "left" ? "text-center sm:text-left" : "text-center sm:text-right"
          }`}
        >
          <h4 className="text-[#DCE2E2] text-lg sm:text-xl lg:text-2xl font-semibold">
            {item.title}
          </h4>
          <p className="text-[#89A096] text-sm sm:text-base">{item.description}</p>
        </div>
      </div>
    </div>
  ))}
</div>
      </section>

      {/* Section 04 */}
      <section className="px-6 md:px-10 xl:px-16 text-[#DCE2E2]">
        <h2 className="text-center text-3xl lg:text-5xl font-semibold font-conthrax mb-6 lg:mb-10">
          {" "}
          Why it Matters
        </h2>

        <div className="bg-[#8AD5B7] w-[30%] mx-auto text-[#DCE2E2] h-2 my-10"></div>

        <div className="flex flex-col items-center justify-center gap-6 lg:gap-10 w-full lg:w-[90%] mx-auto pb-10">
          {WhyItMatter.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center bg-[#1E232261] border-2 border-[#8AD5B7] justify-start gap-6 w-full rounded-lg p-6"
              >
                <img src="/pics/arrow.png" />
                <p className="text-[#89A096] text-lg lg:text-xl font-semibold w-full">
                  {item}
                </p>
              </div>
            );
          })}
        </div>

        {/* why PBS */}
        <div className="w-full flex flex-col lg:flex-row items-center md:items-stretch 2xl:items-center 2xl:justify-center gap-3 sm:gap-6 2xl:gap-16 py-10">
          <div className="w-full lg:w-[40%] xl:w-1/2 2xl:w-[60%] flex items-end">
            <Image
              src={whyPBS.img}
              alt="building"
              width={600}
              height={800}
              priority
              className="relative w-1/2 lg:w-full mx-auto h-auto lg:h-full object-contain lg:object-cover object-top rounded-[20%] mix-blend-luminosity"
            />
          </div>

          <div className="w-full lg:w-[65%] flex flex-col md:justify-end 2xl:justify-center lg:pb-6 h-full">
              <div className="w-full h-auto flex flex-col gap-2 2xl:gap-6">
                <h1 className="text-3xl text-center xl:text-5xl lg:text-left font-semibold font-conthrax text-[#8AD5B7] tracking-wide uppercase">
                  {whyPBS.title}
                </h1>
                <div className="text-sm lg:text-base 2xl:text-xl text-center md:text-left text-[#89A096] font-semibold space-y-1">
                  <div className="flex flex-col gap-2">
                    {whyPBS.list1.map((item, index) => {
                      return (
                        <span key={index} className="flex gap-2 text-left">
                          <DotIcon className="text-[#DCE2E2] w-[5%]" />
                          {index == 0 ? (
                            <span>
                              <span className="text-[#DCE2E2]">
                                {" "}
                                {item.split(",")[0]}
                              </span>{" "}
                              {item.trim().split(",")[1]}
                            </span>
                          ) : (
                            item
                          )}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div className="flex justify-start items-stretch gap-3 px-3">
                  <p className="text-2xl lg:text-3xl text-center md:text-left font-semibold text-[#DCE2E2]">
                    PA's
                  </p>
                </div>

                <div className="text-sm lg:text-base 2xl:text-xl text-center md:text-left font-semibold text-[#89A096] flex flex-col gap-2">
                  <div>
                    {whyPBS.list2.map((item, index) => {
                      return (
                        <p key={index} className="w-[90%] pl-[3%]">
                          {item}
                        </p>
                      );
                    })}
                  </div>
                </div>

                <div className="w-[30%] h-2 bg-[#8AD5B7] hidden lg:block mt-6"></div>

                <div className="space-y-1">
                  <p className="text-[#89A096] text-sm lg:text-base 2xl:text-xl text-center md:text-left font-semibold">
                    {whyPBS.text1}
                  </p>
                  <p className="text-[#89A096] text-sm lg:text-base 2xl:text-xl text-center md:text-left font-semibold">
                    {" "}
                    Schedule your inspection and get a quote in 24 Hour
                  </p>
                </div>

                <div className="mt-6 flex flex-col xl:flex-row gap-6 items-center justify-start">
                  <CTA2
                    text="Book Your Slot Now"
                    isArrow={false}
                    href="/tutorial"
                    styling={`w-[90%] md:w-2/3 lg:w-auto mt-0 rounded-2xl h-12 bg-[#8AD5B7] text-[#1E2322] px-0 lg:px-6 py-2 text-sm font-semibold whitespace-nowrap hover:brightness-105 transition lg:text-base font-conthrax `}
                  />
                  <CTA2
                    text="Call Our Inspectors (914-316-6956)"
                    isArrow={false}
                    href="/tutorial"
                    styling={`w-[90%] md:w-2/3 lg:w-auto mt-0 rounded-2xl h-12 bg-[#8AD5B7] text-[#1E2322] px-0 lg:px-6 py-2 text-sm font-semibold whitespace-nowrap hover:brightness-105 transition lg:text-base font-conthrax `}
                  />
                </div>
              </div>
            </div>
          </div>
      </section>

      <ImageCarousel/>
    </div>
  );
};

export default Page;
