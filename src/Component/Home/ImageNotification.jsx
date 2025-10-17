import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Diwali from "../../assest/Diwali_Poster.png"; // ✅ your local image

const ImageNotification = () => {
  const [visible, setVisible] = useState(true);

  // Auto-close after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm"
        >
          {/* Notification Box */}
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden w-[90%] max-w-lg">
            {/* Close Button */}
            <button
              onClick={() => setVisible(false)}
              className="absolute top-3 right-3 bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-pink-700 transition z-10"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={Diwali}
              alt="Diwali Offer"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageNotification;
