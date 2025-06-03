// frontend-app/lib/queries.ts
import { client } from "./sanity";

export async function getBannerData() {
  const query = `*[_type == "banner"]{_id, title, description, cta, ctaLink, image, bgColor}`;
  return await client.fetch(query);
}
