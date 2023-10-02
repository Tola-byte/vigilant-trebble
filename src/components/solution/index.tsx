import { solutionData } from "../../data/solution";
import { Container } from "../skeleton/container";
import { SolutionCard } from "./card";

export const Solution = () => {
  return (
    <div className="py-12 bg-[#EDEDEF]">
      <Container>
        <div className="">
          <div className="text-center mb-40">
            <h3 className="text-5xl font-bold text-primary mb-4">
              Our Solution for the World of Aquaculture
            </h3>
          </div>
          <div className="flex  flex-col gap-y-36 md:gap-y-0 md:gap-x-20 md:flex-row justify-between">
            {solutionData.map((item) => (
              <SolutionCard {...item} key={item.id} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
