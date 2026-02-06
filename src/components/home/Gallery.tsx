import { ChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const galleryImages = [
  "/gallery/gallery-1.webp",
  "/gallery/gallery-2.webp",
  "/gallery/gallery-3.jpg",
  "/gallery/gallery-4.jpg",
  "/gallery/gallery-5.jpg",
  "/gallery/gallery-6.jpg",
  "/gallery/gallery-7.jpeg",
  "/gallery/gallery-8.jpeg",
  "/gallery/gallery-9.jpeg",
  "/gallery/gallery-10.jpeg",
  "/gallery/gallery-11.jpeg",
  "/gallery/gallery-12.jpeg",
  "/gallery/gallery-13.jpeg",
  "/gallery/gallery-14.jpeg",
];

export default function Gallery() {
  const [startIndex, setStartIndex] = useState(0);

  // Auto-swipe functionality
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const step = isMobile ? 1 : 2;
    
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => {
        if (prevIndex + step >= galleryImages.length) {
          return 0; // Loop back to start
        }
        return prevIndex + step;
      });
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const imagesToShow = isMobile ? 1 : 2;
  const visibleImages = galleryImages.slice(startIndex, startIndex + imagesToShow);

  const prev = () => {
    const isMobile = window.innerWidth < 768;
    const step = isMobile ? 1 : 2;
    if (startIndex > 0) {
      setStartIndex(startIndex - step);
    }
  };

  const next = () => {
    const isMobile = window.innerWidth < 768;
    const step = isMobile ? 1 : 2;
    if (startIndex + step < galleryImages.length) {
      setStartIndex(startIndex + step);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#4f7fc3] py-10 sm:py-12 md:py-16 lg:py-24">
      <div className="relative mx-auto max-w-9xl px-4  sm:px-6">
        {/* HEADER */}
        <div className="mb-6 sm:mb-8 md:mb-10 md:ml-20 lg:ml-20">
          <h3 className="text-2xl sm:text-3xl md:-ml-6 md:text-5xl lg:text-7xl font-bold uppercase text-white">
            GALLERY
          </h3>
          <div className="mt-2 sm:mt-3 h-0.5 sm:h-1 md:-ml-6 w-10 sm:w-14 font-bold bg-emerald-400" />
          <Link to="/gallery">
            <button className="mt-4 sm:mt-5 md:mt-6 md:-ml-6 inline-block bg-teal-400/90 px-6 sm:px-8 py-1.5 sm:py-2 text-xs sm:text-sm font-medium uppercase tracking-wide text-white hover:bg-teal-500">
              View More
            </button>
          </Link>
        </div>

        {/* GALLERY SLIDER */}
        <div className="relative flex items-center justify-center gap-6">
          {/* LEFT */}
          <button
            onClick={prev}
            disabled={startIndex === 0}
            className="hidden md:block text-teal-300 hover:text-teal-400 disabled:opacity-40"
          >
            <ChevronLeft size={28}  className=""/>
          </button>

          {/* IMAGES */}
         <div className="flex items-start gap-2 sm:gap-3 w-full transition-all duration-700 ease-in-out justify-center">
  {visibleImages.map((image, index) => (
    <div
      key={image}
      className="w-72 h-48 sm:w-120 sm:h-694 md:w-120 md:h-80 lg:w-154 lg:h-106 rounded-md overflow-hidden shadow-lg animate-fadeIn animate-fadeIn"
    >
      <img
        src={image}
        alt={`Gallery image ${startIndex + index + 1}`}
        className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
      />
    </div>
  ))}
</div>


          {/* RIGHT */}
          <button
            onClick={next}
            disabled={startIndex + imagesToShow >= galleryImages.length}
            className="hidden md:block text-teal-300 hover:text-teal-400 disabled:opacity-40"
          >
            <ChevronLeft size={28} className="rotate-180" />
          </button>
        </div>
      </div>
    </section>
  );
}
