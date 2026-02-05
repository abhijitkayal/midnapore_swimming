const Card = ({ title, subtitle, times, image, height = "h-[420px]" }: any) => {
  return (
    <div
      className={`relative ${height} rounded-2xl overflow-hidden bg-center bg-no-repeat bg-cover`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-blue-900/70" />

      {/* content */}
      <div className="relative z-10 p-6 text-white">
        <h3 className="text-2xl font-bold text-black mb-2">{title}</h3>
        {subtitle && <p className="text-md font-bold mb-4">{subtitle}</p>}

        <div className="space-y-2 text-md font-bold">
          {times.map((t: string, i: number) => (
            <p key={i}>{t}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function TrainingSchedules() {
  return (
    <section className="mx-auto max-w-7xl px-8 lg:px-4 py-16">
      {/* heading */}
      <h2 className="text-4xl font-bold tracking-wide mb-4">
        TRAINING SCHEDULES
      </h2>
      <div className="h-0.5 w-20 bg-blue-300 mb-12" />

      {/* ROW 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card
          title="KIDS"
          subtitle="Afternoon"
          times={["03:45 PM To 04:15 PM"]}
          image="/swim2.jpg"
        />
        <Card
          title="KIDS"
          subtitle="Evening"
          times={[
            "03:45 PM To 04:15 PM",
            "04:15 PM To 04:45 PM",
            "04:45 PM To 05:15 PM",
            "05:15 PM To 05:45 PM",
            "05:45 PM To 06:15 PM",
            "06:15 PM To 06:45 PM",
            "06:45 PM To 07:15 PM",
          ]}
          image="/swim3.avif"
        />
      </div>

      {/* ROW 2 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card
          title="SEASONAL MEMBER"
          subtitle="Afternoon"
          times={["03:45 PM To 04:15 PM", "04:15 PM To 04:45 PM"]}
          image="/swim3.avif"
          height="h-[380px]"
        />
        <Card
          title="SEASONAL MEMBER"
          subtitle="Evening"
          times={[
            "04:45 PM To 05:15 PM",
            "05:15 PM To 05:45 PM",
            "05:45 PM To 06:15 PM",
            "06:15 PM To 06:45 PM",
            "06:45 PM To 07:15 PM",
          ]}
          image="/swim4.avif"
          height="h-[380px]"
        />
        <Card
          title="SEASONAL MEMBER"
          subtitle="Morning"
          times={[
            "05:30 AM To 06:00 AM",
            "06:15 AM To 06:45 AM",
            "06:45 AM To 07:15 AM",
            "07:15 AM To 07:45 AM",
            "07:45 AM To 08:15 AM",
          ]}
          image="/swim5.jpg"
          height="h-[380px]"
        />
      </div>

      {/* ROW 3 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card
          title="ASSOCIATED MEMBER"
          subtitle="Afternoon"
          times={["03:45 PM To 04:15 PM", "04:15 PM To 04:45 PM"]}
          image="/swim6.avif"
          height="h-[380px]"
        />
        <Card
          title="ASSOCIATED MEMBER"
          subtitle="Evening"
          times={[
            "04:45 PM To 05:15 PM",
            "05:15 PM To 05:45 PM",
            "05:45 PM To 06:15 PM",
            "06:15 PM To 06:45 PM",
            "06:45 PM To 07:15 PM",
          ]}
          image="/swim7.jpg"
          height="h-[380px]"
        />
        <Card
          title="ASSOCIATED MEMBER"
          subtitle="Morning"
          times={[
            "05:30 AM To 06:00 AM",
            "06:15 AM To 06:45 AM",
            "06:45 AM To 07:15 AM",
            "07:15 AM To 07:45 AM",
            "07:45 AM To 08:15 AM",
          ]}
          image="/swim8.avif"
          height="h-[380px]"
        />
      </div>

      {/* ROW 4 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card
          title="GENERAL MEMBER"
          subtitle="Evening"
          times={["05:15 PM To 05:45 PM", "05:45 PM To 06:15 PM"]}
          image="swim2.jpg"
          height="h-[420px]"
        />
        <Card
          title="GENERAL MEMBER"
          subtitle="Morning"
          times={[
            "05:30 AM To 06:00 AM",
            "06:15 AM To 06:45 AM",
            "06:45 AM To 07:15 AM",
            "07:15 AM To 07:45 AM",
            "07:45 AM To 08:15 AM",
          ]}
          image="/swimmingPool.jpg"
          height="h-[420px]"
        />
      </div>

      {/* ROW 5 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card
          title="LADIES NIGHT"
          subtitle=""
          times={["07:45 PM To 08:15 PM"]}
          image="/swim3.avif"
          height="h-[280px]"
        />
        <Card
          title="GENTS NIGHT"
          subtitle=""
          times={["08:30 PM To 09:00 PM", "09:00 PM To 09:30 PM"]}
          image="/swim4.avif"
          height="h-[280px]"
        />
      </div>
    </section>
  );
}
