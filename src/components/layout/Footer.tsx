import Link from "next/link";

const footerLinks = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Work", href: "/work" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "SEO & Content", href: "/services/seo-content" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "Mobile Apps", href: "/services/mobile-apps" },
      { label: "Brand & UI/UX", href: "/services/brand-ui-ux" },
      { label: "Automation & AI", href: "/services/automation-ai" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="section-border py-20 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* brand */}
        <div>
          <Link
            href="/"
            className="font-poppins font-[800] text-[1.6rem] tracking-[0.05em]"
            style={{ color: "var(--white)" }}
          >
            CLUTCHBLUE
          </Link>
          <p
            className="font-poppins font-normal text-sm mt-4 max-w-xs leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            A full-stack digital agency from Kerala, India. Strategy, software, and growth — under one roof.
          </p>
        </div>

        {/* link columns */}
        {footerLinks.map((col) => (
          <div key={col.heading}>
            <h4
              className="font-poppins font-bold text-sm tracking-[0.1em] uppercase mb-4"
              style={{ color: "var(--white)" }}
            >
              {col.heading}
            </h4>
            <ul className="space-y-2.5">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-poppins font-normal text-[0.85rem] transition-colors"
                    style={{ color: "var(--muted)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* bottom bar */}
      <div
        className="mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <p className="font-poppins font-normal text-[0.75rem]" style={{ color: "var(--muted)" }}>
          © {new Date().getFullYear()} ClutchBlue. All rights reserved.
        </p>
        <p className="font-poppins font-normal text-[0.75rem]" style={{ color: "var(--muted)" }}>
          Built with obsession in Kerala, India.
        </p>
      </div>
    </footer>
  );
}
