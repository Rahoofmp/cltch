"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md"
      style={{
        borderBottom: "1px solid var(--border)",
        background: "rgba(13,4,20,0.80)",
      }}
    >
      <div className="flex items-center justify-between px-6 md:px-16 h-16">
        {/* logo */}
        <Link
          href="/"
          className="font-poppins font-[800] text-[1.4rem] tracking-[0.05em] transition-colors"
          style={{ color: "var(--white)" }}
        >
          CLUTCHBLUE
        </Link>

        {/* desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-poppins font-normal text-[0.85rem] tracking-[0.06em] uppercase transition-colors duration-200"
              style={{ color: "var(--muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="font-poppins font-bold text-[0.8rem] tracking-[0.06em] px-5 py-2 transition-all duration-200 hover:opacity-90"
            style={{ background: "var(--accent)", color: "var(--white)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--accent-dark)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--accent)")}
          >
            LET&apos;S TALK
          </Link>
        </div>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          style={{ color: "var(--white)" }}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-8 pt-4 space-y-5"
          style={{
            background: "var(--black)",
            borderTop: "1px solid var(--border)",
          }}
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block font-poppins font-normal text-[1rem] tracking-[0.06em] uppercase transition-colors"
              style={{ color: "var(--muted)" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="inline-block font-poppins font-bold text-[0.85rem] px-6 py-3 mt-2"
            style={{ background: "var(--accent)", color: "var(--white)" }}
          >
            LET&apos;S TALK
          </Link>
        </div>
      )}
    </nav>
  );
}
