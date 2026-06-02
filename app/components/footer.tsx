"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Youtube, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#e2e8f0] py-12">
      <div className="container-main">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col items-center justify-between gap-6 md:flex-row">
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

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-body-md text-on-surface-variant transition-colors hover:text-on-surface"
              >
                Termos de Uso
              </a>
              <a
                href="#"
                className="text-body-md text-on-surface-variant transition-colors hover:text-on-surface"
              >
                Privacidade
              </a>
              <a
                href="#"
                className="text-body-md text-on-surface-variant transition-colors hover:text-on-surface"
              >
                Contato
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-[#e2e8f0] transition-colors hover:bg-[#f8f9ff] hover:text-[#0A66C2]"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-[#e2e8f0] transition-colors hover:bg-[#f8f9ff] hover:text-[#E4405F]"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-[#e2e8f0] transition-colors hover:bg-[#f8f9ff] hover:text-[#FF0000]"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="border-t border-[#e2e8f0] pt-8 text-center">
            <p className="text-body-md text-on-surface-variant">
              &copy; {new Date().getFullYear()} Lucraí. Todos os direitos
              reservados.
            </p>
            <p className="text-body-md text-on-surface-variant">
              Seu Diretor Financeiro Digital Inteligente
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
