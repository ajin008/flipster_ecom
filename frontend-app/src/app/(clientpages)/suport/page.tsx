"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

type onsubmitProps = {
  name: string;
};

export default function Page() {
  const { register, handleSubmit } = useForm<onsubmitProps>();
  const [data, setData] = useState<onsubmitProps | null>(null);

  const onsubmit = (data: onsubmitProps) => {
    setData(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onsubmit)}>
        <input placeholder="Name" {...register("name", { required: true })} />
        <button type="submit">
          <span>submit</span>
        </button>
      </form>
      <div>
        <p>{data?.name} </p>
      </div>
    </>
  );
}
