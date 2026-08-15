import { siteConfig } from "@/data/site";

/** Schema.org LocalBusiness — apenas com dados confirmados. Sem AggregateRating/reviews inventados. */
export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    foundingDate: String(siteConfig.legalFoundingYear),
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.stateCode,
      addressCountry: siteConfig.location.country,
    },
    areaServed: siteConfig.location.serviceArea.map((city) => ({
      "@type": "City",
      name: city,
    })),
    sameAs: [siteConfig.social.instagram].filter(Boolean),
  };
}

export function buildServiceSchema(input: { name: string; description: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: input.name,
    description: input.description,
    url: input.url,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: siteConfig.location.serviceArea.map((city) => ({
      "@type": "City",
      name: city,
    })),
  };
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
