import React from "react";
import { Button } from "../ui/button";
import { Banknote } from "lucide-react";

export const SellBtn = () => {
  return (
    <Button variant="gaming" className="gap-2">
      <Banknote className="h-4 w-4" />
      Sell
    </Button>
  );
};
