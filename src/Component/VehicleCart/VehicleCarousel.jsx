import React, { useState } from "react";
import { motion } from "framer-motion";
import { vehicles } from "./VahicleData";
import ContactModal from "../../Comman/ContactModal.jsx";

// Animation variants
const leftVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const rightVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const VehicleShowcase = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const handleBookNow = (vehicle) => {
    setSelectedVehicle(vehicle);
    setShowModal(true);
  };
  return (
    <section className="relative bg-gradient-to-r from-blue-50 via-pink-50 to-purple-50 py-10 px-4 md:px-10 mt-4 overflow-hidden">
      {/* Floating background shapes for subtle decoration */}
      <div className="absolute top-0 left-0 w-52 h-52 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-52 h-52 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-10 text-gray-800">
        Our <span className="text-pink-600">Vehicles for Booking</span>
      </h2>

      {/* Vehicles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {vehicles.map((car, index) => (
          <motion.div
            key={car.name}
            variants={index % 2 === 0 ? leftVariant : rightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/50 backdrop-blur-md rounded-xl shadow-lg overflow-hidden border border-white/40 hover:shadow-2xl transition-all duration-300 w-full max-w-sm mx-auto"
          >
            {/* Image Section */}
            <div className="relative overflow-hidden flex justify-center items-center bg-white">
              <img
                src={car.img}
                alt={car.name}
                className="object-contain h-48 w-full transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent opacity-0 hover:opacity-30 transition-opacity"></div>
            </div>

            {/* Details Section */}
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                {car.name}
              </h3>
              <p className="text-pink-600 text-lg font-medium mt-1">
                ₹{car.price}/<span className="text-gray-700">K.M.</span>
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleBookNow(car)}
                className="mt-4 bg-gradient-to-r from-pink-600 to-red-500 text-white font-semibold px-5 py-1.5 rounded-full shadow-md hover:shadow-lg transition-all text-sm"
              >
                BOOK NOW
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
      {/* ✅ Common Contact Modal */}
      <ContactModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        phoneNumber="918435615656"
      />
    </section>
  );
};

export default VehicleShowcase;
