import { getAllSlugs } from "@/utils/prismicio";
import { NextResponse } from "next/server";
import { chunkArray } from "@/utils/chunkArray";

export const revalidate = 3600; // 1 hour

export async function GET() {
  // Landing page slugs (3)
  const slugs = await getAllSlugs();

  // append
  const allSlugs = ["", ...slugs];

  const perSitemap = 50000;
  const chunks = chunkArray(allSlugs, perSitemap);

  const sitemapUrls = chunks.map(
    (_, i) =>
      `${process.env.NEXT_PUBLIC_BASE_URL}/sitemaps/sitemap-${i + 1}.xml`
  );

  // Build sitemap index XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

  // Add homepage
  xml += "<sitemap>";
  xml += `<loc>${process.env.NEXT_PUBLIC_BASE_URL}/</loc>`;
  xml += `<lastmod>${new Date().toISOString()}</lastmod>`;
  xml += "</sitemap>";

  // Add all shards
  for (const url of sitemapUrls) {
    xml += "<sitemap>";
    xml += `<loc>${url}</loc>`;
    xml += `<lastmod>${new Date().toISOString()}</lastmod>`;
    xml += "</sitemap>";
  }
  xml += "</sitemapindex>";

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
