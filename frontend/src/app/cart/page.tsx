"use client";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  CartContent,
  Checkout,
  ProductContent,
  ProductData,
  QuantityContainer,
} from "./styles";
import { RootState } from "@/redux/store";
import { FaMinus, FaPlus } from "react-icons/fa";
import {
  increaseProductQuantity,
  decreaseProductQuantity,
  clearCart,
} from "../../redux/cart/slice";
import { useMemo } from "react";

export default function ProductPage() {
  const products = useSelector((state: RootState) => state.cartReducer);
  const { currentUser } = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();

  const productsPrice = useMemo(() => {
    return products.currentCart.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );
  }, [products.currentCart]);

  const increaseProduct = (id: number) => {
    dispatch(increaseProductQuantity(id));
  };

  const decreaseProduct = (id: number) => {
    dispatch(decreaseProductQuantity(id));
  };

  const checkout = () => {
    const access = localStorage.getItem("_access");

    if (access) {
      alert(
        `COMPRA FINALIZADA PARA O USUÁRIO ${
          currentUser.name
        } NO TOTAL DE R$ ${productsPrice},00 COM OS SEGUINTES PRODUTOS ${JSON.stringify(
          products.currentCart
        )}`
      );

      dispatch(clearCart());
    } else {
      alert("Precisa estar logado para finalizar a compra!");
    }
  };

  return (
    <>
      <CartContent>
        {products.currentCart ? (
          products.currentCart.map((element) => {
            return (
              <ProductContent key={element.id}>
                <Image
                  src={element.photo}
                  width={300}
                  height={150}
                  alt="Foto do produto"
                />
                <ProductData>
                  <h1>{element.name}</h1>
                  <h2>R$ {element.price * element.quantity},00</h2>
                  <QuantityContainer>
                    <FaMinus
                      onClick={() => decreaseProduct(element.id)}
                      size={10}
                    />
                    <span>{element.quantity}</span>
                    <FaPlus
                      onClick={() => increaseProduct(element.id)}
                      size={10}
                    />
                  </QuantityContainer>
                </ProductData>
              </ProductContent>
            );
          })
        ) : (
          <h1>Sem elementos</h1>
        )}
        <Checkout>
          <span id="total-price">Valor Total: R$ {productsPrice},00</span>
          <Button onClick={checkout}>Finalizar Compra</Button>
        </Checkout>
      </CartContent>
    </>
  );
}
