export const menuItems = [
  { name: "Home", link: "/" },
  {
    name: "About Us",
    // link: "/about-us",
    submenu: [
      { name: "About", link: "/about-us" },
      { name: "Our Team", link: "/about-us/our-team" },
      { name: "Our Values", link: "/about-us/our-values" },
      { name: "Our History", link: "/about-us/our-history" },
    ],
  },
  {
    name: "Inspection Services",
    submenu: [
      {
        name: "Inspection Services",
        link: "/guide-resources/dob-service-updates",
      },
      {
        name: "Boiler Inspection",
        link: "/guide-resources/history-of-local-laws",
      },
      { name: "Sprinkler Hydrostatic inspection", link: "/guide-resources/nyc-dob-codes" },
      { name: "Elevator Inspection", link: "/guide-resources/nyc-fdny-codes" },

    ],
  },
  {
    name: "Laws",
    submenu: [
      {
        name: "Local Law 11",
        link: "/guide-resources/dob-service-updates",
      },
      {
        name: "Local Law 126 (Parking)",
        link: "/guide-resources/history-of-local-laws",
      },
      { name: "Local Law 126 (Parapet)", link: "/guide-resources/nyc-dob-codes" },
      { name: "Local Law 152", link: "/guide-resources/nyc-fdny-codes" },

    ],
  },
  { name: "OwnerRepresentative", link: "/OwnerRepresentative" },
  {
    name: "Services",
    link: "/services",
  },
  { name: "Contacts", link: "/contacts" },
  // { name: "Blog", link: "/blog" },
];
