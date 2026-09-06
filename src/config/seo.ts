import { site, contact } from "@/config";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.companyName,
  url: site.url,
  logo: `${site.url}${site.logo}`,
  description: site.description,
  email: contact.email,
  telephone: contact.telephone,
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.address.streetAddress,
    addressLocality: contact.address.addressLocality,
    addressRegion: contact.address.addressRegion,
    postalCode: contact.address.postalCode,
    addressCountry: contact.address.addressCountry,
  },
};
