import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { carouselSlides } from "../data/carouselSlides";

const FullscreenCarousel = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const handlePrev = () => instanceRef.current?.prev();
  const handleNext = () => instanceRef.current?.next();

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Overlay Layer */}
      <div ref={sliderRef} className="keen-slider h-full">
        {carouselSlides.map((slide, idx) => (
          <div
            key={idx}
            className="keen-slider__slide relative h-full w-full"
            style={{
              backgroundImage: `url(${slide.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute left-1/2 bottom-8 transform -translate-x-1/2 w-[90%] sm:bottom-10 sm:w-[80%] lg:bottom-16 lg:w-[60%] border border-blue-950 backdrop-blur-lg p-4 rounded-lg bg-white/20 max-w-lg">
              <h1 className="text-white text-center lg:text-4xl text-2xl font-bold">
                {slide.title}
              </h1>
              <p className="text-white text-center mt-2">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="hidden lg:block absolute left-4 sm:left-8 lg:left-16 top-1/2 transform -translate-y-1/2 border border-blue-950 backdrop-blur-lg rounded-full p-4 text-white font-bold text-2xl cursor-pointer"
      >
        ‹
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="hidden lg:block absolute right-4 sm:right-8 lg:right-16 top-1/2 transform -translate-y-1/2 border border-blue-950 backdrop-blur-lg rounded-full p-4 text-white font-bold text-2xl cursor-pointer"
      >
        ›
      </button>

      {/* Numbered Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {carouselSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`w-8 h-8 flex items-center justify-center rounded-full border border-blue-950 backdrop-blur-md text-blue-950 text-sm cursor-pointer ${
              currentSlide === idx
                ? "bg-blue-950 text-white font-bold border-white"
                : "hover:bg-blue-950/80 hover:text-white"
            } transition`}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FullscreenCarousel;
