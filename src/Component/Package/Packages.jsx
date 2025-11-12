import React from "react";
import { motion } from "framer-motion";
import { PackegesDatas } from "./PackegeData";
import ImageLoading from "../../Comman/ImageLoading";

const Packages = () => {
  return (
    <section className="relative bg-gradient-to-r from-sky-100 via-white to-pink-100 py-10 px-0 md:px-2 overflow-hidden">
      <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-10  text-gray-800">
        Our <span className="text-pink-600">Package plan</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 place-items-center">
        {PackegesDatas.map((car, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative w-[250px] sm:w-[280px] md:w-[320px] h-[200px] sm:h-[220px] md:h-[240px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
          >
            {/* Background image */}
            <ImageLoading
              src={car.img}
              alt={car.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />

            {/* Overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-3xl flex flex-col justify-end text-center text-white p-4 sm:p-6 transition-all duration-500 hover:bg-black/50">
              <h3 className="text-lg sm:text-xl font-bold mb-2 drop-shadow-md">
                {car.name}
              </h3>

              {car.price && (
                <p className="text-2xl sm:text-3xl font-extrabold text-yellow-400 drop-shadow-lg mb-1">
                  ₹{car.price}/-
                </p>
              )}

              <p className="text-xs sm:text-sm italic text-gray-300">
                By Swift Dzire
              </p>
            </div>

            {/* Decorative glowing border */}
            <motion.div
              className="absolute inset-0 rounded-3xl border-2 border-transparent hover:border-pink-400/70 transition-all duration-700"
              whileHover={{ boxShadow: "0px 0px 20px rgba(236, 72, 153, 0.6)" }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
