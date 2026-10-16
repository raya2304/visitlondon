import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  // ================= NAVIGATION LINKS =================

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },

    {
      name: "About",
      path: "/about",
    },
    {
      name: "Sights",
      path: "/sights",
    },

    {
      name: "Packages",
      path: "/packages",
    },

    {
      name: "Gallery",
      path: "/gallery",
    },

    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#082B49] text-white shadow-xl">

      {/* ================================================= */}
      {/*                    MAIN NAVBAR                    */}
      {/* ================================================= */}

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* ================= LOGO ================= */}

        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="group"
        >

          <div className="flex items-center gap-3">

            {/* LOGO CIRCLE */}

            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border-2
                border-[#D9C7A3]
                bg-[#FFF8E7]
                text-xl
                font-black
                text-[#082B49]
                transition
                duration-300
                group-hover:rotate-6
              "
            >
              L
            </div>

            {/* LOGO TEXT */}

            <div>

              <h1 className="text-xl font-black tracking-wide text-[#FFF8E7]">

                VISIT

                <span className="text-[#A9D6E5]">
                  {" "}LONDON
                </span>

              </h1>

              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#D9C7A3]">
                Explore • Discover • Experience
              </p>

            </div>

          </div>

        </Link>


        {/* ================================================= */}
        {/*                  DESKTOP MENU                     */}
        {/* ================================================= */}

        <div className="hidden items-center gap-1 lg:flex">

          {navLinks.map((link) => {

            const active =
              location.pathname === link.path;

            return (

              <Link
                key={link.name}
                to={link.path}
                className={`
                  relative
                  rounded-full
                  px-4
                  py-3
                  text-sm
                  font-bold
                  transition
                  duration-300

                  ${
                    active
                      ? "bg-[#FFF8E7] text-[#082B49]"
                      : "text-[#E1EDF2] hover:bg-[#145374] hover:text-[#FFF8E7]"
                  }
                `}
              >

                {link.name}

                {/* ACTIVE DOT */}

                {active && (
                  <span
                    className="
                      absolute
                      bottom-1
                      left-1/2
                      h-1
                      w-1
                      -translate-x-1/2
                      rounded-full
                      bg-[#D9C7A3]
                    "
                  ></span>
                )}

              </Link>

            );

          })}


          {/* ================= BOOK TICKET BUTTON ================= */}

          <Link
            to="/ticket"
            className="
              ml-2
              rounded-full
              bg-[#D9C7A3]
              px-5
              py-3
              text-sm
              font-black
              text-[#082B49]
              shadow-lg
              transition
              duration-300
              hover:-translate-y-1
              hover:bg-[#FFF8E7]
            "
          >
            🎟️ Book Tickets
          </Link>

        </div>


        {/* ================================================= */}
        {/*                  MOBILE BUTTON                   */}
        {/* ================================================= */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-[#A9D6E5]
            text-[#FFF8E7]
            transition
            hover:bg-[#145374]
            lg:hidden
          "
          aria-label="Open menu"
        >

          {menuOpen ? (
            <span className="text-2xl">
              ✕
            </span>
          ) : (
            <span className="text-2xl">
              ☰
            </span>
          )}

        </button>

      </div>


      {/* ================================================= */}
      {/*                   MOBILE MENU                     */}
      {/* ================================================= */}

      {menuOpen && (

        <div
          className="
            border-t
            border-[#31556D]
            bg-[#082B49]
            px-6
            pb-6
            lg:hidden
          "
        >

          <div
            className="
              mx-auto
              flex
              max-w-7xl
              flex-col
              gap-2
              pt-4
            "
          >

            {navLinks.map((link) => {

              const active =
                location.pathname === link.path;

              return (

                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`
                    rounded-2xl
                    px-5
                    py-4
                    font-bold
                    transition

                    ${
                      active
                        ? "bg-[#FFF8E7] text-[#082B49]"
                        : "text-[#E1EDF2] hover:bg-[#145374] hover:text-[#FFF8E7]"
                    }
                  `}
                >

                  {link.name}

                </Link>

              );

            })}



          </div>

        </div>

      )}

    </nav>
  );
}

export default Navbar;