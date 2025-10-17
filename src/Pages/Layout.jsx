import React from "react";
import Navbar from "../Component/Layout/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <div className="sticky  w-full">
        <Navbar />
      </div>

      <main className="p-4 ">
        <Outlet />
      </main>
    </div>
  );
}
