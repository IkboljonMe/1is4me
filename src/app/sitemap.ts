import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://1is4me.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // Only routes that exist. The rebuild ships page by page; add each new
  // page here as it lands, alongside its BUILT entry in the nav.
  return [
    { url: SITE_URL, lastModified: new Date(), priority: 1 },
    { url: `${SITE_URL}/solutions`, lastModified: new Date(), priority: 0.9 },
    { url: `${SITE_URL}/audit-form`, lastModified: new Date(), priority: 0.8 },
  ];
}
