import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (

    <div >
     
     <Header />
     <Hero />
     <Features />
      <Pricing />
    </div>
  );
}
