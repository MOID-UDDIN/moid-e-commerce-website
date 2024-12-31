
import Link from "next/link";

export default function Home() {
  return (
    <div>
      
      <section
      className="hero h-screen flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/shirts-background.jpg')" }} // Replace with your shirts background image
    >
      <div className="pl-0 md:pl-16 text-white text-center">
        <h1 className="text-6xl font-bold drop-shadow-md">
          Welcome to The Shirt's
        </h1>
        <p className="text-2xl mt-4">
          Your one-stop shop for premium shirts
        </p>
        <Link href="/products">
        <button
          className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-700 rounded-md font-bold"
        >
          Shop Now
        </button>
        </Link>
      </div>
    </section>
      
    </div>
  );
}
