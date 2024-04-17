import Image from "next/image";
import { Inter } from "next/font/google";
import { MyFirstComponent } from "@/components/practice/MyFirstComponent";
import { useState } from "react";
import HeaderComponent from "@/components/practice/Header";
import FooterComponent from "@/components/practice/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  
  return (
    <>
      <>
        <MyFirstComponent>
          <div>First Component Children</div>
        </MyFirstComponent>
      </>
    </>
  );
}
