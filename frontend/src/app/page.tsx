"use client";
import products from "../helpers/utils/products";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { InputSearch, ProductsContent } from "./styles";
import { Product } from "@/models/ProductProps.model";

export default function Home() {
  const [acmeProducts, setAcmeProducts] = useState([] as Product[]);
  const [filteredProducts, setFilteredProducts] = useState([] as Product[]);

  useEffect(() => {
    if (!localStorage.getItem("_products")) {
      setAcmeProducts(products);
      localStorage.setItem("_products", JSON.stringify(products));
    } else {
      setAcmeProducts(JSON.parse(localStorage.getItem("_products") || "[]"));
    }

    setFilteredProducts(acmeProducts);
  }, []);

  const filterBySearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value.toLowerCase();
    setFilteredProducts(
      acmeProducts.filter((element) =>
        element.name.toLowerCase().includes(search)
      )
    );
  };

  return (
    <>
      <InputSearch placeholder="Buscar produto..." onChange={filterBySearch} />
      <ProductsContent>
        {filteredProducts.length == 0
          ? acmeProducts.map((element) => {
              return (
                <ProductCard
                  key={element.id}
                  id={element.id}
                  price={element.price}
                  name={element.name}
                  photo={element.photo}
                  description={element.description}
                />
              );
            })
          : filteredProducts?.map((element) => {
              return (
                <ProductCard
                  key={element.id}
                  id={element.id}
                  price={element.price}
                  name={element.name}
                  photo={element.photo}
                  description={element.description}
                />
              );
            })}
      </ProductsContent>
    </>
  );
}
