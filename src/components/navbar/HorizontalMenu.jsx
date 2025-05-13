import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { menuItems, directLinks } from "./data";
import { gsap } from "gsap";
import HamburgerMenu from "./HamburgerMenu";

const HorizontalMenu = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const lineRefs = useRef([]);
  const arrowRefs = useRef([]);

  const handleMouseEnter = (index) => {
    setOpenDropdown(index);
    const line = lineRefs.current[index];
    if (line) {
      gsap.to(line, {
        width: line.classList.contains("submenu-line") ? "100%" : "80%",
        opacity: 1,
        duration: 0.6,
        ease: "power2.inOut",
        transformOrigin: "left",
      });
    }
  };

  const handleMouseLeave = () => {
    const currentIndex = openDropdown;
    if (currentIndex !== null) {
      const line = lineRefs.current[currentIndex];
      if (line) {
        gsap.to(line, {
          width: 0,
          opacity: 0,
          duration: 0.6,
          ease: "power2.inOut",
          transformOrigin: "right",
        });
      }
    }
    setOpenDropdown(null);
    setOpenSubDropdown(null);
  };

  const handleSubMouseEnter = (subIndex) => {
    setOpenSubDropdown(subIndex);
    const arrow = arrowRefs.current[subIndex];
    if (arrow) {
      gsap.to(arrow, {
        rotation: 180,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  };

  const handleSubMouseLeave = () => {
    const currentSubIndex = openSubDropdown;
    if (currentSubIndex !== null) {
      const arrow = arrowRefs.current[currentSubIndex];
      if (arrow) {
        gsap.to(arrow, {
          rotation: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });
      }
    }
    setOpenSubDropdown(null);
  };

  // Combine menuItems and directLinks for mobile dropdown only
  const allItems = [...menuItems, ...directLinks];

  return (
    <nav className="inline-flex items-center text-[#DCE2E2] h-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Menu Items, Hamburger, and Direct Links */}
          <div className="flex items-center justify-evenly h-full">
            {/* Menu Items with Submenus */}
            {menuItems.map((item, index) => (
              <div
                key={item.name}
                className="relative group h-full"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.link || "#"}
                  className={`px-3 py-2 text-base xl:text-lg 2xl:text-xl  font-medium relative transition-all duration-300 ease-in-out group-hover:scale-105 flex items-center h-full
                    ${
                      item.submenu
                        ? openDropdown === index
                          ? "bg-[#37403D] text-[#8AD5B7]"
                          : "text-[#DCE2E2] hover:bg-[#37403D] hover:text-[#8AD5B7]"
                        : "text-[#DCE2E2]"
                    }`}
                  style={{
                    transitionProperty: "background-color, color, transform",
                    transitionDuration: "300ms",
                    transitionTimingFunction: "ease-in-out",
                  }}
                >
                  {item.name}
                  {/* Sliding Line for items with submenu */}
                  {item.submenu && (
                    <span
                      ref={(el) => (lineRefs.current[index] = el)}
                      className={`absolute top-2 left-0 h-1 bg-[#8AD5B7] submenu-line
                        ${openDropdown === index ? "opacity-100" : "opacity-0"}`}
                      style={{ width: 0 }}
                    ></span>
                  )}
                </Link>

                {/* Desktop Dropdown */}
                {item.submenu && openDropdown === index && (
                  <div className="absolute -left-[15vw] w-[40vw] bg-[#37403D] rounded-md shadow-lg z-10">
                    {item.submenu.map((subItem, subIndex) => (
                      <div
                        key={subItem.name}
                        className="relative"
                        onMouseEnter={() => handleSubMouseEnter(subIndex)}
                        onMouseLeave={handleSubMouseLeave}
                      >
                        <Link
                          href={subItem.link || "#"}
                          className="flex items-center gap-2 justify-between px-4 py-2 text-sm text-[#DCE2E2] hover:bg-gray-100 group hover:group-hover:text-[#8AD5B7]"
                        >
                          {subItem.name}
                          {subItem.submenu && (
                            <svg
                              ref={(el) => (arrowRefs.current[subIndex] = el)}
                              className="h-4 w-4 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          )}
                        </Link>

                        {/* Nested Submenu */}
                        {subItem.submenu && openSubDropdown === subIndex && (
                          <div className="mt-0 pl-4 w-full shadow-lg z-10">
                            {subItem.submenu.map((nestedItem) => (
                              <Link
                                key={nestedItem.name}
                                href={nestedItem.link || "#"}
                                className="block px-4 py-2 text-sm text-[#DCE2E2] hover:text-[#1E232261] hover:bg-gray-100"
                              >
                                {nestedItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Hamburger Menu */}
            <HamburgerMenu menuItems={menuItems} directLinks={directLinks} />

            {/* Direct Links */}
            {directLinks.map((item, index) => (
              <div
                key={item.name}
                className="relative group h-full"
                onMouseEnter={() => handleMouseEnter(index + menuItems.length)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.link || "#"}
                  className="px-3 py-2 text-base xl:text-lg 2xl:text-xl font-medium relative transition-all duration-300 ease-in-out group-hover:scale-105 flex items-center h-full text-[#DCE2E2]"
                  style={{
                    transitionProperty: "background-color, color, transform",
                    transitionDuration: "300ms",
                    transitionTimingFunction: "ease-in-out",
                  }}
                >
                  {item.name}
                  <span
                    ref={(el) => (lineRefs.current[index + menuItems.length] = el)}
                    className={`absolute bottom-1/3 left-[10%] h-0.5 bg-[#8AD5B7]
                      ${openDropdown === index + menuItems.length ? "opacity-100" : "opacity-0"}`}
                    style={{ width: 0 }}
                  ></span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HorizontalMenu;