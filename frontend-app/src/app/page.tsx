import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/layout/HeroSection";
import ProductCardGrid from "@/components/layout/ProductCard";
import SearchBar from "@/components/layout/SearchBar";
import React from "react";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <SearchBar />
      <ProductCardGrid />
      <Footer />
    </>
  );
}
