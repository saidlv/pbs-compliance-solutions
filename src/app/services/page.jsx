"use client";

import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import { Building, FileText, Rocket, Home, DotIcon } from "lucide-react";
import ExpandableSections from "./ExpandableSections"; // Import ExpandableSections
import Image from "next/image";
import CTA from "@/components/CTA2";
import CTA2 from "@/components/CTA2";

/**
 * @typedef {Object} Service
 * @property {string} title - The name of the service
 * @property {JSX.Element} icon - Lucide React icon component for the service
 * @property {string} description - Brief description of the service
 * @property {string[]} sections - Array of sections with detailed information
 * @property {string} cta - Call to action text (optional)
 */

/**
 * Array of services offered by the company
 * Each service includes a title, icon, description, sections, and optional CTA
 * Icons are imported from lucide-react library
 *
 * @type {Service[]}
 */
const services = [
  {
    id:1,
    title: "Owner Representatives",
    icon: "/pics/service1.png",
    description:
      "We act as your voice in property management, advocating for your interests in compliance, inspections, and cost optimization. From liaising with contractors to resolving violations, we simplify complexity.",
    sections: [
      "Local Law Compliance: Manage deadlines for LL11, LL126, and LL152",
      "\nCost-Saving Strategies: Negotiate contractor rates and avoid fines",
      "\nTransparent Reporting: Real-time updates via client portal.",
    ],
    cta: "Learn more (redirect to Owner representation page)",
  },
  {
    id:2,
    title: "Compliance Inspection Services",
    icon: "/pics/service2.png",
    description:
      "Stay ahead of NYC’s stringent building codes with our certified inspections for facades, elevators, gas lines, and fire safety systems.",
    sections: [
      ":PBS ensures clients comply with local and state construction regulations, including managing paperwork, permits and adherence to zoning codes.",
      ":PBS simplifies the regulatory process, helping clients avoid fines, delays and project interruptions through expert compliance management and guidance.",
    ],
  },
  {
    id:3,
    title: "Expediting Services",
    icon: "/pics/service3.png",
    description:
      "Fast-track permits and approvals for construction projects, renovations, and system upgrades. PBS expedites the permit approval process, providing clients with a faster route to project completion, eliminating bottlenecks, and ensuring adherence to project timelines.",
    sections: [
      "Speed: 50% faster permit approvals vs. DIY filings",
      "\nAccuracy: Error-free submissions to avoid rejections",
      "\nFull-Service: DOB, FDNY, DOT, and zoning filings.",
    ],
    cta: "Learn more about our range of Expediting services",
  },
  {
    id:4,
    title: "Property Management",
    icon: "/pics/service4.png",
    description:
      "End-to-end management for residential and commercial properties, ensuring profitability, compliance, and tenant satisfaction. End-to-end management for residential and commercial properties, ensuring profitability, compliance, and tenant satisfaction.",
    sections: [
      "Financial Oversight: Rent collection, budgeting, and reporting.",
      "\nMaintenance: 24/7 emergency repairs and preventive care.",
      "\nLegal Compliance: Lease agreements and safety audits.",
    ],
  },
];

/**
 * Services Page Component
 *
 * Displays the company's services in a visually appealing layout.
 * Features include:
 * - Hero section with page title
 * - Services grid with animated cards using Framer Motion
 * - Expandable detailed sections for each service
 * - Responsive design for various screen sizes
 *
 * The page is structured in two main sections:
 * 1. A grid of service cards showing a summary of each service
 * 2. Expandable detailed sections with comprehensive information about each service
 *
 * @returns {JSX.Element} The rendered Services page
 */
const Page = () => {
  /**
   * Animation variants for service cards
   * Defines the initial hidden state and visible state for smooth animations
   *
   * @type {Object}
   */
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-screen overflow-hidden">
      {/* Hero Section - Page Title and Introduction */}
      <HeroSection
        heading="Your Trusted Partner in Property Compliance, Safety, and Management"
        text="At PBS, we don’t just inspect-we protect. From permits to final sign-off, our values ensure your project stays on time, on budget and above board"
        className="font-conthrax max-w-4xl lg:max-w-5xl text-3xl lg:text-5xl font-semibold"
        bgStyle="bg-top md:bg-top bg-cover mix-blend-luminosity"
        isLine={true}
        textStyle="text-xl font-semibold"
        img="/pics/ServiceHeroBg.png"
      />

      {/* Custom 'About Us' Label Divider */}
      <div className="w-[100vw] relative">
        <div className="bg-[#8AD5B7] w-full text-white py-1"></div>
        <div className="bg-[#8AD5B7] w-[60%] sm:w-1/2 lg:w-1/3 absolute left-[20%] sm:left-[25%] lg:left-[33%] -top-5 lg:-top-6 rounded-full text-[#37403D] p-2 flex justify-center items-center font-conthrax text-2xl lg:text-4xl z-20">
          Our Services
        </div>
      </div>

      {/* Services Grid Section */}
      <section
        className="w-screen overflow-hidden relative bg-[#37403D] py-16 px-6 md:px-12 lg:px-16"
        style={{
          backgroundImage: `url('/pics/Brand Patterns-01 1.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full overflow-hidden relative">
          {/* Moved title section here and fixed spacing */}
          <div className="text-center my-2 mb-10 py-2">
            <h1 className="text-[#DCE2E2] text-4xl font-conthrax tracking-widest mb-6">
              Comprehensive Property Services
            </h1>
            <p className="text-base font-poppins font-semibold px-10 text-[#DCE2E2] max-w-2xl mx-auto">
              From compliance to management, we deliver end-to-end solutions for
              your property needs.
            </p>
          </div>

          <div className="w-full flex flex-col items-center gap-6 sm:gap-8">
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  className={`w-full flex flex-col md:${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center md:items-start justify-between gap-12 p-4`}
                >
                  <div className="w-full md:w-1/2 flex justify-center items-center">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={100}
                      height={100}
                      priority
                      className="md:w-full object-cover mix-blend-luminosity"
                    />
                  </div>
                  <div className="flex flex-col gap-4 w-full md:w-1/2">
                    <h2 className="text-4xl font-semibold text-[#8AD5B7] font-conthrax">
                      {service.title}
                    </h2>
                    <p className="text-[#89A096] text-base font-semibold">
                      {service.description}
                    </p>
                    <div className="flex gap-8 items-stretch">
                      <div className={`w-1.5 bg-[#8AD5B7]`}></div>
                      <ul>
                        {service.sections.map((section, idx) => {
                          return (
                            <li
                              key={idx}
                              className="text-[#DCE2E2] text-base font-semibold mb-2"
                            >
                               <h4 className="text-sm font-semibold">
                                {service.id !== 2 ? (section?.split(":")[0] + ": ") : ""}
                              </h4>
                              <p className="flex gap-3 test-xs font-semibold text-[#89A096]">
                              {service.id !== 2 && <DotIcon />}
                                <span>{section?.split(":")[1]}</span>
                              </p>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <CTA2  text="Read More..."
                    isArrow  = {false}
                href="/tutorial"
                styling="w-2/5 rounded-xl mt-3 h-12 bg-[#8AD5B7] text-black px-0 lg:px-6 py-2 text-sm font-semibold whitespace-nowrap hover:brightness-105 transition text-sm lg:text-base font-conthrax"/>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={`w-[30%] h-1 rounded-full bg-[#8AD5B7] mx-auto mb-6`}></div>

          <div className="text-[#DCE2E2] text-center">
            <h4 className="text-4xl font-semibold font-conthrax mb-6">We Serve Across NYC’s Departments</h4>
            <p className="text-base font-semibold max-w-3xl mx-auto">We don't only deal with these departments for your Alerts but we also deal with these departments for your permitting and inspection work
            </p>
          </div>
        </div>
      </section>

      {/* Expandable Detailed Sections Component with service data */}
      <ExpandableSections services={services} />
    </div>
  );
};

export default Page;
