"use client";

import HeroSection from "../../components/HeroSection";
import MultiStepForm from "@/components/MultiStepForm";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { House, Mail, MapPin, Phone, PhoneCall, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Page = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const topSectionRef = useRef(null);

  const section01 = [
    ["1- For Consultation:"],
    [
      "2. For FDNY/DOB Violations,",
      "Inspections, or Structural Hazards",
      "Call:",
      "Email:",
    ],
    ["3- For Expediting & Permitting Services:"],
    [
      "4. Office Visit",
      "Meet Our Compliance Experts In-Person*",
      "Address: 22 E 41st Street, Third Floor New York NY 10017",
      "Hours: Mon-Fri 8 AM – 6 PM",
    ],
    [
      "5. General Inquiries",
      "Inspections, Quotes, or Compliance Strategy",
      "Email: info@pbs.nyc",
      "Contact Form",
    ],
  ];

  useEffect(() => {
    const handleScroll = () => {
      const mapSection = document.getElementById("map-container");
      if (mapSection) {
        const rect = mapSection.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          setMapLoaded(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (leftColumnRef.current) {
      gsap.from(leftColumnRef.current, {
        scrollTrigger: {
          trigger: leftColumnRef.current,
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: -50,
        duration: 1,
      });
    }
    if (rightColumnRef.current) {
      gsap.from(rightColumnRef.current, {
        scrollTrigger: {
          trigger: rightColumnRef.current,
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: 50,
        duration: 1,
      });
    }
  }, []);

  const formSteps = [
    {
      type: "text",
      name: "full_name",
      placeholder: "Enter full name",
      label: "Full Name",
      inputProps: {
        required: true,
        pattern: "[A-Za-z ]{3,}",
        title: "Please enter at least 3 characters",
        autoComplete: "name",
      },
      validate: (value) => {
        if (!value) return "This field is required";
        if (!/^[A-Za-z ]{3,}$/.test(value)) return "Invalid name format";
        return null;
      },
    },
    {
      type: "email",
      name: "email",
      placeholder: "Enter your email",
      inputProps: {
        required: true,
        autoComplete: "email",
      },
      validate: (value) => {
        if (!value) return "Email is required";
        if (!/^\S+@\S+\.\S+$/.test(value)) return "Invalid email format";
        return null;
      },
    },
    {
      type: "tel",
      name: "phone",
      placeholder: "Enter your phone",
      inputProps: {
        required: true,
        pattern: "[0-9]{10}",
        title: "Please enter a 10-digit phone number",
      },
    },
    {
      type: "textarea",
      name: "message",
      placeholder: "Enter your message",
      label: "Message",
      inputProps: {
        required: true,
      },
    },
  ];

  const button = {
    text: "Submit",
    icon: Send,
  };

  return (
    <div className="bg-[#37403D]">
      {/* Hero Section */}
      <HeroSection
        heading="Contact us"
        text="24/7 Support for Emergencies, Inspections, and Compliance Urgencies
Contact PBS Compliance Solutions"
        className="font-conthrax max-w-[90%] sm:max-w-2xl md:max-w-4xl lg:max-w-5xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#DCE2E2]"
        bgStyle="bg-right lg:bg-top bg-cover mix-blend-luminosity"
        isLine={true}
        textStyle="text-base sm:text-lg md:text-xl font-semibold text-[#DCE2E2]"
        img="/pics/contact-hero.png"
      />

      {/* Custom 'About Us' Label Divider */}
      <div className="w-[100vw] relative flex justify-center">
        <div className="bg-[#8AD5B7] w-full h-2 sm:h-3 lg:h-4"></div>
        <div className="bg-[#8AD5B7] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] lg:w-[60%] rounded-full text-[#37403D] p-2 sm:p-3 lg:p-4 flex justify-center items-center font-conthrax text-center text-base sm:text-xl md:text-2xl lg:text-4xl z-20">
          How to Contact Us
        </div>
      </div>
      {/*Section 01  */}
      <section className="px-6 md:px-10 xl:px-16 pt-16 lg:pt-24 text-[#DCE2E2]">
        <div className="container mx-auto flex flex-col items-center justify-center gap-6 xl:gap-10 h-full w-[90%]">
          
          <h1 className="w-full text-center text-[#DCE2E2] font-conthrax text-3xl xl:text-4xl font-semibold">Choose Your Convenience</h1>

          {section01.map((item, index) => {
            return (
              <motion.div
                key={index}
                className="w-full space-y-8 h-full flex flex-col justify-between rounded-xl bg-[#1E2322] py-4 px-6 xl:py-6 xl:px-10"
                initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  
              >
                {item.map((text, i) => {
                  return (
                    <span
                      key={i}
                      className="flex items-center gap-4 text-xl lg:text-2xl xl:text-3xl font-semibold font-conthrax text-[#8AD5B7]"
                    >
                      {text}
                    </span>
                  );
                })}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Section 2*/}
      <section className="w-full px-6 md:px-10 xl:px-16 py-16 lg:py-24 text-[#DCE2E2]">
        <div className="container mx-auto flex flex-col xl:flex-row items-center xl:items-stretch justify-center gap-10 xl:gap-16 h-full w-full">
          <div
            ref={leftColumnRef}
            className="w-full xl:w-1/2 space-y-8 h-full flex flex-col justify-between"
          >
            <div className="bg-[#141414] rounded-xl flex flex-col items-center justify-center relative">
              <div className="w-full relative flex justify-center">
                <div className="bg-[#8AD5B7] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] lg:w-[80%] xl:w-[70%] rounded-full text-[#37403D] p-2 sm:p-3 lg:p-4 flex justify-center items-center font-conthrax text-center text-base sm:text-xl md:text-2xl xl:text-4xl z-20">
                  Contact Us
                </div>
              </div>

              <div className="w-[90%] flex flex-col items-start justify-center gap-6 pt-16 mx-auto">
                <div className="flex items-center gap-2">
                <PhoneCall color="#8ad5b7" size={32}/>
                  <span className="text-xl lg:text-2xl xl:text-3xl text-[#8AD5B7] font-semibold">Call:</span>
                  <p className="text-[#89A096] text-lg lg:text-xl xl:text-2xl font-medium">212-271-6837</p>
                </div>
                <div className="flex items-center gap-2">
                <Mail color="#8ad5b7" size={32}/>
                  <span className="text-xl lg:text-2xl xl:text-3xl text-[#8AD5B7] font-semibold">Email:</span>
                  <p className="text-[#89A096] text-lg lg:text-xl xl:text-2xl font-medium">info@pbs.nyc</p>
                </div>
                <div className="flex items-start gap-2">
                <House color="#8ad5b7" size={32} className="flex-shrink-0"/>
                  <span className="text-xl lg:text-2xl xl:text-3xl text-[#8AD5B7] font-semibold">Address:</span>
                  <p className="text-[#89A096] text-lg lg:text-xl xl:text-2xl font-medium">22 E 41st Street, Third Floor
                  New York, NY 10017</p>
                </div>
              </div>

              <MultiStepForm
                steps={formSteps}
                buttonObj={button}
                onSubmit={(data) => console.log(data)}
                containerClass="relative z-10 backdrop-blur-lg bg-[#171717] focus-within:border focus-within:border-white rounded-xl transition-all"
                inputClass="w-full rounded-xl text-white placeholder-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/30 transition-all"
                buttonClass="md:w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-semibold px-8 py-4 rounded-xl transition-colors group-hover/form:shadow-lg group-hover/form:shadow-emerald-800/20 ml-6 md:ml-16 lg:ml-48"
                errorClass="text-rose-400 mt-2 text-sm"
                progressLineColor={"white"}
                
              />
            </div>
          </div>

          <div ref={rightColumnRef} className="w-full xl:w-1/2 h-auto relative">
            <div className="absolute inset-y-0 left-[50%] w-[2px] bg-gradient-to-b from-transparent via-white/20 to-transparent blur-md"></div>


           <div className="bg-[#141414] rounded-xl p-3 h-[50vh] xl:h-full">
            <div
              id="map-container"
              className="w-full h-full filter invert-[90%] hue-rotate-180 grayscale-[20%] contrast-90"
            >
              {mapLoaded ? (
                <iframe
                  title="New York Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24184.00445395243!2d-74.0060152!3d40.7127281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3168c5e9ab%3A0x9e94b7b5b7f9b5c8!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1617221740848"
                  className="rounded-lg shadow-lg w-full h-full"
                />
              ) : (
                <div className="w-full h-[90vh] flex items-center justify-center bg-gray-800 rounded-lg">
                  <p>Loading map...</p>
                </div>
              )}
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
