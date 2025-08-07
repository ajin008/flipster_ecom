"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { GameListingFormData, FORM_STEPS } from "@/lib/types";
import ProgressBar from "@/components/shared/ProgressBar";
import Step1BasicDetails from "@/components/shared/Step1BasicDetails";
import Step2MediaDescription from "@/components/shared/Step2MediaDescription";
import { FaArrowLeft, FaArrowRight, FaPaperPlane } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Page() {
  // 2. Initialize the router
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<GameListingFormData>({
    mode: "onChange",
    defaultValues: {
      game_name: "",
      game_title: "",
      category: "Action", // Setting a default category
      price: "",
      images: undefined,
      description: "",
    },
  });

  const currentStepData = FORM_STEPS.find((step) => step.id === currentStep);
  const totalSteps = FORM_STEPS.length;

  const validateCurrentStep = async (): Promise<boolean> => {
    if (!currentStepData) return false;
    return await trigger(currentStepData.fields);
  };

  const handleNext = async () => {
    const isStepValid = await validateCurrentStep();
    if (isStepValid && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      router.push("/");
    }
  };

  const onSubmit = (data: GameListingFormData) => {
    console.log("Form Submitted:", data);
    alert("Game listing submitted successfully!");
  };

  const isCurrentStepValid =
    currentStepData?.fields.every((field) => {
      const value = watch(field);
      if (field === "images") {
        return value && (value as FileList).length > 0;
      }
      return value && !errors[field];
    }) ?? false;

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1BasicDetails register={register} errors={errors} />;
      case 2:
        return (
          <Step2MediaDescription
            register={register}
            errors={errors}
            setValue={setValue}
            getValues={getValues}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gaming-textPrimary mb-2">
              List Your Game Account
            </h1>
            <p className="text-gaming-textSecondary">
              Sell your gaming account to other players safely and securely
            </p>
          </div>

          {/* Progress Bar */}
          <ProgressBar
            currentStep={currentStep}
            totalSteps={totalSteps}
            steps={FORM_STEPS}
          />

          {/* Form */}
          <div className="bg-gradient-card backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-gaming-textMuted/20 shadow-gaming-card">
            <form onSubmit={handleSubmit(onSubmit)}>
              {renderCurrentStep()}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-gaming-textMuted/20">
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={handlePrevious}
                  // The disabled prop is removed so the button is always active
                  className="!rounded-xl border-gaming-textMuted/30 bg-gaming-cardBg text-gaming-textPrimary hover:border-gaming-purple/50 hover:bg-gaming-searchBg"
                >
                  <FaArrowLeft />
                  <span>Back</span>
                </Button>

                {currentStep < totalSteps ? (
                  <Button
                    type="button"
                    variant="gaming"
                    size="lg"
                    onClick={handleNext}
                    disabled={!isCurrentStepValid}
                    className="!rounded-xl"
                  >
                    <span>Next</span>
                    <FaArrowRight />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    variant="gaming"
                    size="lg"
                    disabled={!isCurrentStepValid}
                    className="!rounded-xl"
                  >
                    <span>Submit Listing</span>
                    <FaPaperPlane />
                  </Button>
                )}
              </div>
            </form>
          </div>

          {/* Help Text */}
          <div className="text-center mt-6">
            <p className="text-gaming-textSecondary text-sm">
              Need help? Contact our support team for assistance with your
              listing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
