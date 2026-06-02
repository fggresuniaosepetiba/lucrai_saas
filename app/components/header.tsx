"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Recursos", href: "#recursos" },
  { label: "Planos", href: "#planos" },
  { label: "Depoimentos", href: "#depoimentos" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      <div className="absolute inset-0 bg-[#f8f9ff]/80 backdrop-blur-md" />
      <div className="container-main relative flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/icon-oficial.png"
              alt="Lucraí"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span
            className="text-headline-sm text-on-surface"
            style={{ fontFamily: "var(--font-geist)" }}
          >
            Lucraí
          </span>
          </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-body-md text-on-surface-variant transition-colors hover:text-on-surface"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#comecar"
            className="inline-flex h-10 items-center rounded-md bg-[#0059bb] px-5 text-sm font-medium text-white transition-colors hover:bg-[#004ca0]"
          >
            Começar Gratuitamente
          </a>
        </nav>

        <button
          className="flex md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-on-surface" />
          ) : (
            <Menu className="h-6 w-6 text-on-surface" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute top-16 left-0 right-0 border-b border-[#e2e8f0] bg-[#f8f9ff]/95 backdrop-blur-md md:hidden"
          >
            <nav className="container-main flex flex-col gap-4 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-body-lg text-on-surface-variant transition-colors hover:text-on-surface"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
            </a>
              ))}
              <a
                href="#comecar"
                className="mt-2 inline-flex h-10 items-center justify-center rounded-md bg-[#0059bb] px-5 text-sm font-medium text-white transition-colors hover:bg-[#004ca0]"
                onClick={() => setMobileOpen(false)}
              >
                Começar Gratuitamente
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
