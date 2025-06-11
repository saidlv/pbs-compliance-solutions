"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useUser } from "@/context/UserContext";
import { apiRequest } from "@/utils/csrfHandler";

export default function Page() {
  const [profileData, setProfileData] = useState({});
  const [oldData, setOldData] = useState({});
  const router = useRouter();
  const { user, setUser } = useUser();

  const handleSave = async(e) => {
    e.preventDefault()
    setOldData(profileData); 
    try{
    const response = await apiRequest('post', '/user/profile/update', profileData)
        if (response.status === 200) {
          setUser({...response.data.user, memberuser: oldData.memberuser});
          localStorage.setItem('pbsPortalUser', JSON.stringify({...response.data.user, memberuser: oldData.memberuser}));
          router.push("/portal/profile");
        } else {
          console.error("No data returned from update");
        }
      } catch (error) {
        setProfileData(oldData);
        console.error("Error updating profile data:", error);
      }
  }

useEffect(() => {
   setProfileData({
    name: user?.name || "",
    email: user?.email || "",
    company: user?.company || "string",
    address: user?.address || "minimum four letters",
    contact_number: user?.contact_number || ""
   })
   setOldData(user);
},[])

 return (
      <form onSubmit={(e)=>handleSave(e)} className="bg-[#1E2322] text-white min-h-screen flex flex-col items-center p-6 pt-16 lg:">
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
                placeholder="Enter your name"
                autoComplete="name"
                value={profileData.name ?? ""}
                onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                className="px-10 bg-transparent border-none outline-none w-full text-[#89A096] font-semibold text-xl"
              />
            </td>
          </tr>
          <tr className="border-b-2 py-6 border-[#8AD5B7]">
            <td className="w-1/3 py-6 pr-4 text-[#89A096] font-semibold text-xl text-left border-r-2 border-[#8AD5B7]">Email</td>
            <td className="w-2/3 py-6">
              <input
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
                value={profileData.email ?? ""}
                onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                className="px-10 bg-transparent border-none outline-none w-full text-[#89A096] font-semibold text-xl"
              />
            </td>
          </tr>
          <tr className="border-b-2 py-6 border-[#8AD5B7]">
            <td className="w-1/3 py-6 pr-4 text-[#89A096] font-semibold text-xl text-left border-r-2 border-[#8AD5B7]">Company</td>
            <td className="w-2/3 py-6">
              <input
                type="text"
                placeholder="Enter your company name"
                value={profileData?.company ?? "null"}
                onChange={(e) => setProfileData({ ...profileData, company: e.target.value })}
                className="px-10 bg-transparent border-none outline-none w-full text-[#89A096] font-semibold text-xl"
              />
            </td>
          </tr>
          <tr className="border-b-2 py-6 border-[#8AD5B7]">
            <td className="w-1/3 py-6 pr-4 text-[#89A096] font-semibold text-xl text-left border-r-2 border-[#8AD5B7]">Address</td>
            <td className="w-2/3 py-6">
              <input
                type="text"
                placeholder="Enter your address (minimum four letters)"
                value={profileData?.address ?? ""}
                required
                minLength={4}
                onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
                className="px-10 bg-transparent border-none outline-none w-full text-[#89A096] font-semibold text-xl"
              />
            </td>
          </tr>
          <tr className="border-b-2 py-6 border-[#8AD5B7]">
            <td className="w-1/3 py-6 pr-4 text-[#89A096] font-semibold text-xl text-left border-r-2 border-[#8AD5B7]">Phone No</td>
            <td className="w-2/3 py-6">
              <input
                type="tel"
                inputMode="numeric"
                pattern="\d{10}"
                maxLength={10}
                required
                title="Please enter a 10-digit phone number"
                placeholder="Enter your phone number"
                value={profileData?.contact_number ?? ""}
                onChange={(e) => {
                  // allow only digits
                  const val = e.target.value.replace(/\D/g, '');
                  setProfileData({ ...profileData, contact_number: val });
                }}
                className="px-10 bg-transparent border-none outline-none w-full text-[#89A096] font-semibold text-xl"
              />
            </td>
          </tr>
        </tbody>
      </table>
        </div>

        {/* Help Center and Logout */}
        <div className="w-full max-w-2xl px-6 pb-6 pt-10 text-left flex justify-center gap-10">
            <button type="submit" className="bg-[#8AD5B7] text-[#1E2322] font-bold text-xl px-6 py-2 rounded-full hover:bg-opacity-80 transition-all w-[35%] md:w-[25%]"
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
      </form>
  );
 }
