"use client";

import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import {
  teamMembers,
  leadershipTeam,
  projectManagers,
  specialists,
} from "./data"; // Import data

const Page = () => {
  return (
    <div className="bg-[#37403D] min-h-screen overflow-hidden">
      <HeroSection
        heading="Meet Our Team"
        text="Dedicated professionals committed to excellence."
        img="/pics/Team 1.png"
        isLine={true}
        className="font-conthrax"
        bgStyle="bg-center md:bg-bottom"
      />

      {/* Custom 'About Us' Label Divider */}
      <div className="w-[100vw] relative">
        <div className="bg-[#8AD5B7] w-full text-white py-1" />
        <div className="bg-[#8AD5B7] w-1/2 lg:w-1/3 absolute left-[25%] lg:left-[33%] -top-5 lg:-top-6 rounded-full text-[#37403D] p-2 flex justify-center items-center font-conthrax text-2xl lg:text-4xl">
          Our Team
        </div>
      </div>

      <div className="w-full mt-10 font-semibold text-base text-[#89A096]">
        <p className="w-full text-center">
          Meet the professionals driving our success.
        </p>
      </div>

      <div className="py-16 px-6 md:px-12 xl:px-16">
        <section className="w-[100%]">
          {/* Leadership Team Section */}
          <div className="mb-16 w-full flex flex-col justify-center items-center">
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#8AD5B7] mb-8 text-center font-conthrax">
              Leadership Team
            </h2>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
              {leadershipTeam.map((member, index) => (
                <motion.div
                  key={index}
                  className={`w-full h-[175px] bg-[#1E2322] flex items-center justify-start gap-3 xl:gap-8 box-border p-3 rounded-2xl md:rounded-full ${
                    index === leadershipTeam.length - 1
                      ? index % 2 === 0
                        ? "relative left-0 lg:left-[50%]"
                        : ""
                      : ""
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-[#ffff] aspect-square h-full rounded-full shadow-lg transition-transform hover:scale-105 hidden md:block"></div>
                  <div className="w-[75%] xl:w-[60%] p-0 flex flex-col items-start justify-center gap-1">
                    <h3 className="text-xl xl:text-2xl font-conthrax font-semibold text-[#8AD5B7]">
                      {member.name}
                    </h3>

                    <p className="text-[#ffff] text-xs xl:text-sm font-semibold">
                      {member.title}
                    </p>
                    <p className="text-xs text-[#89A096] text-semibold break-all">
                      {member.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="w-1/2 md:w-[30%] mx-auto mb-10 bg-[#D9D9D9] h-1"></div>

          {/* Project Managers Section */}
          <div className="mb-16 w-full flex flex-col justify-center items-center">
            <h2 className="text-3xl font-semibold text-[#8AD5B7] mb-8 text-center font-conthrax">
              Project Manager
            </h2>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projectManagers.map((member, index) => (
                <motion.div
                key={index}
                className={`w-full h-[175px] bg-[#1E2322] flex items-center justify-start gap-3 xl:gap-8 box-border p-3 rounded-2xl md:rounded-full ${
                  index === projectManagers.length - 1
                    ? index % 2 === 0
                      ? "relative left-0 lg:left-[50%]"
                      : ""
                    : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-[#ffff] aspect-square h-full rounded-full shadow-lg transition-transform hover:scale-105 hidden md:block"></div>
                <div className="w-[75%] xl:w-[60%] p-0 flex flex-col items-start justify-center gap-1">
                  <h3 className="text-xl xl:text-2xl font-conthrax font-semibold text-[#8AD5B7]">
                    {member.name}
                  </h3>

                  <p className="text-[#ffff] text-xs xl:text-sm font-semibold">
                    {member.title}
                  </p>
                  <p className="text-xs text-[#89A096] text-semibold break-all">
                    {member.description}
                  </p>
                </div>
              </motion.div>
              ))}
            </div>
          </div>

          <div className="w-1/2 md:w-[30%] mx-auto mb-10 bg-[#D9D9D9] h-1"></div>

          {/* Specialists Section */}
          <div className="mb-16 w-full flex flex-col justify-center items-center">
            <h2 className="text-3xl font-semibold text-[#8AD5B7] mb-8 text-center font-conthrax">
              Specialists
            </h2>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projectManagers.map((member, index) => (
               <motion.div
               key={index}
               className={`w-full h-[175px] bg-[#1E2322] flex items-center justify-start gap-3 xl:gap-8 box-border p-3 rounded-2xl md:rounded-full ${
                 index === projectManagers.length - 1
                   ? index % 2 === 0
                     ? "relative left-0 lg:left-[50%]"
                     : ""
                   : ""
               }`}
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
             >
               <div className="bg-[#ffff] aspect-square h-full rounded-full shadow-lg transition-transform hover:scale-105 hidden md:block"></div>
               <div className="w-[75%] xl:w-[60%] p-0 flex flex-col items-start justify-center gap-1">
                 <h3 className="text-xl xl:text-2xl font-conthrax font-semibold text-[#8AD5B7]">
                   {member.name}
                 </h3>

                 <p className="text-[#ffff] text-xs xl:text-sm font-semibold">
                   {member.title}
                 </p>
                 <p className="text-xs text-[#89A096] text-semibold break-all">
                   {member.description}
                 </p>
               </div>
             </motion.div>
              ))}
            </div>
          </div>

          <div className="w-1/2 md:w-[30%] mx-auto mb-10 bg-[#D9D9D9] rounded-full h-1"></div>
        </section>
      </div>
    </div>
  );
};

export default Page;
