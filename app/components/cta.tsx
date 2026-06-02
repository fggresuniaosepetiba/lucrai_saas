"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, CreditCard, Clock } from "lucide-react";

export function CTA() {
  return (
    <section id="comecar" className="py-16 md:py-24">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-xl border border-[#e2e8f0] bg-[#ffffff] p-8 md:p-12"
        >
          <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#0059bb]/5 blur-3xl" />

          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-display-lg mb-4 text-on-surface md:text-4xl">
      Comece agora.{" "}
              <span className="text-[#0059bb]">Seu CFO Digital Inteligente</span>{" "}
              espera por você.
            </h2>
            <p className="text-body-lg mb-8 text-on-surface-variant">
              Junte-se a milhares de empresas que já transformaram sua gestão
              financeira com inteligência artificial. 14 dias grátis, sem
              compromisso.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#comecar"
                className="inline-flex h-12 items-center gap-2 rounded-md bg-[#0059bb] px-8 text-base font-medium text-white transition-colors hover:bg-[#004ca0]"
              >
                Começar Gratuitamente
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-on-surface-variant" />
                <span className="text-body-md text-on-surface-variant">
                  14 dias grátis
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-on-surface-variant" />
                <span className="text-body-md text-on-surface-variant">
                  Sem cartão de crédito
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-on-surface-variant" />
                <span className="text-body-md text-on-surface-variant">
                  Cancele quando quiser
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
