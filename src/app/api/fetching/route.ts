import { NextResponse } from "next/server";

const products = [
  { id: 1, name: "Casual Shirt", price: 1200, image: "/shirt1.jpg", description: "A comfortable and stylish casual shirt perfect for everyday wear." },
  { id: 2, name: "Formal Shirt", price: 1500, image: "/shirt2.jpg", description: "An elegant formal shirt ideal for office and professional events." },
  { id: 3, name: "Printed Shirt", price: 1800, image: "/shirt3.jpg", description: "A trendy printed shirt that adds a splash of style to your wardrobe." },
  { id: 4, name: "Denim Shirt", price: 2000, image: "/shirt4.jpg", description: "A rugged and versatile denim shirt suitable for any casual occasion." },
  { id: 5, name: "Linen Shirt", price: 2500, image: "/shirt5.jpg", description: "A lightweight and breathable linen shirt for a classy and relaxed look." },
  { id: 6, name: "Striped Shirt", price: 1700, image: "/shirt6.jpg", description: "A classic striped shirt that never goes out of style." },
  { id: 7, name: "Checkered Shirt", price: 1900, image: "/shirt7.jpg", description: "A bold checkered shirt that adds a unique charm to your outfit." },
  { id: 8, name: "Slim Fit Shirt", price: 2200, image: "/shirt8.jpg", description: "A modern slim-fit shirt that offers a sharp and tailored look." },
  { id: 9, name: "Classic White Shirt", price: 1300, image: "/shirt9.jpg", description: "A timeless white shirt that pairs well with any outfit." }
];

export async function GET() {
  return NextResponse.json(products);
}
