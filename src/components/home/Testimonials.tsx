export default function Testimonial() {
  return (
    <section className="relative h-auto min-h-96 sm:min-h-120 md:h-150 w-full overflow-hidden py-12 sm:py-16 md:py-0">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg1.webp')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#3f4f63]/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-4 sm:px-8 md:ml-12">
        <div className="max-w-xl text-white">
          <h2 className="mb-4 sm:mb-5 md:mb-6 text-3xl sm:text-4xl md:text-6xl font-medium uppercase leading-tight tracking-wide">
            What People Say <br /> About Us
          </h2>

          <span className="block text-3xl sm:text-4xl md:-ml-2 md:text-6xl text-teal-400 h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <path
                className=""
                fill="currentColor"
                d="M96 280C96 213.7 149.7 160 216 160L224 160C241.7 160 256 174.3 256 192C256 209.7 241.7 224 224 224L216 224C185.1 224 160 249.1 160 280L160 288L224 288C259.3 288 288 316.7 288 352L288 416C288 451.3 259.3 480 224 480L160 480C124.7 480 96 451.3 96 416L96 280zM352 280C352 213.7 405.7 160 472 160L480 160C497.7 160 512 174.3 512 192C512 209.7 497.7 224 480 224L472 224C441.1 224 416 249.1 416 280L416 288L480 288C515.3 288 544 316.7 544 352L544 416C544 451.3 515.3 480 480 480L416 480C380.7 480 352 451.3 352 416L352 280z"
              />
            </svg>
          </span>

          <p className="mb-6 sm:mb-7 md:mb-8 text-sm sm:text-base md:text-md font-medium leading-6 sm:leading-7 text-white/90">
            Sed Fringilla Mauris Sit Amet Nibh. Donec Sodales Sagittis Magna.
            Sed Consequat, Leo Eget Bibendum Sodales, Augue Velit Cursus Nunc,
            Quis Gravida Magna Mi A Libero.
          </p>

          <div>
            <p className="text-sm sm:text-base md:text-md font-semibold uppercase tracking-widest">
              Britteny Simmons
            </p>
            <p className="text-sm sm:text-base md:text-md text-white/70">Model</p>
          </div>
        </div>
      </div>
    </section>
  );
}
