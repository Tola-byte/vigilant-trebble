import { useState } from "react";
import { vacancySliderData } from "../../data/slider";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const VacancySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? vacancySliderData.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === vacancySliderData.length - 1 ? 0 : prevIndex + 1
    );
  };


  const imageWidth = 24.5; 

  return (
    <div className="no-scroll-bar scroll-smooth overflow-hidden">
      <div className="flex gap-12 p-10 mb-10" style={{ transform: `translateX(-${currentIndex * imageWidth}%)` }}>
        {vacancySliderData.concat(vacancySliderData).map((data, index) => (
          <img
            key={index}
            src={data.src}
            alt={data.alt}
            style={{
              width: `${imageWidth}%`, 
            }}
          />
        ))}
      </div>
      <div className="flex justify-between p-3">
        <FaChevronLeft
          size="50"
          color="#038767"
          onClick={goToPreviousSlide}
          className="cursor-pointer"
        />
        <FaChevronRight
          size="50"
          color="#038767"
          onClick={goToNextSlide}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};
