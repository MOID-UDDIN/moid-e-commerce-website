'use client';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    description?: string;
  };
  addToCart: (product: any) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  return (
    <div className="border rounded-lg p-4 flex flex-col items-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-30 object-cover mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <p className="text-lg mb-4 text-black">{product.description}</p>
      <p className="text-lg mb-4">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white py-2 px-4 rounded mb-2  hover:text-red-500"
      >
        Add to Cart
      </button>
      <button
        onClick={() => window.location.href = `/product/${product.id}`}
        className="bg-green-500 text-white py-2 px-4 rounded  hover:text-red-500"
      >
        Product Details
      </button>
    </div>
  );
};

export default ProductCard;

