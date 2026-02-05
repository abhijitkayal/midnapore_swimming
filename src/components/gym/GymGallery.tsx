import { useState } from "react";

const images = [
  "/MSC_gym_men/img1.jpeg",
  "/MSC_gym_men/img2.jpeg",
  "/MSC_gym_men/img3.jpeg",
  "/MSC_gym_men/img4.jpeg",
  "/MSC_gym_men/img5.jpeg",
  "/MSC_gym_men/img6.jpeg",
];

export default function GymGallery() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <section className="bg-sky-50 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 tracking-wide">
        GALLERY
      </h2>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Image */}
        <div className="overflow-hidden rounded-xl shadow-lg">
          <img
            src={images[current]}
            alt="Gallery"
            className="w-full h-105 object-cover transition-all duration-500"
          />
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -translate-y-1/2 left-4 bg-black/50 text-white p-3 rounded-full hover:bg-black transition"
        >
          ❮
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -translate-y-1/2 right-4 bg-black/50 text-white p-3 rounded-full hover:bg-black transition"
        >
          ❯
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 rounded-full ${
                current === index ? "bg-black" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
