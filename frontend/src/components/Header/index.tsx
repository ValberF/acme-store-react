"use client";
import Image from "next/image";
import Link from "next/link";
import AcmeIcon from "../../../public/acme-icon.png";
import { FaShoppingCart } from "react-icons/fa";
import { CartContent, HeaderContent, NavContent } from "./styles";

export default function Header() {
  const productsCount = 0;

  return (
    <>
      <HeaderContent>
        <div></div>
        <Link href="/">
          <Image src={AcmeIcon} width={200} height={100} alt="Acme Icon" />
        </Link>
        <NavContent>
          <Link href="/login">Login/Cadastro</Link>
          <CartContent>
            <FaShoppingCart size={30} />
            <span>({productsCount})</span>
          </CartContent>
        </NavContent>
      </HeaderContent>
    </>
  );
}
