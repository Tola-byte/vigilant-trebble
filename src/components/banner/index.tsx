import { bannerCardsData } from "../../data/banner";
import { Container } from "../skeleton/container";
import { BannerCard } from "./card";

export const Banner = () => {
  return (
    <div className="bg-banner bg-cover h-[140vh] md:h-[120vh] bg-no-repeat md:bg-center relative ">
      <Container>
        <div className="pt-20 md:pt-0 md:absolute  md:top-[20%]">
          <h4 className="text-gray-100 font-bold text-3xl md:text-5xl md:leading-tight leading-normal">
            Growing Together with more than <br />{" "}
            <span className="text-[#ffec94]">70,000</span> Cultivators{" "}
            <br className="hidden md:inline" /> from{" "}
            <span className="text-[#ffec94]">280</span> Cities in Indonesia{" "}
            <br className="hidden md:inline" /> through Technology
          </h4>
        </div>
      </Container>
      <div className="absolute bg-banner_bottom bottom-0 left-0 w-full py-6 ">
        <Container>
          <div className="grid  grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-16">
            {bannerCardsData.map((item) => (
              <BannerCard {...item} key={item.id} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};
