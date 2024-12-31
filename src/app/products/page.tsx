'use client';

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { useRouter } from "next/navigation";  

export default function Products() {
  const [products, setProducts] = useState<any[]>([]);
  const [cart, setCart] = useState<any[]>([]);

  const router = useRouter(); 

  
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));

    
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

 
  const addToCart = (product: any) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        const updatedCart = prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return updatedCart;
      } else {
        const updatedCart = [...prevCart, { ...product, quantity: 1 }];
        
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return updatedCart;
      }
    });
  };

 
  const goToCart = () => {
    router.push('/cart'); 
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product: any) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </main>

      
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg p-4">
        <button
          className="w-full px-4 py-2 bg-blue-500 text-white rounded  hover:text-red-500"
          onClick={goToCart}
        >
          Go to Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})
        </button>
      </div>
    </div>
  );
}
