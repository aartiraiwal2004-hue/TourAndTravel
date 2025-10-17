import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { bannerData } from "../../data/BannerData";

export default function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bannerData.length);
    }, 5000); // 5 seconds interval
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen w-full bg-gradient-to-r from-sky-300 via-green-100 to-green-200 flex items-center justify-center px-6">
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
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {bannerData[current].title}
              </h1>
              <p className="text-base md:text-lg font-medium">
                {bannerData[current].description}
              </p>
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
              className="w-[250px] md:w-[320px] object-contain"
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
