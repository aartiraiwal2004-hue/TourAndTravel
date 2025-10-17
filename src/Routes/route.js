import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Pages/Layout";

// Lazy load pages
const Home = lazy(() => import("../Pages/home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // ✅ Wrap with layout
    children: [
      {
        index: true, // default page for "/"
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <Home />
          </React.Suspense>
        ),
      },
    ],
  },
]);

export default router;
