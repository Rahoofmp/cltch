import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Journal", href: "/journal" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Web & Software Development", href: "/services/web-software-development" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "Branding & Content", href: "/services/branding-content" },
      { label: "Complete Digital Management", href: "/services/complete-digital-management" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="section-border pt-20 pb-10 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* brand */}
        <div>
          <Link
            href="/"
            className="inline-block transition-opacity hover:opacity-80 mb-6 h-16 w-48 relative overflow-hidden flex items-start"
          >
            <Image
              src="/logo-01.png"
              alt="ClutchBlue Logo"
              width={230}
              height={310}
              className="absolute top-1/2 left-0 -translate-y-1/2 h-[310px] w-auto object-contain"
            />
          </Link>
          <p
            className="font-poppins font-normal text-sm mt-4 max-w-xs leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            A full-stack digital agency specialized in Next.js & Laravel development. 
            Contact us at <span className="text-white">clutchbluelimited@gmail.com</span>
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
        className="mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
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
