"use client";
import { X, Menu } from "lucide-react";
import Image from "next/image";
import "./Sidebar.css"; // Import your CSS file for styles

const Sidebar = () => {
  const iconList = [
    "/pics/alert-sidebar-1.png",
    "/pics/alert-sidebar-2.png",
    "/pics/alert-sidebar-3.png",
    "/pics/alert-sidebar-4.png",
    "/pics/alert-sidebar-5.png",
    "/pics/alert-sidebar-6.png",
    "/pics/alert-sidebar-7.png",
    "/pics/alert-sidebar-8.png",
    "/pics/alert-sidebar-9.png",
  ];

  return (
    <div
      className="fixed top-0 left-0 h-screen w-[10vw] lg:w-[5vw] bg-[#1E2322] z-50 flex flex-col items-center justify-around gap-6 lg:gap-10"
    >
      {/* Burger Icon */}
        <button  className="text-[#D9D9D9] p-2 flex-shrink-0 h-[60px] lg:h-[100px] flex items-center">
          <Menu className="w-8 h-8" />
        </button>

      {/* Icon List */}
      <div className="flex flex-col items-center justify-start gap-3 xl:gap-5 w-full h-full overflow-y-auto custom-scrollbar">
        {iconList.map((icon, index) => (
          <Image
            src={icon}
            alt={`Icon ${index + 1}`}
            width={100}
            height={100}
            className="mx-auto object-contain w-1/3 h-auto"
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;