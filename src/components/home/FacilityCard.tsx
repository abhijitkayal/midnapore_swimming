import { ChevronRight, Dumbbell } from "lucide-react";

const facilityList = [
  "Weight Loss/ Management",
  "Toning & Sculpting",
  "Resistance Training",
  "Muscle Building",
  "Mobility / Flexibility",
  "Swimming Pool Activity",
  "Water Polo",
  "Speed, Strength, Power Development",
  "Competetive Coaching",
  "Nutritional Advice",
];

const FacilityCard = () => {
  return (
    <div className="w-full">
      {/* --- Section 1: Top Notch Equipments (The List) --- */}
      <section className="bg-[#5a84c3] py-10 sm:py-12 md:py-16 text-white">
        <div className="container mx-auto max-w-8xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-40 items-start">
            <div className="space-y-4 sm:space-y-6">
              <div className="relative">
                <h1 className="text-3xl sm:text-4xl -ml-2 md:text-5xl lg:text-6xl font-medium uppercase leading-none text-[#ff9100]">
                  TOP NOTCH <br /> FACILITIES
                </h1>
                <div className="h-0.5 w-14 sm:w-16 md:w-20-ml-2 bg-yellow-400 mt-4 sm:mt-5 md:mt-6"></div>
              </div>
              <p className="text-sm sm:text-base md:text-medium -ml-2 text-gray-100 leading-relaxed max-w-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                possimus nisi suscipit sapiente enim blanditiis odio laborum.
                Explicabo aliquid eveniet repellat aliquam aut dolor a facilis
                quia, quos quae quod voluptatum quibusdam quasi natus magnam
                perferendis nesciunt.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-y-2 sm:gap-y-3">
              {facilityList.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center group cursor-default"
                >
                  <ChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-400 mr-2 sm:mr-3 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium group-hover:text-yellow-200 transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="relative min-h-96 sm:min-h-120 md:h-130 flex items-center overflow-hidden py-12 sm:py-16 md:py-0">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(38, 63, 127, 0.65), rgba(38, 63, 127, 0.65)), url('/bg1.webp')`,
          }}
        ></div>
        <div className="container max-w-8xl lg:max-w-8xl mx-auto relative z-10 py-10 sm:py-16 md:py-20 px-4 sm:px-6">
          {/* Background */}
          {/* <div className="absolute inset-0 bg-linear-to-l from-blue-900/80 to-transparent z-10" /> */}

          {/* Main Content */}
          <div className="relative z-20 w-full grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 md:gap-20">
            {/* LEFT SECTION — pulled toward center */}
            <div className="md:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8 md:space-y-12 md:translate-x-12 relative z-30">
              {/* Swimming Pool */}
              <div>
                <div className="flex md:-ml-5 flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-8">
                  <div className="flex flex-col items-center w-full sm:w-24 md:w-32 text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                      className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-orange-500 md:-ml-36"
                    >
                      <path
                        fill="currentColor"
                        d="M552 216C552 185.1 526.9 160 496 160C465.1 160 440 185.1 440 216C440 246.9 465.1 272 496 272C526.9 272 552 246.9 552 216zM293.4 262.2L204.8 336.1C205.9 336.1 207 336 208.1 336C241.2 335.8 274.4 346.2 302.5 367.4C324.6 384 331.6 384 353.7 367.4C381.2 346.7 413.6 336.2 446.1 336C450.9 336 455.8 336.2 460.6 336.6C452.3 306.6 436.3 278.9 413.8 256.4C395.4 238 373.2 223.7 348.8 214.6L280.2 188.9C252.8 178.6 222.2 181.4 197.1 196.5L143.6 228.6C128.4 237.7 123.5 257.3 132.6 272.5C141.7 287.7 161.3 292.6 176.5 283.5L230 251.3C238.4 246.3 248.6 245.4 257.7 248.8L293.4 262.2z"
                      />
                    </svg>
                    <h3 className="text-yellow-400 font-bold tracking-widest text-xs sm:text-sm md:text-md md:-ml-15 mt-2">
                      SWIMMING POOL
                    </h3>
                  </div>
                  <div className="flex-1 sm:pt-2 sm:border-t border-gray-500/50">
                    <p className="text-white text-sm sm:text-base md:text-lg lg:text-2xl leading-relaxed md:ml-15">
                      A one stop destination of aquatic talents. Our students
                      went to domestic as well as State competition.
                    </p>
                  </div>
                </div>
              </div>

              {/* Gym */}
              <div className="flex flex-col md:-ml-5 sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-8">
                <div className="flex flex-col items-center w-full sm:w-24 md:w-32 text-center">
                  <Dumbbell className="w-10 h-10 sm:w-12 sm:h-12 text-orange-500 md:-ml-38" />
                  <h3 className="text-yellow-400 font-bold tracking-widest text-xs sm:text-sm md:text-md md:-ml-40 mt-2">
                    GYM
                  </h3>
                </div>
                <div className="flex-1 sm:pt-2 sm:border-t border-gray-500/50">
                  <p className="text-white text-sm sm:text-base md:text-lg lg:text-2xl leading-relaxed md:ml-15">
                    A state of the art facility where people can train, do
                    weight management and work on their physique.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SECTION — pulled left + overlapping */}
            <div className="hidden md:flex -mr-5 md:col-span-5 relative items-center justify-center md:-translate-x-20 z-20">
              {/* Orange Ring */}
              <div className="absolute w-100 h-100 lg:w-130 lg:h-130 border-60 lg:border-100 border-orange-600 rounded-full opacity-90 z-10 ml-15 lg:ml-25" />

              {/* Swimmer */}
              <img
                src="/swimmer.webp"
                alt="Swimmer"
                className="relative z-30 h-90 lg:h-120 object-contain translate-y-10 ml-10 lg:ml-20"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacilityCard;
