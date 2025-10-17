import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-blue-950 border-t-transparent border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
