"use client";

import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// --- Helper Icons (You can place these in a separate file) ---

const UploadCloudIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
    <path d="M12 12v9" />
    <path d="m16 16-4-4-4 4" />
  </svg>
);

const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

// NEW: Icon for the Back buttons
const ArrowLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);

// --- Form Data Interface and Constants ---
interface GameListingFormData {
  game_name: string;
  listing_title: string;
  category: string;
  price: string;
  description: string;
  images: File[];
}

const categories = [
  "Action",
  "Adventure",
  "RPG",
  "Strategy",
  "Sport",
  "Simulation",
  "MMO",
];
const detailFeatures = [
  "Account Level",
  "Rare Characters",
  "Special Items",
  "Achievements",
  "Game Currency",
  "Unlocked Content",
];

// --- Main Page Component ---
export default function ListGameAccountPage() {
  const [step, setStep] = useState(1);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, dirtyFields },
    watch,
    trigger,
    getValues,
  } = useForm<GameListingFormData>({
    mode: "onChange",
    defaultValues: {
      game_name: "",
      listing_title: "",
      category: "Action",
      price: "",
      description: "",
      images: [],
    },
  });

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const currentFiles = watch("images") || [];
      const updatedFiles = [...currentFiles, ...acceptedFiles];
      setValue("images", updatedFiles, {
        shouldValidate: true,
        shouldDirty: true,
      });
      const previews = updatedFiles.map((file) => URL.createObjectURL(file));
      setImagePreviews(previews);
    },
    [setValue, watch]
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/png": [], "image/jpeg": [], "image/jpg": [] },
    onDrop,
    multiple: true,
  });

  const onSubmit = (data: GameListingFormData) => {
    console.log("Form Submitted:", data);
    alert("Game listing submitted successfully! Check the console for data.");
  };

  const nextStep = async () => {
    const valid = await trigger([
      "game_name",
      "listing_title",
      "category",
      "price",
    ]);
    if (valid) setStep(2);
  };

  const addDetailToDescription = (feature: string) => {
    const currentDescription = getValues("description").trim();
    const newText = currentDescription
      ? `\n\n- ${feature}: `
      : `- ${feature}: `;
    setValue("description", currentDescription + newText, {
      shouldValidate: true,
      shouldDirty: true,
    });
    document.getElementById("description")?.focus();
  };

  const isStepOneValid =
    dirtyFields.game_name &&
    dirtyFields.listing_title &&
    dirtyFields.price &&
    !errors.game_name &&
    !errors.listing_title &&
    !errors.price;
  const isStepTwoValid =
    (watch("images")?.length ?? 0) > 0 &&
    dirtyFields.description &&
    !errors.description;

  const inputStyles =
    "w-full bg-gaming-searchBg border border-gaming-purpleMuted/50 rounded-md p-3 text-gaming-textPrimary placeholder:text-gaming-textSecondary focus:ring-2 focus:ring-gaming-purpleLight focus:border-gaming-purpleLight outline-none transition-all";
  const errorStyles = "text-gaming-error text-sm mt-1";

  return (
    <div className="min-h-screen bg-gaming-background bg-gradient-gaming-radial p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gaming-textPrimary">
          List Your Game Account
        </h1>
        <p className="text-gaming-textSecondary mt-2">
          Sell your gaming account to other players safely and securely
        </p>
      </div>

      <div className="w-full max-w-2xl mx-auto bg-gaming-cardBg/80 backdrop-blur-md rounded-xl shadow-gaming-lg border border-gaming-purple/20 p-6 sm:p-8">
        <div className="mb-8">
          <div className="flex justify-between text-sm font-semibold text-gaming-textSecondary mb-2">
            <p className={cn(step >= 1 && "text-gaming-textPrimary")}>
              Basic Details
            </p>
            <p className={cn(step >= 2 && "text-gaming-textPrimary")}>
              Media & Description
            </p>
          </div>
          <div className="w-full bg-gaming-searchBg rounded-full h-2 border border-gaming-purpleMuted/20 shadow-inner">
            <div
              className="bg-gradient-to-r from-gaming-purple to-gaming-purpleLight h-full rounded-full transition-all duration-500 ease-in-out"
              style={{ width: step === 1 ? "50%" : "100%" }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {step === 1 && (
            <div className="space-y-5 animate-in fade-in-0 duration-500">
              <div>
                <label
                  htmlFor="game_name"
                  className="block text-sm font-medium text-gaming-textSecondary mb-2"
                >
                  Game Name *
                </label>
                <input
                  id="game_name"
                  type="text"
                  placeholder="e.g., Valorant, Apex Legends"
                  {...register("game_name", {
                    required: "Game name is required",
                  })}
                  className={inputStyles}
                />
                {errors.game_name && (
                  <p className={errorStyles}>{errors.game_name.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="listing_title"
                  className="block text-sm font-medium text-gaming-textSecondary mb-2"
                >
                  Listing Title *
                </label>
                <input
                  id="listing_title"
                  type="text"
                  placeholder="e.g., Pro Level Account with Rare Skins"
                  {...register("listing_title", {
                    required: "Listing title is required",
                  })}
                  className={inputStyles}
                />
                {errors.listing_title && (
                  <p className={errorStyles}>{errors.listing_title.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gaming-textSecondary mb-2"
                  >
                    Category *
                  </label>
                  <div className="relative">
                    <select
                      id="category"
                      {...register("category")}
                      className={cn(inputStyles, "appearance-none pr-10")}
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                    <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 size-5 text-gaming-textSecondary pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gaming-textSecondary mb-2"
                  >
                    Price (₹) *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gaming-textSecondary">
                      ₹
                    </span>
                    <input
                      id="price"
                      type="number"
                      placeholder="5000"
                      {...register("price", {
                        required: "Price is required",
                        valueAsNumber: true,
                      })}
                      className={cn(inputStyles, "pl-7")}
                    />
                  </div>
                  {errors.price && (
                    <p className={errorStyles}>{errors.price.message}</p>
                  )}
                </div>
              </div>

              {/* MODIFIED: Back button with icon */}
              <div className="pt-4 flex justify-between items-center">
                <Button
                  type="button"
                  onClick={() => router.back()}
                  variant="ghost"
                  size="lg"
                >
                  <ArrowLeftIcon className="size-4" />
                  Back
                </Button>
                <Button
                  type="button"
                  onClick={nextStep}
                  disabled={!isStepOneValid}
                  variant="gaming"
                  size="lg"
                >
                  Next
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5 animate-in fade-in-0 duration-500">
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gaming-textSecondary mb-2"
                >
                  Description & Features *
                </label>
                <textarea
                  id="description"
                  placeholder="Describe your game account in detail..."
                  {...register("description", {
                    required: "Description is required",
                    minLength: {
                      value: 20,
                      message: "Description must be at least 20 characters.",
                    },
                  })}
                  className={cn(inputStyles, "min-h-[180px]")}
                ></textarea>
                {errors.description && (
                  <p className={errorStyles}>{errors.description.message}</p>
                )}

                <div className="mt-3">
                  <p className="text-xs text-gaming-textSecondary mb-2">
                    Click to add details to your description:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {detailFeatures.map((feature) => (
                      <button
                        type="button"
                        key={feature}
                        onClick={() => addDetailToDescription(feature)}
                        className="px-3 py-1 text-xs font-semibold border border-gaming-purpleMuted/50 bg-gaming-searchBg/50 text-gaming-textSecondary rounded-full hover:bg-gaming-purple/50 hover:text-white transition-colors"
                      >
                        {feature}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gaming-textSecondary mb-2">
                  Game Images *
                </label>
                <div
                  {...getRootProps()}
                  className="border-2 border-dashed border-gaming-purpleMuted/50 p-6 rounded-lg text-center cursor-pointer hover:bg-gaming-searchBg/50 hover:border-gaming-purple transition-all"
                >
                  <input {...getInputProps()} />
                  <div className="flex flex-col items-center justify-center text-gaming-textSecondary">
                    <UploadCloudIcon className="size-10 mb-2 text-gaming-purpleLight" />
                    <p className="font-semibold text-gaming-textPrimary">
                      Click or drag to upload
                    </p>
                    <p className="text-xs">PNG, JPG, JPEG up to 10MB each</p>
                  </div>
                </div>
                {watch("images").length === 0 && errors.images && (
                  <p className={errorStyles}>
                    Please upload at least one image.
                  </p>
                )}
              </div>

              {imagePreviews.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {imagePreviews.map((src, idx) => (
                    <div key={idx} className="relative aspect-video">
                      <img
                        src={src}
                        alt={`preview-${idx}`}
                        className="h-full w-full object-cover rounded-md border border-gaming-purpleMuted/30"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* MODIFIED: Back button with icon */}
              <div className="pt-4 flex justify-between items-center">
                <Button
                  type="button"
                  onClick={() => setStep(1)}
                  variant="ghost"
                  size="lg"
                >
                  <ArrowLeftIcon className="size-4" />
                  Back
                </Button>
                <Button
                  type="submit"
                  disabled={!isStepTwoValid}
                  variant="gaming"
                  size="lg"
                >
                  Submit Listing
                </Button>
              </div>
            </div>
          )}
        </form>
        <p className="text-center text-xs text-gaming-textSecondary mt-8">
          Need help? Contact our support team for assistance with your listing.
        </p>
      </div>
    </div>
  );
}
