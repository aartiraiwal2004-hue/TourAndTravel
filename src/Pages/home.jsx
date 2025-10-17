import React from "react";
import Banner from "../Component/Home/Banner";
import VehicleCarousel from "../Component/VehicleCart/VehicleCarousel";
import VehicleAutoScroll from "../Component/VehicleCart/VehicleAutoScroll";
import FooterActionBar from "../Component/FooterActionBar";
import Packages from "../Component/Package/Packages";
import ImageNotification from "../Component/Home/ImageNotification";

const Home = () => {
  return (
    <div className="w-full">
      {/* Banner Section */}
      <Banner />
      <ImageNotification />
      <VehicleAutoScroll />

      {/* Vehicle Section */}
      <VehicleCarousel />

      {/* Other content */}
      <div className="p-6 text-center">
        <Packages />
      </div>
      <div className="bg-gradient-to-r mt-[-10px] from-pink-100 via-white to-sky-100 py-6 px-4 rounded-2xl shadow-md text-center">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-pink-600 mb-2">
          We’re Expanding!
        </h3>
        <p className="text-gray-700 text-base sm:text-lg font-medium">
          Opening new offices soon in{" "}
          <span className="font-semibold text-sky-600">Indore</span>,{" "}
          <span className="font-semibold text-sky-600">Ujjain</span>,{" "}
          <span className="font-semibold text-sky-600">Dewas</span>, and{" "}
          <span className="font-semibold text-sky-600">Bhopal</span>.
        </p>
      </div>
      {/* Footer */}
      <FooterActionBar />
    </div>
  );
};

export default Home;
