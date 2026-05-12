export const siteConfig = {
  name: "Florida Forward Initiative",
  tagline: "Executive Office of the Governor",
  description:
    "Building a stronger, more resilient Florida through strategic investment and innovation.",
  url: "https://floridaforward.gov",
  contact: {
    email: "info@floridaforward.gov",
    phone: "(850) 717-9000",
    address: "The Capitol, 400 S. Monroe Street, Tallahassee, FL 32399",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/initiative/", label: "Initiative" },
  { href: "/resources/", label: "Resources" },
  { href: "/news/", label: "News" },
  { href: "/contact/", label: "Contact" },
] as const;
