const Footer = () => {
  return (
    <footer className="bg-black text-white">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo / About */}
          <div>
            <h2 className="text-3xl font-bold tracking-wide">
              Visit <span className="text-[#A9D6E5]">London</span>
            </h2>

            <p className="mt-5 text-gray-400 leading-7">
              Discover the beauty, history and unforgettable experiences
              that London has to offer.
            </p>

            <div className="flex gap-3 mt-6">

              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C8102E] transition cursor-pointer">
                f
              </div>

              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C8102E] transition cursor-pointer">
                𝕏
              </div>

              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C8102E] transition cursor-pointer">
                ◎
              </div>

              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C8102E] transition cursor-pointer">
                ▶
              </div>

            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-semibold mb-5 border-l-4 border-[#C8102E] pl-3">
              Explore London
            </h3>

            <p className="text-gray-400 leading-8">
              Famous landmarks
              <br />
              Historic places
              <br />
              Museums & galleries
              <br />
              Parks & gardens
              <br />
              London nightlife
            </p>
          </div>

          {/* Travel */}
          <div>
            <h3 className="text-lg font-semibold mb-5 border-l-4 border-[#C8102E] pl-3">
              Travel With Us
            </h3>

            <p className="text-gray-400 leading-8">
              Travel inspiration
              <br />
              Things to do
              <br />
              London experiences
              <br />
              Day trips
              <br />
              Travel tips
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-5 border-l-4 border-[#C8102E] pl-3">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">

              <p>
                <span className="text-[#A9D6E5]">📍</span>
                <span className="ml-3">
                  London, United Kingdom
                </span>
              </p>

              <p>
                <span className="text-[#A9D6E5]">✉</span>
                <span className="ml-3">
                  hello@visitlondon.com
                </span>
              </p>

              <p>
                <span className="text-[#A9D6E5]">☎</span>
                <span className="ml-3">
                  +44 20 1234 5678
                </span>
              </p>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-5 text-center">

          <p className="text-gray-400 text-sm">
            © 2026 Visit London. All rights reserved.
          </p>

          <p className="text-gray-600 text-xs mt-2">
            Discover • Experience • Remember
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;