import React, { Suspense } from "react";
import { HeadProvider, Title, Meta } from "react-head";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./Comman/Loader";
import router from "./Routes/route.js";

export default function App() {
  return (
    <HeadProvider>
      <Suspense
        fallback={
          <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 z-50">
            <Loader />
          </div>
        }
      >
        <Title>Shrinath Tour&Travels</Title>
        <Meta name="description" content="Admin dashboard application" />
        <RouterProvider router={router} />
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={true}
          closeOnClick
          pauseOnHover
          draggable
          pauseOnFocusLoss
          className="mt-10"
        />
      </Suspense>
    </HeadProvider>
  );
}
