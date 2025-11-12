import React, { useState } from "react";

const ImageLoading = ({ src, alt, className }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gray-50 rounded-2xl overflow-hidden">
      {/* Show loader while image is loading or error */}
      {(loading || error) && (
        <div className="flex items-center justify-center absolute inset-0 bg-gray-100">
          <div className="w-8 h-8 border-4 border-pink-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Actual image */}
      <img
        src={error ? "/fallback-image.png" : src} // you can replace with your fallback image path
        alt={alt}
        className={`${className} ${
          loading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
        onLoad={() => setLoading(false)}
        onError={() => {
          setError(true);
          setLoading(false);
        }}
      />
    </div>
  );
};

export default ImageLoading;
