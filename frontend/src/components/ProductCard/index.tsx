"use client";
import Image from "next/image";
import { Product } from "@/models/ProductProps.model";
import { Card, Button } from "./styles";
import TestImage from "../../../public/urso.jpg";

export default function ProductCard(props: Product) {
  const teste = (id: number) => {
    alert(id)
  };

  return (
    <>
      <Card>
        <Image src={TestImage} width={200} height={100} alt="Acme Icon" />
        <div>
          <h3>{props.name}</h3>
          <span>R$ 32.50</span>
          <Button onClick={() => teste(props.id)}>
            Adicionar ao carrinho
          </Button>
        </div>
      </Card>
    </>
  );
}
