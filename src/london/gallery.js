
import React from "react";
import galleryData from "./gallery.json";

function Gallery() {
  return (
    <div className="min-h-screen bg-[#F8F1E3] text-[#082B49]">

      {/* HERO SECTION */}
      <section
        className="relative min-h-[620px] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${galleryData.hero.image})`
        }}
      >
        <div className="absolute inset-0 bg-[#082B49]/50"></div>

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-24">
          <div className="max-w-4xl">

            <p className="font-bold tracking-[0.4em] text-[#A9D6E5]">
              {galleryData.hero.badge}
            </p>

            <h1 className="mt-5 text-5xl font-black leading-tight text-white md:text-7xl">
              {galleryData.hero.title}
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-200 md:text-xl">
              {galleryData.hero.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="#food"
                className="rounded-full bg-[#A9D6E5] px-8 py-4 font-black text-[#082B49] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                Explore Gallery
              </a>

              <a
                href="/sights"
                className="rounded-full border-2 border-white px-8 py-4 font-black text-white transition duration-300 hover:bg-white hover:text-[#082B49]"
              >
                Discover London
              </a>

            </div>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <div className="mx-auto max-w-7xl px-6 pb-8">

            <div className="flex flex-wrap items-center gap-4">

              <div className="rounded-full bg-white/95 px-6 py-3 font-bold text-[#082B49] shadow-xl">
                📸 Iconic Landmarks
              </div>

              <div className="rounded-full bg-white/95 px-6 py-3 font-bold text-[#082B49] shadow-xl">
                🏙️ London Streets
              </div>

              <div className="rounded-full bg-white/95 px-6 py-3 font-bold text-[#082B49] shadow-xl">
                🌉 Beautiful Views
              </div>

            </div>

          </div>
        </div>

      </section>

      {/* FOOD SECTION */}
      <section id="food" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-[#A9D6E5] px-5 py-2 text-sm font-bold uppercase tracking-widest text-[#082B49]">
              Taste London
            </span>

            <h2 className="mt-5 text-4xl font-extrabold md:text-5xl">
              London Food
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[#456276]">
              From traditional British classics to colourful street food,
              discover the flavours that make London special.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {galleryData.food.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-3xl border border-[#D9C7A3] bg-white shadow-lg transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >

                <div className="relative h-64 overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#082B49]/80 via-transparent to-transparent"></div>

                  <span className="absolute bottom-4 left-4 rounded-full bg-[#FFF8E7] px-4 py-2 text-sm font-bold text-[#082B49]">
                    FOOD
                  </span>

                </div>

                <div className="p-6">

                  <h3 className="text-2xl font-bold text-[#082B49]">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#5B7180]">
                    {item.description}
                  </p>

                  

                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* HOTELS SECTION */}
      <section
        id="hotels"
        className="bg-[#082B49] px-6 py-20 text-white"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">

            <span className="inline-block rounded-full bg-[#D9C7A3] px-5 py-2 text-sm font-bold uppercase tracking-widest text-[#082B49]">
              Stay in Style
            </span>

            <h2 className="mt-5 text-4xl font-extrabold md:text-5xl">
              London Hotels
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#C9DDE6]">
              From luxurious stays to charming boutique hotels, find the
              perfect place to relax after exploring the city.
            </p>

          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {galleryData.hotels.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-3xl border border-[#31556D] bg-[#103B59] shadow-xl transition duration-500 hover:-translate-y-3 hover:border-[#A9D6E5] hover:shadow-2xl"
              >

                <div className="relative h-64 overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#082B49] via-transparent to-transparent"></div>

                  <span className="absolute bottom-4 left-4 rounded-full bg-[#D9C7A3] px-4 py-2 text-sm font-bold text-[#082B49]">
                    STAY
                  </span>

                </div>

                <div className="p-6">

                  <h3 className="text-2xl font-bold text-[#FFF8E7]">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#C9DDE6]">
                    {item.description}
                  </p>

                  

                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* SHOPPING SECTION */}
      <section id="shopping" className="px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">

            <span className="inline-block rounded-full bg-[#D9C7A3] px-5 py-2 text-sm font-bold uppercase tracking-widest text-[#082B49]">
              Shop London
            </span>

            <h2 className="mt-5 text-4xl font-extrabold text-[#082B49] md:text-5xl">
              London Shopping
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[#456276]">
              Explore iconic shopping streets, luxury department stores,
              colourful markets and unique London finds.
            </p>

          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {galleryData.shopping.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-3xl border border-[#A9D6E5] bg-[#EAF6FA] shadow-lg transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >

                <div className="relative h-64 overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#082B49]/80 via-transparent to-transparent"></div>

                  <span className="absolute bottom-4 left-4 rounded-full bg-[#FFF8E7] px-4 py-2 text-sm font-bold text-[#082B49]">
                    SHOPPING
                  </span>

                </div>

                <div className="p-6">

                  <h3 className="text-2xl font-bold text-[#082B49]">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#5B7180]">
                    {item.description}
                  </p>


                </div>

              </div>
            ))}

          </div>
        </div>

      </section>

      {/* BOTTOM CTA */}
      <section className="px-6 pb-20">

        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#145374] px-8 py-16 text-center shadow-2xl">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#A9D6E5]">
            Your London Adventure
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-[#FFF8E7] md:text-5xl">
            Eat. Stay. Shop. Explore.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#D8EAF0]">
            Discover London's food, hotels and shopping experiences
            and create memories that last a lifetime.
          </p>

          

        </div>

      </section>

    </div>
  );
}

export default Gallery;

