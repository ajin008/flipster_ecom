"use client";

import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoginProp } from "@/lib/interface";
import { useRouter } from "next/navigation";
import LeftBanner from "@/components/layout/LeftBanner";
import ZesTEXLogo from "@/components/layout/ZesTEXLogo";
import { MyLoginContext } from "./LoginContext";
import { IoChevronBackOutline } from "react-icons/io5";

// Custom styles for form error messages
const errorStyles = {
  color: "#e7e7ed", // Updated to the requested color
  fontWeight: 500,
  marginTop: "4px",
};

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const { handleLogin } = useContext(MyLoginContext);

  const router = useRouter();
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginProp) => {
    handleLogin(data);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex min-h-screen ">
      {/* left side */}
      <div className="hidden lg:flex lg:w-1/2 bg-muted/20 flex-col items-center justify-center bg-[url('/login.jpg')] bg-cover bg-center">
        <LeftBanner type="login" />
      </div>
      {/* right side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 relative">
        <button
          className="hidden lg:block absolute top-4 right-4 text-accent-foreground px-4 py-2 rounded-md "
          onClick={() => router.push("/")}
        >
          <IoChevronBackOutline size={32} />
        </button>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Card className="border border-border bg-card shadow-lg">
            <CardHeader className="space-y-1">
              <div className="flex items-center justify-center mb-2">
                <div className="text-3xl  ">
                  <ZesTEXLogo />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-foreground text-center">
                Welcome back
              </CardTitle>
              <CardDescription className="text-muted-foreground text-center">
                Enter your credentials to sign in to zesTEX
              </CardDescription>
            </CardHeader>

            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    rules={{
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative">
                            <FiMail className="absolute left-3 top-3 text-muted-foreground" />
                            <Input
                              placeholder="name@example.com"
                              className="pl-10 bg-muted border-border focus:border-primary"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <div className="custom-error-message">
                          <FormMessage style={errorStyles} />
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    rules={{
                      required: "Password is required",
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative">
                            <FiLock className="absolute left-3 top-3 text-muted-foreground" />
                            <Input
                              type={showPassword ? "text" : "password"}
                              placeholder="••••••••"
                              className="pl-10 bg-muted border-border focus:border-primary"
                              {...field}
                            />
                            <button
                              type="button"
                              className="absolute right-3 top-3 text-muted-foreground"
                              onClick={togglePasswordVisibility}
                            >
                              {showPassword ? <FiEyeOff /> : <FiEye />}
                            </button>
                          </div>
                        </FormControl>
                        <div className="custom-error-message">
                          <FormMessage style={errorStyles} />
                        </div>
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-end">
                    <a
                      href="/forgot-password"
                      className="text-sm text-primary hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Sign In
                  </Button>
                </form>
              </Form>

              <div className="relative flex items-center justify-center mt-4 mb-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">OR</span>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full border-border hover:bg-muted hover:text-foreground bg-muted border-epic"
              >
                <FcGoogle className="mr-2 h-5 w-5" />
                Sign in with Google
              </Button>
            </CardContent>

            <CardFooter className="flex justify-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <a href="/signup" className="text-primary hover:underline">
                  Create account
                </a>
              </p>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
