import solution1 from "../assets/solution1.webp";
import solution2 from "../assets/solution2.webp";
import solution3 from "../assets/solution3.webp";

export type SolutionCardType = {
  image: string;
  subtitle: string;
  body: string;
  title: string;
  id: number;
};

export const solutionData: SolutionCardType[] = [
  {
    id: 1,
    image: solution1,
    title: "eFisheryKu",
    body: "Complete services, from upstream to downstream for fish farmers. Experience the ease of feed transactions, access to financial institutions registered and supervised by the OJK, a profitable sales platform for fish harvests. All available to advance the Cultivator's business!",
    subtitle: "Fish Farmers",
  },
  {
    id: 2,
    image: solution2,
    title: "eFarm",
    body: "The integrated shrimp cultivation ecosystem includes disease and epidemic prevention, pond water quality management, and recommendations for the best SaProTam products for Shrimp Farmers. This solution increases the productivity and success of shrimp cultivation effectively through technology.",
    subtitle: "Shrimp Farmers",
  },
  {
    id: 3,
    image: solution3,
    title: "eFresh",
    body: "Ensuring that the best quality fish can be enjoyed throughout the country by distributing the farmers' harvest in live, fresh and frozen form.",
    subtitle: "Buyers & Consumers",
  },
];
