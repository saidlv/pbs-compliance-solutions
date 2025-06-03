"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import Sidebar from "@/components/navbar2/Sidebar";
import DashboardTable from "@/components/member-portal/DashboardTable";
import ManageProperties from "@/components/member-portal/ManageProperties";
import PropertySummary from "@/components/member-portal/PropertySummary";
import Settings from "@/components/member-portal/Settings";

const Page = () => {
  const [entries, setEntries] = useState(20);
  const [search, setSearch] = useState("");
  const [displayComponent, setDisplayComponent] = useState("Property List");

  const buttonList = [
    "Property List",
    "Manage Properties",
    "Property Summary",
    "Settings",
  ];

  const handleIncrement = () => {
    setEntries((prev) => prev + 1);
    console.log(`Showing ${entries + 1} entries`);
  };

  const handleDecrement = () => {
    setEntries((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="relative bg-[#37403D] w-full min-h-screen">

      {/* Sidebar (Always Visible) */}
      <Sidebar />

      {/* Main Content Centered */}
      <div className="flex justify-center">
        <div className="pl-[10vw] lg:pl-[5vw] mx-auto pt-10 lg:pt-16 w-full">
          <h1 className="text-4xl md:text-5xl xl:text-[55px] font-conthrax font-semibold text-[#8AD5B7] w-full text-center pt-16 xl:pt-24 max-w-md sm:max-w-3xl mx-auto">
            PBS Member Portal
          </h1>
          <p className="text-center text-[#89A096] font-semibold text-lg xl:text-xl pt-3 xl:pt-5">
            Compliance Made Simple, Projects Done Right
          </p>

          <div className="w-[30%] xl:w-[20%] mx-auto bg-[#8AD5B7] h-2 my-6"></div>

          <h2 className="text-3xl md:text-4xl xl:text-[40px] font-conthrax font-semibold text-[#D9D9D9] w-full text-center pt-0 xl:pt-6">
            Dashboard
          </h2>

          <div className="w-[90%] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-6 xl:pt-10">
            {buttonList.map((button, index) => (
              <button
                onClick={() => {setDisplayComponent(button)

                }}
                key={index}
                className={`w-full lg:w-auto hover:bg-[#8AD5B7]  font-semibold text-lg xl:text-xl p-2 rounded-full shadow-md hover:text-[#1E2322] transition duration-300 ease-in-out text-center cursor-pointer flex items-center justify-center ${
                  displayComponent === button ? "bg-[#8AD5B7] text-[#1E2322]" : "bg-[#2E3734] text-[#89A096]"}`}
              >
                {button}
              </button>
            ))}
          </div>

          <div className="w-[90%] mx-auto flex flex-col justify-center items-center mt-6">
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between items-center w-full mx-auto text-[#89A096] font-semibold text-lg xl:text-xl p-2 rounded-full mb-6">
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
                    <img
                      src="/up.svg"
                      alt=""
                      className="w-2 h-2 cursor-pointer hover:mix-blend-luminosity"
                      onClick={handleIncrement}
                    />
                    <img
                      src="/down.svg"
                      className="w-2 h-2 cursor-pointer hover:mix-blend-luminosity"
                      onClick={handleDecrement}
                    />
                  </div>
                </div>
                <span className="ml-2 text-[#89A096]">Entries</span>
              </div>
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="search"
                  className="bg-[#2E3734] rounded-full px-3 py-1 border border-[#8AD5B7]"
                />
                <X className="absolute right-4" />
              </div>
            </div>
            
            {displayComponent == "Property List" && <DashboardTable entries={entries} handleIncrement={handleIncrement} handleDecrement= {handleDecrement}/>}
            {displayComponent == "Manage Properties" && <ManageProperties/>}
            {displayComponent == "Property Summary" && <PropertySummary entries={entries} handleIncrement={handleIncrement} handleDecrement= {handleDecrement}/>}
            {displayComponent == "Settings" && <Settings entries={entries} handleIncrement={handleIncrement} handleDecrement= {handleDecrement}/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;