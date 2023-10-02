import mission1 from "../assets/mission1.webp";
import mission2 from "../assets/mission2.webp";
import mission3 from "../assets/mission3.webp";

export type MissionCardType = {
  title: string;
  image: string;
  id: number;
};

export const missionData: MissionCardType[] = [
  {
    id: 1,
    title: "Meeting World Food Needs through Aquaculture",
    image: mission3,
  },
  {
    id: 2,
    title: "Providing Affordable Technology",
    image: mission2,
  },
  {
    id: 3,
    title: "Building an Inclusive Digital Economy",
    image: mission1,
  },
];
