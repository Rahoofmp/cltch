export interface Service {
  slug: string;
  icon: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export const services: Service[] = [
  {
    slug: "digital-marketing",
    icon: "📈",
    number: "01",
    title: "Digital Marketing",
    description: "Data-driven campaigns across Meta, Google, and beyond.",
    tags: ["Meta Ads", "Google Ads", "Analytics"],
  },
  {
    slug: "seo-content",
    icon: "🔍",
    number: "02",
    title: "SEO & Content",
    description: "Organic growth that compounds through technical SEO and strategic content.",
    tags: ["Technical SEO", "Content Strategy", "Link Building"],
  },
  {
    slug: "web-development",
    icon: "💻",
    number: "03",
    title: "Web Development",
    description: "Blazing-fast, conversion-optimized websites and web apps.",
    tags: ["React/Next.js", "WordPress", "Custom CMS"],
  },
  {
    slug: "mobile-apps",
    icon: "📱",
    number: "04",
    title: "Mobile Apps",
    description: "iOS and Android apps built with React Native, shipped fast.",
    tags: ["React Native", "iOS & Android", "MVP Launch"],
  },
  {
    slug: "brand-ui-ux",
    icon: "🎨",
    number: "05",
    title: "Brand & UI/UX",
    description: "Visual identity and product design that earns trust on first impression.",
    tags: ["Brand Identity", "Figma Design", "Design Systems"],
  },
  {
    slug: "automation-ai",
    icon: "⚙️",
    number: "06",
    title: "Automation & AI",
    description: "Integrate AI and automation into your operations.",
    tags: ["AI Integration", "n8n/Zapier", "Custom Bots"],
  },
];
