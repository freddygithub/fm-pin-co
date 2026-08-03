export const site = {
  name: "F&M Pin Co.",
  description:
    "A family-run pin shop sharing collectible treasures, magical finds, and a little extra sparkle. Join us live or browse our current listings anytime.",
  email: "hello@example.com",
  nextStream: {
    date: "Coming soon",
    detail: "Follow us on Whatnot to be notified when we go live.",
  },
  shops: [
    { name: "eBay", href: "https://www.ebay.com/", label: "Browse our eBay shop" },
    { name: "Whatnot", href: "https://www.whatnot.com/", label: "Follow us on Whatnot" },
  ],
  social: [
    { name: "Instagram", href: "https://www.instagram.com/" },
    { name: "TikTok", href: "https://www.tiktok.com/" },
  ],
  // Add a Formspree endpoint here later (for example, https://formspree.io/f/xxxx).
  // Until then, the form opens the visitor's email app with their message filled in.
  contactFormEndpoint: "",
} as const;
