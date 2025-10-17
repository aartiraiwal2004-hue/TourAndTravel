import React from "react";
import logo from "../../assest/NewLogo.png";
function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-2 flex flex-wrap justify-between items-center shadow-md">
      {/* LEFT: Logo + Text */}
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="Travel Agency Logo"
          className="h-12 w-16 sm:h-14 sm:w-20 object-cover"
        />
        <span className="font-bold text-lg sm:text-xl text-white tracking-wide whitespace-nowrap">
          SHRINATH TOUR & TRAVELS
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
