import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { bannerData } from "./BannerData";
import ContactModal from "../../Comman/ContactModal";
const Banner = () => {
  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const handleBookNow = (vehicle) => {
    setSelectedVehicle(vehicle);
    setShowModal(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bannerData.length);
    }, 5000); // 5 seconds interval
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-[500px] w-full bg-gradient-to-r from-blue-400 via-purple-200 to-pink-400 flex items-center justify-center px-6">
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl w-full">
        {/* Left Content */}
        <div className="text-gray-800">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <h1 className="text-2xl md:text-5xl font-bold mb-4 leading-tight">
                {bannerData[current].title}
              </h1>
              <p className="text-base md:text-lg font-medium">
                {bannerData[current].description}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleBookNow(bannerData[current].title)}
                className="mt-5 bg-gradient-to-r from-pink-600 to-red-500 text-white font-semibold px-6 py-2 rounded-full hover:from-red-500 hover:to-pink-600 transition-all"
              >
                Book Now
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end items-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={bannerData[current].image}
              src={bannerData[current].image}
              alt="Banner"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6 }}
              className="w-[280px] md:w-[320px] object-contain"
            />
          </AnimatePresence>
        </div>
      </div>

      <ContactModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        phoneNumber="918435615656"
      />
    </section>
  );
};

export default Banner;
