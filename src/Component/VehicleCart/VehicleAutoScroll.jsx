import React from "react";
import { motion } from "framer-motion";
import { vehicles } from "./VahicleData";
import ImageLoading from "../../Comman/ImageLoading";

const VehicleAutoScroll = () => {
  return (
    <section className="bg-gradient-to-r from-sky-100 via-white to-pink-100 py-12 overflow-hidden">
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex items-center gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {[...vehicles, ...vehicles].map((car, index) => (
            <div
              key={index}
              className="
                group
                flex-shrink-0
                w-[160px] sm:w-[180px] md:w-[220px] lg:w-[240px]
                h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px]
                flex items-center justify-center
                rounded-3xl
                bg-white
                bg-opacity-80
                shadow-[0_4px_20px_rgba(0,0,0,0.1)]
                hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)]
                transition-shadow
                duration-500
                border border-transparent
                hover:border-pink-400
                hover:bg-gradient-to-tr
                hover:from-white
                hover:to-pink-50
                p-4
              "
            >
              <ImageLoading
                src={car.img}
                alt={car.name}
                className="
                  w-full
                  h-full
                  object-contain
                  transition-transform
                  duration-500
                  group-hover:scale-110
                  drop-shadow-[0_4px_10px_rgba(0,0,0,0.15)]
                  group-hover:drop-shadow-[0_6px_15px_rgba(236,72,153,0.4)]
                "
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VehicleAutoScroll;
