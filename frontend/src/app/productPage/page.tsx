"use client";
import Image from "next/image";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { ProductContent, ProductData, Button, ProductImage } from "./styles";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { addProduct } from "../../redux/cart/slice";
import { Product } from "@/models/ProductProps.model";
import { addFavorite, removeFavorite } from "../../redux/favorite/slice";

export default function ProductPage() {
  const favorite = useSelector((state: RootState) => state.favoriteReducer);
  const { currentProduct } = useSelector(
    (state: RootState) => state.productReducer
  );
  const router = useRouter();
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentProduct.name === "") {
      router.push("/");
    }

    if (
      favorite.currentFavorites.find(
        (element: Product) => element.id === currentProduct.id
      )
    ) {
      setMessage("Remover Favorito");
    } else {
      setMessage("Favoritar");
    }
  }, []);

  const handleAddProduct = (product: Product) => {
    dispatch(addProduct(product));
  };

  const handleAddFavorite = (props: Product) => {
    const access = localStorage.getItem("_access");

    if (access) {
      if (
        favorite.currentFavorites.find(
          (element: Product) => element.id === props.id
        )
      ) {
        dispatch(removeFavorite(props.id));
        setMessage("Favoritar");
      } else {
        dispatch(addFavorite(props));
        setMessage("Remover Favorito");
      }
    } else {
      alert("Precisa estar logado para favoritar um produto!");
    }
  };

  return (
    <>
      <ProductContent>
        <ProductImage>
          <Image
            src={currentProduct.photo}
            width={600}
            height={300}
            alt="Foto do produto"
          />
          <span onClick={() => handleAddFavorite(currentProduct)}>
            {message}
          </span>
          <Button onClick={() => handleAddProduct(currentProduct)}>
            Adicionar ao carrinho
          </Button>
        </ProductImage>
        <ProductData>
          <h1>Nome: {currentProduct.name}</h1>
          <h2>Preço: R$ {currentProduct.price},00</h2>
          <p>Descrição: {currentProduct.description}</p>
        </ProductData>
      </ProductContent>
    </>
  );
}
