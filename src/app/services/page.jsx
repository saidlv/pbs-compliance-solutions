"use client";

import HeroSection from "@/components/HeroSection";
import { services, sections, whyPBS, imgCarousel } from "./data"; // Importing services data
import { motion } from "framer-motion";
import { Building, FileText, Rocket, Home, DotIcon } from "lucide-react";
import Image from "next/image";
import CTA2 from "@/components/CTA2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const settings = {
    dots: false, // Show navigation dots
    infinite: true, // Loop slides
    speed: 500, // Transition speed
    slidesToShow: 5, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    centerPadding: "0%", // Add padding to show partial next/prev slides
    arrows: false, // Hide arrows for mobile
    autoplay: true, // Optional: Auto-scroll slides
    autoplaySpeed: 2000, // Optional: 3 seconds per slide
    responsive: [
      {
        breakpoint: 720, // Adjust for very small screens
        settings: {
          centerPadding: "5%",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // Adjust for very small screens
        settings: {
          centerPadding: "5%",
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="w-screen overflow-hidden box-border">
      {/* Hero Section - Page Title and Introduction */}
      <HeroSection
        heading="Your Trusted Partner in Property Compliance, Safety, and Management"
        className="font-conthrax max-w-4xl lg:max-w-5xl text-3xl lg:text-5xl font-semibold"
        bgStyle="bg-top md:bg-top bg-cover mix-blend-luminosity"
        isLine={false}
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
            <h1 className="text-[#DCE2E2] text-4xl font-conthrax tracking-widest mb-4">
              PBS delivers expert solutions
            </h1>
            <p className="text-base font-poppins font-semibold px-10 text-[#DCE2E2] max-w-2xl mx-auto">
              to navigate NYC’s complex regulations, streamline operations, and
              protect your property investments.
            </p>
          </div>

          <div className="w-[95%] flex flex-col items-center gap-6 sm:gap-16 mb-16">
            {services.map((service, index) => {
              return (
                <div key={index}>
                  <div
                    className={`w-full flex flex-col ${
                      service.id % 2 === 1 ? "lg:flex-row" : "lg:flex-row-reverse"
                    } items-center lg:items-stretch lg:justify-between gap-12 p-4 lg:p-6`}
                  >
                    <div className="w-full lg:w-2/5 xl:w-1/2 aspect-aquare flex justify-center items-center">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={600}
                        height={600}
                        priority
                        quality={100}
                        className="w-full h-full object-cover object-top-right mix-blend-luminosity rounded-[10%]"
                      />
                    </div>
                    <div className="flex flex-col gap-4 w-full lg:w-3/5 xl:w-1/2 justify-start">
                      <h2 className="text-3xl md:text-4xl font-semibold text-[#8AD5B7] font-conthrax w-4/5">
                        {service.title}
                      </h2>
                      <p className="text-[#89A096] text-base font-semibold w-4/5">
                        {service.description}
                      </p>
                      <div className="flex gap-8 items-stretch">
                        <div className={`w-1.5 bg-[#8AD5B7]`}></div>
                        <ul className="w-4/5">
                          {service.sections.map((section, idx) => {
                            return (
                              <li
                                key={idx}
                                className="text-[#DCE2E2] text-base font-semibold mb-2"
                              >
                                <h4 className="text-base font-semibold">
                                  {service.id !== 2
                                    ? section?.split(":")[0] + ": "
                                    : ""}
                                </h4>
                                <p className="flex gap-3 test-xs font-semibold text-[#89A096]">
                                  <span>{section?.split(":")[1]}</span>
                                </p>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <CTA2
                      text="Read More..."
                      isArrow={false}
                      href="/tutorial"
                      styling={`w-full md:w-2/5 lg:w-1/5 mt-0 rounded-xl h-12 bg-[#8AD5B7] text-black px-0 lg:px-6 py-2 text-sm font-semibold whitespace-nowrap hover:brightness-105 transition text-sm lg:text-base font-conthrax ${
                        service.id % 2 === 1
                          ? "lg:absolute lg:left-[52%] lg:top-0"
                          : "lg:absolute lg:left-[2%] lg:top-0"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className={`w-[30%] h-1 rounded-full bg-[#8AD5B7] mx-auto mt-4 lg:mt-0 mb-6`}
          ></div>

          <div className="text-[#DCE2E2] text-center">
            <h4 className="text-4xl font-semibold font-conthrax mb-6">
              We Serve Across NYC’s Departments
            </h4>
            <p className="text-base font-semibold max-w-3xl mx-auto">
              We don't only deal with these departments for your Alerts but we
              also deal with these departments for your permitting and
              inspection work
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section
        className="w-screen overflow-hidden relative bg-[#37403D] "
        style={{
          backgroundImage: `url('/pics/Brand Patterns-01 1.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full flex flex-col items-center gap-6 sm:gap-16">
          {sections.map((section, index) => {
            return (
              <div key={index} className="flex flex-col gap-8 md:gap-16">
                <div className="w-full py-8 px-16 bg-[#2E3734] mx-auto flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-16">
                  <div className="w-full flex justify-center md:w-[40%] lg:w-[25%]">
                    <Image
                      src={section.image}
                      alt={section.title}
                      width={100}
                      height={100}
                      priority
                      className="w-[70%] md:w-full md:h-full object-cover object-top-right mix-blend-luminosity rounded-[10%]"
                    />
                  </div>

                  <div className="w-full md:w-[50%] lg:w-[75%] flex flex-col gap-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl text-center md:text-left font-semibold font-conthrax text-[#8AD5B7]">
                      {section.title}
                    </h2>
                    <p className="text-xl text-center md:text-left font-semibold text-[#89A096]">
                      {section.description}
                    </p>
                  </div>
                </div>

                <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-0">
                  {section.details.map((detail, idx) => {
                    return (
                      <div
                        key={idx}
                        className="flex items-stretch w-full md:w-1/2"
                      >
                        <div className="w-full flex flex-col md:justify-between gap-4">
                          <div className="space-y-4">
                            <h2 className="text-3xl  font-semibold text-[#8AD5B7]">
                              {detail.title}
                            </h2>
                            <div>
                              {detail.description.map((desc, index) => {
                                return (
                                  <p
                                    key={index}
                                    className="text-base text-[#89A096] font-semibold"
                                  >
                                    {desc}
                                  </p>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                        {/* Add a white vertical line between the two sections, visible only in md and above */}
                        {idx === 0 && (
                          <div className="hidden md:block w-2 bg-white mx-8"></div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* why PBS */}
        <div className="w-full px-8 md:px-16 flex flex-col lg:flex-row items-center md:items-stretch gap-6 sm:gap-8 lg:gap-10 mt-10 mb-10 lg:mb-0 lg:h-screen">
          <div className="w-full lg:w-[48%] flex items-start">
            <Image
              src="/pics/service-building.png"
              alt="building"
              width={600}
              height={800}
              priority
              className="relative w-full -left-8 md:-left-16 lg:left-0 h-auto lg:h-full object-cover object-top mix-blend-luminosity rounded-[10%]"
            />
          </div>

          <div className="w-full lg:w-[52%] flex flex-col justify-end lg:pb-5 xl:pb-10 h-full">
            <div className="w-full h-auto flex items-start justify-start lg:justify-between">
              <div className="w-2 h-full bg-[#8AD5B7] mr-6 hidden lg:block"></div>
              <div className="w-[90%] h-auto flex flex-col gap-6">
                <h1 className="text-3xl text-center xl:text-5xl lg:text-left font-semibold font-conthrax text-[#DCE2E2] tracking-wide uppercase">
                  WHY PBS?
                </h1>
                <div className="text-sm xl:text-base text-center lg:text-left text-[#DCE2E2] font-semibold space-y-2">
                  <p>
                    30+ Years of Experience: Trusted by NYC property owners.
                  </p>
                  <p>100% Compliance Rate: Zero fines for clients in 2023.</p>
                  <p>
                    Dedicated Support: Single point of contact for all services.
                    Certified experts: Licensed inspectors familiar with NYC
                    DOB, FDNY and other departments code.
                  </p>
                </div>
                <div className="text-lg xl:text-xl text-center lg:text-left font-semibold text-[#DCE2E2] flex flex-col gap-2">
                  <span>Ready to Simplify Property Compliance?</span>
                  <span>Schedule a consultation with PBS today.</span>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-center gap-4 mt-8">
              <CTA2
                text="Get Started Now"
                isArrow={false}
                href="/tutorial"
                styling={`w-full lg:w-2/3 mx-auto mt-0 rounded-full h-12 bg-[#8AD5B7] text-black px-0 lg:px-6 py-2 text-sm font-semibold whitespace-nowrap hover:brightness-105 transition text-sm lg:text-xl font-conthrax `}
              />
              <p className="text-[#DCE2E2] text-base font-semibold">
                Call Us: 914-316-6956
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#1E2322] w-full flex flex-col items-center py-10 px-6 md:px-12 lg:px-16">
          <h2 className="text-3xl md:text-5xl mb-6 md:mb-10 font-semibold text-[#DCE2E2] font-conthrax text-center w-full">
            TRUST SIGNALS{" "}
          </h2>

          {/* img corousel */}
          <div className=" slider-container w-full rounded-xl overflow-hidden">
            <Slider {...settings} className="flex justify-evenly items-center">
              {imgCarousel.map((img, index) => (
                <div
                  key={index}
                  className={`w-full flex flex-col justify-between items-center gap-4 p-4 h-auto fliter ${img.length>1?"":"grayscale" } hover:grayscale-0 transition duration-300 ease-in-out`}
                >
                  {img.map((item, idx) => (
                    <img
                      key={idx}
                      src={item}
                      alt={`Slide ${index + 1} - Image ${idx + 1}`}
                      className="mb-6 object-contain mx-auto"
                    />
                  ))}
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
