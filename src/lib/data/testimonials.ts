export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  metrics: string[];
}

export const testimonials: Testimonial[] = [
  {
    quote: "We went from zero online presence to ranking on page 1 in 4 months. The team at ClutchBlue doesn't just deliver — they over-deliver.",
    name: "Arjun Menon",
    role: "Founder",
    company: "RetailCo",
    initials: "AM",
    metrics: ["Page 1 Google", "4 Months", "300% Traffic"],
  },
  {
    quote: "The web app they built is incredibly fast and intuitive. Our team productivity increased by 40% after the launch.",
    name: "Sarah Chen",
    role: "Product Manager",
    company: "DataFlow Systems",
    initials: "SC",
    metrics: ["40% Efficiency", "React/Next.js", "Scalable Arch"],
  },
  {
    quote: "Their social media strategy is bold and unconventional. It finally helped us reach the Gen Z audience effectively.",
    name: "Vikram Nair",
    role: "Marketing Head",
    company: "Zest Bev",
    initials: "VN",
    metrics: ["1M+ Reach", "Viral Hits", "Brand Recall"],
  },
  {
    quote: "Exceptional UI/UX work. They transformed our clunky enterprise tool into something that's actually a joy to use.",
    name: "Rachel Watts",
    role: "Design Director",
    company: "CloudCore",
    initials: "RW",
    metrics: ["Intuitive UX", "System Design", "User Joy"],
  },
  {
    quote: "Data-driven marketing that actually makes sense. No fluff, just pure ROI and transparent reporting every week.",
    name: "Omar Khalid",
    role: "Managing Director",
    company: "Global Logistics",
    initials: "OK",
    metrics: ["100X ROI", "Full Transparency", "Growth Hack"],
  },
];
