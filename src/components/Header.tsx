"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">The Shirt's</h1>
        <nav className="hidden md:flex space-x-4">
          <Link  className = " hover:text-red-500" href="/">Home</Link>
          <Link  className = " hover:text-red-500" href="/products">Products</Link>
          <Link  className = " hover:text-red-500" href="/cart">Cart</Link>
          <Link className = " hover:text-red-500" href="/about">About Us</Link>
          <Link className = " hover:text-red-500" href="/contact">Contact</Link>
        </nav>
        
        <button
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white my-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </div>
     
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 p-4 space-y-4">
          <Link href="/" className="block ">
            Home
          </Link>
          <Link href="/products" className="block hover:text-red-500">
            Products
          </Link>
          <Link href="/cart" className="block hover:text-red-500">
            Cart
          </Link>
          <Link href="/about" className="block hover:text-red-500">
            About Us
          </Link>
          <Link href="/contact" className="block hover:text-red-500">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
