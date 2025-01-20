import React, { useState } from "react";

const Carousel = () => {
  const slides = [
    {
      image: "assets/images/journey-in-culture-1.jpg", // Replace with actual image paths
      caption: "Festival in Any State",
    },
    {
      image: "assets/images/journey-in-culture-2.jpg",
      caption: "Experience the Culture",
    },
    {
      image: "assets/images/journey-in-culture-3.jpg",
      caption: "Travel Adventures Await",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full h-[500px] bg-gray-100 overflow-hidden rounded-3xl">
      {/* Slide Images */}
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-full relative"
          >
            <img
              src={slide.image}
              alt={slide.caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-5 left-5 text-white bg-black bg-opacity-50 px-4 py-2 rounded-md text-sm flex items-center gap-2">
              <span>📍</span>
              {slide.caption}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black  text-white w-10 h-10 flex justify-center items-center rounded-full"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black  text-white w-10 h-10 flex justify-center items-center rounded-full"
      >
        →
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 bg-neutral-800 bg-opacity-30 p-2 rounded-full contrast-125 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full  ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
