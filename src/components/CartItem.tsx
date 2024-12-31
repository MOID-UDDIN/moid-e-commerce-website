import Image from "next/image";

interface CartItemProps {
  item: {
    id: number;
    name: string;
    quantity: number;
    image: string; 
  };
  removeFromCart: (id: number) => void;
}

const CartItem = ({ item, removeFromCart }: CartItemProps) => (
  <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition mb-4">
    
    <div className="flex items-center space-x-4">
     
      <div className="w-16 h-16 relative">
        <Image
          src={item.image}
          alt={item.name}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      
      <div>
        <h2 className="font-bold text-gray-800">{item.name}</h2>
        <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
      </div>
    </div>
    
    <button
      onClick={() => removeFromCart(item.id)}
      className="text-red-500 font-medium hover:underline"
    >
      Remove
    </button>
  </div>
);

export default CartItem;

  