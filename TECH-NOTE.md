# Tech Note

## 1. Data Model (Prismic)

Each landing page is stored as a **Prismic custom type** with the following fields:

| Field              | Type      | Description                       |
| ------------------ | --------- | --------------------------------- |
| `title`            | Key Text  | Page heading / hero title         |
| `meta_title`       | Key Text  | Used in `<title>`                 |
| `meta_description` | Key Text  | `<meta name="description">`       |
| `hero_image`       | Image     | Hero/banner image (with alt text) |
| `body`             | Rich Text | Body content                      |

---

## 2. Mapping Store → Components

- **title →** `<SampleHeroBanner title={page.data.title} />`
- **meta_title →** `<Head><title>{meta_title}</title></Head>`
- **meta_description →** `<meta name="description">`
- **hero_image →** `<Image src alt>` inside `SampleHeroBanner`
- **body →** `<SampleHeroBanner body={page.data.body} />`

---

## 3. Rendering / Caching Strategy

- **Dynamic route:** `/[slug]`
- **ISR (Incremental Static Regeneration):**
  - Landing pages: `export const revalidate = 60;` → revalidates every 1 min
  - Sitemap: `export const revalidate = 3600;` → revalidates hourly
- **Benefit:** No giant static prebuild. Even with 100–200k pages, only requested slugs are built, keeping build times fast.

---

## 4. Sitemap Strategy (Sharding)

- **Sitemap index:** `/sitemap.xml` lists all sitemap shards.
- **Shard routes:** `/sitemaps/sitemap-1.xml`, `/sitemaps/sitemap-2.xml`, etc.
- **Shard size:** max 50,000 URLs per sitemap (Google limit).

**Math for scale:**

- 100k pages → 100,000 ÷ 50,000 = **2 sitemaps**
- 200k pages → 200,000 ÷ 50,000 = **4 sitemaps**

**Current demo URLs (3 landing pages + homepage):**

| Page Title                  | URL                   |
| --------------------------- | --------------------- |
| Homepage                    | `/`                   |
| Fashion & Branding          | `/fashion-branding`   |
| Digital Marketing Solutions | `/digital-marketing`  |
| Our Creative Portfolio      | `/creative-portfolio` |

**Example sitemap shard (`/sitemaps/sitemap-1.xml`):**

```xml
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://1daypaid.vercel.app/fashion-branding</loc></url>
  <url><loc>https://1daypaid.vercel.app/digital-marketing</loc></url>
  <url><loc>https://1daypaid.vercel.app/creative-portfolio</loc></url>
</urlset>
```

---

## 5. Sample Slug Preview

![Landing Page 1](/public/assets/sample-preview/landingpage1.png)
![Landing Page 2](/public/assets/sample-preview/landingpage2.png)
![Landing Page 3](/public/assets/sample-preview/landingpage3.png)
