"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

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
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md"
      style={{
        borderBottom: "1px solid var(--border)",
        background: "rgba(13,4,20,0.80)",
      }}
    >
      <div className="flex items-center justify-between px-6 md:px-16 h-24 relative overflow-visible">
        {/* logo */}
        <Link
          href="/"
          className="mt-4 left-6 md:left-16 top-0 transition-opacity hover:opacity-80 z-20 h-20 w-48 relative"
        >
          {/* Desktop Logo */}
          <div className="hidden md:block">
            <Image
              src="/logo-01.png"
              alt="ClutchBlue Logo"
              width={230}
              height={310}
              className="absolute top-1/2 left-0 -translate-y-1/2 h-[310px] w-auto object-contain pointer-events-none"
              priority
            />
          </div>
          {/* Mobile Logo */}
          <div className="md:hidden">
            <Image
              src="/logo-01.png"
              alt="ClutchBlue Logo"
              width={230}
              height={310}
              className="absolute top-1/2 left-0 -translate-y-1/2 h-[310px] w-auto object-contain pointer-events-none"
              priority
            />
          </div>
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
