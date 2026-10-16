import React, { useEffect, useState } from "react";
import data from "./home.json";

function Home() {

  // =====================================================
  // INTERACTIVE LONDON PLACES
  // =====================================================

  const londonPlaces = [
    {
      id: 1,
      name: "Big Ben",
      category: "History",
      icon: "🕰️",
      location: "Westminster",
      rating: "4.8",
      bestTime: "Evening",
      description:
        "One of London's most recognizable landmarks, standing beside the Houses of Parliament.",
      top: "43%",
      left: "42%"
    },

    {
      id: 2,
      name: "Buckingham Palace",
      category: "Royal",
      icon: "👑",
      location: "Westminster",
      rating: "4.9",
      bestTime: "Morning",
      description:
        "Discover the home of the British monarch and experience London's royal heritage.",
      top: "28%",
      left: "30%"
    },

    {
      id: 3,
      name: "London Eye",
      category: "Adventure",
      icon: "🎡",
      location: "South Bank",
      rating: "4.7",
      bestTime: "Sunset",
      description:
        "Enjoy spectacular panoramic views of London's skyline from the famous observation wheel.",
      top: "58%",
      left: "47%"
    },

    {
      id: 4,
      name: "Tower Bridge",
      category: "History",
      icon: "🌉",
      location: "Tower Hill",
      rating: "4.8",
      bestTime: "Evening",
      description:
        "Walk across one of London's most famous bridges and enjoy views of the River Thames.",
      top: "46%",
      left: "70%"
    },

    {
      id: 5,
      name: "Camden Market",
      category: "Shopping",
      icon: "🛍️",
      location: "Camden",
      rating: "4.6",
      bestTime: "Afternoon",
      description:
        "Explore independent shops, street food, music and the colourful atmosphere of Camden.",
      top: "20%",
      left: "57%"
    },

    {
      id: 6,
      name: "Soho",
      category: "Nightlife",
      icon: "🌙",
      location: "Central London",
      rating: "4.7",
      bestTime: "Night",
      description:
        "Experience restaurants, entertainment, music and London's vibrant nightlife.",
      top: "36%",
      left: "54%"
    },

    {
      id: 7,
      name: "Tower of London",
      category: "History",
      icon: "🏰",
      location: "Tower Hill",
      rating: "4.8",
      bestTime: "Morning",
      description:
        "Explore centuries of royal history and discover the fascinating stories of the Tower.",
      top: "45%",
      left: "64%"
    },

    {
      id: 8,
      name: "The O2",
      category: "Adventure",
      icon: "🎢",
      location: "Greenwich",
      rating: "4.6",
      bestTime: "Sunset",
      description:
        "Enjoy an exciting climb across the roof of The O2 with incredible views of London.",
      top: "72%",
      left: "76%"
    }
  ];


  // =====================================================
  // STATES
  // =====================================================

  const [selectedPlace, setSelectedPlace] = useState(
    londonPlaces[0]
  );

  const [selectedCategory, setSelectedCategory] =
    useState("History");

  const [myTrip, setMyTrip] = useState([]);

  // WEATHER STATES

  const [weather, setWeather] = useState(null);
  const [weatherLoading, setWeatherLoading] = useState(true);


  // =====================================================
  // WEATHER INFORMATION
  // =====================================================

  const weatherInfo = {
    0: {
      name: "Clear Sky",
      icon: "☀️"
    },

    1: {
      name: "Mainly Clear",
      icon: "🌤️"
    },

    2: {
      name: "Partly Cloudy",
      icon: "⛅"
    },

    3: {
      name: "Overcast",
      icon: "☁️"
    },

    45: {
      name: "Foggy",
      icon: "🌫️"
    },

    48: {
      name: "Foggy",
      icon: "🌫️"
    },

    51: {
      name: "Light Drizzle",
      icon: "🌦️"
    },

    53: {
      name: "Drizzle",
      icon: "🌦️"
    },

    55: {
      name: "Heavy Drizzle",
      icon: "🌧️"
    },

    61: {
      name: "Light Rain",
      icon: "🌦️"
    },

    63: {
      name: "Rain",
      icon: "🌧️"
    },

    65: {
      name: "Heavy Rain",
      icon: "🌧️"
    },

    71: {
      name: "Light Snow",
      icon: "🌨️"
    },

    73: {
      name: "Snow",
      icon: "❄️"
    },

    75: {
      name: "Heavy Snow",
      icon: "❄️"
    },

    80: {
      name: "Rain Showers",
      icon: "🌦️"
    },

    81: {
      name: "Rain Showers",
      icon: "🌧️"
    },

    82: {
      name: "Heavy Showers",
      icon: "⛈️"
    },

    95: {
      name: "Thunderstorm",
      icon: "⛈️"
    },

    96: {
      name: "Thunderstorm",
      icon: "⛈️"
    },

    99: {
      name: "Thunderstorm",
      icon: "⛈️"
    }
  };


  // =====================================================
  // WEATHER API
  // =====================================================

  useEffect(() => {

    const fetchWeather = async () => {

      try {

        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=Europe/London"
        );

        if (!response.ok) {
          throw new Error("Weather request failed");
        }

        const result = await response.json();

        setWeather(result);

      } catch (error) {

        console.error("Weather API Error:", error);

      } finally {

        setWeatherLoading(false);

      }

    };

    fetchWeather();

  }, []);


  // =====================================================
  // CATEGORY FILTER
  // =====================================================

  const filteredPlaces = londonPlaces.filter(
    (place) =>
      place.category === selectedCategory
  );


  // =====================================================
  // ADD / REMOVE FROM TRIP
  // =====================================================

  const toggleTrip = (place) => {

    const exists = myTrip.some(
      (item) => item.id === place.id
    );

    if (exists) {

      setMyTrip(
        myTrip.filter(
          (item) => item.id !== place.id
        )
      );

    } else {

      setMyTrip([
        ...myTrip,
        place
      ]);

    }

  };


  // =====================================================
  // CHECK SELECTED
  // =====================================================

  const isInTrip = (id) => {

    return myTrip.some(
      (item) => item.id === id
    );

  };


  return (

    <div className="bg-white">


      {/* =================================================
          HERO SECTION
      ================================================= */}

      <section className="relative h-[600px] overflow-hidden">

        <img
          src={data.hero.image}
          alt={data.hero.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0B1F3A]/40"></div>

        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">

          <div className="max-w-3xl text-white">

            <p className="mb-4 text-sm font-bold uppercase tracking-[5px] text-black">
              {data.hero.tagline}
            </p>

            <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
              {data.hero.title}
            </h1>

            <p className="mb-8 max-w-2xl text-base leading-7 text-gray-200 md:text-lg">
              {data.hero.description}
            </p>

            <div className="flex flex-wrap gap-4">

              <button
                onClick={() =>
                  document
                    .getElementById("interactive-london")
                    ?.scrollIntoView({
                      behavior: "smooth"
                    })
                }
                className="rounded-full bg-[#C8102E] px-8 py-3.5 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#a50d26] hover:shadow-2xl"
              >

                {data.hero.button}

                <span className="ml-2">
                  →
                </span>

              </button>


              <button
                onClick={() =>
                  document
                    .getElementById("interactive-london")
                    ?.scrollIntoView({
                      behavior: "smooth"
                    })
                }
                className="rounded-full border-2 border-white px-8 py-3.5 font-semibold text-white transition duration-300 hover:bg-white hover:text-[#0B1F3A]"
              >

                Explore London

              </button>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          MUST SEE
      ================================================= */}

      <section className="bg-[#F7F3EA] px-6 py-12">

        <div className="mb-6">

          <h2 className="mb-2 text-3xl font-bold text-[#0B1F3A] md:text-[34px]">
            Must-sees
          </h2>

          <p className="max-w-[1100px] text-[15px] leading-relaxed text-[#374151] md:text-[17px]">

            A trip to London wouldn't be complete without
            experiencing London's most iconic attractions,
            famous shows and exciting tours.

          </p>

        </div>


        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">

          {data.mustSee.map((item) => (

            <div
              key={item.id}
              className="group relative h-[300px] cursor-pointer overflow-hidden rounded-xl bg-gray-300 shadow-md transition duration-500 hover:-translate-y-2 hover:shadow-xl lg:h-[310px]"
            >

              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#0B1F3A]/95 via-[#0B1F3A]/35 to-transparent">
              </div>

              {item.badge && (

                <span className="absolute left-0 top-3 z-[3] rounded-r-full bg-[#D4A72C] px-3.5 py-2 text-sm font-semibold text-[#0B1F3A]">

                  {item.badge}

                </span>

              )}

              <div className="absolute bottom-0 left-0 right-0 z-[2] p-[18px] text-white">

                <h3 className="mb-2 text-xl font-bold md:text-[22px]">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-200">
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =================================================
          LONDON WEATHER
      ================================================= */}

      <section className="bg-[#EAF6FF] px-6 py-20">

        <div className="mx-auto max-w-7xl">

          {/* Heading */}

          <div className="mb-10 text-center">

            <p className="mb-3 text-sm font-bold uppercase tracking-[5px] text-[#145DA0]">
              LONDON TODAY
            </p>

            <h2 className="text-4xl font-bold text-[#0B1F3A] md:text-5xl">
              London's Weather
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Check the latest weather before you head out to explore
              London's iconic attractions.
            </p>

          </div>


          {/* Loading */}

          {weatherLoading ? (

            <div className="flex min-h-[350px] items-center justify-center rounded-[32px] bg-[#0B1F3A]">

              <div className="text-center text-white">

                <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-blue-300 border-t-transparent">
                </div>

                <p className="mt-5 text-blue-100">
                  Loading London's weather...
                </p>

              </div>

            </div>

          ) : weather ? (

            <>

              {/* =================================================
                  CURRENT WEATHER
              ================================================= */}

              <div className="overflow-hidden rounded-[32px] bg-gradient-to-br from-[#0B4F8A] via-[#145DA0] to-[#082B49] p-7 shadow-2xl md:p-10">

                <div className="grid items-center gap-10 lg:grid-cols-2">

                  {/* Location */}

                  <div>

                    <div className="mb-6 flex items-center gap-4">

                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-3xl">
                        📍
                      </div>

                      <div>

                        <h3 className="text-3xl font-black text-white">
                          London
                        </h3>

                        <p className="text-blue-200">
                          United Kingdom
                        </p>

                      </div>

                    </div>

                    <p className="max-w-lg text-lg leading-8 text-blue-100">

                      Stay updated with London's weather while
                      planning your sightseeing adventure.

                    </p>

                    <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm text-blue-100">

                      <span>
                        🌍
                      </span>

                      <span>
                        Live weather information
                      </span>

                    </div>

                  </div>


                  {/* Temperature */}

                  <div className="flex items-center justify-center gap-5 lg:justify-end">

                    <div className="text-7xl md:text-8xl">

                      {weatherInfo[
                        weather.current.weather_code
                      ]?.icon || "🌤️"}

                    </div>

                    <div>

                      <p className="text-7xl font-black text-white md:text-8xl">

                        {Math.round(
                          weather.current.temperature_2m
                        )}°

                      </p>

                      <p className="mt-1 text-lg font-medium text-blue-200">

                        {weatherInfo[
                          weather.current.weather_code
                        ]?.name || "Current Weather"}

                      </p>

                    </div>

                  </div>

                </div>


                {/* =================================================
                    WEATHER DETAILS
                ================================================= */}

                <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">

                  <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">

                    <p className="text-sm text-blue-200">
                      Feels Like
                    </p>

                    <p className="mt-2 text-2xl font-black text-white">

                      {Math.round(
                        weather.current.apparent_temperature
                      )}°C

                    </p>

                  </div>


                  <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">

                    <p className="text-sm text-blue-200">
                      Humidity
                    </p>

                    <p className="mt-2 text-2xl font-black text-white">

                      {weather.current.relative_humidity_2m}%

                    </p>

                  </div>


                  <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">

                    <p className="text-sm text-blue-200">
                      Wind Speed
                    </p>

                    <p className="mt-2 text-2xl font-black text-white">

                      {Math.round(
                        weather.current.wind_speed_10m
                      )} km/h

                    </p>

                  </div>


                  <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">

                    <p className="text-sm text-blue-200">
                      Rain
                    </p>

                    <p className="mt-2 text-2xl font-black text-white">

                      {weather.current.precipitation} mm

                    </p>

                  </div>

                </div>

              </div>


              {/* =================================================
                  7 DAY FORECAST
              ================================================= */}

              <div className="mt-10">

                <div className="mb-6">

                  <p className="text-sm font-bold uppercase tracking-[4px] text-[#145DA0]">
                    PLAN AHEAD
                  </p>

                  <h3 className="mt-2 text-3xl font-black text-[#0B1F3A]">
                    7-Day Forecast
                  </h3>

                </div>


                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">

                  {weather.daily.time
                    .slice(0, 7)
                    .map((date, index) => {

                      const info =
                        weatherInfo[
                          weather.daily.weather_code[index]
                        ] || {
                          name: "Weather",
                          icon: "🌤️"
                        };

                      const day =
                        new Date(date).toLocaleDateString(
                          "en-GB",
                          {
                            weekday: "short"
                          }
                        );

                      return (

                        <div
                          key={date}
                          className="group rounded-2xl bg-white p-5 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >

                          <p className="font-bold text-[#0B1F3A]">
                            {day}
                          </p>


                          <div className="my-4 text-4xl transition duration-300 group-hover:scale-110">

                            {info.icon}

                          </div>


                          <p className="text-xs text-gray-500">
                            {info.name}
                          </p>


                          <div className="mt-4 flex items-center justify-center gap-3">

                            <span className="text-lg font-black text-[#0B1F3A]">

                              {Math.round(
                                weather.daily
                                  .temperature_2m_max[index]
                              )}°

                            </span>

                            <span className="text-lg text-gray-400">

                              {Math.round(
                                weather.daily
                                  .temperature_2m_min[index]
                              )}°

                            </span>

                          </div>


                          <div className="mt-4 rounded-xl bg-[#EAF6FF] px-2 py-2">

                            <p className="text-xs text-[#145DA0]">
                              💧 Rain
                            </p>

                            <p className="font-bold text-[#0B4F8A]">

                              {
                                weather.daily
                                  .precipitation_probability_max[index]
                              }%

                            </p>

                          </div>

                        </div>

                      );

                    })}

                </div>

              </div>

            </>

          ) : (

            /* Error */

            <div className="rounded-3xl bg-white p-10 text-center shadow-lg">

              <div className="text-5xl">
                🌧️
              </div>

              <h3 className="mt-4 text-2xl font-bold text-[#0B1F3A]">
                Weather unavailable
              </h3>

              <p className="mt-2 text-gray-500">
                We couldn't load London's weather right now.
              </p>

            </div>

          )}

        </div>

      </section>


      {/* =================================================
          INTERACTIVE LONDON SECTION
      ================================================= */}

      <section
        id="interactive-london"
        className="bg-[#0B1F3A] px-6 py-20"
      >

        <div className="mx-auto max-w-7xl">

          {/* HEADING */}

          <div className="mb-12 text-center">

            <p className="mb-3 text-sm font-bold uppercase tracking-[5px] text-[#D4A72C]">
              EXPLORE THE CITY
            </p>

            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Discover London Interactively
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-300">

              Click a location on the map and discover
              what makes each London destination special.

            </p>

          </div>


          {/* MAP + DETAILS */}

          <div className="grid gap-8 lg:grid-cols-2">


            {/* MAP */}

            <div className="relative h-[550px] overflow-hidden rounded-3xl bg-gradient-to-br from-[#123A63] via-[#145DA0] to-[#4A90C2] shadow-2xl">


              {/* Decorative roads */}

              <div className="absolute left-[20%] top-0 h-full w-[2px] rotate-[20deg] bg-white/10">
              </div>

              <div className="absolute left-[45%] top-0 h-full w-[2px] -rotate-[25deg] bg-white/10">
              </div>

              <div className="absolute left-[70%] top-0 h-full w-[2px] rotate-[15deg] bg-white/10">
              </div>

              <div className="absolute left-0 top-[45%] h-[2px] w-full rotate-[8deg] bg-white/10">
              </div>

              <div className="absolute left-0 top-[65%] h-[2px] w-full -rotate-[12deg] bg-white/10">
              </div>


              {/* River */}

              <div className="absolute -left-10 top-[-10%] h-[120%] w-24 rotate-[25deg] bg-blue-200/10 blur-xl">
              </div>


              {/* Map heading */}

              <div className="absolute left-6 top-6 z-10">

                <p className="text-xs font-bold uppercase tracking-[3px] text-blue-200">
                  Interactive Map
                </p>

                <h3 className="mt-1 text-3xl font-black text-white">
                  London
                </h3>

              </div>


              {/* MAP LOCATIONS */}

              {londonPlaces.map((place) => (

                <button
                  key={place.id}
                  onClick={() =>
                    setSelectedPlace(place)
                  }
                  style={{
                    top: place.top,
                    left: place.left
                  }}
                  className={`absolute z-20 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                    selectedPlace.id === place.id
                      ? "scale-125"
                      : "hover:scale-125"
                  }`}
                >

                  {/* Pin */}

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full border-4 shadow-xl ${
                      selectedPlace.id === place.id
                        ? "border-[#D4A72C] bg-white"
                        : "border-white bg-[#C8102E]"
                    }`}
                  >

                    <span className="text-xl">
                      {place.icon}
                    </span>

                  </div>


                  {/* Label */}

                  <span
                    className={`mt-1 block whitespace-nowrap rounded-full px-2 py-1 text-[10px] font-bold ${
                      selectedPlace.id === place.id
                        ? "bg-[#D4A72C] text-[#0B1F3A]"
                        : "bg-[#0B1F3A]/80 text-white"
                    }`}
                  >

                    {place.name}

                  </span>

                </button>

              ))}

            </div>


            {/* DETAILS PANEL */}

            <div className="flex flex-col justify-center rounded-3xl bg-[#F7F3EA] p-8 md:p-10">

              <div className="mb-6 flex items-center justify-between">

                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-5xl shadow-sm">
                  {selectedPlace.icon}
                </div>

                <span className="rounded-full bg-[#0B1F3A] px-4 py-2 text-sm font-bold text-white">
                  {selectedPlace.category}
                </span>

              </div>


              <h2 className="text-4xl font-black text-[#0B1F3A]">
                {selectedPlace.name}
              </h2>


              <p className="mt-2 font-semibold text-[#C8102E]">
                📍 {selectedPlace.location}
              </p>


              <p className="mt-6 leading-8 text-[#4B5563]">
                {selectedPlace.description}
              </p>


              {/* Info */}

              <div className="my-7 grid grid-cols-2 gap-4">

                <div className="rounded-2xl bg-white p-5">

                  <p className="text-xs text-gray-400">
                    Rating
                  </p>

                  <p className="mt-1 text-xl font-black">
                    ⭐ {selectedPlace.rating}
                  </p>

                </div>


                <div className="rounded-2xl bg-white p-5">

                  <p className="text-xs text-gray-400">
                    Best Time
                  </p>

                  <p className="mt-1 text-xl font-black">
                    🕐 {selectedPlace.bestTime}
                  </p>

                </div>

              </div>


              {/* Add */}

              <button
                onClick={() =>
                  toggleTrip(selectedPlace)
                }
                className={`w-full rounded-full py-4 font-bold transition duration-300 ${
                  isInTrip(selectedPlace.id)
                    ? "bg-green-100 text-green-700"
                    : "bg-[#C8102E] text-white hover:bg-[#0B1F3A]"
                }`}
              >

                {isInTrip(selectedPlace.id)
                  ? "✓ Added to My London Trip"
                  : "+ Add to My London Trip"}

              </button>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          EXPERIENCE FILTER
      ================================================= */}

      <section className="bg-[#F7F3EA] px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="mb-10 text-center">

            <p className="mb-3 text-sm font-bold uppercase tracking-[4px] text-[#C8102E]">
              FIND YOUR EXPERIENCE
            </p>

            <h2 className="text-4xl font-bold text-[#0B1F3A]">
              Explore London Your Way
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">

              Choose what interests you and discover
              places that match your travel style.

            </p>

          </div>


          {/* CATEGORY BUTTONS */}

          <div className="mb-10 flex flex-wrap justify-center gap-4">

            {[
              ["History", "🏛️"],
              ["Adventure", "🎢"],
              ["Shopping", "🛍️"],
              ["Nightlife", "🌙"],
              ["Royal", "👑"]
            ].map(([category, icon]) => (

              <button
                key={category}
                onClick={() =>
                  setSelectedCategory(category)
                }
                className={`rounded-full px-6 py-3 font-bold transition duration-300 ${
                  selectedCategory === category
                    ? "bg-[#0B1F3A] text-white shadow-lg"
                    : "bg-white text-[#0B1F3A] hover:-translate-y-1 hover:bg-[#D4A72C]"
                }`}
              >

                {icon} {category}

              </button>

            ))}

          </div>


          {/* FILTERED CARDS */}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {filteredPlaces.map((place) => (

              <button
                key={place.id}
                onClick={() =>
                  setSelectedPlace(place)
                }
                className={`rounded-3xl p-6 text-left shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  selectedPlace.id === place.id
                    ? "bg-[#0B1F3A] text-white ring-4 ring-[#D4A72C]"
                    : "bg-white text-[#0B1F3A]"
                }`}
              >

                <div className="mb-5 flex items-center justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F7F3EA] text-3xl">
                    {place.icon}
                  </div>

                  <span className="text-sm font-bold">
                    ⭐ {place.rating}
                  </span>

                </div>


                <h3 className="text-xl font-black">
                  {place.name}
                </h3>


                <p className="mt-2 text-sm opacity-70">
                  📍 {place.location}
                </p>


                <p className="mt-4 text-sm leading-6 opacity-80">
                  {place.description}
                </p>

              </button>

            ))}

          </div>

        </div>

      </section>


      {/* =================================================
          MY LONDON TRIP
      ================================================= */}

      <section className="bg-white px-6 py-20">

        <div className="mx-auto max-w-6xl rounded-3xl bg-[#F7F3EA] p-8 shadow-xl md:p-10">

          <div className="mb-8 flex items-center justify-between">

            <div>

              <p className="mb-2 text-sm font-bold uppercase tracking-[3px] text-[#C8102E]">
                YOUR COLLECTION
              </p>

              <h2 className="text-4xl font-black text-[#0B1F3A]">
                ❤️ My London Trip
              </h2>

              <p className="mt-2 text-gray-600">
                Save the places you want to visit.
              </p>

            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0B1F3A] font-black text-white">
              {myTrip.length}
            </div>

          </div>


          {myTrip.length === 0 ? (

            <div className="rounded-3xl border-2 border-dashed border-[#D4A72C] p-12 text-center">

              <div className="text-5xl">
                🗺️
              </div>

              <h3 className="mt-4 text-xl font-bold text-[#0B1F3A]">
                Your London trip is empty
              </h3>

              <p className="mt-2 text-gray-500">
                Select a location and click
                "Add to My London Trip".
              </p>

            </div>

          ) : (

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

              {myTrip.map((place) => (

                <div
                  key={place.id}
                  className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm"
                >

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F7F3EA] text-3xl">
                    {place.icon}
                  </div>

                  <div className="flex-1">

                    <h3 className="font-bold text-[#0B1F3A]">
                      {place.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {place.location}
                    </p>

                  </div>

                  <button
                    onClick={() =>
                      toggleTrip(place)
                    }
                    className="text-sm font-bold text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>

                </div>

              ))}

            </div>

          )}

        </div>

      </section>


      {/* =================================================
          ABOUT LONDON
      ================================================= */}

      <section className="bg-white px-6 py-16">

        {data.aboutLondon.map((item) => (

          <div
            key={item.id}
            className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2"
          >

            <div className="overflow-hidden rounded-2xl shadow-lg">

              <img
                src={item.image}
                alt={item.title}
                className="h-[450px] w-full object-cover transition duration-500 hover:scale-105"
              />

            </div>


            <div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#C8102E]">
                {item.tagline}
              </p>


              <h2 className="mb-5 text-4xl font-bold text-[#0B1F3A] md:text-5xl">
                {item.title}
              </h2>


              <p className="mb-8 text-lg leading-8 text-[#4B5563]">
                {item.description}
              </p>


              <button
                className="rounded-full bg-[#C8102E] px-7 py-3 font-semibold text-white transition duration-300 hover:bg-[#0B1F3A] hover:shadow-lg"
              >
                {item.button}
              </button>

            </div>

          </div>

        ))}

      </section>


      {/* =================================================
          TRIP PACKAGES
      ================================================= */}

      <section className="px-6 py-12">

        <div className="relative h-[400px] overflow-hidden rounded-3xl">

          <img
            src={data.tripPackages.image}
            alt="London Trip"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#0B1F3A]/65">
          </div>


          <div className="absolute inset-0 flex items-center">

            <div className="max-w-3xl px-8 text-white md:px-14">

              <p className="mb-3 text-sm font-bold uppercase tracking-[4px] text-[#D4A72C]">
                {data.tripPackages.tagline}
              </p>


              <h2 className="mb-5 text-3xl font-extrabold md:text-5xl">
                {data.tripPackages.title}
              </h2>


              <p className="mb-6 max-w-2xl text-base leading-7 text-gray-200 md:text-lg">
                {data.tripPackages.description}
              </p>


              <div className="mb-7 flex flex-wrap gap-3">

                <span className="rounded-full bg-white/15 px-5 py-2.5 text-sm font-semibold backdrop-blur-sm">
                  🗓️ {data.tripPackages.duration}
                </span>


                <span className="rounded-full bg-white/15 px-5 py-2.5 text-sm font-semibold backdrop-blur-sm">
                  💰 {data.tripPackages.price}
                </span>


                <span className="rounded-full bg-white/15 px-5 py-2.5 text-sm font-semibold backdrop-blur-sm">
                  ⭐ {data.tripPackages.highlight}
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          EXPLORE LONDON
      ================================================= */}

      <section className="bg-[#F7F3EA] px-6 py-16">

        <div className="mb-10 text-center">

          <p className="mb-2 text-sm font-semibold uppercase tracking-[4px] text-[#C8102E]">
            Explore London
          </p>


          <h2 className="text-4xl font-bold text-[#0B1F3A]">
            Explore London by Category
          </h2>


          <p className="mx-auto mt-4 max-w-2xl text-[#4B5563]">

            Find the experiences that match your interests
            and discover another side of London.

          </p>

        </div>


        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {data.categories.map((category) => (

            <div
              key={category.id}
              className="group relative h-[300px] overflow-hidden rounded-2xl shadow-md transition duration-500 hover:-translate-y-2 hover:shadow-xl"
            >

              <img
                src={category.image}
                alt={category.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />


              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/95 via-[#0B1F3A]/40 to-transparent">
              </div>


              <div className="absolute inset-0 flex items-end p-6">

                <div className="text-white">

                  <h3 className="text-2xl font-bold group-hover:text-[#D4A72C]">
                    {category.title}
                  </h3>


                  <p className="mt-2 text-sm leading-relaxed text-gray-200">
                    {category.description}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =================================================
          WHY CHOOSE US
      ================================================= */}

      <section className="bg-[#0B1F3A] px-6 py-20">

        <div className="mx-auto mb-14 max-w-3xl text-center">

          <p className="mb-3 text-sm font-bold uppercase tracking-[5px] text-[#D4A72C]">
            Why Choose Us
          </p>


          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Your London Journey Starts Here
          </h2>


          <p className="mt-5 text-base leading-7 text-gray-300 md:text-lg">

            From planning your adventure to discovering
            unforgettable experiences, we make exploring
            London simple, exciting and memorable.

          </p>

        </div>


        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">

          {data.whyChooseUs.map((item, index) => (

            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl"
            >

              <div className="absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r from-[#C8102E] via-[#D4A72C] to-[#C8102E]">
              </div>


              <div className="absolute right-5 top-5 text-5xl font-black text-[#0B1F3A]/5">
                0{index + 1}
              </div>


              <div className="relative mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F7F3EA] text-4xl transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-[#C8102E]">

                {item.icon}

              </div>


              <h3 className="mb-4 text-xl font-bold text-[#0B1F3A] group-hover:text-[#C8102E]">
                {item.title}
              </h3>


              <p className="mb-6 text-sm leading-7 text-gray-600">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </section>


    </div>

  );

}

export default Home;