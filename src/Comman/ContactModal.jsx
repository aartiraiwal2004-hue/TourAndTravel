// 📁 src/components/common/ContactModal.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const ContactModal = ({ isOpen, onClose, phoneNumber = "919876543210" }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Background Overlay */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Box */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 flex justify-center items-center z-50"
          >
            {/* Gradient Border Wrapper */}
            <div
              className="p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Inner White Box */}
              <div className="bg-white w-80 rounded-2xl p-6 relative text-center">
                <p className="text-gray-700 mb-6 font-medium text-base">
                  Select how you want to contact us
                </p>

                <div className="flex justify-around">
                  {/* WhatsApp Button */}
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={`https://wa.me/${phoneNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center"
                  >
                    <div className="bg-green-500 p-4 rounded-full shadow-md text-white">
                      <FaWhatsapp className="text-2xl" />
                    </div>
                    <span className="text-gray-700 font-semibold mt-2">
                      WhatsApp
                    </span>
                  </motion.a>

                  {/* Call Button */}
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={`tel:${phoneNumber}`}
                    className="flex flex-col items-center"
                  >
                    <div className="bg-pink-600 p-4 rounded-full shadow-md text-white">
                      <FaPhoneAlt className="text-2xl" />
                    </div>
                    <span className="text-gray-700 font-semibold mt-2">
                      Call Now
                    </span>
                  </motion.a>
                </div>

                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="mt-6 bg-gradient-to-r from-pink-600 to-red-500 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all text-sm"
                >
                  Close
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
