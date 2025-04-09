import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import CTA from "@/components/CTA";
import { aboutContent } from "./data";
import { Dot, DotIcon } from "lucide-react";

const AboutPage = () => {
  // Extracting content from static data
  const story = aboutContent.find((s) => s.id === "our-story");
  const mission = aboutContent.find((s) => s.id === "our-mission");
  const service = aboutContent.find((s) => s.id === "service-areas");
  const vision = aboutContent.find((s) => s.id === "our-vision");
  const cta = aboutContent.find((s) => s.id === "cta");

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
      <div className="w-screen relative">
        <div className="bg-[#8AD5B7] w-full text-white py-1" />
        <div className="bg-[#8AD5B7] w-1/4 absolute left-[38%] -top-4 rounded-full text-white p-2 flex justify-center items-center">
          About Us
        </div>
      </div>

      {/* The PBS Story Section */}
      <section className="py-10 px-6 md:px-16 bg-[#37403D] text-white">
        <div className="flex flex-col lg:flex-row items-start gap-32 lg:gap-16">
          {/* Story image in a circular background */}
          <div className="relative w-full h-auto lg:w-1/2 flex justify-center">
            <div className="w-[300px] h-[300px] bg-[#8AD5B7] rounded-full relative">
              <Image
                src="/pics/ba 1.png"
                alt="PBS"
                width={275}
                height={300}
                className="absolute top-10 left-3 object-contain"
              />
            </div>
          </div>

          {/* Story text content */}
          <div className="w-full pt-20 lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold font-conthrax text-[#8AD5B7]">{story.headline}</h2>
            <div className="w-[30%] bg-[#8AD5B7] rounded-full h-1"></div>
            <p className="text-lg text-white">{story?.body}</p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="my-10 w-[90%] mx-auto">
        <div className=" text-center w-full py-5 px-3 lg:px-6  rounded-lg bg-[#2B3331]">
          <h2 className="text-3xl font-bold font-conthrax text-[#8AD5B7] mb-3">Our Vision</h2>
          <p className="text-[#7A8E85] mb-3">{vision?.tagline}</p>
          <div className="mx-auto w-[30%] bg-[#8AD5B7] rounded-full h-1"></div>
          <p className="text-white text-lg text-balance my-8">{vision?.body}</p>
        </div>

        {/* Vision pillars as bullet points */}
          <div className="text-left my-5 px-3 lg:px-6">
            <h2 className="text-[#8AD5B7] font-semibold">How We'll get there</h2>
            {Object.entries(vision?.pillars || {}).map(([key, value], index) => (
              <div key={index} className="text-white flex gap-3">
               <Dot /> <p className="text-[#7A8E85]" >
                <span className="text-white font-semibold">{value.split(":")[0] + ":"}</span> {value.split(":")[1]}</p>
              </div>
            ))}
          </div>
      </section>

       {/* Mission Section */}
       <section className="my-10 w-[90%] mx-auto">
        <div className=" text-center w-full py-5 px-3 lg:px-6  rounded-lg bg-[#2B3331]">
          <h2 className="text-3xl font-bold font-conthrax text-[#8AD5B7] mb-3">Our Mission</h2>
          <p className="text-[#7A8E85] mb-3">{mission?.tagline}</p>
          <div className="mx-auto w-[30%] bg-[#8AD5B7] rounded-full h-1"></div>
          <p className="text-white text-lg text-balance my-8">{mission?.body}</p>
        </div>

        {/* Vision pillars as bullet points */}
          <div className="text-left my-5 px-3 lg:px-6">
            <h2 className="text-[#8AD5B7] font-semibold">What this means for you</h2>
            {Object.entries(mission?.impacts || {}).map(([key, value], index) => (
              <div key={index} className="text-white flex gap-3">
               <Dot /> <p className="text-[#7A8E85]">
                <span className="font-semibold text-white">{key + ":"}</span> {value}</p>
              </div>
            ))}
          </div>
      </section>

      {/* Mission Section */}
      <section className="bg-[#37403D] py-10 px-6 md:px-16">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
          
          {/* Mission image */}
          <Image
            src="/pics/Asset 2 2.png"
            alt="PBS"
            width={380}
            height={500}
            className="object-contain"
          />

          {/* Mission content with vertical accent line */}
          <div className="w-full lg:w-2/3 pt-12">
            <div className="flex items-center justify-start h-10 rounded-lg mb-12 lg:mb-6 gap-4">
              <div className="bg-[#8AD5B7] w-2 h-full rounded-lg"></div>
              <h2 className="text-3xl font-bold font-conthrax text-[#8AD5B7]">{mission?.tagline}</h2>
            </div>

            <p className="text-[#89A096] mt-3 text-base">{mission?.body}</p>
            <div className="mx-auto w-[30%] bg-[#8AD5B7] rounded-full h-1 my-8"></div>

            {/* Mission impact highlights */}
            <div className="text-left">
              {Object.entries(mission?.impacts || {}).map(([key, value], index) => (
                <div key={index}>
                  <h3 className="text-white text-base font-semibold mb-2">{key}</h3>
                  <p className="text-[#89A096] text-base">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-10 px-6 md:px-16">
        

        {/* Locations and Building Types - reversed flex */}
        <div className="flex flex-col lg:flex-row-reverse gap-12">
          {/* Building Types */}
          <div className="bg-[#2B3331] p-6 rounded-lg shadow-md w-full lg:w-1/3">
            <h3 className="text-lg text-[#8AD5B7] font-semibold mb-4">Building Types</h3>
            <ul className="space-y-2 text-white">
              {service?.buildingTypes.map((bt, i) => (
                <li className="flex text-base" key={i}>
                  <DotIcon /> {bt}
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="bg-[#2B3331] p-6 rounded-lg shadow-md w-full lg:w-1/3 flex flex-col justify-between">
          <div>
            <h3 className="text-lg text-[#8AD5B7] font-semibold mb-4">Locations</h3>
            <ul className="space-y-2 text-white">
              {service?.locations.map((loc, i) => (
                <li className="flex text-base" key={i}>
                  <DotIcon /> {loc}
                </li>
              ))}
            </ul>
            </div>
            <img src="/pics/world-map.png" alt="" className="mb-16" />
          </div>

          <div>
        <h2 className="text-3xl font-bold font-conthrax text-left kg:text-center text-white mb-12">
          {service?.headline}
        </h2>
        <p className="text-[#89A096] text-base max-w-4xl mx-auto text-left lg:text-center mb-12">
          {service?.body}
        </p>
        </div>
        </div>

        {/* Client Types */}
        <div className="bg-[#2B3331] p-6 rounded-lg shadow-md mt-6">
          <h3 className="text-lg text-[#8AD5B7] font-semibold mb-4">Client Types</h3>
          <ul className="space-y-4 text-white">
            {service?.clientTypes.map((c, i) => (
              <li key={i}>
                <h4>{c.title}</h4>
                <p className="flex">
                  <DotIcon /> {c.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-white py-10 px-6 md:px-24 text-center">
        <p className="max-w-xl text-[#89A096] mx-auto text-lg mb-8">{cta?.text}</p>
        <button className="px-8 py-3 bg-[#8AD5B7] text-[#37403D] font-bold rounded-full shadow-lg hover:scale-105 transition">
          {cta?.buttonText}
        </button>
      </section>
    </div>
  );
};

export default AboutPage;
