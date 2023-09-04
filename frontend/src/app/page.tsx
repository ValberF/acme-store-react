"use client";
import products from "../helpers/utils/products";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { ProductsContent } from "./styles";

export default function Home() {
  const [acmeProducts, setAcmeProducts] = useState([] as string[]);

  useEffect(() => {
    setAcmeProducts(products);
  }, []);

  return (
    <>
      <ProductsContent>
        {acmeProducts.map((element, index) => {
          return (
            <ProductCard
              key={index}
              id={index}
              price={"32.50"}
              name={element}
            />
          );
        })}
      </ProductsContent>
    </>
  );
}
