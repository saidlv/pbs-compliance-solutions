'use client';
import { useState, useRef, useEffect } from "react";
import CustomImage from "@/app/CustomImage";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";
import { Menu } from "lucide-react";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const ref = useRef(null);
  const imageRef = useRef(null);
  const router = useRouter();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!ref.current || !imageRef.current) return;

    gsap.to(imageRef.current, {
      scale: 0.7,
      scrollTrigger: {
        trigger: ref.current,
        start: "top top",
        end: "+=200",
        scrub: true,
      },
    });

    console.log("GSAP animations set up for header");
  }, []);

  return (
    <div
      className={`fixed top-0 right-0 z-50 w-full ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } transition-transform duration-500`}
      ref={ref}
    >
      <motion.div
        className="flex bg-[#1E2322] flex-row justify-end items-center w-full h-[60px] lg:h-[100px] px-3 lg:px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >

        <div className="w-[60%] sm:w-[55%] flex justify-between items-center">
          <div
            className="cursor-pointer lg:p-4 pl-0"
            onClick={() => {
              router.push("/");
            }}
          >
            <motion.div ref={imageRef} initial={{ scale: 1 }}>
              <CustomImage
                src="/pics/LOGO.png"
                width={100}
                height={100}
                alt="Website Logo"
                className="w-[40px] md:w-[45px] xl:w-[60px] object-contain h-auto relative"
              />
            </motion.div>
          </div>

          <div className="flex items-center gap-2">
            <p className="text-[#89A096] text-base md:text-lg xl:text-xl font-semibold">
              USER @PBS
            </p>
            <div className="aspect-square rounded-full w-8 sm:w-12 xl:w-16 bg-[#D9D9D9]"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;