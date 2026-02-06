import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white text-cyan- mb-3 sm:mb-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-4 sm:pt-5">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:-ml-2 gap-8 md:gap-0 items-start">
          {/* LEFT: Logo + Info */}
          <div>
            <img
              src="/logo.webp"
              alt="Midnapore Swimming Club"
              className="w-28 h-28 sm:w-40 sm:h-40 mb-4 sm:mb-5 mx-auto sm:mx-0 "
            />

            <p className="text-sm sm:text-base md:text-xl mb-3 sm:mb-4 leading-relaxed">
              Address: Hospital Rd, Keranitola, Midnapore, West Bengal 721101
            </p>

            <p className="text-sm sm:text-base md:text-xl mb-3 sm:mb-4">Phone: 03222 297 741</p>

            <p className="text-sm sm:text-base md:text-xl mb-6 sm:mb-10">Email: info@midnaporeswimmingclub.org</p>
            <p className="hidden sm:block text-xs sm:text-sm md:text-md text-gray-600">
  Copyright © 2026 Midnapore Swimming Club
</p>
          </div>

          {/* MIDDLE: Empty spacer (matches screenshot) */}
          <div />

          {/* RIGHT: Links */}
          <div className="md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-black">Useful Links</h1>
            <ul className="space-y-1 text-base sm:text-lg md:text-xl text-cyan-700 mt-4 sm:mt-8 md:mt-15">
              <Link to="/">
                <li className="text-cyan-700">Home</li>
              </Link>
              <Link to="/swimming">
                <li className="text-cyan-700">Swimming</li>
              </Link>
              <Link to="/gym">
                <li className="text-cyan-700">Gym</li>
              </Link>
              <Link to="/noticeboard">
                <li className="text-cyan-700">Notice Board</li>
              </Link>
              <Link to="/gallery">
                <li className="text-cyan-700">Gallery</li>
              </Link>
              <Link to="/contact">
                <li className="text-cyan-700" >Contact</li>
              </Link>
            </ul>
            
            <div className="mt-8 sm:mt-12 md:mt-20 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
              
              <SocialIcons />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <p className="block md:hidden lg:hidden text-center text-xs sm:text-sm text-gray-600">
  Copyright © 2026 Midnapore Swimming Club
</p>

      </div>
    </footer>
  );
}

import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaGoogle,
  FaLinkedinIn,
} from "react-icons/fa";

export function SocialIcons() {
  return (
    <div className="flex gap-4 justify-center items-center">
      <SocialButton color="bg-[#1877F2]" icon={<FaFacebookF />} />
      <SocialButton color="bg-[#1DA1F2]" icon={<FaTwitter />} />
      <SocialButton color="bg-[#FF0000]" icon={<FaYoutube />} />
      <SocialButton color="bg-[#000000]" icon={<FaInstagram />} />
      <SocialButton color="bg-[#6B7280]" icon={<FaGoogle />} />
      <SocialButton color="bg-[#0A66C2]" icon={<FaLinkedinIn />} />
    </div>
  );
}

const SocialButton = ({ icon, color }: any) => {
  return (
    <div
      className={`${color} w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl flex items-center justify-center text-white text-lg sm:text-xl md:text-2xl cursor-pointer
      hover:scale-110 transition-transform duration-300 shadow-md`}
    >
      {icon}
    </div>
  );
};
