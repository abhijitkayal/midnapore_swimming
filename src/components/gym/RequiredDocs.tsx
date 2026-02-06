const RequiredDocs = () => {
  return (
    <section className="w-max-8xl h-max-7xl py-20">
      <div className="mx-auto max-w-7xl px-8 lg:px-4">
        {/* DOCUMENTS REQUIRED */}
        <div className="rounded-xl bg-[#eaf7f8] px-6 mb-5">
        <h2 className="text-3xl  font-bold text-[#0b1b2b] mb-6">
          Documents Required for NEW ADMISSION
        </h2>

        <ul className="list-disc pl-6 text-[#1f3b5b] text-xl font-medium mb-10">
          <li>
            Two (2) Copies Recent Stamp Size Colour Photos of the applicant.
          </li>
          <li>
            One (1) Copy Photocopy of Birth Certificate of the applicant, For
            below 18 Years.
          </li>
          <li>
            One (1) Copy Photocopy of Aadhaar Card of the applicant, for above
            18 Years.
          </li>
          <li>
            Required a medical Certificate for Physical Fitness from a
            Registered Doctor.
          </li>
        </ul>
        </div>

        {/* OTHER DETAILS */}
        <div className="bg-[#eaf7f8] rounded-xl p-6">
        <h2 className="text-3xl font-bold text-[#0b1b2b] mb-6">
          OTHER DETAILS
        </h2>

        <h3 className="font-bold text-[#0b1b2b] mb-2 text-lg">
          Gym requirement
        </h3>

        <div className=" text-[#1f3b5b] text-xl font-medium leading-relaxed">
          <p className="mb-4 text-md">
            We have two separate (2) Multi gyms, one for Gents and another one
            for Ladies.Minimum age criteria 18 yrs for the admission in Gym
            section.
          </p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default RequiredDocs;
