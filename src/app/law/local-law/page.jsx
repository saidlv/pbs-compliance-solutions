"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import { localLaw } from "../data"; // Assuming data.js is in the same directory

const page = () => {
  return (
    <div className="bg-[#101010]">
      {/* Hero section as full-width header */}
      {/* <div className="bg-[#282828] py-16 px-6 md:px-12 lg:px-24 w-full"> */}
      <HeroSection
        heading="Avoid Fines, Prevent Disasters, Protect your Legacy"
        text="Local Law 11 Compliance isn’t just a mandate, it’s your building lifeline. Let PBS 
         Handle the complexities while you focus on what matters."
        staggerVal={0.1}
      />
      {/* </div> */}

      {/* Body content */}
      <div className="py-16 px-6 md:px-12 lg:px-24">
        <section className="container mx-auto sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%]">
          {/* Why Local Law 11 Matters */}
          <motion.div
            className="bg-[#1a1a1a] p-8 rounded-lg shadow-md mb-8 border-l-4 border-[#4CAF50]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">
              {localLaw.whyLl11.heading}
            </h2>
            <p className="text-lg text-[#9ca3af] mb-4">
              <span className="font-bold text-[#4CAF50]">
                {localLaw.whyLl11.subheadline}
              </span>
            </p>
            <div dangerouslySetInnerHTML={{ __html: localLaw.whyLl11.body }} className="text-[#9ca3af]" />
          </motion.div>

          {/* Our Services */}
          <motion.div
            className="bg-[#262626] p-8 rounded-lg shadow-md mb-8 border-l-4 border-[#2196F3]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">
              {localLaw.ourServices.heading}
            </h2>
            <p className="text-lg text-[#9ca3af] mb-4">
              <span className="font-bold text-[#2196F3]">
                {localLaw.ourServices.subheadline}
              </span>
            </p>
            {localLaw.ourServices.services.map((service, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {service.heading}
                </h3>
                {service.subheading && (
                  <h4 className="text-lg font-medium mb-2 text-[#9ca3af]">
                    {service.subheading}
                  </h4>
                )}
                {service.items && (
                  <ul className="list-disc list-inside text-[#9ca3af]">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-lg">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {service.body && (
                  <div dangerouslySetInnerHTML={{ __html: service.body }} className="text-[#9ca3af]" />
                )}
              </div>
            ))}
          </motion.div>

          {/* The PBS Process */}
          <motion.div
            className="bg-[#333333] p-8 rounded-lg shadow-md mb-8 border-l-4 border-[#FF9800]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">
              {localLaw.pbsProcess.heading}
            </h2>
            <div dangerouslySetInnerHTML={{ __html: localLaw.pbsProcess.description }} className="text-[#9ca3af]" />
          </motion.div>

          {/* Why Choose PBS */}
          <motion.div
            className="bg-[#404040] p-8 rounded-lg shadow-md mb-8 border-l-4 border-[#E91E63]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">
              {localLaw.whyChoosePbs.heading}
            </h2>
            <ul className="list-disc list-inside text-[#9ca3af]">
              {localLaw.whyChoosePbs.points.map((point, index) => (
                <li key={index} className="text-lg">
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="bg-[#4d4d4d] p-8 rounded-lg shadow-md border-l-4 border-[#9C27B0]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">
              {localLaw.ctaSection.heading}
            </h2>
            <div className="flex flex-wrap gap-2">
              {localLaw.ctaSection.trustSignals.map((signal, index) => (
                <span
                  key={index}
                  className="bg-[#e9ecef] px-4 py-2 rounded-full text-sm text-[#333]"
                >
                  {signal}
                </span>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default page;