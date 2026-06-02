"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e2e8f0] bg-[#ffffff] px-4 py-1.5 shadow-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-[#0059bb]" />
            <span className="text-label-sm uppercase tracking-[0.08em] text-[#0059bb]">
              O Futuro do CFO Digital
            </span>
          </div>

          <h1 className="text-display-lg mb-6 text-on-surface md:text-5xl lg:text-6xl">
            Pare de administrar sua empresa{" "}
            <span className="text-[#0059bb]">olhando apenas o saldo bancário.</span>
          </h1>

          <p className="text-body-lg mx-auto mb-8 max-w-3xl text-on-surface-variant">
            Tenha a inteligência estratégica de um CFO profissional sem o custo
            de R$ 25 mil a R$ 50 mil por mês. Transforme dados financeiros em
            decisões lucrativas com IA.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#comecar"
              className="inline-flex h-12 items-center gap-2 rounded-md bg-[#0059bb] px-6 text-base font-medium text-white transition-colors hover:bg-[#004ca0]"
            >
              Começar Gratuitamente
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#demonstracao"
              className="inline-flex h-12 items-center gap-2 rounded-md border border-[#e2e8f0] bg-[#ffffff] px-6 text-base font-medium text-on-surface transition-colors hover:bg-[#f8f9ff]"
            >
              <Play className="h-4 w-4" />
              Ver Demonstração
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-[#ffffff] bg-[#e5eeff]"
                />
              ))}
            </div>
            <span className="text-body-md text-on-surface-variant">
              <strong className="text-on-surface">14 dias grátis</strong> —
              Sem cartão de crédito
            </span>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#0059bb]/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#0059bb]/5 blur-3xl" />
    </section>
  );
}
