"use client";

import { motion } from "framer-motion";
import HeroSection from "../../../components/HeroSection";
import { parapetData } from "../data"; // Import parapetData
import Image from "next/image";
import { DotIcon } from "lucide-react";

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
        img="/pics/local-law-parking-hero.png"
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
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between 2xl:justify-center 2xl:gap-16 w-full">
          <Image
            src="/pics/local-law-11-pic1.png"
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

        <div className="bg-[#8AD5B7] w-[30%] mx-auto text-[#DCE2E2] h-2 my-10"></div>

        <div className="flex flex-col items-center justify-center gap-6 lg:gap-10 w-full lg:w-[80%] mx-auto">
          <h2 className="text-[#DCE2E2] text-3xl lg:text-5xl font-semibold font-conthrax text-center">
            Know About Parapet Inspections, (LL126)
          </h2>
          <p className="text-[#89A096] text-lg lg:text-xl text-center font-semibold">
            Under Local law 126 all NYC buildings with parapets visible from
            public sidewalks or streets must undergo annual inspections. These
            evaluations ensure structural stability, identify risks like loose
            bricks or leaning walls, and prevent accidents that could lead to
            lawsuits or City-mandated emergency repairs
          </p>
        </div>
          
          {/* Timeline Structure */}
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
          </div>
      </section>
    </div>
  );
};

export default Page;
