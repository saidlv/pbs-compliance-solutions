"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CustomImage from "@/app/CustomImage";

// Define the hero sections array with 3 images
const heroSections = [
  "/pics/home-hero-1.png",
  "/pics/home-hero-2.png",
  "/pics/home-hero-3.png",
];

// Custom Next Arrow Component
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-6 top-1/2 transform -translate-y-1/2 rounded-full p-2 bg-transparent hover:bg-[#8AD5B7] transition duration-300 z-20"
    >
      <ChevronRight className="text-[#DCE2E2] w-8 h-8" />
    </button>
  );
}

// Custom Prev Arrow Component
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-6 top-1/2 transform -translate-y-1/2 rounded-full p-2 bg-transparent hover:bg-[#8AD5B7] transition duration-300 z-20"
    >
      <ChevronLeft className="text-[#DCE2E2] w-8 h-8" />
    </button>
  );
}

const HeroCarousel = () => {
  // Slick carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Enable arrows
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider {...settings} className="relative">
      {heroSections.map((img, index) => (
        <div key={index} className="relative bg-[#1E2322]">
          <div className="relative min-h-screen flex items-center lg:items-end justify-center lg:justify-start">
            {/* Background Image */}
            <div className="absolute inset-0">
              <CustomImage
                src={img}
                alt={`Hero Image ${index + 1}`}
                className="w-full h-full object-cover z-0"
                fill
                priority={true}
                quality={100}
              />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HeroCarousel;