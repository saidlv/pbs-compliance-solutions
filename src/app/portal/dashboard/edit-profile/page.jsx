"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useUser } from "@/context/UserContext";
const Page = () => {
  const [profileData, setProfileData] = useState({});
  const [oldData, setOldData] = useState({});
  const router = useRouter();
  const { user } = useUser();

  const handleSave = () => {
    setOldData(profileData);
    router.push("/alert/profile");
  }

useEffect(() => {
  const initialData = {
    Name: "USER @PBS",
    Email: "user@pbs.nyc",
    Company: "user company",
    Address: "user address",
    Phone: "048079307735",
  };
  setProfileData(initialData);
  setOldData(initialData);
},[])

  useEffect(() => {
      if (user === null) {
        router.push("/portal/login");
      } else if (user && !user?.memberuser) {
        window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/portal/subscribe`;
      }
    }, [user]);

return(
    <div className="bg-[#1E2322] text-white min-h-screen flex flex-col items-center p-6 pt-16 lg:">
      {/* Logo and Title */}
      <div className="flex flex-col items-center justify-center gap-6">
        <img
          src="/pics/LOGO.png" // Replace with actual PBS logo URL
          alt="PBS Logo"
          className="mr-2 w-[50px] h-[50px]"
        />
        <h1 className="text-3xl font-bold text-[#8AD5B7]">UPDATE PROFILE</h1>
      </div>

      <div className="w-[50%] bg-[#8AD5B7] mx-auto h-2 my-10"></div>

      {/* Profile Section */}
      <div className="w-full max-w-2xl rounded-lg text-center">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="w-32 h-32 bg-[#D9D9D9] rounded-full"></div>
              <p className="text-lg lg:text-xl font-semibold text-[#89A096]">
                Edit Profile Image
              </p>
        </div>
      </div>

      {/* Edit Data */}
      <div className="w-full max-w-2xl rounded-lg px-6 pyb-6 pt-10 text-left">
        <table className="w-full text-white">
      <thead >
        <tr className="border-b-2 py-6 border-[#8AD5B7]">
        <th className="w-1/3 py-3 pr-4 text-[#8AD5B7] font-semibold text-xl text-center border-r-2 border-[#8AD5B7]">Value Option</th>
        <th className="w-2/3 py-3 pr-4 text-[#8AD5B7] font-semibold text-xl text-center">New Value</th>
        </tr>
      </thead>      
      <tbody>
        <tr className="border-b-2 py-6 border-[#8AD5B7]">
          <td className="w-1/3 py-6 pr-4 text-[#89A096] font-semibold text-xl text-left border-r-2 border-[#8AD5B7]">User Name</td>
          <td className="w-2/3 py-6">
            <input
              type="text"
              value={profileData.Name ?? ""}
              onChange={(e) => setProfileData({ ...profileData, Name: e.target.value })}
              className="px-10 bg-transparent border-none outline-none w-full text-[#89A096] font-semibold text-xl"
            />
          </td>
        </tr>
        <tr className="border-b-2 py-6 border-[#8AD5B7]">
          <td className="w-1/3 py-6 pr-4 text-[#89A096] font-semibold text-xl text-left border-r-2 border-[#8AD5B7]">Email</td>
          <td className="w-2/3 py-6">
            <input
              type="email"
              value={profileData.Email ?? ""}
              onChange={(e) => setProfileData({ ...profileData, Email: e.target.value })}
              className="px-10 bg-transparent border-none outline-none w-full text-[#89A096] font-semibold text-xl"
            />
          </td>
        </tr>
        <tr className="border-b-2 py-6 border-[#8AD5B7]">
          <td className="w-1/3 py-6 pr-4 text-[#89A096] font-semibold text-xl text-left border-r-2 border-[#8AD5B7]">Company</td>
          <td className="w-2/3 py-6">
            <input
              type="text"
              value={profileData.Company ?? ""}
              onChange={(e) => setProfileData({ ...profileData, Company: e.target.value })}
              className="px-10 bg-transparent border-none outline-none w-full text-[#89A096] font-semibold text-xl"
            />
          </td>
        </tr>
        <tr className="border-b-2 py-6 border-[#8AD5B7]">
          <td className="w-1/3 py-6 pr-4 text-[#89A096] font-semibold text-xl text-left border-r-2 border-[#8AD5B7]">Address</td>
          <td className="w-2/3 py-6">
            <input
              type="text"
              value={profileData.Address ?? ""}
              onChange={(e) => setProfileData({ ...profileData, Address: e.target.value })}
              className="px-10 bg-transparent border-none outline-none w-full text-[#89A096] font-semibold text-xl"
            />
          </td>
        </tr>
        <tr className="border-b-2 py-6 border-[#8AD5B7]">
          <td className="w-1/3 py-6 pr-4 text-[#89A096] font-semibold text-xl text-left border-r-2 border-[#8AD5B7]">Phone No</td>
          <td className="w-2/3 py-6">
            <input
              type="tel"
              value={profileData.Phone ?? ""}
              onChange={(e) => setProfileData({ ...profileData, Phone: e.target.value })}
              className="px-10 bg-transparent border-none outline-none w-full text-[#89A096] font-semibold text-xl"
            />
          </td>
        </tr>
      </tbody>
    </table>
      </div>

      {/* Help Center and Logout */}
      <div className="w-full max-w-2xl px-6 pb-6 pt-10 text-left flex justify-center gap-10">
          <button className="bg-[#8AD5B7] text-[#1E2322] font-bold text-xl px-6 py-2 rounded-full hover:bg-opacity-80 transition-all w-[35%] md:w-[25%]"
           onClick={handleSave}
          >
            Save
          </button>  
          <button className="bg-[#8AD5B7] text-[#1E2322] font-bold text-xl px-6 py-2 rounded-full hover:bg-opacity-80 transition-all w-[35%] md:w-[25%] text-center"
           onClick={() => {
            setProfileData(oldData);
           }}
          >
            Cancel
          </button>

      </div>
    </div>
  );
};

export default Page;
