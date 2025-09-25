import { createClient } from "@/prismicio";

const client = createClient();

export async function getLandingPageBySlug(slug: string) {
  const page = await client.getByUID("landing_page", slug);
  return page;
}

export async function getAllSlugs() {
  const pages = await client.getAllByType("landing_page");
  return pages.map((p) => p.uid).filter((uid): uid is string => Boolean(uid));
}
