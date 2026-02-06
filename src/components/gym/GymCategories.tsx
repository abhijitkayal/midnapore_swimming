import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  Trophy,
  Handbag,
} from "lucide-react";

/* ---------- Image Carousel ---------- */
function ImageCarousel({ image }: { image: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % image.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [image.length]);

  return (
    <div className="relative mb-4">
      <img
        src={image[index]}
        alt="pool"
        className="w-30 h-30 aspect-square object-cover rounded-lg mx-auto block"
      />

      <button
        onClick={() =>
          setIndex(index === 0 ? image.length - 1 : index - 1)
        }
        className="absolute left-2 top-1/2 -translate-y-1/2 p-1 rounded-full shadow"
      >
        <ChevronLeft size={18} />
      </button>

      <button
        onClick={() => setIndex((index + 1) % image.length)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full shadow"
      >
        <ChevronRight size={18} />
      </button>

      <div className="flex justify-center gap-2 mt-2">
        {image.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              i === index ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------- Cards WITHOUT Image ---------- */
function ActivityCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: React.ReactNode;
  description: string;
}) {
  return (
    <div className="bg-[#4f7fc3] rounded-xl p-10 text-center text-white">
      <div className="flex justify-center mb-4 text-orange-400">
        {icon}
      </div>
      <h3 className="text-3xl font-bold text-black mb-4">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
}

/* ---------- Cards WITH Image ---------- */
function PoolCard({
  images,
  title,
  children,
}: {
  images: string[];
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#4f7fc3] rounded-xl p-8 text-center text-white">
      {/* TEXT MOVED ABOVE IMAGE */}
      <h3 className="text-3xl font-bold text-black mb-4">{title}</h3>
      {children}

      <ImageCarousel image={images} />
    </div>
  );
}

/* ---------- Main Component ---------- */
export default function GymCatagories() {
  return (
    <section className="bg-[#e9f6f8] min-h-screen py-3">
      <div className="max-w-7xl mx-auto px-4">
        {/* OUR ACTIVITIES */}
        <h2 className="text-center text-6xl font-bold text-slate-900 tracking-wide mb-10">
          OUR ACTIVITIES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <ActivityCard
            icon={<Dumbbell size={44} />}
            title="WEIGHT TRAINING"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />

          <ActivityCard
            icon={<Trophy size={44} />}
            title={
              <>
                COMPETETIVE <br /> TRAINING
              </>
            }
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />

          <ActivityCard
            icon={<Handbag size={44} />}
            title={
              <>
                POWERLIFTING <br /> TRAINING
              </>
            }
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>

        {/* OUR GYM CATEGORIES */}
        <h2 className="text-center text-5xl font-bold text-slate-900 tracking-wide mb-10">
          OUR GYM CATEGORIES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <PoolCard
            title="Ladies GYM"
            images={["/gallery/gallery-17.jpeg", "/gallery/gallery-18.jpeg"]}
          >
            <p className="text-md font-semibold">✔ Evening</p>
            <p className="text-md font-semibold">✔ Night</p>
          </PoolCard>

          <PoolCard
            title="Gents GYM"
            images={["/MSC_gym_men/img1.jpeg", "/MSC_gym_men/img2.jpeg"]}
          >
            <ul className="text-md font-semibold space-y-2">
              <li>✔ Morning</li>
              <li>✔ Evening</li>
              <li>✔ Night</li>
            </ul>
          </PoolCard>
        </div>
      </div>
    </section>
  );
}