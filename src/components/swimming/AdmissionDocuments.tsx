const AdmissionDocuments = () => {
  return (
    <section className="w-max-8xl h-max-7xl bg-[#eaf7f8] py-20">
      <div className="mx-auto max-w-7xl px-8 lg:px-4">
        {/* DOCUMENTS REQUIRED */}
        <h2 className="text-3xl  font-semibold text-[#0b1b2b] mb-6">
          DOCUMENTS REQUIRED FOR NEW ADMISSION
        </h2>

        <ul className="list-disc pl-6 text-[#1f3b5b] text-md mb-10">
          <li>Aadhaar Card, Voter Card (Xerox Copy)</li>
          <li>2 (two) copies recent stamp size colour photographs</li>
          <li>Recommended by one Life or General Member of this Club</li>
          <li>Only cash payment</li>
        </ul>

        {/* OTHER DETAILS */}
        <h2 className="text-3xl font-semibold text-[#0b1b2b] mb-6">
          OTHER DETAILS
        </h2>

        <h3 className="font-bold text-[#0b1b2b] mb-2 text-md">
          Swimming requirement
        </h3>

        <div className=" text-[#1f3b5b] text-md leading-relaxed">
          <p className="mb-4">
            Minimum height required 3 feet for swimming admission, age is not
            factor
          </p>

          <p>For Kids pool – 3 feet – 3 feet 11 inches height required</p>
          <p>For 10 m. Swimming pool 4 feet height required</p>
          <p>For 25 m. Swimming pool 4 feet 3 inches required</p>

          <p>For the swimming admission following documents are required</p>

          <p>Photo copy of Birth Certificate ( below 18 yrs of age )</p>
          <p>Any identity proof ( above 18 yrs of age )</p>
          <p>Physically fit Certificate from any registered doctor</p>
        </div>
      </div>
    </section>
  );
};

export default AdmissionDocuments;
