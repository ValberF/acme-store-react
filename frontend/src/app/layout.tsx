"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { Provider } from "react-redux";
import store from "@/redux/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Acme Store",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
