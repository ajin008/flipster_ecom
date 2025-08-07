import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { GameListingFormData, GAME_CATEGORIES } from "@/lib/types";
// 1. Import an icon for the dropdown arrow
import { FaChevronDown } from "react-icons/fa";

interface Step1BasicDetailsProps {
  register: UseFormRegister<GameListingFormData>;
  errors: FieldErrors<GameListingFormData>;
}

export default function Step1BasicDetails({
  register,
  errors,
}: Step1BasicDetailsProps) {
  const inputClass = `w-full px-4 py-3 bg-gaming-searchBg border rounded-xl text-gaming-textPrimary placeholder-gaming-textMuted focus:outline-none focus:ring-2 transition-all duration-300`;
  const errorClass = "border-gaming-error focus:ring-gaming-error/50";
  const defaultClass =
    "border-gaming-textMuted/30 focus:border-gaming-purple focus:ring-gaming-purple/50";

  return (
    <div className="space-y-6">
      {/* Game Name */}
      <div>
        <label
          htmlFor="game_name"
          className="block text-sm font-medium text-gaming-textPrimary mb-2"
        >
          Game Name <span className="text-gaming-pink">*</span>
        </label>
        <input
          id="game_name"
          {...register("game_name", { required: "Game name is required" })}
          type="text"
          placeholder="e.g., Valorant, Genshin Impact"
          className={`${inputClass} ${
            errors.game_name ? errorClass : defaultClass
          }`}
        />
        {errors.game_name && (
          <p className="text-gaming-error text-sm mt-1">
            {errors.game_name.message}
          </p>
        )}
      </div>

      {/* Game Title */}
      <div>
        <label
          htmlFor="game_title"
          className="block text-sm font-medium text-gaming-textPrimary mb-2"
        >
          Listing Title <span className="text-gaming-pink">*</span>
        </label>
        <input
          id="game_title"
          {...register("game_title", {
            required: "A catchy title is required",
          })}
          type="text"
          placeholder="e.g., Stacked Account with Rare Skins"
          className={`${inputClass} ${
            errors.game_title ? errorClass : defaultClass
          }`}
        />
        {errors.game_title && (
          <p className="text-gaming-error text-sm mt-1">
            {errors.game_title.message}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Category */}
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gaming-textPrimary mb-2"
          >
            Category <span className="text-gaming-pink">*</span>
          </label>
          {/* 2. Wrap the select element in a relative container */}
          <div className="relative">
            <select
              id="category"
              {...register("category", {
                required: "Please select a category",
              })}
              // 3. Add appearance-none to hide the default arrow and pr-10 for spacing
              className={`${inputClass} appearance-none pr-10 ${
                errors.category ? errorClass : defaultClass
              }`}
            >
              {GAME_CATEGORIES.map((category) => (
                <option
                  key={category.value}
                  value={category.value}
                  className="bg-gaming-cardBg text-gaming-textPrimary"
                >
                  {category.label}
                </option>
              ))}
            </select>
            {/* 4. Add the custom arrow icon */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gaming-textSecondary">
              <FaChevronDown className="w-4 h-4" />
            </div>
          </div>
          {errors.category && (
            <p className="text-gaming-error text-sm mt-1">
              {errors.category.message}
            </p>
          )}
        </div>

        {/* Price */}
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gaming-textPrimary mb-2"
          >
            Price (₹) <span className="text-gaming-pink">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gaming-gold text-lg font-bold">
              ₹
            </span>
            <input
              id="price"
              {...register("price", {
                required: "Price is required",
                pattern: {
                  value: /^\d+$/,
                  message: "Please enter a valid whole number price",
                },
              })}
              type="number"
              placeholder="1200"
              className={`${inputClass} pl-10 ${
                errors.price ? errorClass : defaultClass
              }`}
            />
          </div>
          {errors.price && (
            <p className="text-gaming-error text-sm mt-1">
              {errors.price.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
