"use client";
import React from "react";
import { Button } from "../ui/button";
import CommandSearch from "./CommandSearch";
import ZesTEXLogo from "./ZesTEXLogo";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header className="bg-bg-primary px-4 py-2">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Top section: Logo + mobile GET IN */}
        <div className="w-full sm:w-auto flex items-center justify-between">
          <ZesTEXLogo />
          <Button className="sm:hidden" onClick={() => router.push("/login")}>
            GET IN
          </Button>
        </div>

        {/* Bottom / Right section: Search + desktop GET IN */}
        <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-2 sm:ml-auto">
          <CommandSearch />
          <Button
            className="hidden sm:block"
            onClick={() => router.push("/login")}
          >
            GET IN
          </Button>
        </div>
      </div>
    </header>
  );
}
