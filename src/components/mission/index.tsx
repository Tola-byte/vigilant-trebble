import { missionData } from "../../data/mission";
import { Container } from "../skeleton/container";

export const Mission = () => {
  return (
    <div className="bg-[#F7F7F7] py-12">
      <Container>
        <div className="">
          <div className="">
            <div className="text-center mb-10">
              <h2 className="text-5xl font-bold text-primary mb-4">
                Our Mission
              </h2>
              <p className="text-xl text-gray-500">
                Bridging the Digital Divide, Meeting the World's Food Needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 mb-12 ">
              {missionData.map((item) => (
                <div className="" key={item.id}>
                  <div className="h-[25rem]  mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full object-contain h-full"
                    />
                  </div>
                  <h5 className="text-center  font-medium text-lg text-gray-600">
                    {item.title}
                  </h5>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center gap-y-8 text-center text-lg text-gray-500">
              <p className="leading-relaxed">
                By 2050, the need for animal protein will increase by 52%.
                Unfortunately, around 660 million people will still face the
                issue of hunger in 2030. Aquaculture, as a business sector with
                rapid growth and a provider of animal protein sources with the
                most efficient feed conversion, has the potential to contribute
                significantly to food security.
              </p>
              <p className="leading-relaxed">
                eFishery believes that “The Future is Aquaculture”. Using
                technological advances, eFishery builds a systematic value chain
                for fish and shrimp cultivation businesses, resulting in an
                integrated and sustainable ecosystem to strengthen global food
                security in the future.
              </p>
              <button className="py-5  text-gray-100 rounded-full bg-primary w-[15rem]">
                Read More
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
