import { getAllSlugs } from "@/utils/prismicio";
import { NextResponse } from "next/server";
import { chunkArray } from "@/utils/chunkArray";

export const revalidate = 3600; // 1 hour

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const slugs = await getAllSlugs();

  const perSitemap = 50000;
  const chunks = chunkArray(slugs, perSitemap);

  // Extract index from file name (sitemap-1, sitemap-2.)
  const match = params.slug.match(/^sitemap-(\d+)\.xml$/);
  if (!match) return NextResponse.error();

  const index = parseInt(match[1], 10) - 1;
  const selectedSlugs = chunks[index] || [];

  // Build shard XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  for (const slug of selectedSlugs) {
    const url =
      slug === ""
        ? process.env.NEXT_PUBLIC_BASE_URL
        : `${process.env.NEXT_PUBLIC_BASE_URL}/${slug}`;

    xml += "<url>";
    xml += `<loc>${url}</loc>`;
    xml += `<lastmod>${new Date().toISOString()}</lastmod>`;
    xml += "<changefreq>monthly</changefreq>";
    xml += "<priority>0.8</priority>";
    xml += "</url>";
  }

  xml += "</urlset>";

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
