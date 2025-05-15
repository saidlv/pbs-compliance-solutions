"use client";
import React, { useState } from "react";
import { ChevronUp, ChevronDown, Cross, X } from "lucide-react";

const Page = () => {
  const [entries, setEntries] = useState(20);
  const [search, setSearch] = useState("");

  const buttonList = [
    "Property List",
    "Manage Properties",
    "Property Summary",
    "Settings",
  ];

  const handleIncrement = () => {
    setEntries((prev) => prev + 1);
    // Add logic to update displayed entries in your table/data
    console.log(`Showing ${entries + 1} entries`);
  };

  const handleDecrement = () => {
    setEntries((prev) => (prev > 1 ? prev - 1 : 1)); // Prevent going below 1
  };

  return (
    <div className="bg-[#37403D]">
      <h1 className="text-4xl md:text-5xl xl:text-[55px] font-conthrax font-semibold text-[#8AD5B7] w-full text-center pt-16 xl:pt-24">
        PBS Member Portal
      </h1>
      <p className="text-center text-[#89A096] font-semibold text-lg xl:text-xl pt-3 xl:pt-5">
        Compliance Made Simple, Projects Done Right
      </p>

      <div className="w-[30%] xl:w-[20%] mx-auto bg-[#8AD5B7] h-2 my-6"></div>

      <h2 className="text-3xl md:text-4xl xl:text-[40px] font-conthrax font-semibold text-[#D9D9D9] w-full text-center pt-0 xl:pt-6">
        Dashboard
      </h2>

      <div className="w-[80%] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-6 xl:pt-10">
        {buttonList.map((button, index) => {
          return (
            <div
              key={index}
              className="w-full lg:w-auto bg-[#2E3734] hover:bg-[#8AD5B7] text-[#89A096] font-semibold text-lg xl:text-xl p-2 rounded-full shadow-md hover:text-[#1E2322] transition duration-300 ease-in-out text-center cursor-pointer flex items-center justify-center"
            >
              {button}
            </div>
          );
        })}
      </div>

      <div className="w-full flex flex-col justify-center items-center mt-10">
        <div className="flex justify-between items-center w-[90%] mx-auto text-[#89A096] font-semibold text-lg xl:text-xl p-2 rounded-full">
          <div className="flex items-center text-white p-2 rounded-md">
            <span className="mr-2 text-[#89A096]">Show</span>
            <div className="flex items-stretch gap-1">
              <div
                className="bg-[#2E3734] border border-[#8AD5B7] rounded-full h-auto text-[#89A096] outline-none w-12 flex items-center justify-center"
                min="1"
              >
                {entries}
              </div>
              <div className="flex flex-col justify-center gap-1">
                  <img src="/up.svg" alt="" className="w-2 h-2 cursor-pointer hover:mix-blend-luminosity" onClick={handleIncrement}/>
               
                  <img src="/down.svg" className="w-2 h-2 cursor-pointer hover:mix-blend-luminosity" onClick={handleDecrement}/>
              </div>
            </div>
            <span className="ml-2 text-[#89A096]">Entries</span>
          </div>
          <div className="relative flex items-center">
           
          <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="search" className="bg-[#2E3734] rounded-full px-3 py-1 border border-[#8AD5B7]" />
           <X className="absolute right-4"/>
          </div>
        </div>

      <div className="p-10 bg-[#2E3734] rounded-xl w-[90%] mx-auto mt-10">
      <table className="text-[#D9D9D9]  overflow-hidden w-full text-center border-collapse border-4 border-[#2E3734]">
      <thead>
        <tr className="border-b border-[#89A096] text-[#8AD5B7] text-2xl font-semibold">
          <th className="w-2/5 px-2 py-6 border-r-2 border-[#8AD5B7]">Address</th>
          <th className="w-1/5 px-2 py-6 border-r-2 border-[#8AD5B7]">Sync Status</th>
          <th className="w-1/5 px-2 py-6">View</th>
        </tr>
      </thead>
      <tbody>
        {Array(9)
          .fill("")
          .map((_, index) => (
            <tr key={index} className="border-b border-[#89A096] text-[#D9D9D9] text-lg font-semibold">
              <td className="w-2/5 px-2 py-6 border-r-2 border-[#8AD5B7]"></td>
              <td className="w-1/5 px-2 py-6 border-r-2 border-[#8AD5B7]"></td>
              <td className="w-1/5 px-2 py-6"></td>
            </tr>
          ))}
      </tbody>
    </table>
    </div>
      </div>

      <div className="flex justify-between items-center w-[90%] mx-auto text-[#89A096] font-semibold text-lg xl:text-xl p-2 mt-6">
        <p>Showing 1 to 2 of 2 entries</p>
        <div className="flex items-center gap-4">
          <button className="hover:text-[#8AD5B7]" onClick={handleDecrement}>Previous</button>
          <div
                className="bg-[#2E3734] border border-[#8AD5B7] rounded-full h-auto outline-none w-12 flex items-center justify-center"
                min="1"
              >
                {entries}
              </div>
          <button className="hover:text-[#8AD5B7]" onClick={handleIncrement}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Page;
