
import React, { useState } from "react";
import packages from "./packages.json";

function Packages() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <div className="min-h-screen bg-[#F8F1E3] text-[#082B49]">

    
{/* Hero Section */}
<section className="relative min-h-[520px] overflow-hidden">

  {/* Hero Image */}
  <img
    src="https://images.openai.com/static-rsc-4/JOYQr8fyv11rTa-zIpst4okx2K7mE2ArGBlb7C45wc9pvWz1RH6RqQ-R_WlBMlpPV80_tETzUA0U74sOUPV0Krj4lMZJ9WqZqFbziZmNDKMhvSqY0YO5FHPWiDGi9XKDm4wYtA0712v-YA7sGtceTg0RK3AAlh2rEkSEBRuvM7pDdoCHq_dqJ9foExzZeGDT?purpose=fullsize"
    alt="London city"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-[#082B49]/50"></div>

  {/* Hero Content */}
  <div className="relative z-10 flex min-h-[520px] items-center justify-center px-6 text-center md:px-16">

    <div className="max-w-4xl">

      <p className="text-sm font-semibold uppercase tracking-[5px] text-[#A9D6E5]">
        Explore London
      </p>

      <h1 className="mt-5 text-5xl font-bold leading-tight text-[#F8F1E3] md:text-7xl">
        Choose Your
        <span className="block text-[#D9C7A3]">
          London Escape
        </span>
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
        Find the perfect London journey based on your budget,
        number of days and number of travellers.
      </p>

      {/* Quick Information */}
      <div className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-3">

        <div className="border border-white/30 bg-white/10 px-5 py-3 backdrop-blur-sm">
          <p className="text-xs uppercase tracking-wider text-white/60">
            Starting From
          </p>
          <p className="mt-1 font-bold text-white">
            £199
          </p>
        </div>

        <div className="border border-white/30 bg-white/10 px-5 py-3 backdrop-blur-sm">
          <p className="text-xs uppercase tracking-wider text-white/60">
            Duration
          </p>
          <p className="mt-1 font-bold text-white">
            2–10 Days
          </p>
        </div>

        <div className="border border-white/30 bg-white/10 px-5 py-3 backdrop-blur-sm">
          <p className="text-xs uppercase tracking-wider text-white/60">
            Groups
          </p>
          <p className="mt-1 font-bold text-white">
            2–8 Members
          </p>
        </div>

      </div>

    </div>

  </div>

</section>



      {/* Section Heading */}
      <section className="px-6 pt-14 md:px-16">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row md:items-end">

          <div>
            <p className="text-sm font-bold uppercase tracking-[3px] text-[#8B5E3C]">
              Choose Your Journey
            </p>

            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Find the trip that fits you
            </h2>
          </div>

          <p className="text-sm text-[#082B49]/60">
            {packages.length} London journeys available
          </p>

        </div>

      </section>


      {/* Package Cards */}
      <section className="px-6 py-12 md:px-16">

        <div className="mx-auto grid max-w-7xl gap-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {packages.map((item) => {

            const isSelected = selectedPackage?.id === item.id;

            return (
              <div
                key={item.id}
                className={`group overflow-hidden border bg-white transition-all duration-300 ${
                  isSelected
                    ? "border-[#082B49] shadow-[0_0_0_3px_#082B49]"
                    : "border-[#D9C7A3] hover:-translate-y-2 hover:shadow-xl"
                }`}
              >

                {/* Image */}
                <div className="relative h-52 overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Package Type */}
                  <div className="absolute left-4 top-4 bg-[#F8F1E3] px-3 py-2">

                    <p className="text-[10px] font-bold uppercase tracking-wider">
                      {item.type}
                    </p>

                  </div>


                  {/* Selection Circle */}
                  <div className="absolute right-4 top-4">

                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full border-2 text-sm font-bold ${
                        isSelected
                          ? "border-[#082B49] bg-[#082B49] text-white"
                          : "border-white bg-white/90 text-[#082B49]"
                      }`}
                    >
                      {isSelected ? "✓" : ""}
                    </div>

                  </div>

                </div>


                {/* Card Content */}
                <div className="p-5">

                  <h3 className="text-xl font-bold">
                    {item.name}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-[#082B49]/60">
                    {item.description}
                  </p>


                  {/* Days + Members */}
                  <div className="mt-5 grid grid-cols-2 gap-2">

                    <div className="border border-[#D9C7A3] p-3">

                      <p className="text-[10px] uppercase tracking-wider text-[#082B49]/50">
                        Duration
                      </p>

                      <p className="mt-1 text-sm font-bold">
                        {item.days}
                      </p>

                    </div>


                    <div className="border border-[#D9C7A3] p-3">

                      <p className="text-[10px] uppercase tracking-wider text-[#082B49]/50">
                        Travellers
                      </p>

                      <p className="mt-1 text-sm font-bold">
                        {item.members}
                      </p>

                    </div>

                  </div>


                  {/* Places */}
                  <div className="mt-5">

                    <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#8B5E3C]">
                      Highlights
                    </p>

                    <div className="mt-3 flex flex-wrap gap-1.5">

                      {item.places.map((place, index) => (

                        <span
                          key={index}
                          className="bg-[#F8F1E3] px-2.5 py-1.5 text-[11px]"
                        >
                          {place}
                        </span>

                      ))}

                    </div>

                  </div>


                  {/* Price + Button */}
                  <div className="mt-6 flex items-center justify-between border-t border-[#D9C7A3] pt-5">

                    <div>

                      <p className="text-[10px] uppercase tracking-wider text-[#082B49]/50">
                        Package
                      </p>

                      <p className="text-2xl font-bold">
                        {item.budget}
                      </p>

                    </div>


                    <button
                      onClick={() => setSelectedPackage(item)}
                      className={`px-4 py-3 text-xs font-bold uppercase tracking-wider transition ${
                        isSelected
                          ? "bg-[#8B5E3C] text-white"
                          : "bg-[#082B49] text-white hover:bg-[#8B5E3C]"
                      }`}
                    >
                      {isSelected ? "Selected" : "Select Trip"}
                    </button>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </section>


      {/* Budget Overview */}
      <section className="border-y border-[#D9C7A3] bg-[#D9C7A3]/30 px-6 py-16 md:px-16">

        <div className="mx-auto max-w-7xl">

          <div className="mb-10">

            <p className="text-sm font-bold uppercase tracking-[3px] text-[#8B5E3C]">
              Plan By Budget
            </p>

            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              More budget, more London
            </h2>

          </div>


          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">

            {packages.map((item) => (

              <div
                key={item.id}
                className="bg-[#F8F1E3] p-4 transition hover:-translate-y-1"
              >

                <p className="text-xl font-bold">
                  {item.budget}
                </p>

                <div className="mt-3 border-t border-[#D9C7A3] pt-3">

                  <p className="text-sm font-semibold">
                    {item.days}
                  </p>

                  <p className="mt-1 text-xs text-[#082B49]/60">
                    {item.members}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* Selected Package */}
      {selectedPackage && (

        <section className="sticky bottom-0 z-50 border-t-4 border-[#8B5E3C] bg-[#082B49] px-6 py-5 text-[#F8F1E3] shadow-2xl md:px-16">

          <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">

            {/* Selected Name */}
            <div>

              <p className="text-[10px] uppercase tracking-[3px] text-[#A9D6E5]">
                Selected Journey
              </p>

              <h3 className="mt-1 text-xl font-bold md:text-2xl">
                {selectedPackage.name}
              </h3>

            </div>


            {/* Details */}
            <div className="flex flex-wrap items-center gap-2">

              <span className="border border-[#F8F1E3]/30 px-3 py-2 text-xs">
                {selectedPackage.days}
              </span>

              <span className="border border-[#F8F1E3]/30 px-3 py-2 text-xs">
                {selectedPackage.members}
              </span>

              <span className="bg-[#D9C7A3] px-4 py-2 text-lg font-bold text-[#082B49]">
                {selectedPackage.budget}
              </span>

              <button
                onClick={() => setSelectedPackage(null)}
                className="px-3 py-2 text-xs underline transition hover:text-[#A9D6E5]"
              >
                Change
              </button>

            </div>

          </div>

        </section>

      )}


      {/* Bottom CTA */}
      <section className="bg-[#082B49] px-6 py-20 text-center md:px-16">

        <p className="text-sm font-semibold uppercase tracking-[4px] text-[#A9D6E5]">
          Explore London
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold text-[#F8F1E3] md:text-6xl">
          Your London
          <span className="block text-[#D9C7A3]">
            adventure starts here.
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#F8F1E3]/65">
          Pick your budget, choose your group size and find a journey
          that makes your London visit unforgettable.
        </p>

        <button className="mt-8 border border-[#F8F1E3] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#F8F1E3] transition hover:bg-[#F8F1E3] hover:text-[#082B49]">
          Start Your Journey
        </button>

      </section>

    </div>
  );
}

export default Packages;


