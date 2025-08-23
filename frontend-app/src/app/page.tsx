import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/layout/HeroSection";
import ProductCardGrid from "@/components/Home/ProductCard";
import SearchBar from "@/components/Home/SearchBar";
import FloatingSellBtn from "@/components/shared/FloatingSellBtn";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <SearchBar />
      <ProductCardGrid />
      <Footer />
      <FloatingSellBtn />
    </>
  );
}
