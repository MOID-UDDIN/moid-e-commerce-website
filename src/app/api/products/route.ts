import { NextResponse } from "next/server";



const products = [
  { id: 1, name: "Casual Shirt", price: 1200, image: "/shirt1.jpg" },
  { id: 2, name: "Formal Shirt", price: 1500, image: "/shirt2.jpg" },
  { id: 3, name: "Printed Shirt", price: 1800, image: "/shirt3.jpg" },
  { id: 4, name: "Denim Shirt", price: 2000, image: "/shirt4.jpg" },
  { id: 5, name: "Linen Shirt", price: 2500, image: "/shirt5.jpg" },
  { id: 6, name: "Striped Shirt", price: 1700, image: "/shirt6.jpg" },
  { id: 7, name: "Checkered Shirt", price: 1900, image: "/shirt7.jpg" },
  { id: 8, name: "Slim Fit Shirt", price: 2200, image: "/shirt8.jpg" },
  { id: 9, name: "Classic White Shirt", price: 1300, image: "/shirt9.jpg" },
];

export async function GET() {
  return NextResponse.json(products);
}



