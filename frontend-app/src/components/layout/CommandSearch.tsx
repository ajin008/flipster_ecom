"use client";

import { Command, CommandInput } from "@/components/ui/command";

export default function CommandSearch() {
  return (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="search games..." />
    </Command>
  );
}
