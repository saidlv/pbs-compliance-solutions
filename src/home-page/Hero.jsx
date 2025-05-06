import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CTA from '@/components/CTA';
import CustomImage from '@/app/CustomImage';

// Define the hero sections array with 5 sets of images
const heroSections = [
  "/pics/home-hero-1.png","/pics/home-hero-2.png","/pics/home-hero-3.png","/pics/home-hero-4.png","/pics/home-hero-5.png" 
];

const HeroCarousel = () => {
  // Slick carousel settings
  const settings = {
    dots: false, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    centerPadding: "0%", 
    arrows: false, 
    autoplay: true, 
    autoplaySpeed: 2000, 
  };
  return (
    <Slider {...settings} className="flex justify-evenly items-center">
      {heroSections.map((img, index) => (
         <div key={index} className="relative bg-brand-dark">
         <div className="relative min-h-[90vh] flex items-center lg:items-end justify-center lg:justify-start p-8">
           {/* Background Image - Optional */}
   
             <div
               className="absolute w-full inset-0"
             >
               <CustomImage
                 src={img}
                 alt="Modern skyscrapers"
                 className="w-full h-full object-cover z-0"
                 fill
                 priority={true}
                 quality={100}
               />
             </div>
   
           {/* Right Side - Text Content */}
           <div
             className="relative z-20 w-full lg:w-[60%] lg:left-[40%] 2xl:w-[55%] 3xl:w-[65%] flex flex-col gap-3 2xl:gap-6 justify-center items-start text-center lg:text-left p-6 lg:px-10"
            
           >
             {/* Main Heading */}
             <h1
               className="text-xl lg:text-2xl xl:text-3xl 3xl:text-5xl font-conthrax font-semibold text-brand-light xl:max-w-2xl 3xl:max-w-6xl"
               
             >
               Ensuring Compliance, Excellence and Peace of Mind in New York Construction
             </h1>
   
             <div className="w-[50%] lg:w-[30%] mx-auto lg:mx-0 h-1 bg-[#8AD5B7] rounded-full"></div>
   
   
             {/* Subheading */}
             <p
               className="text-base lg:text-lg 3xl:text-xl font-semibold font-poppins text-[#89A096] xl:max-w-xl"
              
             >
               Your Trusted Partner for Construction Compliance Inspections, Expediting and Property Solutions
             </p>
   
             <p
               className="text-base lg:text-lg 3xl:text-xl font-poppins text-[#89A096] xl:max-w-xl"
               
             >
               More than 30+ Years Combined Experience in the industry.
             </p>
   
             {/* CTA Button */}
             <CTA
               text="Schedule your Consulting Today"
               href="/contacts"
               styling="rounded-full bg-[#8AD5B7] text-black hover:from-brand-green1 hover:to-brand-green2 font-semibold font-conthrax px-8 py-4 3xl:py-8 3xl:text-2xl transition-colors mt-0 max-w-full lg:max-w-xl 3xl:max-w-2xl my-6"
             />
           </div>
         </div>
       </div>
      ))}
    </Slider>
  );
};

export default HeroCarousel;