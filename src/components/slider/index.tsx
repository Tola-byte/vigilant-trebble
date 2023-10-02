import { useCallback, useEffect, useState } from "react";
import { sliderData } from "../../data/slider";
import { Container } from "../skeleton/container";

// type SliderProps = {
//     data: { id: number, image: string, title: string; country: string,  }[]
// }

let interval: number;

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = sliderData;

  const startInterval = useCallback(() => {
    interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev === items.length - 1) return 0;
        else return ++prev;
      });
    }, 3000);
  }, []);

  useEffect(() => {
    startInterval();

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Container>
      <div className="pt-72">
        <div className="mb-24">
          <h2 className="text-5xl text-center text-primary font-semibold">
            Buyer Testimonials
          </h2>
        </div>
        <div className="min-h-[30rem]  gap-y-10  flex gap-x-20  justify-center md:gap-y-0">
          <div className="md:flex-[0.2]">
            <ul className="flex justify-center items-center gap-x-6 md:flex-col md:gap-y-6 md:justify-start md:items-stretch">
              {items.map((_, idx) => (
                <li
                  key={idx}
                  style={{
                    transitionTimingFunction: "linear",
                  }}
                  className={`transition-all cursor-pointer text-center duration-200     ${
                    currentIndex === idx
                      ? "text-4xl text-yellow-400 underline font-bold"
                      : "text-base text-primary font-semibold"
                  }`}
                  onClick={() => setCurrentIndex(idx)}
                  onMouseEnter={() => clearInterval(interval)}
                  onMouseLeave={() => startInterval()}
                >
                  0{idx + 1}.
                </li>
              ))}
            </ul>
          </div>
          <div className="relative  flex-[0.7] overflow-hidden">
            {items.map((item, idx) => (
              <div
                key={idx}
                className={`flex absolute items-center -mt-6 transition duration-[1s] 
              gap-x-6 ${
                currentIndex === idx
                  ? "translate-x-0"
                  : idx > currentIndex
                  ? "translate-x-[100%]"
                  : "-translate-x-[100%]"
              } `}
                style={{
                  zIndex: currentIndex === idx ? 40 : idx * 5,
                }}
                onMouseEnter={() => clearInterval(interval)}
                onMouseLeave={() => startInterval()}
              >
                <div className="flex-shrink-0 h-[22rem]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full object-cover"
                  />
                </div>
                <div className="hidden">
                  <h5 className="text-gray-800 font-bold text-3xl mb-3">
                    {item.title}
                  </h5>
                  <p className=" text-gray-600">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
