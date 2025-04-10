"use client";

import CustomImage from "@/app/CustomImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Solutions = () => {
  const containerRef = useRef(null);

  const SolutionsItems = [
    {
      title: "Membership",
      description:
        "PBS offers tiered subscription models for clients, providing compliance alerts, consultancy access and priority support to proactively manage regulatory updates and project risks.",
      image:
        "/pics/Rectangle15.png",
    },
    {
      title: "Planning",
      description:
        "PBS designs risk-mitigated project roadmaps with compliance checkpoints, adaptive timelines, and proactive strategies to address evolving regulations and avoid delays or penalties.",
      image:
        "/pics/Rectangle16.png",
    },
    {
      title: "Development",
      description:
        "PBS innovates through enhanced owner representation services and partnerships with General contractors to deliver cutting-edge solutions in complex construction environments.",
      image:
        "/pics/Rectangle17.png",
    },
  ];

  useEffect(() => {
    const imagesToPreload = SolutionsItems.slice(1).map((item) => item.image);

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
        toggleActions: "play none none reverse",
      },
    });

    timeline.from(".solution-card", {
      opacity: 0,
      y: 50,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.3,
      delay: 0.3,
    });

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div className="bg-brand-dark py-16 md:py-24 lg:py-32">
      <div
        className="container mx-auto px-6 md:px-12 lg:px-24"
        ref={containerRef}
      >
        {/* Heading and Subheading */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-conthrax font-bold text-brand-light mb-4">
            Solutions
          </h1>
          <div className="max-w-3xl mx-auto text-brand-gray3">
            <p className="text-lg md:text-xl font-poppins">
              Compliance Secured, Strategy Defined, Future Built
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 lg:gap-16 w-full">
          {SolutionsItems.map((item) => (
            <div
              key={item.title}
              className="w-full solution-card bg-[#1E2322] p-8 rounded-2xl border-2 border-brand-gray1/50"
            >
              <CustomImage
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                className="w-full h-32 object-cover rounded-xl mb-6"
              />
              <h3 className="text-xl md:text-2xl text-center font-conthrax font-semibold text-brand-light mb-4">
                {item.title}
              </h3>
              <p className="text-brand-gray3 text-left text-sm font-poppins leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;