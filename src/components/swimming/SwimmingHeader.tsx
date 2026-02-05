const SwimmingHeader = () => {
  return (
     <section className="relative h-130 mt-20 flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(38, 63, 127, 0.65), rgba(38, 63, 127, 0.65)), url('/bg1.webp')`,
          }}
        ></div>
        <div className="container max-w-8xl lg:max-w-8xl mx-auto relative z-10 py-20">
          {/* Background */}
          {/* <div className="absolute inset-0 bg-linear-to-l from-blue-900/80 to-transparent z-10" /> */}

          {/* Main Content */}
          <div className="relative z-20 w-full grid grid-cols-12 gap-20 ">
            {/* LEFT SECTION — pulled toward center */}
            <div className="col-span-7 flex flex-col justify-center space-y-12 translate-x-12 relative z-30">
              {/* Swimming Pool */}
              <div>
                <div className="flex items-start space-x-8 ">
                  <div className="flex flex-col items-center w-32 text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                      className="w-20 h-20 text-orange-500 -ml-36"
                    >
                      <path
                        fill="currentColor"
                        d="M552 216C552 185.1 526.9 160 496 160C465.1 160 440 185.1 440 216C440 246.9 465.1 272 496 272C526.9 272 552 246.9 552 216zM293.4 262.2L204.8 336.1C205.9 336.1 207 336 208.1 336C241.2 335.8 274.4 346.2 302.5 367.4C324.6 384 331.6 384 353.7 367.4C381.2 346.7 413.6 336.2 446.1 336C450.9 336 455.8 336.2 460.6 336.6C452.3 306.6 436.3 278.9 413.8 256.4C395.4 238 373.2 223.7 348.8 214.6L280.2 188.9C252.8 178.6 222.2 181.4 197.1 196.5L143.6 228.6C128.4 237.7 123.5 257.3 132.6 272.5C141.7 287.7 161.3 292.6 176.5 283.5L230 251.3C238.4 246.3 248.6 245.4 257.7 248.8L293.4 262.2z"
                      />
                    </svg>
                    <h3 className="text-yellow-400 font-bold tracking-widest text-md -ml-9">
                      SWIMMING POOL
                    </h3>
                  </div>
                  <div className="flex-1 pt-2 border-t border-gray-500/50">
                    <p className="text-white text-2xl leading-relaxed ml-15">
                      A one stop destination of aquatic talents. Our students
                      went to domestic as well as State competition.
                    </p>
                  </div>
                </div>
              </div>

              {/* Gym */}
            </div>

            {/* RIGHT SECTION — pulled left + overlapping */}
            <div className="col-span-5 relative flex items-center justify-center -translate-x-20 z-20">
              {/* Orange Ring */}
              <div className="absolute w-130 h-130 border-100 border-orange-600 rounded-full opacity-90 z-10 ml-25" />

              {/* Swimmer */}
              <img
                src="/swimmer.webp"
                alt="Swimmer"
                className="relative z-30 h-120 object-contain translate-y-10 ml-20"
              />
            </div>
          </div>
        </div>
      </section>
  );
};

export default SwimmingHeader;
