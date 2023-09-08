"use client";
import Image from "next/image";
import { Product } from "@/models/ProductProps.model";
import { Card, Button } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { setProduct } from "../../redux/product/slice";
import { addProduct } from "../../redux/cart/slice";
import { addFavorite, removeFavorite } from "../../redux/favorite/slice";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";

export default function ProductCard(props: Product) {
  const favorite = useSelector((state: RootState) => state.favoriteReducer);
  const [message, setMessage] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (
      favorite.currentFavorites.find(
        (element: Product) => element.id === props.id
      )
    ) {
      setMessage("Remover Favorito");
    } else {
      setMessage("Favoritar");
    }
  }, []);

  const dispatch = useDispatch();

  const handleOpenProduct = (props: Product) => {
    dispatch(setProduct(props));

    router.push("/productPage");
  };

  const handleAddProduct = (props: Product) => {
    dispatch(addProduct(props));
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
      <Card>
        <Image
          onClick={() => handleOpenProduct(props)}
          src={props.photo}
          width={200}
          height={100}
          alt="Foto do produto"
        />
        <div>
          <section>
            <h3>{props.name}</h3>
            <span onClick={() => handleAddFavorite(props)}>{message}</span>
          </section>
          <span>R$ {props.price},00</span>
          <Button onClick={() => handleAddProduct(props)}>
            Adicionar ao carrinho
          </Button>
        </div>
      </Card>
    </>
  );
}
