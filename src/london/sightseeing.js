import React, { useState } from "react";
import sightseeingData from "./sightseeing.json";

function Sightseeing() {
  /* =====================================================
     PLACE FINDER API STATES
  ===================================================== */

  const [place, setPlace] = useState("");
  const [location, setLocation] = useState(null);
  const [nearbyPlaces, setNearbyPlaces] = useState([]);
  const [category, setCategory] = useState("tourism");
  const [loading, setLoading] = useState(false);
  const [nearbyLoading, setNearbyLoading] = useState(false);
  const [error, setError] = useState("");

  /* =====================================================
     GEOCODING API
     OpenStreetMap Nominatim
  ===================================================== */

  const searchPlace = async () => {
    if (!place.trim()) {
      setError("Please enter a London place.");
      return;
    }

    setLoading(true);
    setError("");
    setLocation(null);
    setNearbyPlaces([]);

    try {
      const query = `${place.trim()}, London, United Kingdom`;

      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&addressdetails=1&q=${encodeURIComponent(
          query
        )}`
      );

      if (!response.ok) {
        throw new Error("Unable to connect to the geocoding service.");
      }

      const results = await response.json();

      if (!results.length) {
        setError("Place not found. Try another London landmark.");
        return;
      }

      const result = results[0];

      const foundLocation = {
        name: result.display_name,
        latitude: Number(result.lat),
        longitude: Number(result.lon),
      };

      setLocation(foundLocation);

      await findNearbyPlaces(
        foundLocation.latitude,
        foundLocation.longitude,
        category
      );
    } catch (err) {
      console.error(err);
      setError("Something went wrong while searching. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  /* =====================================================
     NEARBY PLACES API
     OpenStreetMap Overpass
  ===================================================== */

  const findNearbyPlaces = async (latitude, longitude, selectedCategory) => {
    setNearbyLoading(true);
    setNearbyPlaces([]);
    setError("");

    try {
      let filter = "";

      if (selectedCategory === "tourism") {
        filter = `
          nwr(around:3000,${latitude},${longitude})["tourism"];
        `;
      }

      if (selectedCategory === "restaurant") {
        filter = `
          nwr(around:3000,${latitude},${longitude})["amenity"="restaurant"];
        `;
      }

      if (selectedCategory === "cafe") {
        filter = `
          nwr(around:3000,${latitude},${longitude})["amenity"="cafe"];
        `;
      }

      if (selectedCategory === "museum") {
        filter = `
          nwr(around:3000,${latitude},${longitude})["tourism"="museum"];
        `;
      }

      if (selectedCategory === "hotel") {
        filter = `
          nwr(around:3000,${latitude},${longitude})["tourism"="hotel"];
        `;
      }

      if (selectedCategory === "park") {
        filter = `
          nwr(around:3000,${latitude},${longitude})["leisure"="park"];
        `;
      }

      const query = `
        [out:json][timeout:25];

        (
          ${filter}
        );

        out center tags;
      `;

      const response = await fetch(
        `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(
          query
        )}`
      );

      if (!response.ok) {
        throw new Error("Nearby places service is unavailable.");
      }

      const data = await response.json();

      const results = data.elements
        .filter((item) => item.tags && item.tags.name)
        .map((item) => {
          const lat = item.lat || item.center?.lat;
          const lon = item.lon || item.center?.lon;

          return {
            id: item.id,
            name: item.tags.name,
            latitude: lat,
            longitude: lon,
            type:
              item.tags.tourism ||
              item.tags.amenity ||
              item.tags.leisure ||
              "Place",
            address:
              item.tags["addr:street"] ||
              item.tags["addr:city"] ||
              item.tags["addr:postcode"] ||
              "London",
            website: item.tags.website || "",
          };
        })
        .filter(
          (item) =>
            item.latitude !== undefined && item.longitude !== undefined
        )
        .slice(0, 12);

      setNearbyPlaces(results);
    } catch (err) {
      console.error(err);
      setError(
        "Could not load nearby places. Please try again after a few seconds."
      );
    } finally {
      setNearbyLoading(false);
    }
  };

  /* =====================================================
     CATEGORY CHANGE
  ===================================================== */

  const changeCategory = async (newCategory) => {
    setCategory(newCategory);

    if (location) {
      await findNearbyPlaces(
        location.latitude,
        location.longitude,
        newCategory
      );
    }
  };

  /* =====================================================
     DISTANCE CALCULATION
  ===================================================== */

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const earthRadius = 6371;

    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return earthRadius * c;
  };

  /* =====================================================
     PLACE ICON
  ===================================================== */

  const getPlaceIcon = (type) => {
    if (type === "museum") return "🏛️";
    if (type === "restaurant") return "🍽️";
    if (type === "cafe") return "☕";
    if (type === "hotel") return "🏨";
    if (type === "park") return "🌳";
    if (type === "attraction") return "🎟️";

    return "📍";
  };

  return (
    <div className="min-h-screen bg-[#F8F1E3] text-[#082B49]">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section
        className="relative min-h-[600px] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${sightseeingData.hero.image})`,
        }}
      >

        <div className="absolute inset-0 bg-[#082B49]/50"></div>

        <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl items-center px-6 py-24">

          <div className="max-w-4xl">

            <p className="font-bold tracking-[0.4em] text-[#A9D6E5]">
              {sightseeingData.hero.badge}
            </p>

            <h1 className="mt-5 text-5xl font-black leading-tight text-white md:text-7xl">
              {sightseeingData.hero.title}
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-200 md:text-xl">
              {sightseeingData.hero.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="#sights"
                className="rounded-full bg-[#A9D6E5] px-8 py-4 font-bold text-[#082B49] transition hover:bg-white hover:shadow-xl"
              >
                Explore Sights
              </a>

              <a
                href="#place-finder"
                className="rounded-full border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#082B49]"
              >
                Find Nearby Places
              </a>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          LONDON PLACE FINDER
      ===================================================== */}

      <section
        id="place-finder"
        className="relative overflow-hidden bg-[#EAF6FA] px-6 py-24"
      >

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[30px] border-[#A9D6E5]/30"></div>

        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full border-[30px] border-[#D9C7A3]/30"></div>

        <div className="relative z-10 mx-auto max-w-7xl">

          {/* HEADER */}

          <div className="mx-auto mb-12 max-w-3xl text-center">

            <span className="inline-block rounded-full bg-[#082B49] px-5 py-2 text-sm font-bold uppercase tracking-widest text-white">
              Explore London
            </span>

            <h2 className="mt-5 text-4xl font-black text-[#082B49] md:text-5xl">
              Find Places Near You
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#5B7180]">
              Search for a London landmark and discover attractions,
              museums, restaurants, cafés, hotels and parks nearby.
            </p>

          </div>


          {/* SEARCH BOX */}

          <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#A9D6E5] bg-white p-5 shadow-2xl md:p-7">

            <div className="flex flex-col gap-4 md:flex-row">

              <div className="relative flex-1">

                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl">
                  🔍
                </span>

                <input
                  type="text"
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      searchPlace();
                    }
                  }}
                  placeholder="Search London place e.g. Tower Bridge"
                  className="w-full rounded-2xl border-2 border-[#D9C7A3] bg-[#F8F1E3] py-4 pl-14 pr-5 font-semibold text-[#082B49] outline-none transition focus:border-[#145374] focus:ring-4 focus:ring-[#A9D6E5]/40"
                />

              </div>

              <button
                onClick={searchPlace}
                disabled={loading}
                className="rounded-2xl bg-[#082B49] px-8 py-4 font-black text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#145374] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Searching..." : "Search Place"}
              </button>

            </div>


            {/* EXAMPLES */}

            <div className="mt-5 flex flex-wrap items-center gap-2">

              <span className="text-sm font-bold text-[#5B7180]">
                Try:
              </span>

              {[
                "Tower Bridge",
                "Big Ben",
                "Hyde Park",
                "British Museum",
              ].map((item) => (

                <button
                  key={item}
                  onClick={() => {
                    setPlace(item);
                  }}
                  className="rounded-full bg-[#EAF6FA] px-4 py-2 text-sm font-bold text-[#082B49] transition hover:bg-[#A9D6E5]"
                >
                  {item}
                </button>

              ))}

            </div>

          </div>


          {/* ERROR */}

          {error && (

            <div className="mx-auto mt-7 max-w-4xl rounded-2xl border border-red-200 bg-red-50 p-5 text-center font-semibold text-red-700">
              {error}
            </div>

          )}


          {/* =================================================
              LOCATION RESULT
          ================================================= */}

          {location && (

            <div className="mx-auto mt-10 max-w-5xl">

              <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl">

                <div className="bg-[#082B49] px-7 py-5 text-white">

                  <div className="flex flex-wrap items-center justify-between gap-4">

                    <div>

                      <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#A9D6E5]">
                        Location Found
                      </p>

                      <h3 className="mt-1 text-2xl font-black">
                        📍 {place}
                      </h3>

                    </div>

                    <span className="rounded-full bg-[#A9D6E5] px-4 py-2 text-sm font-black text-[#082B49]">
                      London
                    </span>

                  </div>

                </div>


                <div className="grid gap-6 p-7 md:grid-cols-3">

                  <div className="rounded-2xl bg-[#F8F1E3] p-5">

                    <p className="text-xs font-black uppercase tracking-wider text-[#5B7180]">
                      Address
                    </p>

                    <p className="mt-2 font-bold leading-6 text-[#082B49]">
                      {location.name}
                    </p>

                  </div>


                  <div className="rounded-2xl bg-[#EAF6FA] p-5">

                    <p className="text-xs font-black uppercase tracking-wider text-[#5B7180]">
                      Latitude
                    </p>

                    <p className="mt-2 text-xl font-black text-[#082B49]">
                      {location.latitude.toFixed(6)}
                    </p>

                  </div>


                  <div className="rounded-2xl bg-[#EAF6FA] p-5">

                    <p className="text-xs font-black uppercase tracking-wider text-[#5B7180]">
                      Longitude
                    </p>

                    <p className="mt-2 text-xl font-black text-[#082B49]">
                      {location.longitude.toFixed(6)}
                    </p>

                  </div>

                </div>


                <div className="px-7 pb-7">

                  <a
                    href={`https://www.openstreetmap.org/?mlat=${location.latitude}&mlon=${location.longitude}#map=17/${location.latitude}/${location.longitude}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#D9C7A3] px-6 py-3 font-black text-[#082B49] transition hover:bg-[#CBB58A]"
                  >
                    🗺️ View on OpenStreetMap
                  </a>

                </div>

              </div>

            </div>

          )}


          {/* =================================================
              CATEGORY FILTER
          ================================================= */}

          {location && (

            <div className="mx-auto mt-12 max-w-6xl">

              <div className="mb-7 flex flex-col items-center justify-between gap-5 md:flex-row">

                <div>

                  <p className="text-sm font-black uppercase tracking-[0.25em] text-[#145374]">
                    Nearby Explorer
                  </p>

                  <h3 className="mt-2 text-3xl font-black text-[#082B49]">
                    Places Around {place}
                  </h3>

                </div>

                <div className="rounded-full bg-white px-5 py-3 text-sm font-bold text-[#5B7180] shadow-md">
                  Within 3 km
                </div>

              </div>


              <div className="flex flex-wrap gap-3">

                <button
                  onClick={() => changeCategory("tourism")}
                  className={`rounded-full px-5 py-3 font-bold transition ${
                    category === "tourism"
                      ? "bg-[#082B49] text-white shadow-lg"
                      : "bg-white text-[#082B49] hover:bg-[#A9D6E5]"
                  }`}
                >
                  🏰 Attractions
                </button>

                <button
                  onClick={() => changeCategory("museum")}
                  className={`rounded-full px-5 py-3 font-bold transition ${
                    category === "museum"
                      ? "bg-[#082B49] text-white shadow-lg"
                      : "bg-white text-[#082B49] hover:bg-[#A9D6E5]"
                  }`}
                >
                  🏛️ Museums
                </button>

                <button
                  onClick={() => changeCategory("restaurant")}
                  className={`rounded-full px-5 py-3 font-bold transition ${
                    category === "restaurant"
                      ? "bg-[#082B49] text-white shadow-lg"
                      : "bg-white text-[#082B49] hover:bg-[#A9D6E5]"
                  }`}
                >
                  🍽️ Restaurants
                </button>

                <button
                  onClick={() => changeCategory("cafe")}
                  className={`rounded-full px-5 py-3 font-bold transition ${
                    category === "cafe"
                      ? "bg-[#082B49] text-white shadow-lg"
                      : "bg-white text-[#082B49] hover:bg-[#A9D6E5]"
                  }`}
                >
                  ☕ Cafés
                </button>

                <button
                  onClick={() => changeCategory("hotel")}
                  className={`rounded-full px-5 py-3 font-bold transition ${
                    category === "hotel"
                      ? "bg-[#082B49] text-white shadow-lg"
                      : "bg-white text-[#082B49] hover:bg-[#A9D6E5]"
                  }`}
                >
                  🏨 Hotels
                </button>

                <button
                  onClick={() => changeCategory("park")}
                  className={`rounded-full px-5 py-3 font-bold transition ${
                    category === "park"
                      ? "bg-[#082B49] text-white shadow-lg"
                      : "bg-white text-[#082B49] hover:bg-[#A9D6E5]"
                  }`}
                >
                  🌳 Parks
                </button>

              </div>

            </div>

          )}


          {/* =================================================
              NEARBY LOADING
          ================================================= */}

          {nearbyLoading && (

            <div className="mx-auto mt-12 max-w-4xl rounded-3xl bg-white p-10 text-center shadow-xl">

              <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#D9C7A3] border-t-[#082B49]"></div>

              <p className="mt-5 text-lg font-bold text-[#082B49]">
                Finding nearby places...
              </p>

              <p className="mt-2 text-sm text-[#5B7180]">
                Searching OpenStreetMap for places around your location.
              </p>

            </div>

          )}


          {/* =================================================
              NEARBY RESULTS
          ================================================= */}

          {!nearbyLoading && location && nearbyPlaces.length > 0 && (

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {nearbyPlaces.map((nearby) => {

                const distance = calculateDistance(
                  location.latitude,
                  location.longitude,
                  nearby.latitude,
                  nearby.longitude
                );

                return (

                  <div
                    key={`${nearby.id}-${nearby.name}`}
                    className="group overflow-hidden rounded-3xl border border-[#D9C7A3] bg-white p-6 shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
                  >

                    <div className="flex items-start justify-between gap-4">

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF6FA] text-3xl transition group-hover:bg-[#A9D6E5]">
                        {getPlaceIcon(nearby.type)}
                      </div>

                      <span className="rounded-full bg-[#F8F1E3] px-3 py-2 text-xs font-black text-[#145374]">
                        {distance.toFixed(1)} km
                      </span>

                    </div>


                    <h4 className="mt-6 text-xl font-black text-[#082B49]">
                      {nearby.name}
                    </h4>


                    <p className="mt-2 text-sm font-semibold capitalize text-[#145374]">
                      {nearby.type.replace("_", " ")}
                    </p>


                    <p className="mt-4 text-sm leading-6 text-[#5B7180]">
                      {nearby.address}
                    </p>


                    <div className="mt-6 flex items-center justify-between">

                      <a
                        href={`https://www.openstreetmap.org/?mlat=${nearby.latitude}&mlon=${nearby.longitude}#map=17/${nearby.latitude}/${nearby.longitude}`}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-[#082B49] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#145374]"
                      >
                        View Map
                      </a>

                      {nearby.website && (

                        <a
                          href={
                            nearby.website.startsWith("http")
                              ? nearby.website
                              : `https://${nearby.website}`
                          }
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-black text-[#145374] hover:underline"
                        >
                          Website →
                        </a>

                      )}

                    </div>

                  </div>

                );
              })}

            </div>

          )}


          {/* =================================================
              NO RESULTS
          ================================================= */}

          {!nearbyLoading &&
            location &&
            nearbyPlaces.length === 0 &&
            !error && (

              <div className="mx-auto mt-10 max-w-3xl rounded-3xl bg-white p-10 text-center shadow-xl">

                <div className="text-5xl">
                  🔎
                </div>

                <h3 className="mt-5 text-2xl font-black text-[#082B49]">
                  No nearby places found
                </h3>

                <p className="mt-3 text-[#5B7180]">
                  Try another category or search for another London
                  landmark.
                </p>

              </div>

            )}


          {/* =================================================
              API ATTRIBUTION
          ================================================= */}

          <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-[#D9C7A3] bg-[#FFF8E7] p-5 text-center text-sm leading-6 text-[#5B7180]">

            <p>
              Location data provided by{" "}
              <a
                href="https://www.openstreetmap.org/"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-[#082B49] hover:underline"
              >
                OpenStreetMap
              </a>{" "}
              contributors. Geocoding uses Nominatim and nearby places use
              the OpenStreetMap Overpass API.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          FAMOUS LONDON SIGHTS
      ===================================================== */}

      <section id="sights" className="px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="mb-16 text-center">

            <span className="inline-block rounded-full bg-[#A9D6E5] px-5 py-2 text-sm font-bold uppercase tracking-widest text-[#082B49]">
              Iconic London
            </span>

            <h2 className="mt-5 text-4xl font-extrabold text-[#082B49] md:text-5xl">
              Famous London Sights
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[#5B7180]">
              Discover some of the most famous landmarks and historic places
              that make London special.
            </p>

          </div>


          <div className="space-y-16">

            {sightseeingData.sights.map((sight, index) => (

              <div
                key={sight.id}
                className="grid overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-2"
              >

                <div
                  className={`relative min-h-[350px] overflow-hidden ${
                    index % 2 === 1 ? "md:order-2" : "md:order-1"
                  }`}
                >

                  <img
                    src={sight.image}
                    alt={sight.name}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />

                </div>


                <div
                  className={`flex flex-col justify-center p-8 md:p-12 ${
                    index % 2 === 1 ? "md:order-1" : "md:order-2"
                  }`}
                >

                  <span className="mb-4 w-fit rounded-full bg-[#A9D6E5] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#082B49]">
                    London Landmark
                  </span>

                  <h3 className="text-3xl font-extrabold text-[#082B49] md:text-4xl">
                    {sight.name}
                  </h3>

                  <p className="mt-5 leading-8 text-[#5B7180]">
                    {sight.description}
                  </p>


                  <div className="mt-7 grid gap-4 sm:grid-cols-2">

                    <div className="rounded-2xl bg-[#F8F1E3] p-5">

                      <p className="text-xs font-bold uppercase tracking-wider text-[#456276]">
                        Best Time
                      </p>

                      <p className="mt-2 font-bold text-[#082B49]">
                        {sight.bestTime}
                      </p>

                    </div>


                    <div className="rounded-2xl bg-[#EAF6FA] p-5">

                      <p className="text-xs font-bold uppercase tracking-wider text-[#456276]">
                        Travel Tip
                      </p>

                      <p className="mt-2 text-sm leading-6 text-[#082B49]">
                        {sight.tip}
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
          ADVENTURES SECTION
      ===================================================== */}

      <section
        id="adventures"
        className="bg-[#082B49] px-6 py-20 text-white"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">

            <span className="inline-block rounded-full bg-[#D9C7A3] px-5 py-2 text-sm font-bold uppercase tracking-widest text-[#082B49]">
              Adventure
            </span>

            <h2 className="mt-5 text-4xl font-extrabold md:text-5xl">
              London Adventures
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[#C9DDE6]">
              Add excitement to your London trip with thrilling experiences
              and unforgettable adventures.
            </p>

          </div>


          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {sightseeingData.adventures.map((adventure) => (

              <div
                key={adventure.id}
                className="group overflow-hidden rounded-3xl bg-[#103B59] shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="relative h-64 overflow-hidden">

                  <img
                    src={adventure.image}
                    alt={adventure.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                </div>


                <div className="p-6">

                  <div className="flex items-center justify-between gap-3">

                    <h3 className="text-2xl font-bold">
                      {adventure.title}
                    </h3>

                    <span className="whitespace-nowrap rounded-full bg-[#A9D6E5] px-3 py-1 text-sm font-bold text-[#082B49]">
                      {adventure.price}
                    </span>

                  </div>

                  <p className="mt-4 leading-7 text-[#C9DDE6]">
                    {adventure.description}
                  </p>

                  <div className="mt-5 space-y-2 text-sm text-[#D9EAF0]">

                    <p>
                      <strong>Location:</strong>{" "}
                      {adventure.location}
                    </p>

                    <p>
                      <strong>Duration:</strong>{" "}
                      {adventure.duration}
                    </p>

                    <p>
                      <strong>Best Time:</strong>{" "}
                      {adventure.bestTime}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          NIGHTLIFE SECTION
      ===================================================== */}

      <section id="nightlife" className="px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">

            <span className="inline-block rounded-full bg-[#D9C7A3] px-5 py-2 text-sm font-bold uppercase tracking-widest">
              After Dark
            </span>

            <h2 className="mt-5 text-4xl font-extrabold md:text-5xl">
              London Nightlife
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[#5B7180]">
              Experience London after sunset with theatre, riverside views,
              music, restaurants and vibrant evening destinations.
            </p>

          </div>


          <div className="grid gap-8 md:grid-cols-2">

            {sightseeingData.nightlife.map((night) => (

              <div
                key={night.id}
                className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="grid md:grid-cols-2">

                  <div className="h-72 overflow-hidden">

                    <img
                      src={night.image}
                      alt={night.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                  </div>


                  <div className="p-6">

                    <span className="rounded-full bg-[#A9D6E5] px-3 py-1 text-xs font-bold text-[#082B49]">
                      {night.highlight}
                    </span>

                    <h3 className="mt-5 text-2xl font-bold">
                      {night.title}
                    </h3>

                    <p className="mt-3 leading-7 text-[#5B7180]">
                      {night.description}
                    </p>

                    <div className="mt-5 space-y-2 text-sm">

                      <p>
                        <strong>Location:</strong>{" "}
                        {night.location}
                      </p>

                      <p>
                        <strong>Time:</strong>{" "}
                        {night.time}
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
          CTA
      ===================================================== */}

      <section className="bg-[#A9D6E5] px-6 py-20 text-center">

        <h2 className="text-4xl font-extrabold text-[#082B49]">
          Ready to Explore London?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#082B49]">
          Discover London's famous sights, exciting adventures and
          unforgettable nightlife experiences.
        </p>

        <a
          href="#place-finder"
          className="mt-8 inline-block rounded-full bg-[#082B49] px-8 py-4 font-bold text-white transition hover:bg-[#123F63]"
        >
          Find London Places
        </a>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-[#082B49] px-6 py-8 text-center text-sm text-[#C9DDE6]">

        <p>
          London Explorer • Built with React, Tailwind CSS and
          OpenStreetMap APIs
        </p>

      </footer>

    </div>
  );
}

export default Sightseeing;