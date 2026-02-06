import { Waves, WavesArrowUpIcon, WavesLadder } from "lucide-react";

export default function Activities() {
  return (
    <section className="bg-[#e9f6f8] py-3">
      <div className="max-w-7xl mx-auto px-4">
        {/* OUR ACTIVITIES */}
        <h2 className="text-center text-6xl font-bold text-slate-900 tracking-wide mb-10">
          OUR ACTIVITIES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Card 1 */}
          <div className="bg-[#4f7fc3] rounded-xl p-10 h-70 text-center text-white">
            <div className="text-orange-400 flex justify-center text-4xl ">
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
            <div className="text-orange-400 flex justify-center text-4xl">
              <WavesArrowUpIcon size={44} />
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
            <div className="text-orange-400 flex justify-center text-4xl">
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
      </div>
    </section>
  );
}
