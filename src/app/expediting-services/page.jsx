'use client'
import React from "react";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import { DotIcon } from "lucide-react";
import CTA2 from "@/components/CTA2";

const Page = () => {
  const section01 = {
    heading: "Navigating NYC’s permitting maze",
    text: "Navigating NYC’s permitting maze is a full-time job. Let PBS-Your trusted NYC expediting partner handle the red tape while you focus on building. From New Building Approvals to Violation Dismissals, we ensure your project moves forward, compliant and on time.",
    additionalText:
      "Whether you are a homeowner, a contractor securing a single permit or a developer managing a high-rise, PBS simplifies NYC’s red tape. Choose the services you need, skip what you don’t, we’re here to make compliance effortless",
  };

  const section2 = {
    heading: "Stress-Free Permitting, Step by Step",
    text: "We have 5 Step pathway for your permitting needs",
    items: [
      {
        title: "Consultation & Scope Review",
        description:
          "We identify every permit, approval, and inspection required for your project",
      },
      {
        title: "Document Preparation",
        description:
          "We prepare all the relevant documents required for any permitting process and make it sure that no delays occur from preparation.",
      },
      {
        title: "Agency Coordination",
        description:
          "We submit documents on your behalf to NYC agencies like DOB, FDNY, DOT etc. We track deadlines and resolve objections in real time.",
      },
      {
        title: "Final Approvals",
        description:
          "Final ApprovalsOnce the documents are submitted we wait until the final approval",
      },
    ],
  };

  const section3 = [
    {
      step: 1,
      title: "New Construction & Major Approvals",
      description:
        "Building from the ground up? We’re your foundation to finish partners. NYC’s rigorous new construction process demands precision. From securing Foundation permits to final Certificates of Occupancy, we ensure every phase meets DOB, DEP, & FDNY Standards. Whether demolishing an old structure or raising a high-rise, we handle it so you can focus on the build.",
      bullets: [
        "New Building Approval",
        "Foundation/Superstructure Permits",
        "Certificate of Occupancy",
        "Demolition Permits + DEP Asbestos Inspections",
        "Builders Paving Plan Approval",
      ],
    },
    {
      step: 2,
      title: "Alterations & Renovations",
      text: "Upgrading spaces without the upgrade in stress",
      description:
        "Retrofits and modernizations require NYC’s nod. We streamline permits for fire safety systems, structural changes, and post-approval tweaks, ensuring your project stays compliant & on budget.",
      bullets: [
        "Alteration Type II/III Permits (Sprinklers, Fire Alarms)",
        "Certificate of Occupancy",
        "Construction & Renovation",
        "Letter Of No Objection",
        "Post-Approval Amendments",
        "Self- Certification Filings",
        "Letter of Completion (FDNY, DEP)",
      ],
    },
    {
      step: 3,
      title: "Compliance & Violation Resolution",
      text: "Stop Fines before they stop your progress",
      description:
        "DOB violations, FDNY fines, or stop-work orders can derail timelines, We resolve issues swiftly, defend audits, and keep your project legally sound.",
      bullets: [
        "Violation Dismissal",
        "DOB Audit Defense",
        "Rescind Stop Work Orders",
        "Certificate of Correction,",
      ],
    },
    {
      step: 4,
      title: "Sitework & Infrastructure Permits",
      text: "Legalize your site, above and below ground",
      description:
        "Sidewalk scaffolding, sewer ties, or tree removals, we secure approvals so your site stays compliant and penalty-free.",
      bullets: [
        "DOT Roadway/Sidewalk Permits",
        "DEP Sewer/Hydrant Approvals",
        "Tree Removal/Planting Permits",
        "Street Obstruction Bond Renewals",
      ],
    },
    {
      step: 5,
      title: " Condo & Zoning Management",
      description:
        "Splitting lots, merging properties, or certifying zoning compliance? We turn complex rules into clear action.",
      bullets: [
        "Condo Lot Subdivision",
        "Merging Lots",
        "Exhibit 3 (Zoning Certification)",
        "Condominium Map Approvals",
      ],
    },
    {
      step: 6,
      title: "Legal & Insurance Compliance",
      text: "Keep Permits active and liabilities at bay",
      description:
        "Expired insurance or lapsed policies can halt projects, we renew, update, and file documents to keep you moving.",
      bullets: [
        "DOB/DOT Insurance Tracking",
        "Waivers (L2 Documents)",
        "Workers’ Comp Renewals",
        "Filing Fee Refund Applications",
      ],
    },
    {
      step: 7,
      title: " Inspections & Documentation",
      text: "Validate every step, on paper and on-site",
      description:
        "From fire alarms to asbestos, NYC demands proof. We coordinate inspections and secure critical paperwork.",
      bullets: [
        "FDNY Fire Alarm Sign-Off",
        "DOB Progress Inspections",
        "DEP Asbestos Checks",
        "Address Verification",
      ],
    },
    {
      step: 8,
      title: "Flexible & Hourly Support",
      text: "Need help for an hour - or a year? We adapt",
      description:
        "Not every project needs a full package. Our hourly experts step in for targeted tasks, from permits to Parks Department reviews.",
      bullets: [
        "Project Manager Hourly Rate",
        "Expeditor Hourlay Rate",
        "After-Hours Work Permits",
        "Parks Department Plan Reviews",
      ],
    },
  ];

  const section4 = {
    heading1: "Why PBS Works for Everyone",
    text1:
      "Need just a Letter of Completion? Or 20+ Permits? We scale to fit, Pay only for the services you use, we bring the same urgency, whether you’re a landlord fixing a violation or a developer building a new building, we prioritize your timeline.",
    heading2: "Why Choose PBS for NYC Permitting?",
    text2:
      "Because NYC’s bureaucracy doesn’t care if your project is big or small - but we do. We speak DOB, DEP, and FDNY fluently. Scale our services to fit your needs and turn permits into progress.",
    bullets: [
      "Having knowledge of all departments and their nuances happening in all 5 boroughs, we have Borough-Specific Expertise",
      "Inspection-Integrated Filings: Seamlessly link permits to mandatory FDNY Inspections, DOB progress Inspections.",
      "Guaranteed Compliance: Avoid fines, stop-work orders, and rejected applications with error-free submissions.",
      "Transparent pricing: Flat fees or hourly rates for project managers, Expediters, and special inspectors-no hidden markups",
    ],
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
        heading="NYC Permitting Made Simple. Pick Your Services, we’ll handle the rest"
        text="From Single Permits to Full-Suite Approvals: Fast, Flexible, and Transparent Expediting for Every Project Size."
        className="font-conthrax max-w-[90%] md:max-w-full xl:max-w-[95%] text-2xl sm:text-3xl 4xl:max-w-[70%] lg:text-4xl xl:text-5xl font-semibold"
        bgStyle="bg-right lg:bg-top bg-cover mix-blend-luminosity"
        isLine={false}
        textStyle="text-base sm:text-lg md:text-xl font-semibold text-[#89A096]"
        img="/pics/e-services-hero.png"
      />

      {/* Custom 'About Us' Label Divider */}
      <div className="w-[100vw] relative flex justify-center">
        <div className="bg-[#8AD5B7] w-full h-2 sm:h-3 lg:h-4"></div>
        <div className="bg-[#8AD5B7] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] sm:w-[60%] lg:w-[50%] rounded-full text-[#37403D] p-2 sm:p-3 lg:p-4 flex justify-center items-center font-conthrax text-center text-base sm:text-xl md:text-2xl lg:text-4xl z-20">
          Expediting Services
        </div>
      </div>

      {/*Section 01  */}
      <section className="px-6 md:px-10 xl:px-16 pt-24 md:pt-16 lg:pt-24 flex flex-col gap-6 text-[#DCE2E2]">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between 2xl:justify-center 2xl:gap-16 w-full">
          <Image
            src="/pics/e-services-pic1.png"
            alt="Inspection Services"
            width={500}
            height={500}
            className="w-[80%] lg:w-[45%] 2xl:w-[35%] 3xl:w-[30%] h-auto object-cover object-right-top rounded-[16%] mb-6 lg:mb-0 lg:mx-0 mx-auto mix-blend-luminosity"
          />
          <div className="w-full lg:w-[55%] 2xl:max-w-[45%] flex flex-col justify-center items-center lg:items-start 2xl:justify-center gap-3 xl:gap-6 p-6 rounded-2xl">
            <h2 className="text-2xl lg:text-4xl xl:text-5xl text-center lg:text-left font-semibold text-[#8AD5B7] font-conthrax">
              {section01.heading}
            </h2>
            <p className="text-lg lg:text-xl xl:text-2xl font-semibold text-[#89A096]">
              {section01.text}
            </p>
          </div>
        </div>

        <p className="text-[#89A096] text-lg lg:text-xl xl:text-2xl font-semibold text-center w-full lg:w-[70%] mx-auto">
          {section01.additionalText}
        </p>
      </section>

      <div className="bg-[#8AD5B7] w-[30%] mx-auto text-[#DCE2E2] h-2 my-10"></div>

      {/* Section 2 */}
      <section className="w-[90%] mx-auto px-6 md:px-10 xl:px-16 flex flex-col gap-6 text-[#DCE2E2]">
        <h3 className="text-2xl lg:text-4xl xl:text-[40px] leading-tight text-center font-semibold text-[#8AD5B7] font-conthrax">
          {section2.heading}
        </h3>
        <p className="text-xl xl:text-2xl text-center font-semibold">
          {section2.text}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {section2.items.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-[#2E3734] p-6 rounded-2xl flex flex-col justify-center gap-4"
              >
                <h4 className="text-xl xl:text-2xl text-center font-semibold">
                  {item.title}
                </h4>
                <p className="text-lg xl:text-xl text-center font-semibold text-[#89A096]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <div className="bg-[#8AD5B7] w-[30%] mx-auto text-[#DCE2E2] h-2 my-10"></div>

      {/* Section 3 */}
      <section className="w-full mx-auto px-6 md:px-10 xl:px-16 pb-6 flex flex-col gap-6 text-[#DCE2E2]">
        <h3 className="text-2xl lg:text-4xl xl:text-[40px] leading-tight text-center font-semibold text-[#8AD5B7] font-conthrax">
          {section01.heading}
        </h3>
        <p className="text-xl xl:text-2xl text-center font-semibold text-[#89A096] mb-6 lg:mb-10">
          {section01.text}
        </p>
        <div className="flex flex-col w-full gap-10 xl:gap-16 3xl:gap-10">
          {section3.map((item, index) => {
            return (
              <div
                key={index}
                className={`${
                  index % 2 === 0 ? "items-start" : "items-start lg:items-end"
                } rounded-2xl flex flex-col justify-center gap-4`}
              >
                <div className="w-full lg:w-2/3 2xl:w-1/2 flex items-stretch justify-center gap-5 xl:gap-6">
                  <span className="w-[10%] flex items-center text-[100px] flex-shrink-0 lg:text-[128px] text-[#8AD5B7] font-semibold">
                    {item.step}
                  </span>
                  <div className="bg-[#8AD5B7] w-2 flex-shrink-0"></div>
                  <div className="flex flex-col gap-2 xl:w-[85%]">
                    <h4 className="text-xl lg:text-2xl xl:text-3xl text-center md:text-left font-semibold text-[#8AD5B7]">
                      {item.title}
                    </h4>
                    <p className="text-base lg:text-xl text-left font-semibold italic">
                      {item?.text}
                    </p>
                    <p className="text-base lg:text-xl text-left font-semibold text-[#89A096]">
                      {item.description}
                    </p>
                    <ul className="">
                      {item.bullets.map((bullet, bulletIndex) => (
                        <li
                          key={bulletIndex}
                          className="text-lg xl:text-xl text-[#89A096] font-semibold flex items-start gap-2"
                        >
                          <DotIcon className="inline-block flex-shrink-0" size={32} />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="bg-[#8AD5B7] w-[30%] mx-auto text-[#DCE2E2] h-2 my-10"></div>

      {/* Section 4 */}
      <section className="w-full mx-auto px-6 md:px-10 xl:px-16 flex flex-col gap-10 text-[#DCE2E2]">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl text-center font-semibold text-[#8AD5B7] font-conthrax max-w-3xl mx-auto">
            {section4.heading1}
          </h2>
          <p className="text-lg xl:text-2xl text-center font-semibold text-[#89A096]">
            {section4.text1}
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl text-center font-semibold text-[#8AD5B7] font-conthrax max-w-3xl mx-auto">
            {section4.heading2}
          </h2>
          <p className="text-lg xl:text-2xl text-center font-semibold text-[#89A096]">
            {section4.text2}
          </p>
        </div>

        <div className="flex flex-col gap-6">
            {section4.bullets.map((bullet, index) => {
                return (
                    <div
                    key={index}
                    className="text-lg xl:text-2xl text-[#89A096] font-semibold flex items-start gap-2"
                    >
                    <DotIcon className="inline-block flex-shrink-0" size={32} />
                    <span>{bullet}</span>
                    </div>
                );
            })}
        </div>

        <CTA2
         isArrow={false}
         text ="Whether you’re fixing a violation or building a legacy, PBS is your partner in precision."
         href="/"
                  styling={`w-[90%] lg:w-auto mt-0 mx-auto mb-10 rounded-2xl h-12 bg-[#8AD5B7] text-[#1E2322] px-0 xl:px-3 2xl:px-6 py-2 text-sm font-semibold whitespace-nowrap hover:brightness-105 transition xl:text-base font-conthrax `}  
        />
      </section>
    </div>
  );
};

export default Page;
