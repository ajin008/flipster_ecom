"use client ";
import { MyLoginContextProvider } from "./LoginContext";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MyLoginContextProvider>{children}</MyLoginContextProvider>;
}
