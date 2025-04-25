"use client";

import { motion } from "framer-motion";
import HeroSection from "../../../components/HeroSection";
import { parapetData } from "../data"; // Import parapetData
import Image from "next/image";
import { DotIcon } from "lucide-react";
import CTA2 from "@/components/CTA2";
import CTA from "@/components/CTA";
import ImageCarousel from "@/components/ImageCarousel";

const Page = () => {
  const section01 = {
    title: "3- Parapet Inspection (Local Law 126)",
    heading: "The Wall you never Notices, Falls",
    text: "Parapets Protect, PBS Perfects",
    items: [
      "Why it's Critical:Aging parapets can loosen or detach due to weathering, hidden corrosion, or poor construction, risking collapse and endangering pedestrians below",
      "Winter Warning & Summer Threats:Our certified inspectors inspect your parapets with attention to detail and we provide actionable repair plans and documentation to resolve issues swiftly, ensuring your parapets meet safety codes.",
    ],
    additionalText: "Parapet inspections are not Seasonal",
  };

  const Div2_Sec1 = {
    left: {
      heading: "Know About Parapet Inspections (LL126)",
      text: "Under Local law 126 all NYC buildings with parapets visible from public sidewalks or streets must undergo annual inspections. These evaluations ensure structural stability, identify risks like loose bricks or leaning walls, and prevent accidents that could lead to lawsuits or City-mandated emergency repairs. Parapets face constant stress from wind, rain, freeze-thaw cycles, and aging materials, and when they fall, the consequences are severe",
    },
    right: {
      items: [
        "Falling Debris, injuring pedestrians",
        "Costly emergency repairs and DOB violations",
        "Lawsuits from property damage or injuries",
      ],
      CTA: "Learn More",
    },
  };

  const WhoNeedsInspections = {
    heading: "Who needs a parapet inspection",
    text1: "Your building requires an annual inspection if",
    items: [
      "The parapet is visible from a public sidewalk or street.",
      "The exterior wall is accessible to the public (even on private property)",
      "No continuous barrier exists within half the height of the exterior wall",
    ],
    text2:
      "Exemptions - Detached 1- or 2-family homes and buildings with barriers blocking public access",
  };

  const complianceDetails = [
    {
      title: "Who's Affected",
      description:
        "Commercial, residential, and mixed-use buildings. (Detached 1-2 family homes, certain low-rise buildings)",
    },
    {
      title: "Deadlines",
      description:
        "Unsafe conditions MUST be fixed within 90 DAYS Get the property/Portfolio registered in PBS Alert to get timely Alerts",
    },
    {
      title: "Penalties",
      description: "Fines up to $25K for Non-Compliance or Late Repairs",
    },
  ];

  const Process = {
    heading: "Our inspection process",
    items: [
      " Consultation: Discuss your building’s needs and schedule inspection",
      "On-Site Assessment:Our team conducts a thorough visual and structural evaluation.",
      "Detailed Reporting:Receive a digital and physical report with photos, findings, and next steps.",
      "Repairs & Follow:Access trusted partners for repairs or re- inspections",
      "Ongoing Compliance Management:PBS Alert System will keep you updated with the inspection reminders and other deadlines, violations on your property",
    ],
  };

  const WhyPBS = {
    heading: "Why Choose PBS",
    text: "Proactive Building Solutions aren’t just about compliance, they’re about preventing disasters before they happen. A small investment today avoids catastrophic costs tomorrow",
    items: [
      {
        img: "/pics/local-law-parapet-pic3.png",
        data: {
          title: "NYC-compliant inspections by licensed Experts",
          text: "Our team includes licensed engineers, architects, masons, and DOB-approved inspectors with deep expertise in parapet safety, we identify risks and deliver actionable solutions.",
        },
      },
      {
        img: "/pics/local-law-parapet-pic4.png",
        data: {
          title: "Comprehensive Inspection Process",
          text: "We follow NYC’s strict criteria to assess:",
          items: [
            "Structural integrity - We check for plumb alignment, cracks, loose bricks, or deteriorated mortar joints & mortars.",
            "Appurtenances - We verify stability of railings, telecom equipment, fire escape attachments, and cornices",
            "Material Deterioration - We detect spalling, rot, or displacement requiring urgent repairs",
          ],
        },
      },
      {
        img: "/pics/local-law-parapet-pic5.png",
        data: {
          title: "Hassle-Free Reporting & Compliance",
          text: "We are detailed NYC-ready reports that include:",
          items: [
            "Photographic evidence of parapet conditions",
            "Construction details (materials, height, thickness)",
            "Clear classification whether the parapet is SAFE, UNSAFE, or requires maintenance",
            "Recommendations for repairs with proactive & protective measures",
          ],
        },
      },
      {
        img: "/pics/local-law-parapet-pic6.png",
        data: {
          title: "Emergency Hazard Mitigation",
          text: "If hazards are found, we:",
          items: [
            "Immediately notify DOB on your behalf",
            "Install protective measures (safety netting, fencing)",
            "Expedite repairs within 90 days to avoid penalties",
          ]
        },
      },
    ],
    text2: "Safety isn’t Optional, Compliance is Non-Negotiable, stay compliant, avoid fines, and protect the public with PBS (Proactive building Solutions). Avoid the Year-End Rush"
  };

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
        heading="Comply with LL 126 Parapet Inspection"
        text="Prevent Hazards, avoid Penalties by the help our licensed experts"
        className="font-conthrax max-w-[90%] sm:max-w-2xl md:max-w-4xl lg:max-w-5xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold"
        bgStyle="bg-right lg:bg-top bg-cover mix-blend-luminosity"
        isLine={false}
        textStyle="text-base sm:text-lg md:text-xl font-semibold text-[#89A096]"
        img="/pics/local-law-parapet-hero.png"
      />

      {/* Custom 'About Us' Label Divider */}
      <div className="w-[100vw] relative">
        <div className="bg-[#8AD5B7] w-full text-[#DCE2E2] py-1"></div>
        <div className="bg-[#8AD5B7] w-[60%] absolute left-[20%] -top-8 md:-top-5 lg:-top-6 rounded-full text-[#37403D] p-2 flex justify-center items-center font-conthrax text-center text-xl md:text-2xl lg:text-4xl z-20">
          Local Law 126 (Parapet)
        </div>
      </div>

      {/*Section 01  */}
      <section className="px-6 md:px-10 xl:px-16 pt-24 md:pt-16 lg:pt-24 text-[#DCE2E2]">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between 2xl:justify-center 2xl:gap-16 w-full pb-10">
          <Image
            src="/pics/local-law-parapet-pic2.png"
            alt="Inspection Services"
            width={500}
            height={500}
            className="w-[80%] lg:w-[40%] h-auto object-cover object-right-top rounded-[16%] mb-6 lg:mb-0 lg:mx-0 mx-auto mix-blend-luminosity"
          />
          <div className="w-full lg:w-[55%] flex flex-col gap-3 justify-between items-center lg:items-start 2xl:justify-center 2xl:gap-6 p-6 rounded-2xl">
            <span className="bg-[#1E2322] w-auto rounded-full py-2 px-3 text-lg xl:text-xl font-semibold text-[#89A096]">
              {section01.title}
            </span>
            <h2 className="text-3xl lg:text-[40px] font-semibold text-[#8AD5B7] font-conthrax">
              {section01.heading}
            </h2>
            <p className="text-base font-semibold text-[#89A096]">
              {section01.text}
            </p>

            <div className="flex items-stretch justify-start gap-6">
              <div className="bg-[#8AD5B7] w-2 h-auto"></div>
              <div className="space-y-2 w-[98%]">
                {section01.items.map((item, index) => {
                  // Count the number of colons in the item to identify multi-colon item
                  const colonCount = (item.match(/:/g) || []).length;
                  const isMultiColon = colonCount > 1;

                  const heading = item.substring(0, item.indexOf(":"));
                  const description = item.substring(item.indexOf(":") + 1);

                  return (
                    <div key={index} className="space-y-1">
                      {/* Heading: Always the part before the first colon */}
                      <h4 className="text-sm font-semibold text-[#DCE2E2]">
                        {heading}
                      </h4>

                      {isMultiColon ? (
                        <ul className="space-y-2">
                          {description.split(".").map((pair, idx) => {
                            return (
                              <li
                                key={idx}
                                className="text-xs font-semibold text-[#89A096]"
                              >
                                <span className="font-semibold">
                                  {pair.substring(0, pair.indexOf(":")).trim() +
                                    ":"}
                                </span>{" "}
                                {pair.substring(pair.indexOf(":") + 1).trim()}
                              </li>
                            );
                          })}
                        </ul>
                      ) : (
                        // Single-colon item: Render description as a paragraph
                        <p className="text-xs font-semibold text-[#89A096]">
                          {description.trim()}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <p className="text-[#89A096] text-base font-semibold text-center lg:text-left w-full lg:w-2/3">
              {section01.additionalText}
            </p>
          </div>
        </div>

        <div className="bg-[#2E3734] rounded-lg p-6 lg:p-10 flex flex-col lg:flex-row lg:items-stretch justify-center lg:justify-between gap-6">
          <div className="w-full lg:w-[65%] 2xl:w-[60%] h-auto flex flex-col justify-center items-center gap-6">
            <h2 className="text-2xl md:text-4xl xl:text-5xl text-[#8AD5B7] font-semibold font-conthrax">
              {Div2_Sec1.left.heading}
            </h2>
            <p className="text-[#89A096] text-base lg:text-xl font-semibold">
              {Div2_Sec1.left.text}
            </p>
          </div>
          <div className="w-full lg:w-[35%] flex flex-col justify-end gap-6">
            <div className="space-y-1">
              {Div2_Sec1.right.items.map((list, index) => {
                return (
                  <div
                    key={index}
                    className="text-[#DCE2E2] text-base font-semibold"
                  >
                    <p key={index} className="flex gap-2 text-[#89A096]">
                      <DotIcon className="text-[#89A096] w-[10%]" size={32} />
                      <span className="w-[90%]">{list}</span>
                    </p>
                  </div>
                );
              })}
            </div>
            <CTA2
              text={Div2_Sec1.right.CTA}
              isArrow={false}
              href="/tutorial"
              styling={`w-48 md:w-[50%] mt-0 rounded-2xl h-12 bg-[#8AD5B7] text-[#1E2322] px-0 lg:px-6 py-2 text-sm font-semibold hover:brightness-105 transition lg:text-base font-conthrax ml-6`}
            />
          </div>
        </div>
      </section>

      {/* Section 02 */}
      <section className="px-6 md:px-10 xl:px-16 pt-24 md:pt-6 lg:pt-10 text-[#DCE2E2]">
        <div className="w-full lg:w-[80%] mx-auto flex flex-col items-center gap-6 2xl:gap-8">
          <h2 className="text-3xl lg:text-5xl font-semibold text-[#8AD5B7] font-conthrax text-center">
            {WhoNeedsInspections.heading}
          </h2>

          <p className="text-[#89A096] text-base lg:text-xl font-semibold text-center">
            {WhoNeedsInspections.text1}
          </p>

          {WhoNeedsInspections.items.map((item, index) => {
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

          <p className="text-[#89A096] text-base lg:text-xl font-semibold text-center lg:max-w-3xl">
            {WhoNeedsInspections.text2}
          </p>
        </div>

        <div className="relative flex flex-col items-center justify-center gap-4 sm:gap-6 lg:gap-8 w-full mx-auto py-4 sm:py-6 lg:py-10">
          {/* Heading */}
          <h2 className="text-[#8AD5B7] text-2xl sm:text-3xl lg:text-5xl font-semibold font-conthrax text-center w-[80%] xl:w-[65%] mx-auto">
            Key Compliance Details you should know
          </h2>
          <div className="hidden lg:flex relative w-[70%] mx-auto h-24 sm:h-32 lg:h-40 items-center justify-center">
            {/* Horizontal Line with Circles at Both Ends */}
            <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-2 rounded-full bg-[#DCE2E2] flex justify-between items-center">
              <div className="absolute top-0 left-full transform -translate-x-1/2 w-2 rounded-full bg-[#DCE2E2] flex flex-col justify-between items-center h-20">
                <div className="absolute bottom-0 w-6 h-6 rounded-full bg-[#8AD5B7] z-50"></div>
              </div>

              <div className="absolute top-0 left-0 transform -translate-x-1/2 w-2 rounded-full bg-[#DCE2E2] flex flex-col justify-between items-center h-20">
                <div className="absolute bottom-0 w-6 h-6 rounded-full bg-[#8AD5B7] z-50"></div>
              </div>
            </div>

            {/* Vertical Line with Circles at Both Ends */}
            <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-2 rounded-full bg-[#DCE2E2] flex flex-col justify-between items-center">
              <div className="w-6 h-6 rounded-full bg-[#8AD5B7] z-50"></div>
              <div className="w-6 h-6 rounded-full bg-[#8AD5B7] z-50"></div>
            </div>
          </div>

          {/* Cards and Horizontal Lines */}
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between w-full gap-6 lg:gap-8">
            {complianceDetails.map((item, index) => (
              <div
                key={index}
                className="relative bg-[#1E2322] rounded-lg p-3 sm:p-4 lg:p-5 w-full sm:w-3/4 lg:w-full flex flex-col gap-2 sm:gap-3"
              >
                <h3 className="text-[#DCE2E2] text-lg sm:text-xl lg:text-2xl font-semibold text-center">
                  {item.title}
                </h3>
                <p className="text-[#89A096] text-sm sm:text-base lg:text-lg font-semibold text-center">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <CTA
            text="Get Timely Alerts"
            href="/tutorial"
            styling={`w-[50%] mt-0 rounded-2xl h-12 bg-[#8AD5B7] text-[#1E2322] px-0 lg:px-6 py-2 text-sm font-semibold hover:brightness-105 transition lg:text-base font-conthrax ml-6`}
          />
        </div>
      </section>

      <div className="w-[30%] mx-auto bg-[#8AD5B7] h-2"></div>

      {/* Section 03 */}
      <section className="px-6 md:px-10 xl:px-16 pt-24 md:pt-6 lg:pt-10 text-[#DCE2E2]">
        <div className="relative flex flex-col items-center justify-center gap-4 sm:gap-6 lg:gap-8 w-[90%] mx-auto py-4 sm:py-6 lg:py-10">
          <h2 className="text-3xl lg:text-5xl font-semibold font-conthrax text-center">
            {Process.heading}
          </h2>

          <div className="flex flex-col lg:flex-row flex-wrap items-center lg:items-stretch justify-between w-full gap-6 lg:gap-8">
            {Process.items.map((item, index) => (
              <div
                key={index}
                className={`relative w-full sm:w-3/4 ${
                  index !== Process.items.length - 1
                    ? "lg:w-[48%]"
                    : "relative lg:left-[25%] lg:w-4/6"
                } flex items-center gap-2 sm:gap-3`}
              >
                {/* Outer Circular Div with Custom Border */}
                <div
                  className={`relative rounded-full w-full flex items-center p-3 sm:p-4 lg:p-5 bg-transparent overflow-hidden`}
                >
                  {/* Border Div with Clip-Path */}
                  <div
                    className={`absolute inset-0 rounded-full border-4 border-[#8AD5B7]`}
                    style={{
                      clipPath:
                        "polygon(0 0, 0 0, 50% 50%, 0 60%, 0 100%, 75% 100%, 75% 75%, 25% 75%, 25% 25%, 0 0)",
                    }}
                  ></div>

                  {/* Content */}
                  <div className="flex items-center gap-2 sm:gap-3 w-full">
                    <div className="rounded-full border-2 border-[#8AD5B7] w-36 h-36 aspect-square flex items-center justify-center text-6xl font-semibold text-[#DCE2E2]">
                      {index + 1}
                    </div>
                    <p className="flex flex-col 2xl:max-w-xl">
                      <span className="italic text-base lg:text-lg xl:text-2xl font-semibold text-[#DCE2E2]">
                        {item.split(":")[0]}
                      </span>
                      <span className="text-base lg:text-lg xl:text-2xl font-semibold text-[#89A096]">
                        {item.split(":")[1]}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[30%] mx-auto bg-[#8AD5B7] h-2"></div>

        <div className="w-full lg:w-[90%] mx-auto overflow-hidden relative text-[#DCE2E2] py-6 sm:py-8 lg:py-10">
          {/* Moved title section here and fixed spacing */}
          <div className="text-center">
            <h1 className="text-[#8AD5B7] text-3xl lg:text-5xl font-conthrax tracking-widest mb-4">
              {WhyPBS.heading}
            </h1>
            <p className="text-base lg:text-xl font-semibold px-10 text-[#89A096] max-w-5xl mx-auto">
              {WhyPBS.text}
            </p>
          </div>

          {/* Content Items */}
          <div className="w-full flex flex-col gap-6 lg:gap-8">
            {WhyPBS.items.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center md:items-stretch md:justify-between rounded-lg p-4 sm:p-6 lg:p-8 gap-4 md:gap-6 lg:gap-8`}
              >
                {/* Image */}
                <div className="w-[30%] xl:w-[20%] h-auto flex-shrink-0 flex items-center">
                  <Image
                    src={item.img}
                    alt={item.data.title}
                    width={500}
                    height={500}
                    className="w-full h-full object-contain mix-blend-luminosity"
                  />
                </div>

                {/* Text Content */}
                <div className="w-[70%] h-auto flex flex-col justify-center gap-2 sm:gap-3 lg:gap-4 flex-1 bg-[#2D3533] p-3 lg:p-6 rounded-3xl">
                  <h3 className="text-[#8AD5B7] text-xl lg:text-3xl font-semibold">
                    {item.data.title}
                  </h3>
                  <div className="text-[#89A096] italic text-sm lg:text-base font-semibold space-y-2">
                    <span>{item.data.text}</span>
                    <p>
                      {item.data.items
                        ?.map(
                          (text, idx) =>
                            idx !== 0 && (
                              <span key={idx} className="flex items-start">
                                <DotIcon
                                  className="text-[#89A096] w-[5%]"
                                  size={32}
                                />
                                <span className="w-[70%]">{text.trim()}</span>
                              </span>
                            )
                        )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-base font-semibold text-[#89A096]">{WhyPBS.text2}</p>

          <div className="w-full mt-6 flex justify-center gap-6 items-center">
                          <CTA2
                            text="Book Your Slot Now"
                            isArrow={false}
                            href="/tutorial"
                            styling={`w-[90%] md:w-2/3 lg:w-full xl:w-auto mt-0 rounded-2xl h-12 bg-[#8AD5B7] text-[#1E2322] px-0 lg:px-6 py-2 text-sm font-semibold whitespace-nowrap hover:brightness-105 transition lg:text-base font-conthrax `}
                          />
                          <CTA2
                            text="Call Our Inspectors (914-316-6956)"
                            isArrow={false}
                            href="/tutorial"
                            styling={`w-[90%] md:w-2/3 lg:w-full xl:w-auto mt-0 rounded-2xl h-12 bg-[#8AD5B7] text-[#1E2322] px-0 lg:px-6 py-2 text-sm font-semibold hover:brightness-105 transition lg:text-base font-conthrax`}
                          />
                        </div>
        </div>
      </section>

      <ImageCarousel/>
    </div>
  );
};

export default Page;
