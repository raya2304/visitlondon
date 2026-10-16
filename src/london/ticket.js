import React from "react";
import data from "./ticket.json";

function BookTicket() {
  return (
    <div className="min-h-screen bg-[#F8F1E3] text-[#082B49]">

      {/* HERO SECTION */}

<section
  className="relative min-h-[650px] overflow-hidden bg-cover bg-center"
  style={{
    backgroundImage: `url(${data.hero.image})`
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-[#082B49]/50"></div>

  <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-center px-6 py-24">

    <div className="max-w-4xl">

      <p className="font-bold tracking-[0.35em] text-[#A9D6E5]">
        {data.hero.badge}
      </p>

      <h1 className="mt-5 text-5xl font-black leading-tight text-white md:text-7xl">
        {data.hero.title}
      </h1>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-200 md:text-xl">
        {data.hero.description}
      </p>

      <div className="mt-9 flex flex-wrap gap-4">

        <a
          href="#booking"
          className="rounded-full bg-[#A9D6E5] px-8 py-4 font-black text-[#082B49] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
        >
          {data.hero.button}
        </a>

        <a
          href="#popular"
          className="rounded-full border-2 border-white px-8 py-4 font-black text-white transition duration-300 hover:bg-white hover:text-[#082B49]"
        >
          Explore Tickets
        </a>

      </div>

    </div>

  </div>

  {/* Booking Quick Links */}
  <div className="absolute bottom-0 left-0 right-0 px-6 pb-8">

    <div className="mx-auto grid max-w-6xl grid-cols-2 overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-4">

      <a
        href="#booking"
        className="flex items-center gap-3 border-b border-slate-200 p-5 transition hover:bg-[#DDEEFF] md:border-b-0 md:border-r"
      >
        <span className="text-3xl">✈️</span>
        <div>
          <p className="font-black text-[#082B49]">Flights</p>
          <p className="text-sm text-slate-500">Book your journey</p>
        </div>
      </a>

      <a
        href="#booking"
        className="flex items-center gap-3 border-b border-slate-200 p-5 transition hover:bg-[#DDEEFF] md:border-b-0 md:border-r"
      >
        <span className="text-3xl">🏨</span>
        <div>
          <p className="font-black text-[#082B49]">Hotels</p>
          <p className="text-sm text-slate-500">Find your stay</p>
        </div>
      </a>

      <a
        href="#booking"
        className="flex items-center gap-3 border-r border-slate-200 p-5 transition hover:bg-[#DDEEFF]"
      >
        <span className="text-3xl">🎟️</span>
        <div>
          <p className="font-black text-[#082B49]">Attractions</p>
          <p className="text-sm text-slate-500">Get entry tickets</p>
        </div>
      </a>

      <a
        href="#booking"
        className="flex items-center gap-3 p-5 transition hover:bg-[#DDEEFF]"
      >
        <span className="text-3xl">🍽️</span>
        <div>
          <p className="font-black text-[#082B49]">Restaurants</p>
          <p className="text-sm text-slate-500">Reserve a table</p>
        </div>
      </a>

    </div>

  </div>

</section>

      {/* =====================================================
          QUICK BOOKING NAV
      ===================================================== */}

      <section className="sticky top-0 z-30 border-b border-[#D9C7A3] bg-[#FFF8E7]/95 px-6 py-4 shadow-md backdrop-blur">

        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-3">

          <a
            href="#flights"
            className="rounded-full bg-[#082B49] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#145374]"
          >
            ✈️ Flights
          </a>

          <a
            href="#hotels"
            className="rounded-full bg-[#D9C7A3] px-5 py-3 text-sm font-bold text-[#082B49] transition hover:bg-[#CBB58A]"
          >
            🏨 Hotels
          </a>

          <a
            href="#shows"
            className="rounded-full bg-[#A9D6E5] px-5 py-3 text-sm font-bold text-[#082B49] transition hover:bg-[#8FC5D8]"
          >
            🎭 Shows
          </a>

          <a
            href="#experiences"
            className="rounded-full bg-[#082B49] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#145374]"
          >
            🎢 Experiences
          </a>

          <a
            href="#attractions"
            className="rounded-full bg-[#D9C7A3] px-5 py-3 text-sm font-bold text-[#082B49] transition hover:bg-[#CBB58A]"
          >
            🏰 Attractions
          </a>

          <a
            href="#daytrips"
            className="rounded-full bg-[#A9D6E5] px-5 py-3 text-sm font-bold text-[#082B49] transition hover:bg-[#8FC5D8]"
          >
            🚆 Day Trips
          </a>

        </div>

      </section>


      {/* =====================================================
          FLIGHTS
      ===================================================== */}

      <section
        id="flights"
        className="px-6 py-24"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 max-w-3xl">

            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#145374]">
              {data.flightSection.smallTitle}
            </p>

            <h2 className="mt-3 text-4xl font-black text-[#082B49] md:text-5xl">
              {data.flightSection.title}
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#5B7180]">
              {data.flightSection.description}
            </p>

          </div>


          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {data.flights.map((flight) => (

              <div
                key={flight.id}
                className="group rounded-3xl border border-[#D9C7A3] bg-white p-7 shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="flex items-center justify-between">

                  <span className="rounded-full bg-[#A9D6E5] px-4 py-2 text-xs font-black text-[#082B49]">
                    {flight.tag}
                  </span>

                  <span className="text-2xl">
                    ✈️
                  </span>

                </div>


                <div className="mt-7">

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-2xl font-black text-[#082B49]">
                        {flight.from}
                      </p>

                      <p className="mt-1 text-xs text-[#71838E]">
                        Departure
                      </p>
                    </div>

                    <span className="text-2xl text-[#D9C7A3]">
                      →
                    </span>

                    <div className="text-right">
                      <p className="text-2xl font-black text-[#082B49]">
                        {flight.to}
                      </p>

                      <p className="mt-1 text-xs text-[#71838E]">
                        Arrival
                      </p>
                    </div>

                  </div>


                  <p className="mt-6 text-sm font-semibold text-[#145374]">
                    {flight.airport}
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-3">

                    <div className="rounded-2xl bg-[#F8F1E3] p-4">
                      <p className="text-xs text-[#71838E]">
                        Airline
                      </p>
                      <p className="mt-1 font-bold">
                        {flight.airline}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#F8F1E3] p-4">
                      <p className="text-xs text-[#71838E]">
                        Duration
                      </p>
                      <p className="mt-1 font-bold">
                        {flight.duration}
                      </p>
                    </div>

                  </div>


                  <div className="mt-5 flex items-center justify-between">

                    <div>

                      <p className="text-xs text-[#71838E]">
                        Starting from
                      </p>

                      <p className="text-3xl font-black text-[#082B49]">
                        {flight.price}
                      </p>

                    </div>

                    <button className="rounded-full bg-[#082B49] px-5 py-3 font-bold text-white transition hover:bg-[#145374]">
                      Book Flight
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          HOTELS
      ===================================================== */}

      <section
        id="hotels"
        className="bg-[#082B49] px-6 py-24 text-white"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#D9C7A3]">
              {data.hotelSection.smallTitle}
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              {data.hotelSection.title}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#C9DDE6]">
              {data.hotelSection.description}
            </p>

          </div>


          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {data.hotels.map((hotel) => (

              <div
                key={hotel.id}
                className="group overflow-hidden rounded-3xl border border-[#31556D] bg-[#103B59] shadow-xl transition duration-500 hover:-translate-y-2 hover:border-[#A9D6E5]"
              >

                <div className="relative h-56 overflow-hidden">

                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#082B49] via-transparent to-transparent"></div>

                  <span className="absolute bottom-4 left-4 rounded-full bg-[#FFF8E7] px-4 py-2 text-xs font-black text-[#082B49]">
                    ★ {hotel.rating}
                  </span>

                </div>


                <div className="p-6">

                  <p className="text-sm font-bold text-[#A9D6E5]">
                    {hotel.location}
                  </p>

                  <h3 className="mt-2 text-2xl font-black text-[#FFF8E7]">
                    {hotel.name}
                  </h3>

                  <p className="mt-2 text-sm text-[#C9DDE6]">
                    {hotel.room}
                  </p>

                  <p className="mt-4 leading-7 text-[#C9DDE6]">
                    {hotel.description}
                  </p>


                  <div className="mt-6 flex items-end justify-between">

                    <div>

                      <p className="text-xs text-[#A9D6E5]">
                        Starting from
                      </p>

                      <span className="text-3xl font-black text-[#FFF8E7]">
                        {hotel.price}
                      </span>

                      <span className="ml-2 text-sm text-[#A9D6E5]">
                        {hotel.period}
                      </span>

                    </div>

                    <button className="rounded-full bg-[#D9C7A3] px-5 py-3 font-bold text-[#082B49] transition hover:bg-[#FFF8E7]">
                      View Room
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          SHOWS
      ===================================================== */}

      <section
        id="shows"
        className="px-6 py-24"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-14">

            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#145374]">
              {data.theatreSection.smallTitle}
            </p>

            <h2 className="mt-3 text-4xl font-black text-[#082B49] md:text-5xl">
              {data.theatreSection.title}
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-[#5B7180]">
              {data.theatreSection.description}
            </p>

          </div>


          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">

            {data.shows.map((show) => (

              <div
                key={show.id}
                className="group overflow-hidden rounded-3xl border border-[#D9C7A3] bg-white shadow-lg transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >

                <div className="relative h-64 overflow-hidden">

                  <img
                    src={show.image}
                    alt={show.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#082B49]/90 via-transparent to-transparent"></div>

                  <span className="absolute bottom-4 left-4 rounded-full bg-[#D9C7A3] px-4 py-2 text-xs font-black text-[#082B49]">
                    {show.category}
                  </span>

                </div>


                <div className="p-6">

                  <h3 className="text-xl font-black text-[#082B49]">
                    {show.title}
                  </h3>

                  <p className="mt-2 text-sm font-bold text-[#145374]">
                    {show.venue}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-[#5B7180]">
                    {show.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between">

                    <div>

                      <p className="text-xs text-[#71838E]">
                        {show.duration}
                      </p>

                      <p className="font-black text-[#082B49]">
                        {show.price}
                      </p>

                    </div>

                    <button className="rounded-full bg-[#082B49] px-4 py-2 text-sm font-bold text-white hover:bg-[#145374]">
                      Book
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          EXPERIENCES
      ===================================================== */}

      <section
        id="experiences"
        className="bg-[#EAF6FA] px-6 py-24"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#145374]">
              {data.experienceSection.smallTitle}
            </p>

            <h2 className="mt-3 text-4xl font-black text-[#082B49] md:text-5xl">
              {data.experienceSection.title}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#5B7180]">
              {data.experienceSection.description}
            </p>

          </div>


          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

            {data.experiences.map((experience) => (

              <div
                key={experience.id}
                className="group overflow-hidden rounded-3xl border border-[#A9D6E5] bg-white shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="relative h-56 overflow-hidden">

                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#082B49]/80 via-transparent to-transparent"></div>

                  <span className="absolute bottom-4 left-4 rounded-full bg-[#FFF8E7] px-4 py-2 text-xs font-black text-[#082B49]">
                    {experience.category}
                  </span>

                </div>


                <div className="p-6">

                  <h3 className="text-2xl font-black text-[#082B49]">
                    {experience.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[#5B7180]">
                    {experience.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between">

                    <div>

                      <p className="text-xs text-[#71838E]">
                        {experience.duration}
                      </p>

                      <p className="mt-1 text-xl font-black text-[#145374]">
                        {experience.price}
                      </p>

                    </div>

                    <button className="rounded-full bg-[#D9C7A3] px-5 py-3 font-bold text-[#082B49] hover:bg-[#CBB58A]">
                      Book Now
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          ATTRACTIONS
      ===================================================== */}

      <section
        id="attractions"
        className="px-6 py-24"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-14">

            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#145374]">
              {data.attractionSection.smallTitle}
            </p>

            <h2 className="mt-3 text-4xl font-black text-[#082B49] md:text-5xl">
              {data.attractionSection.title}
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-[#5B7180]">
              {data.attractionSection.description}
            </p>

          </div>


          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">

            {data.attractions.map((attraction) => (

              <div
                key={attraction.id}
                className="group overflow-hidden rounded-3xl border border-[#D9C7A3] bg-white shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="relative h-52 overflow-hidden">

                  <img
                    src={attraction.image}
                    alt={attraction.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                </div>


                <div className="p-6">

                  <span className="rounded-full bg-[#A9D6E5] px-3 py-2 text-xs font-bold text-[#082B49]">
                    {attraction.category}
                  </span>

                  <h3 className="mt-5 text-xl font-black text-[#082B49]">
                    {attraction.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[#5B7180]">
                    {attraction.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between">

                    <span className="font-black text-[#145374]">
                      {attraction.price}
                    </span>

                    <button className="rounded-full bg-[#082B49] px-4 py-2 text-sm font-bold text-white hover:bg-[#145374]">
                      Book
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          DAY TRIPS
      ===================================================== */}

      <section
        id="daytrips"
        className="bg-[#082B49] px-6 py-24 text-white"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#D9C7A3]">
              {data.dayTripSection.smallTitle}
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              {data.dayTripSection.title}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#C9DDE6]">
              {data.dayTripSection.description}
            </p>

          </div>


          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">

            {data.dayTrips.map((trip) => (

              <div
                key={trip.id}
                className="group overflow-hidden rounded-3xl border border-[#31556D] bg-[#103B59] shadow-xl transition duration-500 hover:-translate-y-2 hover:border-[#A9D6E5]"
              >

                <div className="relative h-52 overflow-hidden">

                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                </div>


                <div className="p-6">

                  <p className="text-sm font-bold text-[#A9D6E5]">
                    {trip.location}
                  </p>

                  <h3 className="mt-2 text-xl font-black text-[#FFF8E7]">
                    {trip.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#C9DDE6]">
                    {trip.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between">

                    <div>

                      <p className="text-xs text-[#A9D6E5]">
                        {trip.duration}
                      </p>

                      <p className="mt-1 text-xl font-black">
                        {trip.price}
                      </p>

                    </div>

          
                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY BOOK
      ===================================================== */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#145374]">
              WHY BOOK WITH US
            </p>

            <h2 className="mt-3 text-4xl font-black text-[#082B49] md:text-5xl">
              Everything You Need
            </h2>

          </div>


          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {data.benefits.map((benefit) => (

              <div
                key={benefit.number}
                className="group rounded-3xl border border-[#D9C7A3] bg-white p-7 shadow-lg transition duration-500 hover:-translate-y-2 hover:bg-[#082B49] hover:text-white"
              >

                <span className="text-5xl font-black text-[#A9D6E5]">
                  {benefit.number}
                </span>

                <h3 className="mt-7 text-xl font-black text-[#082B49] group-hover:text-[#FFF8E7]">
                  {benefit.title}
                </h3>

                <p className="mt-4 leading-7 text-[#5B7180] group-hover:text-[#C9DDE6]">
                  {benefit.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


     
    </div>
  );
}

export default BookTicket;