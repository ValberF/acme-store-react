"use client";
import Image from "next/image";
import { Product } from "@/models/ProductProps.model";
import { Card, Button } from "./styles";

export default function ProductCard(props: Product) {
  const teste = (description: string) => {
    alert(description);
  };

  return (
    <>
      <Card>
        <Image src={props.photo} width={200} height={100} alt="Acme Icon" />
        <div>
          <h3>{props.name}</h3>
          <span>R$ {props.price},00</span>
          <Button onClick={() => teste(props.description)}>
            Adicionar ao carrinho
          </Button>
        </div>
      </Card>
    </>
  );
}
