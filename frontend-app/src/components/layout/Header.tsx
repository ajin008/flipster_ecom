"use client";
import React from "react";
import { Button } from "../ui/button";
import CommandSearch from "./CommandSearch";
import ZesTEXLogo from "./ZesTEXLogo";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleBtn = () => {
    router.push("/login");
  };
  return (
    <header className="bg-bg-primary">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Left Side: Logo */}
        <div className="w-full sm:w-auto flex items-center justify-between">
          <ZesTEXLogo />
          <Button className="sm:hidden">GET IN</Button>
        </div>

        {/* Right Side: Search + Desktop Button grouped */}
        <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-2 sm:ml-auto">
          <CommandSearch />
          <Button className="hidden sm:block" onClick={handleBtn}>
            GET IN
          </Button>
        </div>
      </div>
    </header>
  );
}
