import { useState } from "react";
import { Waves, Dumbbell } from "lucide-react";

export default function Facilities() {
  return (
    <section className="bg-white px-4 py-12 sm:py-16 md:px-20 md:py-20">
      {/* Title */}
      <h2 className="mb-8 sm:mb-12 text-2xl sm:text-3xl font-bold text-gray-900 md:text-4xl">
        OUR FACILITIES
        <span className="mt-2 sm:mt-3 block h-1 w-12 sm:w-16 bg-cyan-500"></span>
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
        <FlipCard
          icon={<Waves size={44} />}
          title="SWIMMING POOL"
          text="A one stop destination of aquatic talents. Our students went to domestic as well as State competition."
          frontImage="/gallery/gallery-4.jpg"
          backImage="/gallery/gallery-5.jpg"
        />

        <FlipCard
          icon={<Dumbbell size={44} />}
          title="GYM"
          text="A state of the art facility where people can train, do weight management and work on their physique."
          frontImage="/gallery/gallery-10.jpeg"
          backImage="/gallery/gallery-10.jpeg"
        />
      </div>
    </section>
  );
}

function FlipCard({ icon, title, text, frontImage, backImage }: any) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="h-64 sm:h-72 md:h-60 perspective-distant cursor-pointer"
      onClick={() => setFlipped((prev) => !prev)}
    >
      <div
        className={`
          relative h-full w-full transition-transform duration-700
          transform-3d
          ${flipped ? "transform-[rotateX(180deg)]" : ""}
          md:hover:transform-[rotateX(180deg)]
        `}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 bg-cover bg-center backface-hidden"
          style={{ backgroundImage: `url(${frontImage})` }}
        >
          <div className="absolute inset-0 bg-[#4f7fbd]/80"></div>

          <div className="relative z-10 flex h-full flex-col justify-center p-4 sm:p-6 text-white md:p-10">
            <div className="mb-3 sm:mb-4 flex justify-center md:ml-60">{icon}</div>
            <h3 className="mb-2 sm:mb-3 text-xl sm:text-2xl justify-center text-center font-semibold">{title}</h3>
            <p className="max-w-xl text-sm sm:text-md text-center px-2">{text}</p>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 bg-cover bg-center backface-hidden transform-[rotateX(180deg)]"
          style={{ backgroundImage: `url(${backImage})` }}
        >
          <div className="absolute inset-0 bg-[#3a5f99]/85"></div>

          <div className="relative z-10 flex h-full flex-col justify-center p-4 sm:p-6 text-center text-white md:p-10">
            <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-semibold">{title}</h3>
            <p className="mx-auto mb-4 sm:mb-6 max-w-md text-xs sm:text-sm px-2">{text}</p>

            <div className="flex justify-center">
              <button
                className="border border-white px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm transition hover:bg-white hover:text-[#3a5f99]"
                onClick={(e) => e.stopPropagation()}
              >
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
