"use client";
/**
 * @file Blog Listing Page Component
 * @description Displays a paginated grid of blog posts with a featured article and animations
 * @requires react - For component functionality and hooks
 * @requires framer-motion - For UI animations
 * @requires gsap - For scroll-based animations
 * @requires lucide-react - For icon components
 * @requires CustomImage - Custom image component for optimized rendering
 * @requires pagination - UI components for page navigation
 */

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { motion } from "framer-motion";
import { ArrowRight, Bookmark, CalendarDays } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import CustomImage from "../CustomImage";
import { posts } from "./data";
import Link from "next/link";

// Import GSAP and its ScrollTrigger plugin for scroll-based animations
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

/** 
 * Blog Page Component
 * Renders a paginated blog listing with featured post and animated grid
 * @returns {JSX.Element} The rendered blog listing page
 */
const Page = () => {
  /**
   * State for managing pagination
   * @type {[number, Function]} Current page number and setter function
   */
  const [currentPage, setCurrentPage] = useState(1);

  /**
   * Number of posts to display per page
   * @type {number}
   */
  const postsPerPage = 6;

  /**
   * Calculate pagination values
   * @type {number} Index of the last post on current page
   */
  const indexOfLastPost = currentPage * postsPerPage;

  /**
   * Calculate pagination values
   * @type {number} Index of the first post on current page
   */
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  /**
   * Array of posts for the current page
   * @type {Array} Sliced array of posts for current page
   */
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  /**
   * Total number of pages based on posts array length
   * @type {number}
   */
  const totalPages = Math.ceil(posts.length / postsPerPage);

  /**
   * Handles page navigation, ensuring the page number is within valid range
   * @param {number} page - The page number to navigate to
   * @returns {void}
   */
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  /**
   * Refs for GSAP animations
   * @type {React.RefObject} Reference to the featured post container
   */
  const featuredRef = useRef(null);

  /**
   * Refs for GSAP animations
   * @type {React.RefObject} Reference to the posts grid container
   */
  const gridRef = useRef(null);

  /**
   * Setup GSAP animations for featured post and grid
   * Animations are triggered based on scroll position
   */
  useEffect(() => {
    // Scale animation for featured post
    if (featuredRef.current) {
      gsap.fromTo(
        featuredRef.current,
        { scale: 0.95 }, // Initial state: slightly smaller
        {
          scale: 1, // Final state: normal size
          scrollTrigger: {
            trigger: featuredRef.current, // Element that triggers animation
            start: "top 80%", // Start when top of element reaches 80% of viewport
            end: "top 60%", // End when top of element reaches 60% of viewport
            scrub: true, // Smooth animation that follows scroll position
          },
        }
      );
    }

    // Fade-in and slide-up animation for posts grid
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current,
        { opacity: 0, y: 20 }, // Initial state: invisible and offset downward
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: gridRef.current, // Element that triggers animation
            start: "top center", // Start when top of element reaches center of viewport
            toggleActions: "play none none reverse", // Controls animation sequence
          },
        }
      );
    }
  }, []);

  return (
    <div>
      {/* Hero Section (commented out) */}
      {/* <HeroSection
        heading="Blog"
        text="Stay up-to-date with the latest industry news and trends"
      /> */}

      {/* Main Blog Section - Dark background with responsive padding */}
      <section className="bg-[#37403D] text-[#DCE2E2] py-32 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-7xl">
          {/* Featured Post - Large highlighted article at the top */}
          <motion.div
            ref={featuredRef}
            initial={{ opacity: 0, y: 20 }} // Initial animation state
            animate={{ opacity: 1, y: 0 }} // Animation target state
            transition={{ duration: 0.5 }} // Animation duration
            className="mb-10 xl:mb-16 min-h-screen"
          >
            <div className="relative rounded-2xl overflow-hidden">
              {/* Featured post image */}
              <CustomImage
                src="/PBS%20Assets/Brand%20Language/city-building.jpg"
                height={100}
                width={100}
                alt="Featured Post"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay with post details */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#37403D] via-[#37403D]/80 to-transparent p-8">
                <span className="text-[#8AD5B7] bg-[#1E2322] px-4 py-1 rounded-full text-sm font-conthrax">
                  Featured Article
                </span>
                <h1 className="text-4xl font-bold text-[#DCE2E2] mt-4 mb-2 font-conthrax">
                  The Future of Smart Construction Technologies
                </h1>
                {/* Post metadata with icons */}
                <div className="flex items-center gap-4 text-[#89A096] font-poppins">
                  <CalendarDays className="w-5 h-5" />
                  <span>March 18, 2025</span>
                  <Bookmark className="w-5 h-5" />
                  <span>Industry Trends</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Recent Posts Grid - Responsive layout with staggered animations */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Map through current page posts to create post cards */}
            {currentPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }} // Initial animation state
                animate={{ opacity: 1, y: 0 }} // Animation target state
                transition={{ delay: index * 0.1 }} // Staggered delay based on index
                className="bg-[#2E3734] rounded-xl overflow-hidden hover:shadow-xl transition-all"
              >
                {/* Post thumbnail image */}
                <CustomImage
                  src={post.image}
                  alt={post.title}
                  width={100}
                  height={100}
                  className="w-full h-48 object-cover"
                />
                {/* Post content container */}
                <div className="p-6">
                  {/* Post metadata with category and date */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#8AD5B7] text-sm font-conthrax">
                      {post.category}
                    </span>
                    <span className="text-[#89A096] text-sm">•</span>
                    <CalendarDays className="w-4 h-4 text-[#89A096]" />
                    <span className="text-[#89A096] text-sm font-poppins">
                      {post.date}
                    </span>
                  </div>
                  {/* Post title */}
                  <h2 className="text-xl font-bold text-[#DCE2E2] mb-3 font-conthrax">
                    {post.title}
                  </h2>
                  {/* Post excerpt */}
                  <p className="text-[#89A096] mb-4 font-poppins">{post.excerpt}</p>
                  {/* Read more button with arrow icon */}
                  <Link href="/blog/blogs" className="flex items-center gap-2 text-[#8AD5B7] hover:text-[#8AD5B7]/80 transition font-poppins">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination Controls - Navigation between pages */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mt-16"
          >
            <Pagination>
              <PaginationContent>
                {/* Previous Page Button */}
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(currentPage - 1);
                    }}
                    className="text-[#89A096] hover:bg-[#2E3734] font-poppins"
                    isActive={currentPage > 1} // Only active if not on first page
                  />
                </PaginationItem>

                {/* Page Number Buttons */}
                {Array.from({ length: totalPages }).map((_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(index + 1);
                      }}
                      className={`hover:bg-[#2E3734] font-poppins ${
                        currentPage === index + 1
                          ? "bg-[#8AD5B7] text-[#1E2322] hover:bg-[#8AD5B7]/80" // Active page styling
                          : "text-[#89A096]" // Inactive page styling
                      }`}
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                {/* Next Page Button */}
                <PaginationItem>
                  <PaginationNext
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(currentPage + 1);
                    }}
                    className="text-[#89A096] hover:bg-[#2E3734] font-poppins"
                    isActive={currentPage < totalPages} // Only active if not on last page
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Page;
