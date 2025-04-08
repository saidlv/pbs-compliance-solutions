"use client";

import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import { Building, FileText, Rocket, Home } from "lucide-react";
import ExpandableSections from "./ExpandableSections"; // Import ExpandableSections

/**
 * @typedef {Object} Service
 * @property {string} title - The name of the service
 * @property {JSX.Element} icon - Lucide React icon component for the service
 * @property {string} description - Brief description of the service
 * @property {string[]} sections - Array of sections with detailed information
 * @property {string} cta - Call to action text (optional)
 */

/**
 * Array of services offered by the company
 * Each service includes a title, icon, description, sections, and optional CTA
 * Icons are imported from lucide-react library
 *
 * @type {Service[]}
 */
const services = [
  {
    title: "Owner Representatives",
    icon: <Building className="w-12 h-12 text-brand-bright" />,
    description:
      "We act as your voice in property management, advocating for your interests in compliance, inspections, and cost optimization.",
    sections: [
      "From liaising with contractors to resolving violations, we simplify complexity.",
      "Key Features:\nLocal Law Compliance: Manage deadlines for LL11, LL126, and LL152.\nCost-Saving Strategies: Negotiate contractor rates and avoid fines.\nTransparent Reporting: Real-time updates via client portal.",
    ],
    cta: "Learn more (redirect to Owner representation page)",
  },
  {
    title: "Compliance Inspection Services",
    icon: <FileText className="w-12 h-12 text-brand-bright" />,
    description:
      "Stay ahead of NYC’s stringent building codes with our certified inspections for facades, elevators, gas lines, and fire safety systems.",
    sections: [
      "PBS ensures clients comply with local and state construction regulations, including managing paperwork, permits and adherence to zoning codes.",
      "PBS simplifies the regulatory process, helping clients avoid fines, delays and project interruptions through expert compliance management and guidance.",
    ],
  },
  {
    title: "Expediting Services",
    icon: <Rocket className="w-12 h-12 text-brand-bright" />,
    description:
      "Fast-track permits and approvals for construction projects, renovations, and system upgrades.",
    sections: [
      "Overview:\nPBS expedites the permit approval process, providing clients with a faster route to project completion, eliminating bottlenecks, and ensuring adherence to project timelines.",
      "Key Benefits:\nSpeed: 50% faster permit approvals vs. DIY filings.\nAccuracy: Error-free submissions to avoid rejections.\nFull-Service: DOB, FDNY, DOT, and zoning filings.",
    ],
    cta: "Learn more about our range of Expediting services",
  },
  {
    title: "Property Management",
    icon: <Home className="w-12 h-12 text-brand-bright" />,
    description:
      "End-to-end management for residential and commercial properties, ensuring profitability, compliance, and tenant satisfaction.",
    sections: [
      "Overview:\nEnd-to-end management for residential and commercial properties, ensuring profitability, compliance, and tenant satisfaction.",
      "Key Features:\nFinancial Oversight: Rent collection, budgeting, and reporting.\nMaintenance: 24/7 emergency repairs and preventive care.\nLegal Compliance: Lease agreements and safety audits.",
    ],
  },
];

/**
 * Services Page Component
 *
 * Displays the company's services in a visually appealing layout.
 * Features include:
 * - Hero section with page title
 * - Services grid with animated cards using Framer Motion
 * - Expandable detailed sections for each service
 * - Responsive design for various screen sizes
 *
 * The page is structured in two main sections:
 * 1. A grid of service cards showing a summary of each service
 * 2. Expandable detailed sections with comprehensive information about each service
 *
 * @returns {JSX.Element} The rendered Services page
 */
const page = () => {
  /**
   * Animation variants for service cards
   * Defines the initial hidden state and visible state for smooth animations
   *
   * @type {Object}
   */
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      {/* Hero Section - Page Title and Introduction */}
      <HeroSection
        heading="Your Trusted Partner in Property Compliance, Safety, and Management"
        text="At PBS, we don’t just inspect-we protect. From permits to final sign-off, our values ensure your project stays on time, on budget and above board"
        className="max-w-5xl mx-auto break-keep hyphens-none text-balance"
      />

      {/* Services Grid Section */}
      <section className="relative bg-brand-darkGray text-brand-midGray py-32 px-6 md:px-12 lg:px-24">
        {/* Semi-transparent Background Image */}
        <div className="absolute inset-0 bg-[url('/PBS%20Assets/better-assets/Bg/Post%202%20a.webp')] bg-cover bg-center opacity-[0.07]"></div>

        {/* Content Container */}
        <div className="relative container mx-auto px-4 sm:px-8 md:p-32 lg:p-16 xl:px-16">
          {/* Section Header with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h3 className="text-brand-bright font-semibold uppercase tracking-wide mb-2">
              Our Services
            </h3>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Comprehensive Property Services
            </h1>
            <p className="text-brand-midGray max-w-xl mx-auto">
              From compliance to management, we deliver end-to-end solutions for your property needs.
            </p>
          </motion.div>

          {/* Services Grid with Animated Cards and Green Border */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:pt-10">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-brand-dark1 rounded-lg p-6 shadow-md border border-green-600 hover:border-brand-bright transition-all duration-300 text-center flex flex-col justify-center items-center gap-8 sm:w-[80%] md:w-[85%] lg:w-[90%] mx-auto"
              >
                {/* Service Icon */}
                <div className="mb-4 text-2xl">{service.icon}</div>

                {/* Service Title and Description */}
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h2>
                  <p className="text-brand-midGray">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expandable Detailed Sections Component with service data */}
      <ExpandableSections services={services} />
    </div>
  );
};

export default page;