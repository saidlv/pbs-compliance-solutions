"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronDown } from "lucide-react"; // Removed X import
import { gsap } from "gsap";
import { SideBarData } from "./data"; // Import sidebar data

const SidebarMenu = ({ setToggleMenu, toggleMenu }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null); // Track which submenu is open
  const [isVisible, setIsVisible] = useState(toggleMenu); // Track visibility for animation
  const sidebarRef = useRef(null); // Reference for the SidebarMenu container
  const submenuRefs = useRef([]); // References for submenu items

  const toggleSubmenu = (index) => {
    const newIndex = openSubmenu === index ? null : index;
    setOpenSubmenu(newIndex);

    // Animate submenu items
    const submenuItems = submenuRefs.current[index]?.children;
    if (submenuItems) {
      if (newIndex === index) {
        // Animate submenu opening (slide in and fade in)
        gsap.fromTo(
          submenuItems,
          { x: "-20px", opacity: 0 },
          {
            x: "0px",
            opacity: 1,
            duration: 0.3,
            stagger: 0.1,
            ease: "power2.out",
          }
        );
      } else {
        // Animate submenu closing (slide out and fade out)
        gsap.to(submenuItems, {
          x: "-20px",
          opacity: 0,
          duration: 0.3,
          stagger: 0.1,
          ease: "power2.in",
        });
      }
    }
  };

  // Opening animation for sidebar
  useEffect(() => {
    if (toggleMenu && sidebarRef.current) {
      setIsVisible(true);
      gsap.fromTo(
        sidebarRef.current,
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [toggleMenu]);

  // Handle closing animation
  const handleClose = () => {
    if (sidebarRef.current) {
      gsap.to(sidebarRef.current, {
        x: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          setIsVisible(false);
          setToggleMenu(false); // Notify parent to update toggleMenu state
        },
      });
    }
  };

  // Handle click outside to close sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        handleClose(); // Trigger the closing animation
      }
    };

    if (toggleMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [toggleMenu]);

  return (
    <div
      ref={sidebarRef}
      className="fixed top-0 left-0 h-full w-[80vw] sm:w-[50vw] lg:w-[30vw] bg-[#1E2322] z-50 flex flex-col items-center justify-start gap-3 lg:gap-6 pt-10"
      style={{ display: isVisible ? "flex" : "none" }}
    >
      {/* Removed the X button */}

      {/* Title */}
      <h2 className="text-[#8AD5B7] text-base md:text-lg xl:text-xl font-semibold font-conthrax">
        {SideBarData.title}
      </h2>

      {/* Menu List */}
      <div className="flex flex-col items-center justify-start w-full h-[90%] overflow-y-auto custom-scrollbar">
        {SideBarData.menulist.map((item, index) => (
          <div
            key={index}
            className="w-full flex flex-col items-center justify-center"
          >
            <div className="w-full mx-auto bg-[#8AD5B7] h-1 my-3"></div>
            <div className="flex flex-col w-full">
              <div
                className="flex items-center justify-between w-full px-2 py-1 hover:bg-[#2E3734] transition-colors duration-200 cursor-pointer"
                onClick={() => item.hasmenu && toggleSubmenu(index)}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={item.img}
                    alt={`${item.name} Icon`}
                    width={100}
                    height={100}
                    className="w-[24px] h-auto object-contain mr-2"
                  />
                  <span className="text-[#8AD5B7] text-xs md:text-sm xl:text-base font-semibold">
                    {item.name}
                  </span>
                </div>
                {item.hasmenu && (
                  openSubmenu === index ? (
                    <ChevronDown className="text-[#D9D9D9] w-4 h-4 ml-1" />
                  ) : (
                    <ChevronLeft className="text-[#D9D9D9] w-4 h-4 ml-1" />
                  )
                )}
              </div>
              {/* Submenu */}
              {item.hasmenu && openSubmenu === index && (
                <div
                  className="flex flex-col w-full"
                  ref={(el) => (submenuRefs.current[index] = el)}
                >
                  {item.submenu.map((subItem, subIndex) => (
                    <div className="w-full flex flex-col" key={subIndex}>
                      <div className="w-full mx-auto bg-[#89A096] h-0.5 my-3"></div>
                      <div
                        className="flex items-center gap-3 px-2 py-1 hover:bg-[#2E3734] transition-colors duration-200"
                      >
                        <Image
                          src={subItem.img}
                          alt={`${subItem.name} Icon`}
                          width={100}
                          height={100}
                          className="w-[20px] h-auto object-contain mr-2"
                        />
                        <span className="text-[#89A096] text-xs md:text-sm font-semibold">
                          {subItem.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        <div className="w-full mx-auto bg-[#8AD5B7] h-1 my-6"></div>
      </div>
    </div>
  );
};

export default SidebarMenu;