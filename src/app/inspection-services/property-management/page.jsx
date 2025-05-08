'use client';
import React from "react";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import { whyPBS } from "@/app/services/data";
import CTA2 from "@/components/CTA2";
import ImageCarousel from "@/components/ImageCarousel";

const Page = () => {
  const section01 = {
    heading: "Welcome to PBS Property Management",
    items: [
      "your premier solution for seamless property management in the heart of New York City. Whoever you are, whether you own a brownstone in Brooklyn, a high-rise in Manhattan, or a multifamily dwelling in Queens, we’re here to maximize your ROI, minimize stress, and ensure compliance with NYC’s ever-evolving regulations.",
    ],
  };

  const Div2_Section1 = {
    left: "New York City property ownership demands more than just management, it requires a strategic partner who anticipates problems, navigates complexities, and delivers unwavering reliability. At PBS, we go beyond the basics, diving deep into the nuances of NYC’s real estate ecosystem to protect your investment and amplify your returns. PBS as an all in one place stop covers everything about your property through its proactive approach in property management, your compliance guard and violations control.",
    right:
      "At PBS, we don’t just manage properties - we build lasting partnerships. Our mission is to protect your investment, enhance tenant satisfaction, and navigate NYC’s complex regulatory landscape so you don’t have to",
    img: "/pics/p-management-pic1.png",
  };

  const section2 = {
    heading: "Property Management Services",
    text: "NYC’s fast-paced real estate landscape requires expertise, precision, and local know-how. Our Property Management Service covers a broad range of offerings, making you able to think of expanding your portfolio, we have got you covered in management.",
    img: "/pics/p-management-pic2.png",
  };

  const compliance_alert = {
    heading: "The PBS Compliance Alert System",
    subheading: "Always One Step Ahead",
    items: [
      " 1. Real-Time Monitoring: Our software tracks updates from NYC DOB, DEP, FDNY, DOH, DSNY, ECB, HPD, and DOT",
      "2. Risk Prioritization: Alerts are ranked by urgency (e.g., DOB violation deadline: 3 Days:” “Upcoming LL126 Inspection Window)",
    ],
    text: "PBS Property Management, NYC’s authority in Compliance, Care, and Client Advocacy. Serving all 5 Boroughs, 100% NYC-Focused",
    locations: [
      {
        cityName: "Manhattan",
        cityImage: "/pics/Manhattan.png",
      },
      {
        cityName: "Brooklyn",
        cityImage: "/pics/Brooklyn.png",
      },
      {
        cityName: "Queens",
        cityImage: "/pics/Queens.png",
      },
      {
        cityName: "Bronx",
        cityImage: "/pics/Bronx.png",
      },
      {
        cityName: "Staten Island",
        cityImage: "/pics/Staten-Island.png",
      },
    ],
  };

  const whyPBS = {
    heading: "Why NYC Owners Choose PBS",
    items: [
      "1. Local Expertise: We know NYC’s Boroughs, Laws, and challenges inside out",
      "2. Proactive, Not Reactive: From inspections to Compliance, we prevent issues before they escalate",
      "3. Transparency: Real-time updates, detailed reports, and 24/7 owner portal access",
    ],
    text1: "Don’t let evolving laws, tenant disputes, or emergency repairs derail your success. Partner with PBS for a property management strategy as dynamic as New York City itself",
    text2: "The Longer you delay, the higher the risks",
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
        heading="Your Trusted Partner in NYC Property Excellence"
        text="New York City property ownership is a high-reward venture - but it’s not without its challenges. We don’t just manage properties; We solve problems"
        className="font-conthrax max-w-[90%] sm:max-w-2xl md:max-w-4xl lg:max-w-5xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold"
        bgStyle="bg-right lg:bg-top bg-cover mix-blend-luminosity"
        isLine={false}
        textStyle="text-base sm:text-lg md:text-xl font-semibold text-[#89A096]"
        img="/pics/p-management-hero.png"
      />

      {/* Custom 'About Us' Label Divider */}
      <div className="w-[100vw] relative flex justify-center">
        <div className="bg-[#8AD5B7] w-full h-2 sm:h-3 lg:h-4"></div>
        <div className="bg-[#8AD5B7] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] sm:w-[60%] lg:w-[40%] rounded-full text-[#37403D] p-2 sm:p-3 lg:p-4 flex justify-center items-center font-conthrax text-center text-base sm:text-xl md:text-2xl lg:text-3xl z-20">
          Property Management
        </div>
      </div>

      {/*Section 01  */}
      <section className="px-6 md:px-10 xl:px-16 pt-10 md:pt-16 lg:pt-24 text-[#DCE2E2] w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between 2xl:justify-center gap-10 2xl:gap-16 w-full pb-6 lg:pb-10">
          <Image
            src="/pics/p-management-pic3.png"
            alt="Inspection Services"
            width={500}
            height={500}
            className="w-[80%] lg:w-[45%] h-auto object-cover object-right-top rounded-[16%] mb-6 lg:mb-0 lg:mx-0 mx-auto mix-blend-luminosity"
          />
          <div className="w-full lg:w-[55%] flex flex-col gap-3 justify-center items-center lg:items-start 2xl:justify-center 2xl:gap-6 rounded-2xl">
            <h2 className="text-2xl lg:text-[40px] 2xl:text-5xl text-center lg:text-left font-semibold text-[#8AD5B7] font-conthrax leading-tight xl:max-w-[95%] 2xl:max-w-[75%]">
              {section01.heading}
            </h2>

            <div className="flex items-stretch justify-start gap-6">
              <div className="space-y-2 w-[90%] lg:w-full 2xl:w[80%] 3xl:w-[70%] mx-auto lg:mx-0">
                {section01.items.map((item, index) => {
                  return (
                    <p
                      key={index}
                      className="text-xl lg:text-2xl text-center lg:text-left font-semibold text-[#89A096]"
                    >
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="w-[30%] mx-auto bg-[#8AD5B7] h-2"></div>

        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-10 2xl:gap-16 w-full py-6 lg:py-10">
          <div className="bg-[#2E3734] rounded-xl p-4 lg:p-6 w-[80%] lg:w-1/2 2xl:w-[40%] flex 3xl:items-center">
            <p className="text-[#89A096] text-xl xl:text-2xl font-semibold text-center">
              {Div2_Section1.left}
            </p>
          </div>
          <div className="bg-[#2E3734] rounded-xl p-4 lg:p-6 w-[80%] lg:w-1/2 flex flex-col items-center justify-between">
            <p className="text-[#89A096] text-xl xl:text-2xl font-semibold text-center">
              {Div2_Section1.right}
            </p>
            <Image
              src={Div2_Section1.img}
              alt="Inspection Services"
              width={500}
              height={500}
              className="w-[80%] lg:w-[80%] xl:w-[75%] 2xl:w-[60%] 3xl:w-[50%] h-auto object-cover lg:mx-0 mx-auto mix-blend-luminosity"
            />
          </div>
        </div>
      </section>

      <div className="w-[30%] mx-auto bg-[#8AD5B7] h-2"></div>

      {/*Section 02  */}
      <section className="px-6 md:px-10 xl:px-16 pt-6 lg:pt-10 text-[#DCE2E2] w-full">
        <div className="flex flex-col items-center lg:items-stretch justify-between 2xl:justify-center gap-6 xl:gap-8 2xl:gap-12 w-[90%] 2xl:w-[80%] mx-auto pb-6 lg:pb-10">
          <h2 className="w-full text-4xl xl:text-[40px] leading-tight font-conthrax text-center font-semibold text-[#8AD5B7] ">
            {section2.heading}
          </h2>

          <p className="tetx-xl xl:text-2xl font-semibold text-[#89A096] text-center">
            {section2.text}
          </p>

          <Image
            src={section2.img}
            alt="Inspection Services"
            width={500}
            height={500}
            className="w-[80%] h-auto object-contain mx-auto"
          />
        </div>
      </section>

      <div className="w-[30%] mx-auto bg-[#8AD5B7] h-2"></div>

      {/* Section 3 */}
      <section className="px-6 md:px-10 xl:px-16 pt-6 lg:pt-10 text-[#DCE2E2] w-full">
        <div className="flex flex-col items-center justify-between 2xl:justify-center gap-3 xl:gap-6 w-full mx-auto pb-6 lg:pb-10">
          <h2 className="w-full text-2xl lg:text-4xl leading-tight font-conthrax text-center font-semibold text-[#8AD5B7] max-w-2xl mx-auto">
            {compliance_alert.heading}
          </h2>

          <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-10 2xl:gap-16 w-[90%] 2xl:w-[80%]">
            <Image
              src="/pics/p-management-pic4.png"
              alt="Inspection Services"
              width={500}
              height={500}
              className="w-[50%] lg:w-1/3 3xl:w-1/4 object-contain mr-0"
            />
            <div className="flex flex-col items-center lg:items-start justify-center gap-5 xl:gap-6 2xl:gap-8 w-[80%] lg:w-[55%] xl:w-[55%] 3xl:w-[50%] ml-0">
              <h3 className="w-full text-2xl lg:text-3xl font-conthrax text-center lg:text-left font-semibold text-[#DCE2E2] lg:max-w-sm">
                {compliance_alert.subheading}
              </h3>

              <div className="space-y-2 w-[90%] lg:w-full 2xl:w-[85%] mx-auto lg:mx-0">
                {compliance_alert.items.map((item, index) => {
                  return (
                    <p
                      key={index}
                      className="text-lg xl:text-xl text-center lg:text-left font-semibold text-[#89A096]"
                    >
                      <span className="text-[#DCE2E2] italic">
                        {item?.split(":")[0] + ":"}
                      </span>
                      <span>{item?.substring(item.indexOf(":") + 1)}</span>
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
          <p className="tetx-xl xl:text-2xl font-semibold text-[#89A096] text-center max-w-6xl mx-auto">
            {compliance_alert.text}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 w-full">
            {compliance_alert.locations.map((location, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 my-4"
                >
                  <div className="rounded-full border-2 border-[#8AD5B7] w-[150] h-[150] flex items-center justify-center">
                    <Image
                      src={location.cityImage}
                      alt={location.cityName}
                      width={150}
                      height={150}
                      className="filter grayscale hover:grayscale-0 transition duration-300"
                    />
                  </div>
                  <p className="text-[#DCE2E2]">{location.cityName}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-[30%] mx-auto bg-[#8AD5B7] h-2"></div>

        <div className="flex flex-col items-center justify-between 2xl:justify-center gap-3 xl:gap-6 3xl:gap-12 w-full 3xl:w-[80%] mx-auto py-6 lg:py-10">
         <h2 className="w-full text-3xl lg:text-5xl leading-tight font-conthrax text-center font-semibold text-[#8AD5B7] max-w-xl mx-auto">{whyPBS.heading}</h2>
            <div className="space-y-2 w-[90%] lg:w-full 2xl:w-[80%] 3xl:w-[70%] mx-auto lg:mx-0">
                {whyPBS.items.map((item, index) => {
                return (
                    <p
                    key={index}
                    className="text-xl xl:text-2xl text-center lg:text-left font-semibold text-[#89A096]"
                  >
                    <span className="text-[#DCE2E2] italic">
                      {item?.split(":")[0] + ":"}
                    </span>
                    <span>{item?.substring(item.indexOf(":") + 1)}</span>
                  </p>
                );
                })}
            </div>
            <p className="text-xl xl:text-2xl font-semibold text-[#89A096] text-center max-w-6xl mx-auto flex flex-col">
               <span>{whyPBS.text1}</span>
               <span>{whyPBS.text2}</span>
            </p>

            <CTA2 
             text="Act Now - Before NYC’s Deadlines Do"
             href="/contacts"
             styling="px-8 py-3 bg-[#8AD5B7] text-[#37403D] font-semibold text-[12px] lg:text-[16px] font-conthrax w-full lg:w-[50%] 2xl:w-[40%] 3xl:w-[35%] rounded-xl mx-auto mt-5"
            />

        </div>
      </section>

      <ImageCarousel/>
    </div>
  );
};

export default Page;
