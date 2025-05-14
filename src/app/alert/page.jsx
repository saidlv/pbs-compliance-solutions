"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import { DotIcon } from "lucide-react";
import CTA2 from "@/components/CTA2";
import { section01, section2, section3, section4 } from "./data";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageCarousel from "@/components/ImageCarousel";

const Page = () => {
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
    <div className="bg-[#37403D]">
      {/* Hero Section */}
      <HeroSection
        heading="Real-Time Compliance Alerts for NYC Property Professionals"
        text="Stay Ahead of Deadlines, Violations, and Zoning Changes with NYC’s Most Advanced Property Management & Alert Service Platform"
        className="font-conthrax max-w-[90%] md:max-w-full xl:max-w-[95%] text-2xl sm:text-3xl 4xl:max-w-[70%] lg:text-4xl xl:text-5xl font-semibold"
        bgStyle="bg-right lg:bg-top bg-cover mix-blend-luminosity"
        isLine={false}
        textStyle="text-base sm:text-lg md:text-xl font-semibold"
        img="/pics/alert-hero.png"
      />

      {/* Custom 'About Us' Label Divider */}
      <div className="w-[100vw] relative flex justify-center">
        <div className="bg-[#8AD5B7] w-full h-2"></div>
        <div className="bg-[#8AD5B7] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] lg:w-[40%] 2xl:w-[30%] rounded-full text-[#37403D] p-2 sm:p-3 lg:p-4 flex justify-center items-center font-conthrax text-center text-base sm:text-xl md:text-2xl lg:text-4xl z-20">
          Alert System
        </div>
      </div>

      {/*Section 01  */}
      <section className="px-6 md:px-10 xl:px-16 pt-16 md:pt-16 lg:pt-24 flex flex-col gap-6 lg:gap-10 text-[#DCE2E2]">
        <div className="flex flex-col items-center lg:items-stretch justify-between 2xl:justify-center gap-6 2xl:gap-8 w-full">
          <h2 className="text-[#8AD5B7] font-conthrax text-3xl xl:text-5xl font-semibold text-center">
            {section01.div1.heading}
          </h2>
          <p className="text-[#89A096] text-lg lg:text-xl xl:text-2xl font-semibold text-center">
            {section01.div1.text1}
          </p>
          <CTA2
            isArrow={false}
            text={section01.div1.CTA.text}
            href={section01.div1.CTA.href}
            styling={`w-auto mt-3 mx-auto rounded-2xl h-12 bg-[#8AD5B7] text-[#1E2322] px-3 2xl:px-6 py-2 text-sm font-semibold whitespace-nowrap hover:brightness-105 transition xl:text-base font-conthrax `}
          />
          <p className="text-[#89A096] text-base lg:text-lg xl:text-xl font-semibold text-center max-w-md mx-auto">
            {section01.div1.text2}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-stretch 2xl:items-center justify-between 2xl:justify-center 2xl:gap-16 w-full">
          <div className="w-full md:w-[80%] lg:w-[60%] 2xl:max-w-[50%] 3xl:max-w-[40%] flex flex-col justify-center items-center 2xl:justify-center gap-6 p-6 rounded-2xl">
            <h2 className="text-[#8AD5B7] font-conthrax text-3xl lg:text-4xl 2xl:text-5xl font-semibold text-center xl:max-w-[90%]">
              {section01.div2.heading}
            </h2>
            <p className="text-[#DCE2E2] text-lg lg:text-xl xl:text-2xl font-semibold text-center">
              {section01.div2.text1}
            </p>
            <p className="text-[#89A096] text-base lg:text-lg xl:text-xl font-semibold text-center">
              {section01.div2.text2}
            </p>
          </div>
          <Image
            src="/pics/alert-pic1.png"
            alt="Inspection Services"
            width={500}
            height={500}
            className="w-[50%] lg:w-[40%] 2xl:w-[35%] 3xl:w-[30%] h-auto object-contain object-right-top mb-6 lg:mb-0 lg:mx-0 mx-auto"
          />
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10">
          {section01.div2.imgArray.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center lg:items-stretch justify-between 2xl:justify-center gap-3 2xl:gap-8 w-full"
              >
                <Image
                  src={item.img}
                  alt="Inspection Services"
                  width={500}
                  height={500}
                  className="w-[80%] lg:w-full h-auto object-contain object-right-top rounded-[16%] mb-6 lg:mb-0 lg:mx-0 mx-auto mix-blend-luminosity"
                />

                <p className="text-[#89A096] text-base lg:text-lg xl:text-xl font-semibold text-center flex flex-col items-center">
                  <span className="text-lg lg:text-xl xl:text-2xl text-[#DCE2E2] itlaic">
                    {item.text.split(":")[0]}
                  </span>
                  {item.text.substring(item.text.indexOf(":") + 1)}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 02 */}
      <section className="px-6 md:px-10 xl:px-16 pt-16 md:pt-16 lg:pt-16 flex flex-col gap-6 lg:gap-10 text-[#DCE2E2]">
        <div className="flex flex-col items-center justify-center gap-6 2xl:gap-8 w-full">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 2xl:gap-8 w-full md:w-[90%] mx-auto">
            <div className="flex justify-center items-center">
              <h2 className="text-3xl md:text-4xl xl:text-5xl text-center font-semibold text-[#8AD5B7] font-conthrax">
                {section2.div1.heading}
              </h2>
            </div>

            <div className="bg-[#2E3734] p-6 rounded-2xl flex flex-col justify-center gap-2">
              {section2.div1.items.map((item, index) => {
                return (
                  <div key={index} className="flex items-start">
                    <DotIcon
                      size={32}
                      className="inline-block mr-2 flex-shrink-0"
                    />
                    <p className="text-lg lg:text-xl xl:text-2xl text-[#89A096] font-semibold">
                      <span className="text-[#DCE2E2] itlaic">
                        {item.split(":")[0] + ": "}
                      </span>
                      {item.substring(item.indexOf(":") + 1)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <p className="text-lg lg:text-xl xl:text-2xl text-[#89A096] font-semibold text-center">
            {section2.div1.text}
          </p>
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-6 2xl:gap-8">
          <h2 className="text-3xl md:text-4xl xl:text-[40px] xl:leading-tight xl:max-w-3xl text-center font-semibold text-[#8AD5B7] font-conthrax">
            {section2.div2.heading}
          </h2>
          <div className="mt-3">
            <span className="text-lg lg:text-xl xl:text-2xl text-[#DCE2E2] font-semibold">
              {section2.div2.text1}
            </span>
            <p className="text-lg lg:text-xl xl:text-2xl text-[#89A096] font-semibold">
              {section2.div2.text2}
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center lg:items-end 4xl:items-center justify-start gap-8 2xl:gap-16 w-full">
            <div className="w-full flex flex-col justify-center items-center md:items-center gap-8 ">
              <h2 className="text-3xl lg:text-4xl xl:text-[40px] xl:leading-tight text-center font-semibold text-[#8AD5B7] font-conthrax">
                {section2.div2.title}
              </h2>
              <Slider
                {...settings}
                className="flex justify-evenly items-center w-full"
              >
                {section2.div2.items.map((item, index) => {
                  return (
                    <div key={index} className="w-full space-y-4">
                      <div className="w-[80%] mx-auto aspect-square rounded-lg bg-[#D9D9D9]"></div>
                      <p className="w-full text-base lg:text-lg 2xl:text-xl text-[#89A096] text-center flex flex-col items-center gap-1 font-semibold">
                        <span className="text-[#DCE2E2] itlaic text-lg lg:text-xl 2xl:text-2xl">
                          {item.split(":")[0]}
                        </span>
                        {item.substring(item.indexOf(":") + 1)}
                      </p>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-6 2xl:gap-8 font-semibold">
          <h2 className="text-3xl md:text-4xl xl:text-[40px] xl:leading-tight xl:max-w-3xl text-center font-semibold text-[#8AD5B7] font-conthrax">
            {section2.div3.heading}
          </h2>
          <div className="mt-3">
            <span className="text-lg lg:text-xl xl:text-2xl text-[#DCE2E2]">
              {section2.div3.text1}
            </span>
            <p className="text-lg lg:text-xl xl:text-2xl text-[#89A096]">
              {section2.div3.text2}
            </p>
          </div>

          <div className="bg-[#2E3734] p-6 rounded-2xl flex flex-col justify-center gap-2">
            {section2.div3.items.map((item, index) => {
              return (
                <div key={index} className="flex items-start">
                  <DotIcon
                    size={32}
                    className="inline-block mr-2 flex-shrink-0"
                  />
                  <p className="text-lg lg:text-xl xl:text-2xl text-[#89A096] font-semibold">
                    <span className="text-[#DCE2E2] itlaic">
                      {item.split(":")[0] + ": "}
                    </span>
                    {item.substring(item.indexOf(":") + 1)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="bg-[#8AD5B7] w-[30%] mx-auto text-[#DCE2E2] h-2 my-10"></div>

      {/* Section 03 */}
      <section className="px-6 md:px-10 xl:px-16 flex flex-col gap-6 lg:gap-10 text-[#DCE2E2]">
        <div className="flex flex-col items-center justify-center gap-6 2xl:gap-8 w-full">
          <h2 className="text-[#8AD5B7] font-conthrax text-[30px] lg:text-[36px] 2xl:text-[40px] leading-tight font-semibold text-center mx-auto xl:max-w-xl">
            {section3.div1.heading}
          </h2>
          <div className="space-y-1">
            <p className="text-lg lg:text-xl xl:text-2xl text-[#DCE2E2] font-semibold w-full">
              {section3.div1.text1}
            </p>

            <p className="text-lg lg:text-xl xl:text-2xl text-[#89A096] font-semibold w-full">
              {section3.div1.text2}
            </p>
          </div>

          <div className="w-full flex flex-col gap-1">
            <p className="text-lg lg:text-xl xl:text-2xl text-[#89A096] font-semibold w-full">
              <span className="text-[#DCE2E2]">
                {section3.div1.text3.split(":")[0] + ": "}
              </span>
              {section3.div1.text3.split(":")[1]}
            </p>

            <span className="text-lg lg:text-xl xl:text-2xl text-[#8AD5B7] font-semibold w-full">
              {section3.div1.itemHeading}
            </span>

            <div className="w-full flex flex-col gap-1">
              {section3.div1.items.map((item, index) => {
                return (
                  <div key={index} className="flex items-start">
                    <DotIcon
                      size={32}
                      className="inline-block mr-2 flex-shrink-0"
                    />
                    <p className="text-lg lg:text-xl xl:text-2xl text-[#89A096] font-semibold">
                      <span className="text-[#DCE2E2] itlaic">
                        {item.split(":")[0] + ": "}
                      </span>
                      {item.substring(item.indexOf(":") + 1)}
                    </p>
                  </div>
                );
              })}
            </div>
            <p className="text-lg lg:text-xl xl:text-2xl text-[#89A096] font-semibold w-full">
              {section3.div1.text4}
            </p>

            <p className="text-lg lg:text-xl xl:text-2xl text-[#89A096] font-semibold w-full">
              {section3.div1.text5}
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center lg:items-center justify-center gap-6 2xl:gap-8 w-full">
          <Image
            src={section3.div2.img}
            alt="Inspection Services"
            width={500}
            height={500}
            className="w-[50%] lg:w-[40%] 2xl:w-[35%] 3xl:w-[30%] h-auto object-contain object-right-top mb-6 lg:mb-0 lg:mx-0 mx-auto"
          />

          <div className="w-full h-full md:w-[80%] lg:w-[60%] 2xl:max-w-[50%] 3xl:max-w-[40%] flex flex-col justify-center items-center md:items-start gap-3 lg:gap-10 2xl:gap-16 p-6 rounded-2xl">
            <h2 className="text-[#8AD5B7] font-conthrax text-3xl lg:text-4xl 2xl:text-5xl font-semibold text-center md:text-left xl:max-w-[90%]">
              {section3.div2.heading}
            </h2>
            <p className="text-[#DCE2E2] text-lg lg:text-xl xl:text-2xl font-semibold text-center md:text-left xl:max-w-[90%]">
              {section3.div2.text1}
            </p>
            <p className="text-[#89A096] text-base lg:text-lg xl:text-xl font-semibold text-center md:text-left xl:max-w-[90%]">
              {section3.div2.text2}
            </p>
            <p className="text-[#89A096] text-base lg:text-lg xl:text-xl font-semibold text-center md:text-left xl:max-w-[90%]">
              {section3.div2.text3}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 2xl:gap-8 w-[90%] mx-auto">
          <Image
            src={section3.div3.img}
            alt="Inspection Services"
            width={500}
            height={500}
            className="w-[50%] lg:w-[50%] h-auto object-contain object-right-top mb-6 lg:mb-0 mx-auto"
          />
          <div className="space-y-2 2xl:gap-3">
            <p className="text-lg lg:text-xl xl:text-2xl text-[#DCE2E2] font-semibold w-full">
              {section3.div3.text1}
            </p>

            <p className="text-lg lg:text-xl xl:text-2xl text-[#89A096] font-semibold w-full">
              {section3.div3.text2}
            </p>

            <span className="text-lg lg:text-xl xl:text-2xl text-[#8AD5B7] font-semibold w-full">
              {section3.div3.itemHeading}
            </span>

            <div className="w-full flex flex-col gap-1">
              {section3.div3.items.map((item, index) => {
                return (
                  <div key={index} className="flex items-start">
                    <p className="text-lg lg:text-xl xl:text-2xl text-[#89A096] font-semibold">
                      <span className="text-[#DCE2E2] itlaic">
                        {item.split(":")[0] + ": "}
                      </span>
                      {item.substring(item.indexOf(":") + 1)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 2xl:gap-10">
            {section3.div3.divList.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-[#1E2322] p-3 rounded-xl w-full flex-shrink-0 flex items-center justify-center h-auto"
                >
                  <p className="text-lg lg:text-xl 2xl:text-2xl text-[#89A096] text-center">
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 2xl:gap-8 w-full mx-auto">
          <div className="space-y-2 w-full">
            <h2 className="text-[#8AD5B7] font-conthrax text-3xl lg:text-4xl xl:text-[40px] leading-tight font-semibold text-center">
              {section3.div4.heading}
            </h2>
            <p className="text-lg lg:text-xl xl:text-2xl text-[#DCE2E2] font-semibold w-full text-center">
              {section3.div4.text1}
            </p>
          </div>

          <div className="w-full flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-6 2xl:gap-8">
            <div className="flex flex-col justify-center items-center lg:justify-between gap-5 lg:gap-8 w-[80%] lg:w-[50%]">
              <div className="flex flex-col justify-center items-center lg:justify-start gap-3 p-6 rounded-2xl w-full bg-[#2B3331]">
                <h3 className="text-2xl lg:text-3xl font-semibold text-left w-full">
                  {section3.div4.signup_confirm.heading}
                </h3>
                <div className="w-full flex flex-col gap-1">
                  {section3.div4.signup_confirm.items.map((item, index) => {
                    return (
                      <div key={index} className="flex items-start">
                        <DotIcon
                          size={32}
                          className="inline-block mr-2 flex-shrink-0 text-[#89A096]"
                        />
                        <p className="text-lg lg:text-xl 2xl:text-2xl text-[#89A096] font-semibold">
                          {item.includes(":") && (
                            <span className="text-[#DCE2E2] itlaic">
                              {item.split(":")[0] + ": "}
                            </span>
                          )}
                          {item.substring(item.indexOf(":") + 1)}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col justify-center items-center lg:justify-start gap-3 p-6 rounded-2xl w-full bg-[#2B3331]">
                <h3 className="text-2xl lg:text-3xl font-semibold text-left w-full">
                  {section3.div4.act_fast.heading}
                </h3>
                <div className="w-full flex flex-col gap-1">
                  {section3.div4.act_fast.items.map((item, index) => {
                    return (
                      <div key={index} className="flex items-start">
                        <DotIcon
                          size={32}
                          className="inline-block mr-2 flex-shrink-0"
                        />
                        <p className="text-lg lg:text-xl 2xl:text-2xl text-[#89A096] font-semibold">
                          {item.includes(":") && (
                            <span className="text-[#DCE2E2] itlaic">
                              {item.split(":")[0] + ": "}
                            </span>
                          )}
                          {item.substring(item.indexOf(":") + 1)}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center lg:justify-start gap-3 lg:gap-6 p-6 rounded-2xl w-full lg:w-[50%] bg-[#2B3331]">
              <h3 className="text-2xl lg:text-3xl font-semibold text-center w-full">
                {section3.div4.monitoring_begins.heading}
              </h3>
              <div className="w-full flex flex-col gap-1">
                {section3.div4.monitoring_begins.items.map((item, index) => {
                  return (
                    <div key={index} className="flex items-start">
                      <DotIcon
                        size={32}
                        className="inline-block mr-2 flex-shrink-0"
                      />
                      <p className="text-lg lg:text-xl 2xl:text-2xl text-[#89A096] font-semibold">
                        {item.includes(":") && (
                          <span className="text-[#DCE2E2] itlaic">
                            {item.split(":")[0] + ": "}
                          </span>
                        )}
                        {item.substring(item.indexOf(":") + 1)}
                      </p>
                    </div>
                  );
                })}

                <ul className="w-full flex flex-col gap-1 mt-6 2xl:mt-10 pl-5 2xl:pl-10">
                  {section3.div4.monitoring_begins.list.map((item, index) => {
                    return (
                      <li key={index} className="flex items-start">
                        <DotIcon
                          size={32}
                          className="inline-block mr-2 flex-shrink-0 text-[#89A096]"
                        />
                        <p className="text-lg lg:text-xl 2xl:text-2xl text-[#89A096] font-semibold">
                          {item.includes(":") && (
                            <span className="text-[#DCE2E2] itlaic">
                              {item.split(":")[0] + ": "}
                            </span>
                          )}
                          {item.substring(item.indexOf(":") + 1)}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#8AD5B7] w-[30%] mx-auto text-[#DCE2E2] h-2 my-10"></div>

      {/* Section 04 */}
      <section className="px-6 md:px-10 xl:px-16 flex flex-col gap-6 lg:gap-10 text-[#DCE2E2]">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 2xl:gap-8 w-full">
          <div className="flex flex-col justify-center items-center lg:items-start gap-3 lg:gap-5 lg:p-6 w-[80%] mx-auto lg:w-1/2">
            <h2 className="text-3xl md:text-4xl xl:text-[40px] xl:leading-tight text-left font-semibold text-[#8AD5B7] font-conthrax">
              {section4.div1.left.heading}
            </h2>
            <p className="text-lg lg:text-xl xl:text-2xl text-[#89A096] font-semibold text-center lg:text-left">
              {section4.div1.left.text}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 lg:gap-5 lg:p-6 w-[80%] mx-auto lg:w-1/2">
            {section4.div1.right.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center lg:items-start gap-3 lg:gap-5 w-full"
                >
                  <h3 className="text-2xl 2xl:text-3xl font-semibold text-center lg:text-left w-auto ml-0 bg-[#1E2322] rounded-xl p-3">
                    {item.heading}
                  </h3>
                  <div className="w-full flex flex-col gap-1">
                    {item.items.map((subItem, subIndex) => {
                      return (
                        <div
                          key={subIndex}
                          className="flex flex-col gap-1 items-center lg:items-start"
                        >
                          <p className="text-lg lg:text-xl 2xl:text-2xl text-[#89A096] font-semibold">
                            {subItem}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 2xl:gap-8 w-full mx-auto rounded-xl bg-[#2E3734] p-6">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl xl:text-[40px] xl:leading-tight text-center font-semibold text-[#8AD5B7] font-conthrax  lg:max-w-lg lg:mx-auto">
              {section4.div2.heading}
            </h2>
          </div>

          <div className="flex flex-col gap-1 w-full lg:w-1/2">
            {section4.div2.items.map((item, index) => {
              return (
                <div key={index} className="flex items-start">
                  <DotIcon
                    size={32}
                    className="inline-block mr-2 flex-shrink-0 text-[#89A096]"
                  />
                  <p className="text-lg lg:text-xl 2xl:text-2xl text-[#89A096] font-semibold">
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 2xl:gap-8 w-full mx-auto">
          <p className="text-lg lg:text-xl 2xl:text-2xl font-semibold max-w-2xl text-center mx-auto">
            {section4.div3.text}
          </p>

          <CTA2
            isArrow={false}
            text={section4.div3.cta.text}
            href={section4.div3.cta.link}
            styling={`w-[90%] lg:w-auto mt-0 mx-auto mb-10 rounded-2xl h-12 bg-[#8AD5B7] text-[#1E2322] px-0 xl:px-3 2xl:px-6 py-2 text-sm font-semibold whitespace-nowrap hover:brightness-105 transition xl:text-base font-conthrax `}
          />
        </div>
      </section>

      <ImageCarousel/>
    </div>
  );
};

export default Page;
