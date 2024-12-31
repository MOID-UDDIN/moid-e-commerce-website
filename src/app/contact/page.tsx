"use client";

import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <section className="contact-form border max-w-2xl w-full mx-auto p-8 bg-white shadow-lg rounded-lg space-y-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800">
          Get in Touch
        </h2>
        <form className="space-y-4">
          
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />

          
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />

          
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

         
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            rows={5}
            required
          ></textarea>

          
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
