'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ProductDetails = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState<any>(null);
  const [cart, setCart] = useState<any[]>([]);
  const router = useRouter();

  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/fetching`);
        const data = await res.json();

        
        if (id && typeof id === 'string') {
          const selectedProduct = data.find(
            (p: any) => p.id === parseInt(id, 10)
          );
          if (selectedProduct) setProduct(selectedProduct);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    if (id) fetchProduct();

    const storedCart = localStorage.getItem('cart');
    if (storedCart) setCart(JSON.parse(storedCart));
  }, [id]);

  const addToCart = (product: any) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      let updatedCart;
      if (existingItem) {
        updatedCart = prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...prevCart, { ...product, quantity: 1 }];
      }
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const goToCart = () => {
    router.push('/cart');
  };

  if (!product) return <p className='min-h-screen'>Loading Wait...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <img src={product.image} alt={product.name} className="mb-4" />
      <p className="text-3xl mb-4 text-black">{product.description}</p>
      <p className="text-xl font-semibold mb-4">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white py-2 px-4 rounded  hover:text-red-500"
      >
        Add to Cart
      </button>

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
};

export default ProductDetails;