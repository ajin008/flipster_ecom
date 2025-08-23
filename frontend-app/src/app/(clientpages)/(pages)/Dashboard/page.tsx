"use client";
import StoreOverview from "@/components/Dashboard/StoreOverview";
import React from "react";
import TabNavigation from "@/components/Dashboard/TabNavigation";

export default function page() {
  return (
    <>
      <StoreOverview />
      <TabNavigation />
    </>
  );
}
