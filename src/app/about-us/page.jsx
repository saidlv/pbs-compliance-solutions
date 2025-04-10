"use client";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import { aboutContent } from "./data";
import { ChevronLeft, ChevronRight, Dot, DotIcon } from "lucide-react";
import { useState } from "react";

const AboutPage = () => {
  // Extracting content from static data
  const story = aboutContent.find((s) => s.id === "our-story");
  const mission = aboutContent.find((s) => s.id === "our-mission");
  const service = aboutContent.find((s) => s.id === "service-areas");
  const vision = aboutContent.find((s) => s.id === "our-vision");
  const cta = aboutContent.find((s) => s.id === "cta");

  const [clientNum, setClientNum] = useState(0);

  return (
    <div className="bg-[#37403D] overflow-hidden">
      {/* Hero Section */}
      <HeroSection
        heading="Built by New Yorkers, For New York"
        text="For Decades, we’ve followed the rules of Inspection, Expediting and portfolio management, Not as Outsiders, but as neighbors, collaborators, and guardians of this city’s skyline."
        className="font-conthrax"
        img="/pics/COVER 1.png"
      />

      {/* Custom 'About Us' Label Divider */}
      <div className="w-screen relative mb-12">
        <div className="bg-[#8AD5B7] w-full text-white py-1" />
        <div className="bg-[#8AD5B7] w-1/4 absolute left-[38%] -top-4 rounded-full text-white p-2 flex justify-center items-center">
          About Us
        </div>
      </div>

      {/* The PBS Story Section */}
      <section className="py-10 px-6 md:px-12 bg-[#37403D] text-white mb-12">
        <div className="flex flex-col lg:flex-row items-start gap-44 md:gap-36 lg:gap-16">
          {/* Story image in a circular background */}
          <div className="relative w-full h-auto lg:w-1/2 flex justify-center">
            <div className="w-[300px] h-[300px] bg-[#8AD5B7] rounded-full relative">
              <Image
                src="/pics/Building.png"
                alt="PBS"
                width={280}
                height={300}
                className="absolute top-4 left-3 lg:left-0 object-contain"
              />
            </div>
          </div>

          {/* Story text content */}
          <div className="w-full pt-20 lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold font-conthrax text-[#8AD5B7] mb-2">
              {story.headline}
            </h2>
            <span className="text-[#7A8E85] text-base">
              More than a Company, A Collective Legacy
            </span>
            <div className="w-[30%] bg-[#8AD5B7] rounded-full h-1"></div>
            {story?.body.map((text, index) => (
              <p key={index} className="text-white text-lg text-balance my-8">
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <div className="flex items-start justify-center flex-col lg:flex-row gap-8 lg:gap-16 text-white px-3 md:px-12">
        {/* Vision Section */}
        <section className="relative my-10 w-[90%] mx-auto">
          <img
            src="/pics/Group 19.png"
            alt="light"
            className="absolute w-16 h-16 lg:w-24 lg:h-24 -left-8 -top-8 lg:-left-0 lg:-top-16"
          />
          <div className=" min-h-[650] text-center w-full py-5 px-3 lg:px-6  rounded-lg bg-[#2B3331]">
            <h2 className="text-3xl font-bold font-conthrax text-[#8AD5B7] mb-3">
              Our Vision
            </h2>
            <p className="text-[#7A8E85] mb-3">{vision?.tagline}</p>
            <div className="mx-auto w-[30%] bg-[#8AD5B7] rounded-full h-1"></div>
            <p className="text-white text-lg text-balance my-8">
              {vision?.body}
            </p>

            <div className="text-left my-5">
              <h2 className="text-[#8AD5B7] text-xl font-semibold mb-3">
                How We'll get there
              </h2>
              {(vision?.pillars || []).map((value, index) => (
                <div key={index} className="text-white flex gap-2 mb-2">
                  <Dot />
                  <div className="flex justify-evenly w-full">
                    <span className="w-[45%] text-white font-semibold text-base">
                      {value.split(":")[0] + ":"}
                    </span>
                    <span className="w-[55%] text-[#7A8E85] text-base">
                      {value.split(":")[1]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="relative my-10 w-[90%] mx-auto">
          <img
            src="/pics/Layer_1.png"
            alt="arrow"
            className="w-16 h-16 lg:w-24 lg:h-24 absolute -left-8 lg:left-8 -top-8"
          />
          <div className="min-h-[650] text-center w-full py-5 px-3 lg:px-6  rounded-lg bg-[#2B3331]">
            <h2 className="text-3xl font-bold font-conthrax text-[#8AD5B7] mb-3">
              Our Mission
            </h2>
            <p className="text-[#7A8E85] mb-3">{mission?.tagline}</p>
            <div className="mx-auto w-[30%] bg-[#8AD5B7] rounded-full h-1"></div>
            <p className="text-white text-lg text-balance my-8">
              {mission?.body}
            </p>

            <div className="text-left my-5">
              <h2 className="text-[#8AD5B7] text-xl font-semibold mb-3">
                How We'll get there
              </h2>
              {Object.entries(mission?.impacts || []).map(
                ([key, value], index) => (
                  <div key={index} className="text-white flex gap-2 mb-2">
                    <Dot />
                    <div className="flex justify-evenly gap-1 w-full">
                      <span className="w-1/3 text-white font-semibold text-base">
                        {key + ":"}
                      </span>
                      <span className="w-2/3 text-[#7A8E85] text-base">
                        {value}
                      </span>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      </div>

      {/* Redefining section */}
      <section className="px-6 md:px-12">
      <div className="bg-[#1E2322] rounded-xl w-full flex flex-col items-center justify-center py-3 px-6 md:px-16">
        <h2 className="text-[#8AD5B7] text-center font-conthrax text-2xl lg:text-4xl w-[70%] mx-auto my-6">
          Redefining Excellence in NYC Construction
        </h2>
        <div className="w-[30%] bg-[#8AD5B7] rounded-full h-1"></div>

        <p className="text-white mt-5">
          We are committed to becoming the New York Metropolitan area's most
          trusted partner in your Compliance, Expediting and consulting—where
          growth harmonizes with mastery, and innovation elevates every project
          from blueprint to completion.
        </p>
        <p className="text-white flex gap-3 mt-5">
          <DotIcon /> Standardized Excellence: Meticulous, end-to-end project
          management frameworks tailored to NYC's dynamic landscape
        </p>
        <p className="text-white flex gap-3 mb-5">
          <DotIcon /> Value-Driven Culture: Intentional collaboration,
          data-powered decisions, and unwavering ownership at every level
        </p>
      </div>
      </section>

      {/* Mission Section */}
      <section className="bg-[#37403D] py-10 px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
          {/* Mission image */}
          <Image
            src="/pics/Asset 2 2.png"
            alt="PBS"
            width={420}
            height={300}
            className="object-contain"
          />

          {/* Mission content with vertical accent line */}
          <div className="w-full lg:w-2/3 pt-12">
            <div className="flex items-center justify-start h-16 rounded-lg mb-12 lg:mb-6 gap-4">
              <div className="bg-[#8AD5B7] w-2 h-full rounded-lg"></div>
              <h2 className="text-3xl font-bold font-conthrax text-white flex flex-col gap-1">
                <span>{mission?.tagline.split(",")[0] + ","}</span>
                <span>{mission?.tagline.split(",")[1]}</span>
              </h2>
            </div>

            <p className="text-[#89A096] mt-3 text-base">{mission?.body}</p>
            <div className="mx-auto w-[30%] bg-[#8AD5B7] rounded-full h-1 my-8"></div>

            {/* Mission impact highlights */}
            <div className="text-left">
              {Object.entries(mission?.impacts || {}).map(
                ([key, value], index) => (
                  <div key={index}>
                    <h3 className="text-white text-base font-semibold mb-2">
                      {key}
                    </h3>
                    <p className="text-[#89A096] text-base">{value}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Redefining section */}
      <div className="rounded-xl w-[60%] mx-auto flex flex-col items-center justify-center mb-6 py-3 px-6 md:px-12">
        <h2 className="text-[#8AD5B7] text-center font-conthrax text-4xl my-6">
          Areas we Serve
        </h2>
        <div className="w-[30%] bg-[#8AD5B7] rounded-full h-1"></div>

        <p className="text-white mt-5">
          More Than a Neighbor, We’re Your Advocates
        </p>
        <p className="text-[#89A096] flex gap-3 mt-5 text-center">
          New York doesn't compromise, and neither do we. From the first permit
          to the final walkthrough, our vision and mission ensure:
        </p>
      </div>

      {/* Service Area section */}
      <section className="px-6 md:px-12">
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-16 lg:gap-8 mb-12">
    {/* Left Content */}
    <div className="bg-[#2B3331] rounded-xl flex flex-col lg:flex-row items-center justify-center gap-6 w-full lg:w-1/2 h-auto lg:h-[65vh] px-4 py-6">
      <div className="h-auto lg:h-full flex flex-row lg:flex-col items-start justify-between">
        <h2 className="text-[#8AD5B7] font-bold text-2xl flex flex-col mb-4 lg:mb-0">
          <span>Buildings</span> <span>We deal in:</span>
        </h2>
        <img
          src="pics/world-map.png"
          alt="map"
          className="w-32 lg:w-auto h-auto"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-row flex-wrap lg:flex-col items-start justify-center gap-4 lg:gap-0">
        {service?.buildingTypes.map((location, index) => (
          <p key={index} className="text-white text-base flex gap-2">
            <DotIcon /> {location}
          </p>
        ))}
      </div>
    </div>
        <div className="w-full lg:w-1/2 h-[65vh] flex items-center justify-center ">
          <img src="/pics/Rectangle 52.png" alt="" className="w-full h-full object-cover rounded-xl" />
        </div>
      </div>


      <div className="w-full flex flex-col justify-center items-center mb-12 px-16">
        <h2 className="text-[#8AD5B7] font-bold text-4xl mb-2">
          Service Areas
        </h2>
        <p className="text-[#89A096] text-base mb-4">
          Serving All NYC Boroughs with Local Expertise
        </p>
        <div className="flex justify-center items-center gap-16 my-4">
          {service?.locations.map((location, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-2 my-4"
              >
                <div className="rounded-full border-4 border-[#8AD5B7] w-[150] h-[150] flex items-center justify-center">
                  <Image
                    src={location.cityImage}
                    alt={location.cityName}
                    width={150}
                    height={150}
                    className="filter grayscale hover:grayscale-0 transition duration-300"
                  />
                </div>
                <p className="text-white">{location.cityName}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className=" flex flex-col items-center gap-8">
        <h2 className="text-[#8AD5B7] font-bold text-4xl mb-2">Who we serve</h2>

        <div className="w-full flex justify-center items-center gap-8 mb-12 px-16">
          <button
            onClick={() =>
              setClientNum(() => {
                if (clientNum === 0) return service.clientTypes.length - 1;
                return clientNum - 1;
              })
            }
          >
            <ChevronLeft className="text-white" />
          </button>
          <div className="bg-[#2B3331] rounded-xl p-6 w-[90%]">
            <h4 className="text-white font-semibold text-lg">
              {clientNum + 1 + "- " + service.clientTypes[clientNum].title}
            </h4>
            <p className="text-base text-[#89A096]">
              {service.clientTypes[clientNum].description}
            </p>
          </div>
          <button
            onClick={() =>
              setClientNum((clientNum + 1) % service.clientTypes.length)
            }
          >
            <ChevronRight className="text-white" />
          </button>
        </div>
      </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-white py-10 px-6 md:px-24 text-center">
        <p className="max-w-xl text-[#89A096] mx-auto text-sm mb-4">
          {cta?.text}
        </p>
        <button className="px-8 py-3 bg-[#8AD5B7] text-[#37403D] font-bold rounded-full shadow-lg hover:scale-105 transition">
          {cta?.buttonText}
          <ChevronRight className="inline ml-2" size={16} color="#37403D" />
        </button>
      </section>
    </div>
  );
};

export default AboutPage;
