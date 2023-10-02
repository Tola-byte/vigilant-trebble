import { bannerCardsData } from "../../data/banner";
import { Container } from "../skeleton/container";
import { BannerCard } from "./card";

export const Banner = () => {
  return (
    <div className="bg-banner bg-cover h-[120vh] bg-no-repeat bg-center relative ">
      <Container>
        <div className="absolute top-[20%]">
          <h4 className="text-gray-100 font-bold text-5xl leading-snug">
            Growing Together with more than <br />{" "}
            <span className="text-[#ffec94]">70,000</span> Cultivators <br />{" "}
            from <span className="text-[#ffec94]">280</span> Cities in Indonesia{" "}
            <br /> through Technology
          </h4>
        </div>
      </Container>
      <div className="absolute bg-banner_bottom bottom-0 left-0 w-full py-6 ">
        <Container>
          <div className="grid grid-cols-3 gap-x-6 gap-y-16">
            {bannerCardsData.map((item) => (
              <BannerCard {...item} key={item.id} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};
