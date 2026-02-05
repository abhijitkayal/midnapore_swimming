const Card = ({
  title,
  sections,
  image,
  height = "h-[460px]",
}: {
  title: string;
  sections: { label: string; times: string[] }[];
  image: string;
  height?: string;
}) => {
  return (
    <div
      className={`relative ${height} rounded-2xl overflow-hidden bg-center bg-cover`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Blue overlay */}
      <div className="absolute inset-0 bg-blue-700/70" />

      {/* Content */}
      <div className="relative z-10 h-full p-8 text-white flex flex-col">
        {/* Title */}
        <h3 className="text-3xl font-extrabold tracking-widest text-black mb-6">
          {title.toUpperCase()}
        </h3>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, i) => (
            <div key={i}>
              <p className="font-bold text-lg mb-2">
                {section.label.toUpperCase()}
              </p>
              <div className="space-y-1 text-sm">
                {section.times.map((time, idx) => (
                  <p key={idx}>{time}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function GymTraining() {
  return (
    <section className="mx-auto max-w-7xl px-8 lg:px-4 py-16">
      {/* Heading */}
      <h2 className="text-5xl font-bold tracking-wide mb-3">
        TRAINING SCHEDULES
      </h2>
      <div className="h-0.5 w-20 bg-sky-400 mb-12" />

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Morning */}
        <Card
          title="Morning"
          image="/MSC_gym_men/img1.jpeg"
          sections={[
            {
              label: "Gents",
              times: [
                "06:00 AM To 07:00 AM",
                "07:10 AM To 08:10 AM",
                "08:25 AM To 09:25 AM",
              ],
            },
            {
              label: "Ladies",
              times: ["06:15 AM To 07:15 AM", "07:25 AM To 08:25 AM"],
            },
          ]}
        />

        {/* Evening */}
        <Card
          title="Evening"
          image="/MSC_gym_men/img2.jpeg"
          sections={[
            {
              label: "Gents + Ladies",
              times: [
                "04:00 PM To 05:00 PM",
                "05:10 PM To 06:10 PM",
                "06:20 PM To 07:20 PM",
              ],
            },
          ]}
        />

        {/* Night */}
        <Card
          title="Night"
          image="/MSC_gym_men/img3.jpeg"
          sections={[
            {
              label: "Gents Only",
              times: ["07:30 PM To 08:30 PM"],
            },
          ]}
        />
      </div>
    </section>
  );
}
