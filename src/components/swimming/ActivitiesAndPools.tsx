import { Waves, WavesLadder } from "lucide-react";

export default function ActivitiesAndPools() {
  return (
    <section className="bg-[#e9f6f8] min-h-screen py-3">
      <div className="max-w-7xl mx-auto px-4">
        {/* OUR ACTIVITIES */}
        <h2 className="text-center text-6xl font-bold text-slate-900 tracking-wide mb-10">
          OUR ACTIVITIES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Card 1 */}
          <div className="bg-[#4f7fc3] rounded-xl p-10 h-70 text-center text-white">
            <div className="text-orange-400 text-4xl ">
              <WavesLadder size={44} />
            </div>
            <h3 className="text-3xl font-bold text-black mb-4">
              WATER
              <br />
              POLO
            </h3>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#4f7fc3] rounded-xl p-10 h-70 text-center text-white">
            <div className="text-orange-400 text-4xl">
              <WavesLadder size={44} />
            </div>
            <h3 className="text-3xl font-bold text-black mb-4">
              COMPETETIVE
              <br />
              TRAINING
            </h3>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#4f7fc3] rounded-xl p-10 h-70 text-center text-white">
            <div className="text-orange-400 text-4xl">
              <Waves size={44} />
            </div>
            <h3 className="text-3xl font-bold text-black mb-4">
              SWIMMING
              <br />
              TRAINING
            </h3>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>

        {/* OUR SWIMMING POOL CATEGORIES */}
        <h2 className="text-center text-5xl font-bold text-slate-900 tracking-wide mb-10">
          OUR SWIMMING POOL CATEGORIES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Kids Pool */}
          <div className="bg-[#4f7fc3] rounded-xl p-8 text-center text-white">
            <h3 className="text-3xl font-bold text-black mb-4">
              KID'S SWIMMING POOL
            </h3>
            <p className="text-md text-emerald-300 font-semibold">
              ✔ Filtration System
            </p>
          </div>

          {/* 10 Meter Pool */}
          <div className="bg-[#4f7fc3] rounded-xl p-8 text-center text-white">
            <h3 className="text-3xl font-bold text-black mb-4">
              10 METER SWIMMING POOL
            </h3>
            <p className="text-md text-emerald-300 font-semibold">
              ✔ Filtration System
            </p>
          </div>

          {/* 25 Meter Pool */}
          <div className="bg-[#4f7fc3] rounded-xl p-8 text-center text-white">
            <h3 className="text-3xl font-bold text-black mb-4">
              25 METER SWIMMING POOL
            </h3>
            <p className="text-md text-emerald-300 font-semibold">
              ✔ Filtration System
            </p>
          </div>

          {/* 50 Meter Pool */}
          <div className="bg-[#4f7fc3] rounded-xl p-8 text-center text-white">
            <h3 className="text-3xl font-extrabold text-black mb-4">
              50 METER SWIMMING POOL
            </h3>
            <ul className="text-md text-emerald-300 font-semibold space-y-2">
              <li>✔ Natural Water Without Filter</li>
              <li>✔ Diving</li>
              <li>✔ Water Polo</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
