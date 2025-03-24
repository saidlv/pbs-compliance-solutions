"use client";

import { motion } from "framer-motion";
import { Info, ShieldCheck, DollarSign, Users, PhoneCall } from "lucide-react"; // Import relevant icons

/**
 * @typedef {Object} Feature
 * @property {string} title - The title of the feature/benefit
 * @property {string} description - Detailed description of the feature
 * @property {JSX.Element} icon - Lucide React icon component for the feature
 */

/**
 * Array of features/benefits for Owner Representative service
 * @type {Feature[]}
 */
const features = [
  {
    title: "Why Hire an Owner Representative?",
    description:
      "Property Ownership in NYC Comes with labyrinth regulations, tight deadlines, and hidden risks. PBS Simplifies it all.",
    icon: <Info className="text-brand-bright" />,
  },
  {
    title: "Compliance & Risk Management",
    description: "We ensure your property meets all NYC Codes.",
    icon: <ShieldCheck className="text-brand-bright" />,
  },
  {
    title: "Financial Oversight & Savings",
    description:
      "Audit contractor bids, identify tax incentives, and resolve violations before they escalate.",
    icon: <DollarSign className="text-brand-bright" />,
  },
  {
    title: "Strategic Advocacy",
    description:
      "Represent you in meetings, manage tenant disputes, and coordinate repairs and upgrades.",
    icon: <Users className="text-brand-bright" />,
  },
  {
    title: "Why Choose PBS Owner Representatives?",
    description:
      "30+ years in NYC, licensed & insured professionals, and transparent pricing.",
    icon: <ShieldCheck className="text-brand-bright" />,
  },
  {
    title: "FAQ’s",
    description:
      "Digital portal for out-of-state owners, flexible service charges, and 24/7 emergency repair management.",
    icon: <Info className="text-brand-bright" />,
  },
  {
    title: "Ready to Reclaim your Time?",
    description:
      "Stop juggling regulations and contractors. Let PBS protect your investment and peace of mind.",
    icon: <PhoneCall className="text-brand-bright" />,
  },
];

/**
 * Features component that displays key features/benefits of the Owner Representative service.
 * Uses an infinite scrolling carousel to present the information.
 *
 * @returns {JSX.Element} The features section component
 */
const Features = () => {
  /**
   * Animation variants for feature cards using Framer Motion
   * @type {Object}
   */
  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-[#171717] text-[#E5E7EB] py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-brand-bright font-semibold uppercase tracking-wide mb-2"
          >
            Owner Representative Benefits
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Why Choose Our Services?
          </motion.h1>
          <p className="text-brand-midGray mt-4">
            Discover how we can simplify property management in NYC.
          </p>
        </div>

        {/* Infinite Scrolling Features Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex flex-row gap-8 animate-scroll">
            {/* Map through features array and create cards with staggered animations */}
            {[...features].map((feature, index) => (
              <motion.div
                key={index}
                variants={featureVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-xl p-6 md:p-8 shadow-lg bg-[#1A1A1A] border border-[#2d2d2d] hover:border-brand-bright transition-all duration-300 min-w-[90vw] md:min-w-[600px] before:absolute before:inset-0 before:border before:border-blue-400/20 before:rounded-xl before:pointer-events-none"
              >
                {/* Blue Edge Glow Effect */}
                <div className="absolute inset-0 rounded-xl shadow-[inset_0_0_15px_rgba(59,130,246,0.2)] pointer-events-none" />

                {/* Feature Icon */}
                <div className="text-brand-bright text-3xl md:text-4xl mb-4">
                  {feature.icon}
                </div>

                {/* Feature Title and Description */}
                <h4 className="font-bold text-white text-lg md:text-xl mb-2">
                  {feature.title}
                </h4>
                <p className="text-brand-midGray text-base md:text-lg">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for infinite scrolling animation */}
      <style jsx>{`
        .animate-scroll {
          animation: scrollLeft linear infinite;
          animation-duration: 20s;
        }

        @keyframes scrollLeft {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Features;