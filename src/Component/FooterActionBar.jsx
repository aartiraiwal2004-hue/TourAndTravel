import React from "react";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assest/NewLogo.png";

const FooterActionBar = () => {
  return (
    <footer className="w-full mt-4">
      <AnimatePresence>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-10 flex flex-col md:flex-row justify-center items-center text-white text-center shadow-2xl rounded-t-2xl px-4 md:px-10 gap-10"
        >
          {/* --- Company Info --- */}
          <div className="flex flex-col items-center text-center gap-3 max-w-sm">
            <img
              src={logo}
              alt="Travel Agency Logo"
              className="h-15 w-20 sm:h-14 sm:w-20 object-cover"
            />
            <p className="font-bold text-lg md:text-xl">
              © 2025 Shrinath Tour and Travels
            </p>
            <p className="text-sm text-gray-100">
              All Rights Reserved | Travel With Trust & Comfort
            </p>
          </div>

          {/* --- Contact Info --- */}
          <div className="flex flex-col items-center text-center gap-3 max-w-sm">
            <FaEnvelope className="text-4xl text-pink-200 drop-shadow-md" />

            <p className="font-bold text-lg md:text-xl">Contact Us</p>
            <p className="text-sm text-gray-100">
              📞 84356 15656 | 84356 15677
            </p>
            <p className="text-sm text-gray-100">62615 13797</p>

            <p className="text-sm text-gray-100">Help Desk: 0731 31995677</p>
            <p className="text-sm text-gray-100">
              📧{" "}
              <a
                href="mailto:Support@shrinathtourandtravels.com"
                className="underline hover:text-yellow-200 transition-all"
              >
                Support@shrinathtourandtravels.com
              </a>
            </p>
          </div>

          {/* --- Office Locations --- */}
          <div className="flex flex-col items-center text-center gap-3 max-w-sm">
            <FaMapMarkerAlt className="text-4xl text-green-300 drop-shadow-md" />

            <p className="font-bold text-lg md:text-xl">Our Offices</p>

            <div className="flex flex-col gap-2 text-gray-100">
              <div className="flex flex-col items-center">
                <p className="text-sm">Navlakha Bus Stand, Indore</p>
              </div>

              <div className="flex flex-col items-center">
                <p className="text-sm">AB Road, Gram Pigdambar</p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* --- Bottom Bar --- */}
      <div className="bg-[#1f1f1f] text-gray-300 text-center text-sm py-3">
        Made by{" "}
        <span className="text-yellow-400 font-semibold">
          Shrinath Tech Team
        </span>
      </div>
    </footer>
  );
};

export default FooterActionBar;
