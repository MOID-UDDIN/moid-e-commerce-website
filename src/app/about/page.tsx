"use client";

import React from "react";

const about = () => {
  return (
    <section
      className="about h-screen flex items-center justify-center bg-cover bg-center text-white px-10"
      style={{ backgroundImage: "url('/about-us-bg.jpg')" }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-md w-11/12 sm:w-1/2">
        <h2 className="text-4xl font-bold mb-4 text-center sm:text-5xl">
          About Us
        </h2>
        <p className="text-lg sm:text-xl">
          Welcome to <strong>The Shirts</strong>, your ultimate destination for premium quality shirts that combine style, comfort, and durability. Our goal is to provide a wide range of designs that suit every personality and occasion, ensuring that you always look your best. Whether you prefer classic elegance or modern trends, we have something special for everyone. At The Shirts, we believe in celebrating individuality and helping you express yourself through impeccable fashion.
        </p>
      </div>
    </section>
  );
};

export default about;
