import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/layout/HeroSection";
import ProductCardGrid from "@/components/layout/ProductCard";
import React from "react";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductCardGrid />
      <Footer />
    </>
  );
}
