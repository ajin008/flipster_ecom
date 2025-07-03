import { SignupContextProvider } from "./SignupContext";
export default function signupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SignupContextProvider>{children}</SignupContextProvider>;
}
