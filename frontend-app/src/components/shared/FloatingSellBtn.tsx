"use client";
import { SellBtn } from "./SellBtn";

export default function FloatingSellBtn() {
  return (
    <>
      {/* Mobile: bottom center */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 lg:hidden">
        <SellBtn />
      </div>

      {/* Desktop: bottom right */}
      <div className="hidden lg:block fixed bottom-6 right-6 z-50">
        <SellBtn />
      </div>
    </>
  );
}
