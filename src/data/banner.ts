import icon1 from "../assets/icon1.webp";
import icon2 from "../assets/icon2.webp";
import icon3 from "../assets/icon3.webp";
import icon4 from "../assets/icon4.webp";
import icon5 from "../assets/icon5.webp";

export type BannerCardsType = {
  id: number;
  subTitle: string;
  title: string;
  body: string;
  icon: string;
};

export const bannerCardsData: BannerCardsType[] = [
  {
    id: 1,
    subTitle: "Facilitated",
    title: "1.105 Trillion Rupiah",
    body: "Total Freshwater Fish Sales Transactions",
    icon: icon1,
  },
  {
    id: 2,
    subTitle: "Facilitated",
    title: "1.125 Trillion Rupiah",
    body: "Total Shrimp Sales Transactions",
    icon: icon2,
  },
  {
    id: 3,
    subTitle: "Accelerates Harvest Time to",
    title: "74 Days",
    body: "",
    icon: icon3,
  },
  {
    id: 4,
    subTitle: "Facilitated",
    title: "1.99 Trillion Rupiah",
    body: "Total Fish and Shrimp Feed Sales Transactions",
    icon: icon4,
  },
  {
    id: 5,
    subTitle: "Opening Access for",
    title: "15,000",
    body: "Cultivators to Financial Institutions, Registered and Supervised by OJK",
    icon: icon5,
  },
];
