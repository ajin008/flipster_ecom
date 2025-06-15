import React from "react";
import { UseFormReturn } from "react-hook-form";
import { FiCheck } from "react-icons/fi";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { SignupData } from "@/lib/interface";

interface TermsConditionsProps {
  form: UseFormReturn<SignupData>;
}

// Custom styles for form error messages (matching your existing pattern)
const errorStyles = {
  color: "#e7e7ed", // Light gray color for errors as requested
  fontWeight: 500,
  marginTop: "4px",
};

export default function TermsConditions({ form }: TermsConditionsProps) {
  return (
    <FormField<SignupData>
      control={form.control}
      name="agreeToTerms"
      rules={{
        required: "You must agree to the terms and conditions to continue",
      }}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div className="flex items-start space-x-3">
              <div className="relative">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  className="sr-only"
                  checked={!!field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                />
                <label
                  htmlFor="agreeToTerms"
                  className={`
                    flex items-center justify-center w-5 h-5 mt-0.5 rounded-md border-2 cursor-pointer transition-all duration-200
                    ${
                      field.value
                        ? "bg-primary border-primary text-primary-foreground"
                        : "border-border bg-muted hover:border-primary/50"
                    }
                  `}
                >
                  {field.value && (
                    <FiCheck className="w-3 h-3" strokeWidth={3} />
                  )}
                </label>
              </div>
              <div className="flex-1">
                <label
                  htmlFor="agreeToTerms"
                  className="text-sm text-foreground cursor-pointer leading-relaxed"
                >
                  I agree to the{" "}
                  <a
                    href="/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>
            </div>
          </FormControl>
          <div className="custom-error-message ml-8">
            <FormMessage style={errorStyles} />
          </div>
        </FormItem>
      )}
    />
  );
}
