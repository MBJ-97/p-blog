import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex min-h-screen flex-col dark:bg-gray dark:text-white">
        <Navbar />
        <div className="container mx-auto mt-20 w-full max-w-5xl px-3">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}
