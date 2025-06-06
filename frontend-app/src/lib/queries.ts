// frontend-app/lib/queries.ts
import { client } from "./sanity";

export async function getBannerData() {
  const query = `*[_type == "banner"] | order(_createdAt desc) {
    _id,
    title,
    description,
    cta,
    ctaLink,
    image,
    extraImages[],
    bgColor
  }`;

  try {
    const banners = await client.fetch(query);

    // Optional: Log for debugging (remove in production)
    // if (process.env.NODE_ENV === "development") {
    //   banners.forEach((banner: any) => {
    //     console.log(`Banner ${banner._id}:`, {
    //       title: banner.title,
    //       hasMainImage: !!banner.image,
    //       extraImagesCount: banner.extraImages?.length || 0,
    //       extraImages: banner.extraImages,
    //     });
    //   });
    // }

    return banners;
  } catch (error) {
    console.error("Error fetching banner data:", error);
    return [];
  }
}
