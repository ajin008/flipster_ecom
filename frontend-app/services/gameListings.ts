import { GameListingFormData } from "@/lib/interface";
import supabase from "@/lib/supabaseClient";
import { v4 as uuidv4 } from "uuid";

export const createGameListing = async (
  data: GameListingFormData & { user_id: string }
) => {
  const { images, user_id, ...otherData } = data;
  const bucketName = process.env.NEXT_PUBLIC_SUPABASE_BUCKET;

  if (!bucketName) {
    throw new Error("Supabase bucket name is not configured.");
  }

  const uploadedImagePaths: string[] = [];

  for (const file of images) {
    if (!(file instanceof File)) {
      continue;
    }

    const filePath = `${otherData.game_name}/${uuidv4()}-${file.name}`;
    const { error: uploadError } = await supabase.storage
      .from(bucketName)
      .upload(filePath, file);

    if (uploadError) {
      console.error("Image upload failed:", uploadError);
      throw new Error("Image upload failed.");
    }
    uploadedImagePaths.push(filePath);
  }

  const { error: insertError } = await supabase.from("game_accounts").insert({
    game_name: otherData.game_name,
    account_title: otherData.listing_title,
    price: Number(otherData.price),
    description: otherData.description,
    category: otherData.category,
    user_id: user_id,
    image_paths: uploadedImagePaths,
  });

  if (insertError) {
    console.error("Database insert failed:", insertError);
    throw new Error("Listing creation failed.");
  }

  return { success: true };
};

export const updateGameListing = async (
  listingId: string,
  formData: GameListingFormData
) => {
  console.log("update game listing is triggering");
  const { images, ...otherData } = formData;
  const bucketName = process.env.NEXT_PUBLIC_SUPABASE_BUCKET!;

  if (!bucketName) {
    throw new Error("Supabase bucket name is not configured.");
  }

  // Step 1: Separate new files from existing image URLs
  const newFiles = images.filter((img): img is File => img instanceof File);
  const existingUrls = images.filter(
    (img): img is string => typeof img === "string"
  );
  // Step 2: Upload any new files to Supabase Storage
  const uploadedImagePaths: string[] = [];
  for (const file of newFiles) {
    const filePath = `${otherData.game_name}/${uuidv4()}-${file.name}`;
    const { error: uploadError } = await supabase.storage
      .from(bucketName)
      .upload(filePath, file);

    if (uploadError) {
      console.error("Upload Error:", uploadError);
      throw new Error("Could not upload a new image.");
    }
    uploadedImagePaths.push(filePath);
  }

  // Step 3: To get the final list of paths, we need to strip the base URL
  // from existingImageUrls to get just their relative paths.
  const baseUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${bucketName}/`;
  const existingImagePaths = existingUrls.map((url) =>
    url.replace(baseUrl, "")
  );

  const finalImagePaths = [...existingImagePaths, ...uploadedImagePaths];

  // Step 4: Update the database record
  const { error: updateError } = await supabase
    .from("game_accounts")
    .update({
      game_name: otherData.game_name,
      account_title: otherData.listing_title,
      price: Number(otherData.price),
      description: otherData.description,
      category: otherData.category,
      image_paths: finalImagePaths,
    })
    .eq("id", listingId);

  if (updateError) {
    throw new Error(updateError.message);
  }
};
