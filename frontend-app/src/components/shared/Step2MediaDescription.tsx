import React, { useState, useEffect } from "react";
import {
  UseFormRegister,
  FieldErrors,
  UseFormSetValue,
  UseFormGetValues,
} from "react-hook-form";
import { GameListingFormData } from "@/lib/types";
import { FaTimes, FaUpload } from "react-icons/fa";

interface Step2MediaDescriptionProps {
  register: UseFormRegister<GameListingFormData>;
  errors: FieldErrors<GameListingFormData>;
  setValue: UseFormSetValue<GameListingFormData>;
  getValues: UseFormGetValues<GameListingFormData>;
}

const featureTags = [
  "Account Level",
  "Rare Characters",
  "Special Items",
  "Achievements",
  "Game Currency",
  "Unlocked Content",
];

export default function Step2MediaDescription({
  register,
  errors,
  setValue,
  getValues,
}: Step2MediaDescriptionProps) {
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  // ✅ Helper to update react-hook-form's FileList state
  const updateFormFiles = (files: File[]) => {
    const dataTransfer = new DataTransfer();
    files.forEach((file) => dataTransfer.items.add(file));
    setValue("images", dataTransfer.files, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  // ✅ Load previews on mount
  useEffect(() => {
    const existingFiles = getValues("images");
    if (existingFiles && existingFiles.length > 0) {
      const urls = Array.from(existingFiles).map((file) =>
        URL.createObjectURL(file)
      );
      setImagePreviews(urls);
    }

    // ✅ Clean up object URLs to avoid memory leaks
    return () => {
      imagePreviews.forEach((url) => URL.revokeObjectURL(url));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = e.target.files ? Array.from(e.target.files) : [];
    if (newFiles.length === 0) return;

    const existingFiles = getValues("images")
      ? Array.from(getValues("images")!)
      : [];

    const combinedFiles = [...existingFiles, ...newFiles];
    updateFormFiles(combinedFiles);

    const newPreviewUrls = newFiles.map((file) => URL.createObjectURL(file));
    setImagePreviews((prev) => [...prev, ...newPreviewUrls]);
  };

  const removeImage = (indexToRemove: number) => {
    URL.revokeObjectURL(imagePreviews[indexToRemove]);

    const updatedPreviews = imagePreviews.filter(
      (_, index) => index !== indexToRemove
    );
    setImagePreviews(updatedPreviews);

    const existingFiles = Array.from(getValues("images")!);
    const updatedFiles = existingFiles.filter(
      (_, index) => index !== indexToRemove
    );
    updateFormFiles(updatedFiles);
  };

  const handleTagClick = (tag: string) => {
    const currentDescription = getValues("description") || "";
    const newDescription = `${currentDescription}\n• ${tag}: `;
    setValue("description", newDescription.trim(), {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const textAreaClass = `w-full px-4 py-3 bg-gaming-searchBg border rounded-xl text-gaming-textPrimary placeholder-gaming-textMuted focus:outline-none focus:ring-2 transition-all duration-300 resize-none`;
  const errorClass = "border-gaming-error focus:ring-gaming-error/50";
  const defaultClass =
    "border-gaming-textMuted/30 focus:border-gaming-purple focus:ring-gaming-purple/50";

  return (
    <div className="space-y-8">
      {/* ✅ Game Images */}
      <div>
        <label className="block text-sm font-medium text-gaming-textPrimary mb-2">
          Game Images <span className="text-gaming-pink">*</span>
        </label>
        <div className="relative">
          <input
            type="file"
            multiple
            accept="image/png, image/jpeg, image/jpg"
            {...register("images", {
              required: "Please upload at least one image",
              validate: (files) =>
                files && files.length > 0
                  ? true
                  : "Please upload at least one image",
            })}
            onChange={(e) => {
              handleImageChange(e);
            }}
          />

          <label
            htmlFor="images"
            className={`flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 hover:border-gaming-purple hover:bg-gaming-cardBg/50 cursor-pointer ${
              errors.images
                ? "border-gaming-error bg-gaming-error/5"
                : "border-gaming-textMuted/30 bg-gaming-searchBg"
            }`}
          >
            <div className="w-12 h-12 bg-gaming-purple/20 rounded-full flex items-center justify-center mb-3">
              <FaUpload className="w-6 h-6 text-gaming-purple" />
            </div>
            <p className="text-gaming-textPrimary font-medium">
              Click or drag to upload
            </p>
            <p className="text-gaming-textSecondary text-sm mt-1">
              PNG, JPG, JPEG up to 10MB each
            </p>
          </label>
        </div>
        {errors.images && (
          <p className="text-gaming-error text-sm mt-1">
            {errors.images.message as string}
          </p>
        )}

        {imagePreviews.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
            {imagePreviews.map((preview, index) => (
              <div key={index} className="relative group aspect-video">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={preview}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg border border-gaming-textMuted/30"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-gaming-error rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gaming-error/80 z-20"
                >
                  <FaTimes className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ✅ Description */}
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gaming-textPrimary mb-2"
        >
          Description & Features <span className="text-gaming-pink">*</span>
        </label>
        <textarea
          id="description"
          {...register("description", {
            required: "Description is required",
            minLength: {
              value: 20,
              message: "Description must be at least 20 characters",
            },
          })}
          rows={7}
          placeholder="Describe your game account in detail..."
          className={`${textAreaClass} ${
            errors.description ? errorClass : defaultClass
          }`}
        />
        {errors.description && (
          <p className="text-gaming-error text-sm mt-1">
            {errors.description.message}
          </p>
        )}

        <div className="mt-3">
          <p className="text-sm text-gaming-textSecondary mb-2">
            Click to add details to your description:
          </p>
          <div className="flex flex-wrap gap-2">
            {featureTags.map((tag) => (
              <button
                type="button"
                key={tag}
                onClick={() => handleTagClick(tag)}
                className="px-3 py-1 bg-gaming-cardBg border border-gaming-textMuted/30 rounded-full text-xs text-gaming-textSecondary hover:border-gaming-purple hover:text-gaming-textPrimary transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
