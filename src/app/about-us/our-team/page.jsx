"use client";

import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import { teamMembers, leadershipTeam, projectManagers, specialists } from "./data"; // Import data

const Page = () => {
  return (
    <div className="bg-[#37403D] min-h-screen overflow-hidden">
      <HeroSection
        heading="Meet Our Team"
        text="Dedicated professionals committed to excellence."
        img = "/pics/Team 1.png"
        isLine={true}
        className="font-conthrax"
      /> 

       {/* Custom 'About Us' Label Divider */}
       <div className="w-[100vw] relative">
        <div className="bg-[#8AD5B7] w-full text-white py-1" />
        <div className="bg-[#8AD5B7] w-1/3 lg:w-1/4 absolute left-[33%] lg:left-[37%] -top-4 rounded-full text-white p-2 flex justify-center items-center">
          Our Team
        </div>
      </div>

      <div className="w-full flex justify-center items-center mt-10 text-sm text-[#89A096]">
        <p>Meet the professionals driving our success...</p>
      </div>

      <div className="py-10 px-6 md:px-12 lg:px-16">
        <section className="container mx-auto">
          {/* Leadership Team Section */}
          <div className="mb-16 w-full flex flex-col justify-center items-center">
            <h2 className="text-3xl font-semibold text-[#8AD5B7] mb-8 text-center font-conthrax">
              Leadership Team
            </h2>
            <div className="flex justify-evenly items-center flex-wrap gap-6">
              {leadershipTeam.map((member, index) => (
                <motion.div
                  key={index}
                  className="w-[200] h-[500] flex flex-col items-center justify-start gap-8"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-[#1a1a1a] w-full h-[200] rounded-full shadow-lg p-6 border border-[#2d545e] transition-transform hover:scale-105  flex flex-col items-center justify-center">
                  <h3 className="text-center text-xl font-semibold text-white mb-2">{member.name}</h3>
                  </div>
                  <div>
                  <p className="text-[#8AD5B7] mb-2 font-conthrax text-center">{member.title}</p>
                  <p className="text-sm text-[#89A096] text-semibold text-center break-all">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="w-[30%] mx-auto mb-10 bg-[#D9D9D9] rounded-full h-1"></div>

          {/* Project Managers Section */}
          <div className="mb-16 w-full flex flex-col justify-center items-center">
            <h2 className="text-3xl font-semibold text-[#8AD5B7] mb-8 text-center font-conthrax">
              Project Manager
            </h2>
            <div className="flex justify-evenly items-center flex-wrap gap-6">
              {projectManagers.map((member, index) => (
                <motion.div
                  key={index}
                  className="w-[200] min-h-[300] flex flex-col items-center justify-start gap-8"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-[#1a1a1a] w-full h-[200] rounded-full shadow-lg p-6 border border-[#2d545e] transition-transform hover:scale-105  flex flex-col items-center justify-center">
                  <h3 className="text-center text-xl font-semibold text-white mb-2">{member.name}</h3>
                  </div>
                  <div>
                  <p className="text-[#8AD5B7] mb-2 font-conthrax text-center">{member.title}</p>
                  <p className="text-sm text-[#89A096] text-semibold text-center break-all">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="w-[30%] mx-auto mb-10 bg-[#D9D9D9] rounded-full h-1"></div>

          {/* Specialists Section */}
          <div className="mb-16 w-full flex flex-col justify-center items-center">
            <h2 className="text-3xl font-semibold text-[#8AD5B7] mb-8 text-center font-conthrax">
              Specialists
            </h2>
            <div className="flex justify-evenly items-center flex-wrap gap-6">
              {specialists.map((member, index) => (
                <motion.div
                  key={index}
                  className="w-[200] min-h-[450] flex flex-col items-center justify-start gap-8"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-[#1a1a1a] w-full h-[200] rounded-full shadow-lg p-6 border border-[#2d545e] transition-transform hover:scale-105  flex flex-col items-center justify-center">
                  <h3 className="text-center text-xl font-semibold text-white mb-2">{member.name}</h3>
                  </div>
                  <div>
                  <p className="text-[#8AD5B7] mb-2 font-conthrax text-center">{member.title}</p>
                  <p className="text-sm text-[#89A096] text-semibold text-center break-all">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="w-[30%] mx-auto mb-10 bg-[#D9D9D9] rounded-full h-1"></div>
        </section>
      </div>
    </div>
  );
};

export default Page;