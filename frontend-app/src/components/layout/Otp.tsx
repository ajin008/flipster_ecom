"use client";

import { useContext, useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { IoChevronBackOutline } from "react-icons/io5";
import { ControllerRenderProps } from "react-hook-form";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import ZesTEXLogo from "@/components/layout/ZesTEXLogo";
import { MySignupContext } from "@/app/(clientpages)/(auth)/signup/SignupContext";
import { generateOtp } from "@/app/(clientpages)/(auth)/signup/api";
import PropagateLoader from "../shared/PropagateLoader";

const errorStyles = {
  color: "#e7e7ed",
  fontWeight: 500,
  marginTop: "4px",
};

interface OTPFormData {
  otp1: string;
  otp2: string;
  otp3: string;
  otp4: string;
  otp5: string;
  otp6: string;
}

const Otp = () => {
  const [resendTimer, setResendTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const { loading, signUpData, handleSignupWithOtp, setIsOtpOpen } =
    useContext(MySignupContext);

  const userEmail = signUpData?.email;

  const form = useForm<OTPFormData>({
    defaultValues: {
      otp1: "",
      otp2: "",
      otp3: "",
      otp4: "",
      otp5: "",
      otp6: "",
    },
  });

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [resendTimer]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleInputChange = (
    value: string,
    index: number,
    field: ControllerRenderProps<OTPFormData, keyof OTPFormData>
  ) => {
    const sanitizedValue = value.replace(/[^0-9]/g, "").slice(0, 1);
    field.onChange(sanitizedValue);
    if (sanitizedValue && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const target = e.currentTarget as HTMLInputElement;
    if (e.key === "Backspace" && target.value === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData("text")
      .replace(/[^0-9]/g, "")
      .slice(0, 6);
    if (pastedData.length === 6) {
      const otpValues = pastedData.split("");
      ["otp1", "otp2", "otp3", "otp4", "otp5", "otp6"].forEach((name, idx) =>
        form.setValue(name as keyof OTPFormData, otpValues[idx] || "")
      );
      inputRefs.current[5]?.focus();
      setTimeout(() => {
        form.handleSubmit(onSubmit)();
      }, 100);
    }
  };

  const onSubmit = async (data: OTPFormData) => {
    const otp = Object.values(data).join("");
    if (otp.length === 6) {
      setIsVerifying(true);
      await handleSignupWithOtp(otp);
      setIsVerifying(false);
    }
  };

  const handleResend = async () => {
    if (!userEmail) return;
    try {
      form.reset();
      inputRefs.current[0]?.focus();
      setCanResend(false);
      setResendTimer(30);
      await generateOtp(userEmail);
    } catch (err) {
      console.error("Resend OTP failed", err);
    }
  };

  const handleGoBack = () => {
    setIsOtpOpen(false);
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 relative min-h-screen lg:min-h-0">
      <button
        className="hidden lg:block absolute top-4 right-4 text-accent-foreground px-4 py-2 rounded-md hover:bg-muted/50 transition-colors"
        onClick={handleGoBack}
      >
        <IoChevronBackOutline size={32} />
      </button>

      <button
        className="lg:hidden absolute top-4 left-4 text-accent-foreground px-2 py-2 rounded-md hover:bg-muted/50 transition-colors z-10"
        onClick={handleGoBack}
      >
        <IoChevronBackOutline size={24} />
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="border border-border bg-card shadow-lg">
          <CardHeader className="space-y-1 px-4 sm:px-6">
            <div className="flex items-center justify-center mb-2">
              <div className="text-2xl sm:text-3xl">
                <ZesTEXLogo />
              </div>
            </div>
            <CardTitle className="text-xl sm:text-2xl font-bold text-foreground text-center">
              Verify Your Email
            </CardTitle>
            <CardDescription className="text-muted-foreground text-center text-sm sm:text-base">
              We've sent a 6-digit code to
              <br className="hidden sm:block" />
              <span className="font-medium text-foreground block sm:inline mt-1 sm:mt-0">
                {userEmail || "your email"}
              </span>
            </CardDescription>
          </CardHeader>

          <CardContent className="px-4 sm:px-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div
                  className="flex justify-center space-x-1 sm:space-x-3 "
                  onPaste={handlePaste}
                >
                  {(
                    ["otp1", "otp2", "otp3", "otp4", "otp5", "otp6"] as const
                  ).map((name, index) => (
                    <FormField
                      key={name}
                      control={form.control}
                      name={name}
                      rules={{ required: "Required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <input
                              ref={(el: HTMLInputElement | null) => {
                                inputRefs.current[index] = el;
                              }}
                              type="text"
                              inputMode="numeric"
                              maxLength={1}
                              className="w-7 h-7 sm:w-12  sm:h-12 text-center text-xs sm:text-lg font-semibold bg-muted border-gold border rounded-sm focus:border-primary text-foreground transition-colors font-mono"
                              value={field.value}
                              onChange={(e) =>
                                handleInputChange(e.target.value, index, field)
                              }
                              onKeyDown={(e) => handleKeyDown(e, index)}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  ))}
                </div>

                {Object.values(form.formState.errors).some(
                  (error) => error
                ) && (
                  <div className="text-center">
                    <span style={errorStyles}>Please enter all 6 digits</span>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-10 sm:h-11"
                  disabled={isVerifying}
                >
                  {loading ? <PropagateLoader /> : "Verify Code"}
                </Button>
              </form>
            </Form>

            <div className="text-center mt-6 space-y-2">
              <p className="text-sm text-muted-foreground">
                Didn't receive the code?
              </p>
              {canResend ? (
                <Button
                  variant="ghost"
                  onClick={handleResend}
                  className="text-primary hover:text-primary/90 hover:bg-transparent p-0 h-auto font-medium text-sm"
                  disabled={loading}
                >
                  Resend Code
                </Button>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Resend in {formatTimer(resendTimer)}
                </p>
              )}
            </div>

            <div className="text-center mt-6 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Wrong email?{" "}
                <button
                  onClick={handleGoBack}
                  className="text-primary hover:underline bg-transparent border-none cursor-pointer font-medium"
                  disabled={loading}
                >
                  Go back
                </button>
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Otp;
