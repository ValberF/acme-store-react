"use client";
import products from "../helpers/utils/products";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import {
  InputContainer,
  InputFavorite,
  InputSearch,
  ProductsContent,
} from "./styles";
import { Product } from "@/models/ProductProps.model";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function Home() {
  const favorite = useSelector((state: RootState) => state.favoriteReducer);
  const [acmeProducts, setAcmeProducts] = useState([] as Product[]);
  const [flagFavorites, setFlagFavorites] = useState(false);
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

  useEffect(() => {
    if (flagFavorites) {
      setFilteredProducts(favorite.currentFavorites);
    } else {
      setFilteredProducts(acmeProducts);
    }
  }, [flagFavorites]);

  const filterBySearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value.toLowerCase();

    if (flagFavorites) {
      setFilteredProducts(
        favorite.currentFavorites.filter((element) =>
          element.name.toLowerCase().includes(search)
        )
      );
    } else {
      setFilteredProducts(
        acmeProducts.filter((element) =>
          element.name.toLowerCase().includes(search)
        )
      );
    }
  };

  return (
    <>
      <InputContainer>
        <InputSearch
          placeholder="Buscar produto..."
          onChange={filterBySearch}
        />
        <div>
          <InputFavorite
            onChange={() => setFlagFavorites(!flagFavorites)}
            type="checkbox"
            id="favorite-filter"
          />
          <label htmlFor="favorite-filter">Favoritos</label>
        </div>
      </InputContainer>
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
                  quantity={element.quantity}
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
                  quantity={element.quantity}
                />
              );
            })}
      </ProductsContent>
    </>
  );
}
