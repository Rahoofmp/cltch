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
    slug: "web-software-development",
    icon: "💻",
    number: "01",
    title: "Web & Software Development",
    description: "We design and develop fast, reliable websites and custom software tailored to your business goals.",
    tags: ["React/Next.js", "Custom Software", "Performance"],
  },
  {
    slug: "digital-marketing",
    icon: "📈",
    number: "02",
    title: "Digital Marketing",
    description: "From strategy to execution, we help you attract the right audience and turn them into customers.",
    tags: ["Strategy", "Ads", "Conversion"],
  },
  {
    slug: "branding-content",
    icon: "🎨",
    number: "03",
    title: "Branding & Content",
    description: "We create visuals, content, and brand experiences that make your business stand out and stay memorable.",
    tags: ["Visual Identity", "Content", "Brand Experience"],
  },
  {
    slug: "complete-digital-management",
    icon: "⚙️",
    number: "04",
    title: "Complete Digital Management",
    description: "We handle everything—from updates to optimization—so your digital presence keeps growing while you focus on your business.",
    tags: ["Updates", "Optimization", "Growth"],
  },
];
