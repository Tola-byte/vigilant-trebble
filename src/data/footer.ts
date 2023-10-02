const companyLinks = [
  {
    id: 1,
    title: "About Fishery",
    path: "#",
  },
  {
    id: 2,
    title: "Blogs",
    path: "#",
  },
  {
    id: 3,
    title: "Contact Us",
    path: "#",
  },
  {
    id: 4,
    title: "Terms and conditions",
    path: "#",
  },
  {
    id: 5,
    title: "FAQs",
    path: "#",
  },
  {
    id: 6,
    title: "Consumer Complaints Service",
    path: "#",
  },
];

const productLinks = [
  {
    id: 1,
    title: "Solutions for Fish Farmers",
    path: "#",
  },
  {
    id: 2,
    title: "Solutions for Shrimp Farmers",
    path: "#",
  },
  {
    id: 3,
    title: "Solutions For Buyers & Customers",
    path: "#",
  },
];

const joinFisheryLinks = [
  {
    id: 1,
    title: "Career",
    path: "#",
  },
];

export type FooterLink = {
  title: string;
  data: { title: string; id: number; path: string }[];
};

export const footerData = {
  companyLinks: {
    data: companyLinks,
    title: "Company",
  },
  productLinks: {
    title: "Product",
    data: productLinks,
  },
  joinFisheryLinks: {
    title: "Join eFishery",
    data: joinFisheryLinks,
  },
};
