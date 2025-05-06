import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { menuItems } from "./data";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const HorizontalMenu = ({ isOpen, setIsOpen }) => {
  const router = useRouter();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const menuRef = useRef(null);

  const handleItemHover = (item) => {
    if (item.submenu) {
      setActiveDropdown(item.name);
    }
  };

  const handleItemClick = (item) => {
    if (item.submenu) {
      setActiveDropdown(activeDropdown === item.name ? null : item.name);
    } else {
      setIsOpen(false);
      router.push(item.link);
    }
  };

  const itemVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, delay: 0.1 },
    },
    closed: { opacity: 0, x: -20 },
  };

  const dropdownVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
  };

  return (
    <nav
      className={`w-[80%] xl:w-[70%] absolute top-0 h-[100px] lg:flex items-center justify-between gap-5 xl:gap-8 right-6 xl:right-12 z-50 transition-transform duration-500`}
      role="navigation max-w-[70vw]"
      aria-label="Main navigation"
    >
      {menuItems.map((item) => (
        <motion.div
          className="text-[#EAEEEE] hover:text-[#8AD5B7] text-lg font-semibold cursor-pointer relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleItemClick(item)}
          role="button"
          aria-expanded={activeDropdown === item.name}
          aria-controls={item.submenu ? `submenu-${item.name}` : undefined}
          key={item.name}
          onMouseEnter={() => handleItemHover(item)}
        >
          {item.name}
          <AnimatePresence>
            {item.submenu && activeDropdown === item.name && (
              <motion.div
                id={`submenu-${item.name}`}
                initial="closed"
                animate="open"
                exit="closed"
                variants={dropdownVariants}
                onMouseLeave={() => setActiveDropdown(null)}
                ref={menuRef}
                className="absolute top-6 bg-gray-800 text-[#EAEEEE] rounded-md shadow-lg p-4 mt-3 text-base space-y-2"
                role="menu"
                aria-label={`${item.name} submenu`}
              >
                {item.submenu.map((subItem) => (
                  <motion.div
                    key={subItem.name}
                    className="cursor-pointer hover:hover:text-[#8AD5B7] text-nowrap font-medium"
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    role="menuitem"
                    onClick={() => {
                      setIsOpen(false);
                      setActiveDropdown(null);
                      router.push(subItem.link);
                    }}
                  >
                    {subItem.name}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </nav>
  );
};

export default HorizontalMenu;