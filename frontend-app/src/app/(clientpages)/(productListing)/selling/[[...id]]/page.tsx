"use client";

import { useState, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter, useParams } from "next/navigation";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useUserStore } from "@/store/userStore";
import { GameListingFormData } from "@/lib/interface";
import {
  createGameListing,
  updateGameListing,
} from "../../../../../../services/gameListings";
import { fetchListingById } from "../../../../../../services/fetchListingById";

import { toast } from "sonner";
import { getErrorMessage } from "@/lib/utils/getErrorMessage";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import VerificationModal from "@/components/modal/VerificationModal";
import { ListingSkeleton } from "@/components/shared/ListingSkeleton";

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

// NEW: X Icon for remove button
const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m18 6-12 12" />
    <path d="m6 6 12 12" />
  </svg>
);

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
  const params = useParams();
  const listingId = params.id ? (params.id[0] as string) : null;
  const isEditMode = !!listingId;

  const { user } = useUserStore();

  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, dirtyFields },
    watch,
    trigger,
    getValues,
    reset,
  } = useForm<GameListingFormData>({
    mode: "onChange",
    defaultValues: {
      game_name: "",
      listing_title: "",
      category: "Action",
      price: "",
      description: "",
      login_credentials: "",
      images: [],
    },
  });

  useEffect(() => {
    if (isEditMode && listingId) {
      const loadListingData = async () => {
        setIsLoading(true);
        try {
          const listingData = await fetchListingById(listingId);

          reset({
            game_name: listingData.game_name,
            listing_title: listingData.account_title,
            category: listingData.category,
            price: listingData.price.toString(),
            description: listingData.description,
            login_credentials: listingData.login_credentials || "",
            images: listingData.image_paths,
          });

          setImagePreviews(listingData.image_paths);
        } catch (err) {
          toast.error(getErrorMessage(err));
          router.push("/");
        } finally {
          setIsLoading(false);
        }
      };

      loadListingData();
    }
  }, [listingId, isEditMode, reset, router]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const currentImages = getValues("images") || [];
      const updatedImages = [...currentImages, ...acceptedFiles];
      setValue("images", updatedImages, {
        shouldValidate: true,
        shouldDirty: true,
      });

      const newPreviews = acceptedFiles.map((file) =>
        URL.createObjectURL(file)
      );
      setImagePreviews((prev) => [...prev, ...newPreviews]);
    },
    [getValues, setValue]
  );

  const removeImage = useCallback(
    (indexToRemove: number) => {
      const currentFiles = watch("images") || [];
      const currentPreviews = [...imagePreviews];

      if (currentPreviews[indexToRemove]) {
        URL.revokeObjectURL(currentPreviews[indexToRemove]);
      }

      const updatedFiles = currentFiles.filter(
        (_, index) => index !== indexToRemove
      );
      const updatedPreviews = currentPreviews.filter(
        (_, index) => index !== indexToRemove
      );

      setValue("images", updatedFiles, {
        shouldValidate: true,
        shouldDirty: true,
      });
      setImagePreviews(updatedPreviews);
    },
    [setValue, watch, imagePreviews]
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/png": [], "image/jpeg": [], "image/jpg": [] },
    onDrop,
    multiple: true,
  });

  const onSubmit = async (data: GameListingFormData) => {
    if (isSubmitting) return;

    setIsSubmitting(true);

    if (isEditMode) {
      await updateGameListing(listingId, data);
      toast.success("updated successfully");
      router.push("/Mylisting");
    } else {
      try {
        console.log("Form Submitted:", data);
        if (!user?.id) throw new Error("user not found");

        await createGameListing({ ...data, user_id: user.id });
        toast.success("successfully listed your game account");
        setIsModalOpen(true);
      } catch (err) {
        toast.error(getErrorMessage(err));
        console.error("Submission error:", err);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-2xl p-8">
          <h1 className="text-3xl text-center font-bold mb-4">
            Loading Listing...
          </h1>
          <ListingSkeleton />
        </div>
      </div>
    );
  }

  const nextStep = async () => {
    const valid = await trigger([
      "game_name",
      "listing_title",
      "category",
      "price",
      "login_credentials",
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

  const gameNameValue = watch("game_name");
  const titleValue = watch("listing_title");
  const priceValue = watch("price");
  const loginCredentialsValue = watch("login_credentials");

  const isStepOneValid =
    !!gameNameValue &&
    !!titleValue &&
    !!priceValue &&
    !!loginCredentialsValue &&
    !errors.game_name &&
    !errors.listing_title &&
    !errors.price &&
    !errors.login_credentials;

  const isStepTwoValid =
    (watch("images")?.length ?? 0) > 0 &&
    dirtyFields.description &&
    !errors.description;

  const inputStyles =
    "w-full bg-gaming-searchBg border border-gaming-purpleMuted/50 rounded-md p-3 text-gaming-textPrimary placeholder:text-gaming-textSecondary focus:ring-2 focus:ring-gaming-purpleLight focus:border-gaming-purpleLight outline-none transition-all";
  const errorStyles = "text-gaming-error text-sm mt-1";

  if (!user) return null;
  return (
    <div className="min-h-screen bg-gaming-background bg-gradient-gaming-radial p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gaming-textPrimary">
          {isEditMode ? "Edit Your Listing" : "List Your Game Account"}
        </h1>
        <p className="text-gaming-textSecondary mt-2">
          {isEditMode
            ? "Update the details and save your changes."
            : "Sell your gaming account to other players safely and securely."}
        </p>
      </div>

      <div className="w-full max-w-2xl mx-auto bg-gaming-cardBg/80 backdrop-blur-md rounded-xl shadow-gaming-lg border border-gaming-purple/20 p-6 sm:p-8">
        <div className="mb-8">
          <div className="flex w-full flex-col items-center gap-2 sm:flex-row sm:gap-4">
            <p
              className={cn(
                "w-full border-2 px-4 py-2 text-center text-sm font-semibold transition-all duration-300 sm:w-auto sm:text-left",
                "rounded-[15px]",
                step >= 1
                  ? "text-gaming-textPrimary"
                  : "text-gaming-textSecondary",
                step === 1
                  ? "border-[#FFCC00] shadow-gold-sm"
                  : "border-gaming-purpleMuted/20"
              )}
            >
              Basic Details
            </p>

            <div className="hidden h-px flex-1 bg-[#A55FFF] sm:block"></div>

            <p
              className={cn(
                "w-full border-2 px-4 py-2 text-center text-sm font-semibold transition-all duration-300 sm:w-auto sm:text-left",
                "rounded-[15px]",
                step >= 2
                  ? "text-gaming-textPrimary"
                  : "text-gaming-textSecondary",
                step === 2
                  ? "border-[#FFCC00] shadow-gold-sm"
                  : "border-gaming-purpleMuted/20"
              )}
            >
              Media & Description
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {step === 1 && (
            <div className="space-y-5 animate-in fade-in-0 duration-500">
              <div>
                <label
                  htmlFor="game_name"
                  className="block text-sm font-medium text-white  mb-2"
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
                  className="block text-sm font-medium text-white mb-2"
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
                    className="block text-sm font-medium text-white mb-2"
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
                    <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 size-5 text-white pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Price (₹) *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white">
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

              <div>
                <label
                  htmlFor="login_credentials"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Login Credentials *
                </label>
                <textarea
                  id="login_credentials"
                  placeholder="Enter your login details (e.g., Gmail + Password OR Facebook ID + Password)"
                  {...register("login_credentials", {
                    required: "Login credentials are required",
                    minLength: {
                      value: 10,
                      message: "Please provide detailed login information",
                    },
                  })}
                  className={cn(inputStyles, "min-h-[100px] resize-vertical")}
                  rows={3}
                />
                {errors.login_credentials && (
                  <p className={errorStyles}>
                    {errors.login_credentials.message}
                  </p>
                )}
                <p className="text-xs text-gaming-textSecondary mt-1">
                  ⚠️ This information will be shared with the buyer upon
                  purchase. Only provide accurate login details.
                </p>
              </div>

              <div className="pt-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
                  <Button
                    type="button"
                    onClick={() => router.back()}
                    variant="ghost"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto flex items-center justify-center gap-2"
                  >
                    <ArrowLeftIcon className="size-4" />
                    Back
                  </Button>
                  <Button
                    type="button"
                    onClick={nextStep}
                    disabled={!isStepOneValid || isSubmitting}
                    variant="gaming"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    Next
                  </Button>
                </div>
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
                  disabled={isSubmitting}
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
                        disabled={isSubmitting}
                        className="px-3 py-1 text-xs font-semibold border border-gaming-purpleMuted/50 bg-gaming-searchBg/50 text-gaming-textSecondary rounded-full hover:bg-gaming-purple/50 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
                  className={cn(
                    "border-2 border-dashed border-gaming-purpleMuted/50 p-6 rounded-lg text-center cursor-pointer hover:bg-gaming-searchBg/50 hover:border-gaming-purple transition-all",
                    isSubmitting && "opacity-50 cursor-not-allowed"
                  )}
                >
                  <input {...getInputProps()} disabled={isSubmitting} />
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
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-sm text-gaming-textSecondary">
                      Selected Images ({imagePreviews.length})
                    </p>
                    {imagePreviews.length > 0 && (
                      <p className="text-xs text-gaming-textSecondary">
                        Click × to remove an image
                      </p>
                    )}
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {imagePreviews.map((src, idx) => (
                      <div key={idx} className="relative group">
                        <div className="relative aspect-video">
                          <Image
                            src={src}
                            alt={`preview-${idx}`}
                            fill
                            className="object-cover rounded-md border border-gaming-purpleMuted/30"
                            unoptimized
                          />
                        </div>

                        <button
                          type="button"
                          onClick={() => removeImage(idx)}
                          disabled={isSubmitting}
                          className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg transition-colors opacity-90 hover:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed"
                          title="Remove image"
                        >
                          <XIcon />
                        </button>

                        <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {idx + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
                  <Button
                    type="button"
                    onClick={() => setStep(1)}
                    variant="ghost"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto flex items-center justify-center gap-2"
                  >
                    <ArrowLeftIcon className="size-4" />
                    Back
                  </Button>
                  <Button
                    type="submit"
                    disabled={!isStepTwoValid || isSubmitting}
                    variant="gaming"
                    size="lg"
                    className="w-full sm:w-auto flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        {isEditMode ? "Saving..." : "Submitting..."}
                      </>
                    ) : isEditMode ? (
                      "Save Changes"
                    ) : (
                      "Submit Listing"
                    )}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </form>
        <p className="text-center text-xs text-gaming-textSecondary mt-8">
          Need help? Contact our support team for assistance with your listing.
        </p>
      </div>
      <VerificationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
