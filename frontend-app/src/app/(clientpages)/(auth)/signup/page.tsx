"use client";

import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";

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
import { IoChevronBackOutline } from "react-icons/io5";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LeftBanner from "@/components/layout/LeftBanner";

import ZesTEXLogo from "@/components/layout/ZesTEXLogo";
import { MySignupContext } from "./SignupContext";
import TermsConditions from "@/components/layout/ TermsConditions";
import { SignupProp } from "@/lib/interface";
import PropagateLoader from "@/components/shared/PropagateLoader";

// Custom styles for form error messages
const errorStyles = {
  color: "#e7e7ed", // Light gray color for errors as requested
  fontWeight: 500,
  marginTop: "4px",
};

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { handleSignup, isOtpOpen, loading } = useContext(MySignupContext);

  const history = useRouter();

  // Explicitly type the form with SignupData
  const form = useForm<SignupProp, undefined, SignupProp>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    },
  });

  const onSubmit = (data: SignupProp) => {
    handleSignup(data);
    // Handle form submission
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:flex lg:w-1/2 bg-muted/20 flex-col items-center justify-center  bg-[url('/signup.jpg')] bg-cover bg-center bg-black/50 ">
        <LeftBanner type="signup" />
      </div>
      {isOtpOpen ? (
        <Otp />
      ) : (
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 relative -mt-8 lg:mt-0">
          <button
            className="hidden lg:block absolute top-4 right-4 text-accent-foreground px-4 py-2 rounded-md hover:bg-muted/50 transition-colors"
            onClick={() => history.back()}
          >
            <IoChevronBackOutline size={32} />
          </button>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md"
          >
            <Card className="border border-border bg-card shadow-lg relative">
              <button
                className="lg:hidden absolute top-4 right-4 text-accent-foreground hover:bg-muted/50 transition-colors rounded-full p-1 z-10"
                onClick={() => history.back()}
              >
                <IoClose size={24} />
              </button>
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-center mb-2">
                  <div className="text-3xl ">
                    <ZesTEXLogo />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-foreground text-center">
                  Create an account
                </CardTitle>
                <CardDescription className="text-muted-foreground text-center">
                  Enter your details to sign up for FlipSter
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
                      name="username"
                      rules={{ required: "Username is required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="relative">
                              <FiUser className="absolute left-3 top-3 text-muted-foreground" />
                              <Input
                                placeholder="gamertag"
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
                        minLength: {
                          value: 8,
                          message: "Password must be at least 8 characters",
                        },
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

                    <FormField
                      control={form.control}
                      name="confirmPassword"
                      rules={{
                        required: "Please confirm your password",
                        validate: (value) =>
                          value === form.getValues("password") ||
                          "Passwords do not match",
                      }}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="relative">
                              <FiLock className="absolute left-3 top-3 text-muted-foreground" />
                              <Input
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="••••••••"
                                className="pl-10 bg-muted border-border focus:border-primary"
                                {...field}
                              />
                              <button
                                type="button"
                                className="absolute right-3 top-3 text-muted-foreground"
                                onClick={toggleConfirmPasswordVisibility}
                              >
                                {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                              </button>
                            </div>
                          </FormControl>
                          <div className="custom-error-message">
                            <FormMessage style={errorStyles} />
                          </div>
                        </FormItem>
                      )}
                    />

                    <TermsConditions form={form} />

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      {loading ? <PropagateLoader /> : "Create Account"}
                    </Button>
                  </form>
                </Form>

                <div className="relative flex items-center justify-center mt-4 mb-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card/80 backdrop-blur-sm px-3 py-1 text-muted-foreground border border-border/20 rounded-full">
                      OR
                    </span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-border hover:bg-muted hover:text-foreground border-epic"
                >
                  <FcGoogle className="mr-2 h-5 w-5" />
                  Sign up with Google
                </Button>
              </CardContent>

              <CardFooter className="flex justify-center">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <a href="/login" className="text-primary hover:underline">
                    Sign in
                  </a>
                </p>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      )}
    </div>
  );
}
