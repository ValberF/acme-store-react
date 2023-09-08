"use client";
import Image from "next/image";
import Link from "next/link";
import AcmeIcon from "../../../public/acme-icon.png";
import { FaShoppingCart } from "react-icons/fa";
import { CartContent, HeaderContent, NavContent } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { logout } from "../../redux/user/slice";
import { useEffect, useMemo, useState } from "react";

export default function Header() {
  const { currentUser } = useSelector((state: RootState) => state.userReducer);
  const products = useSelector((state: RootState) => state.cartReducer);
  const router = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser.email === "") {
      dispatch(logout());
      localStorage.removeItem("_access");
    }
  }, []);

  const productsCount = useMemo(() => {
    return products.currentCart.reduce((acc, curr) => acc + curr.quantity, 0);
  }, [products.currentCart]);

  const handleLogoutClick = () => {
    dispatch(logout());
    localStorage.removeItem("_access");
  };

  return (
    <>
      <HeaderContent>
        <div></div>
        <Link href="/">
          <Image src={AcmeIcon} width={200} height={100} alt="Acme Icon" />
        </Link>
        <NavContent>
          {currentUser.email !== "" ? (
            <Link href="/" id="logged" onClick={handleLogoutClick}>
              Olá, {currentUser.name}! Clique aqui para sair.
            </Link>
          ) : (
            <Link href="/login">Login/Cadastro</Link>
          )}
          <CartContent onClick={() => router.push("/cart")}>
            <FaShoppingCart size={30} />
            <span>({productsCount})</span>
          </CartContent>
        </NavContent>
      </HeaderContent>
    </>
  );
}
