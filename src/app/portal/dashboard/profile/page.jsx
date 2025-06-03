"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
const Page = () => {
  const [profileData, setProfileData] = useState({});

useEffect(() => {
  const initialData = { 
    Name: "USER @PBS",
    Email: "user@pbs.nyc",
    Status: "Trialing",
    Plan: "Gold",
    Ends: "2025-8-10",
    "Member Since": "May 12, 2025",
    "Total Properties": 2,
    Balance: "$0.00",
    Hearings: 0,
    "Help Center": "https://help.pbs.nyc",
  }
  setProfileData(initialData)
},[])
  return (
    <div className="bg-[#1E2322] text-white min-h-screen flex flex-col items-center p-6 pt-16 lg:">
      {/* Logo and Title */}
      <div className="flex flex-col items-center justify-center gap-6">
        <img
          src="/pics/LOGO.png" // Replace with actual PBS logo URL
          alt="PBS Logo"
          className="mr-2 w-[50px] h-[50px]"
        />
        <h1 className="text-3xl font-bold text-[#8AD5B7]">PROFILE</h1>
      </div>

      <div className="w-[50%] bg-[#8AD5B7] mx-auto h-2 my-10"></div>

      {/* Profile Section */}
      <div className="w-full max-w-2xl rounded-lg px-6 pb-6 text-center">
        <div className="flex items-center justify-center gap-6 mb-4">
          <div className="w-32 h-32 bg-[#D9D9D9] rounded-full"></div>
          <div className="text-left flex flex-col justify-center items-start gap-3">
            <div className="space-y-1">
              <p className="text-3xl xl:text-4xl font-semibold text-[#8AD5B7]">
                {profileData.Name}
              </p>
              <p className="text-sm xl:text-base text-[#89A096] font-normal">
                {profileData.Email}
              </p>
            </div>
            <Link href="/alert/edit-profile">
              <button className="bg-[#8AD5B7] text-[#1E2322] px-4 py-2 rounded-full hover:bg-opacity-80 transition-all font-bold text-xl">
                Edit Profile
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-[50%] bg-[#8AD5B7] mx-auto h-2 my-10"></div>

      {/* Subscription Info */}
      <div className="w-full max-w-2xl rounded-lg px-6 pb-6 text-left">
        <h3 className="text-2xl 2xl:text-3xl font-semibold mb-4 text-[#8AD5B7]">
          Subscription Info
        </h3>
        <div className="space-y-2">
          <p className="flex justify-between items-center">
            <span className="text-[#89A096] text-xl font-semibold">Status</span>{" "}
            <span className="text-[#8AD5B7] text-xl w-[30%] font-semibold">
              {profileData.Status}
            </span>
          </p>
          <p className="flex justify-between items-center">
            <span className="text-[#89A096] text-xl font-semibold">Plan</span>{" "}
            <span className="text-[#8AD5B7] text-xl w-[30%] font-semibold">
              {profileData.Plan}
            </span>
          </p>
          <p className="flex justify-between items-center">
            <span className="text-[#89A096] text-xl font-semibold">Ends</span>{" "}
            <span className="text-[#8AD5B7] text-xl w-[30%] font-semibold">
              {profileData.Ends}
            </span>
          </p>
          <p className="flex justify-between items-center">
            <span className="text-[#89A096] text-xl font-semibold">
              Member Since
            </span>{" "}
            <span className="text-[#8AD5B7] text-xl w-[30%] font-semibold">
              {profileData["Member Since"]}
            </span>
          </p>
        </div>

        <div className="w-full bg-[#8AD5B7] mx-auto h-2 my-10"></div>

        <p className="flex justify-between items-center">
          <span className="text-[#89A096] text-xl font-semibold">
            Total Properties
          </span>{" "}
          <span className="text-[#8AD5B7] text-xl w-[30%] font-semibold">
            {profileData["Total Properties"]}
          </span>
        </p>

        <div className="w-full bg-[#8AD5B7] mx-auto h-2 my-10"></div>

        <p className="flex justify-between items-center">
          <span className="text-[#89A096] text-xl font-semibold">Balance</span>{" "}
          <span className="text-[#8AD5B7] text-xl w-[30%] font-semibold">
            {profileData.Balance}
          </span>
        </p>

        <div className="w-full bg-[#8AD5B7] mx-auto h-2 my-10"></div>

        <p className="flex justify-between items-center">
          <span className="text-[#89A096] text-xl font-semibold">Hearings</span>{" "}
          <span className="text-[#8AD5B7] text-xl w-[30%] font-semibold">
            {profileData.Hearings}
          </span>
        </p>

        <div className="w-full bg-[#8AD5B7] mx-auto h-2 my-10"></div>

        <p className="flex justify-between items-center">
          <span className="text-[#89A096] text-xl font-semibold">Help Center</span>
        </p>
      </div>

      {/* Help Center and Logout */}
      <div className="w-full max-w-2xl px-6 pb-6 text-left flex justify-end">
        <Link href="/logout">
          <button className="bg-[#8AD5B7] text-[#1E2322] font-bold text-xl px-6 py-2 rounded-full hover:bg-opacity-80 transition-all">
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
