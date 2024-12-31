'use client';

import { useEffect, useState } from "react";
import CartItem from "@/components/CartItem"; 

export default function Cart() {
  const [cart, setCart] = useState<any[]>([]);

  
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  
  const removeFromCart = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Your Shopping Cart</h1>
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
