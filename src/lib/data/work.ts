export interface Project {
  id: string;
  slug: string;
  title: string;
  tags: string;
  year: string;
  summary: string;
  url: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "work-1",
    slug: "brand-overhaul-retailco",
    title: "Brand Overhaul — RetailCo",
    tags: "BRAND · WEB · SEO",
    year: "2024",
    summary:
      "Complete brand identity redesign and website rebuild that drove a 2.4× increase in organic traffic within 90 days.",
    url: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=533&fit=crop",
  },
  {
    id: "work-2",
    slug: "3x-roas-d2c-fashion",
    title: "3× ROAS — D2C Fashion",
    tags: "META ADS · STRATEGY",
    year: "2024",
    summary:
      "Performance marketing strategy for a direct-to-consumer fashion label, tripling return on ad spend in under 60 days.",
    url: "#",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=533&fit=crop",
  },
  {
    id: "work-3",
    slug: "saas-mvp-edutech-kerala",
    title: "SaaS MVP — EduTech Kerala",
    tags: "REACT · BACKEND · DESIGN",
    year: "2023",
    summary:
      "End-to-end product design and development of a learning management platform serving 10K+ students across Kerala.",
    url: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=533&fit=crop",
  },
  {
    id: "work-4",
    slug: "50k-organic-b2b-portal",
    title: "50K Organic — B2B Portal",
    tags: "SEO · CONTENT",
    year: "2023",
    summary:
      "Content-led SEO strategy that grew a B2B portal from zero to 50,000 monthly organic visitors with high-intent traffic.",
    url: "#",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=533&fit=crop",
  },
  {
    id: "work-5",
    slug: "ecommerce-app-revamp",
    title: "E-Commerce App Revamp",
    tags: "UI/UX · MOBILE · STRATEGY",
    year: "2024",
    summary:
      "Full mobile app redesign for an e-commerce platform, resulting in a 65% boost in conversion rate and 40% lower bounce rate.",
    url: "#",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=533&fit=crop",
  },
];
