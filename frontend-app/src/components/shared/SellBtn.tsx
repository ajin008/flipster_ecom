import React from "react";
import { Button } from "../ui/button";
import { Banknote } from "lucide-react";
import { useRouter } from "next/navigation";

export const SellBtn = () => {
  const router = useRouter();
  const handleBtn = async () => {
    router.push("/selling");
  };
  return (
    <Button variant="gaming" className="gap-2" onClick={handleBtn}>
      <Banknote className="h-4 w-4" />
      Sell
    </Button>
  );
};
