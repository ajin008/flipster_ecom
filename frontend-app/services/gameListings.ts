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

  const isStoreExisting = await userHasListings(user_id);

  if (!isStoreExisting) {
    await createStore(user_id);
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

export const userHasListings = async (userId: string): Promise<boolean> => {
  const { count, error } = await supabase
    .from("game_accounts")
    .select("*", { head: true, count: "exact" })
    .eq("user_id", userId);
  if (error) {
    console.error("Error checking for listings:", error.message);
    throw new Error("Failed to check for existing listings.");
  }

  return count !== null && count > 0;
};

export const createStore = async (userId: string) => {
  console.log("userid from createStore:", userId);
  const { data: profileData, error: profileError } = await supabase
    .from("profiles")
    .select("username")
    .eq("id", userId)
    .single();

  if (profileError || !profileData) {
    console.error("Error fetching profile:", profileError);
    throw new Error("Could not find a user profile to create the store.");
  }

  const storeName = profileData.username;

  const { error: createStoreError } = await supabase.from("stores").insert({
    user_id: userId,
    store_name: storeName,
  });

  if (createStoreError) {
    console.error("Error creating store:", createStoreError);
    throw new Error("Database operation failed: Could not create the store.");
  }

  return { success: true };
};

export const getStoreData = async (userId: string) => {
  if (!userId) return null;

  // --- Step 1: Fetch core data from the 'stores' table ---
  const storePromise = supabase
    .from("stores")
    .select("store_name, rating, views, created_at")
    .eq("user_id", userId)
    .single();

  // --- Step 2: Fetch counts from the 'game_accounts' table ---
  const activeListingsPromise = supabase
    .from("game_accounts")
    .select("*", { count: "exact", head: true })
    .eq("user_id", userId)
    .eq("status", "active"); // Assuming you have a 'status' column

  const soldListingsPromise = supabase
    .from("game_accounts")
    .select("*", { count: "exact", head: true })
    .eq("user_id", userId)
    .eq("status", "sold"); // Assuming you have a 'status' column

  // --- Execute all promises in parallel for efficiency ---
  const [storeResult, activeListingsResult, soldListingsResult] =
    await Promise.all([
      storePromise,
      activeListingsPromise,
      soldListingsPromise,
    ]);

  // Handle case where no store is found
  if (storeResult.error) {
    console.error("Could not fetch store data:", storeResult.error.message);
    return null;
  }

  // --- TODO: Fetch from an 'orders' table when you have one ---
  // const pendingOrdersCount = ... query your 'orders' table where seller_id = userId and status = 'pending'
  // const totalEarningsSum = ... query your 'orders' table to SUM(price) where seller_id = userId and status = 'completed'

  // --- Step 3: Combine all the data into one object ---
  const combinedData = {
    storeName: storeResult.data.store_name,
    rating: storeResult.data.rating,
    profileViews: storeResult.data.views,
    joinDate: new Date(storeResult.data.created_at).toLocaleDateString(
      "en-US",
      {
        month: "short",
        year: "numeric",
      }
    ),
    totalListings: activeListingsResult.count ?? 0,
    soldListings: soldListingsResult.count ?? 0,
    // Using placeholder data until you have an 'orders' table
    pendingOrders: 3,
    totalEarnings: 2850,
  };

  return combinedData;
};
