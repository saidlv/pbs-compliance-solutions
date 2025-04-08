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
        link: "/inspection-services/inspection-services",
      },
      {
        name: "Boiler Inspection",
        link: "/inspection-services/boiler-inspection",
      },
      { name: "Sprinkler Hydrostatic inspection", link: "/inspection-services/sh-inspection" },
      { name: "Elevator Inspection", link: "/inspection-services/elevator-inspection" },

    ],
  },
  {
    name: "Laws",
    submenu: [
      {
        name: "Local Law 11",
        link: "/law/local-law",
      },
      {
        name: "Local Law  Parking",
        link: "/law/local-law-parking",
      },
      { name: "Local Law  Parapet", link: "/law/local-law-parapet" },
      { name: "Local Law 152", link: "/law/local-law-152" },

    ],
  },
  { name: "Owner Representative", link: "/OwnerRepresentative" },
  {
    name: "Services",
    link: "/services",
  },
  { name: "Contacts", link: "/contacts" },
  // { name: "Blog", link: "/blog" },
];
