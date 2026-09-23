"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50"
      style={{
        borderBottom: "1px solid var(--border)",
        background: "var(--black)",
      }}
    >
      <div className="flex items-center justify-between px-6 md:px-16 h-24 relative overflow-visible">
        {/* logo */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="mt-4 -ml-4 md:-ml-6 top-0 transition-opacity hover:opacity-80 z-20 h-20 w-48 relative"
        >
          <Image
            src="/CB-LOGO-2.png"
            alt="ClutchBlue Logo"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* Spacer to reserve space for the absolute logo (230px + some gap) */}
        <div className="hidden lg:block w-[250px] flex-shrink-0" />
        <div className="lg:hidden w-[100px] md:w-[150px] flex-shrink-0" />

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
          className="md:hidden z-50 relative"
          style={{ color: "var(--white)" }}
          aria-label="Toggle menu"
        >
          <MenuToggleIcon open={open} size={32} />
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
