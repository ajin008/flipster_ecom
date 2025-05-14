import React from "react";
import { ProductPageProps } from "./interface";

export default function page({ params }: ProductPageProps) {
  return <div>{params.id}</div>;
}
