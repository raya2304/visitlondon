import React from "react";
import data from "./about.json";

function About() {
  return (
    <div className="min-h-screen bg-[#FFF8EA] text-[#082B49]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="relative min-h-[650px] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${data.hero.image})`
        }}
      >
        <div className="absolute inset-0 bg-[#082B49]/50"></div>

        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-center px-6 py-24">

          <div className="max-w-4xl">

            <p className="font-bold tracking-[0.4em] text-[#A9D6E5]">
              {data.hero.badge}
            </p>

            <h1 className="mt-5 text-5xl font-black leading-tight text-white md:text-7xl">
              {data.hero.title}
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-200 md:text-xl">
              {data.hero.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="#website"
                className="rounded-full bg-[#A9D6E5] px-8 py-4 font-black text-[#082B49] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                {data.hero.primaryButton}
              </a>

              <a
                href="#london"
                className="rounded-full border-2 border-white px-8 py-4 font-black text-white transition duration-300 hover:bg-white hover:text-[#082B49]"
              >
                {data.hero.secondaryButton}
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT WEBSITE
      ===================================================== */}

      <section
        id="website"
        className="mx-auto max-w-7xl px-6 py-24"
      >

        <div className="grid items-center gap-14 lg:grid-cols-2">

          <div>

            <p className="font-bold tracking-[0.3em] text-[#145DA0]">
              {data.website.badge}
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              {data.website.title}
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              {data.website.paragraph1}
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              {data.website.paragraph2}
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              {data.website.paragraph3}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {data.website.features.map((item, index) => (

                <div
                  key={index}
                  className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="text-3xl">
                    {item.icon}
                  </div>

                  <h3 className="mt-3 font-black">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>

                </div>

              ))}

            </div>

          </div>


          <div className="relative">

            <img
              src={data.website.image}
              alt={data.website.imageAlt}
              className="h-[560px] w-full rounded-[35px] object-cover shadow-2xl"
            />

            <div className="absolute bottom-7 left-7 right-7 rounded-3xl bg-[#082B49]/95 p-6 text-white">

              <p className="text-2xl font-black">
                {data.website.highlightTitle}
              </p>

              <p className="mt-2 leading-7 text-blue-100">
                {data.website.highlightDescription}
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY THIS WEBSITE
      ===================================================== */}

      <section className="bg-[#DDEEFF] px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="font-bold tracking-[0.3em] text-[#145DA0]">
              {data.whyWebsite.badge}
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              {data.whyWebsite.title}
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600">
              {data.whyWebsite.description}
            </p>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {data.whyWebsite.cards.map((item, index) => (

              <div
                key={index}
                className="rounded-3xl bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#082B49] text-3xl">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-xl font-black">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          LONDON
      ===================================================== */}

      <section
        id="london"
        className="mx-auto max-w-7xl px-6 py-24"
      >

        <div className="grid items-center gap-14 lg:grid-cols-2">

          <div className="relative">

            <img
              src={data.london.image}
              alt={data.london.imageAlt}
              className="h-[550px] w-full rounded-[35px] object-cover shadow-2xl"
            />

            <div className="absolute right-6 top-6 rounded-2xl bg-[#FFF8EA] px-6 py-4 shadow-xl">

              <p className="text-2xl font-black text-[#082B49]">
                {data.london.badgeNumber}
              </p>

              <p className="text-sm font-bold text-[#145DA0]">
                {data.london.badgeText}
              </p>

            </div>

          </div>


          <div>

            <p className="font-bold tracking-[0.3em] text-[#145DA0]">
              {data.london.badge}
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              {data.london.title}
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              {data.london.paragraph1}
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              {data.london.paragraph2}
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              {data.london.paragraph3}
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          LONDON HIGHLIGHTS
      ===================================================== */}

      <section className="bg-[#082B49] px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="font-bold tracking-[0.3em] text-[#A9D6E5]">
              {data.highlights.badge}
            </p>

            <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
              {data.highlights.title}
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-blue-100">
              {data.highlights.description}
            </p>

          </div>


          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-4">

            {data.highlights.cards.map((item, index) => (

              <div
                key={index}
                className="group overflow-hidden rounded-3xl bg-white transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                </div>

                <div className="p-6">

                  <div className="text-3xl">
                    {item.icon}
                  </div>

                  <h3 className="mt-3 text-xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHAT YOU CAN DO
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="text-center">

          <p className="font-bold tracking-[0.3em] text-[#145DA0]">
            {data.explore.badge}
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            {data.explore.title}
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600">
            {data.explore.description}
          </p>

        </div>


        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {data.explore.items.map((item, index) => (

            <div
              key={index}
              className="rounded-3xl border border-blue-100 bg-white p-7 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="text-4xl">
                {item.icon}
              </div>

              <h3 className="mt-5 text-xl font-black">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          TRAVEL EXPERIENCE
      ===================================================== */}

      <section className="bg-[#DDEEFF] px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-8 md:grid-cols-2">

            {data.experience.map((item, index) => (

              <div
                key={index}
                className="group relative overflow-hidden rounded-[35px]"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[450px] w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-[#082B49]/65"></div>

                <div className="absolute bottom-0 left-0 p-8 text-white md:p-10">

                  <p className="font-bold tracking-[0.2em] text-[#A9D6E5]">
                    {item.tag}
                  </p>

                  <h3 className="mt-3 text-3xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-xl leading-7 text-gray-200">
                    {item.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR VALUES
      ===================================================== */}

      <section className="mx-auto max-w-6xl px-6 py-24">

        <div className="text-center">

          <p className="font-bold tracking-[0.3em] text-[#145DA0]">
            {data.values.badge}
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            {data.values.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            {data.values.description}
          </p>

        </div>


        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {data.values.items.map((item, index) => (

            <div
              key={index}
              className="rounded-3xl border border-blue-100 bg-white p-7 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#DDEEFF] text-3xl">
                {item.icon}
              </div>

              <h3 className="mt-5 text-xl font-black">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="bg-[#082B49] px-6 py-24 text-center">

        <div className="mx-auto max-w-3xl">

          <p className="font-bold tracking-[0.3em] text-[#A9D6E5]">
            {data.cta.badge}
          </p>

          <h2 className="mt-5 text-4xl font-black text-white md:text-6xl">
            {data.cta.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-blue-100">
            {data.cta.description}
          </p>

          <a
            href="/packages"
            className="mt-9 inline-block rounded-full bg-[#FFF8EA] px-9 py-4 font-black text-[#082B49] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
          >
            {data.cta.button} →
          </a>

        </div>

      </section>

    </div>
  );
}

export default About;