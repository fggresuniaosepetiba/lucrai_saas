"use client";

import { motion } from "framer-motion";
import { Check, X, Zap } from "lucide-react";
import { cn } from "@/app/lib/cn";

const traditionalItems = [
  "R$ 25.000,00 a R$ 50.000,00 por mês",
  "Disponibilidade limitada",
  "Análise manual de dados",
  "Relatórios semanais",
  "Sem inteligência preditiva",
  "Decisões baseadas em intuição",
];

const lucraiItems = [
  "A partir de R$ 29,90 por mês",
  "Disponível 24 horas por dia",
  "Análise automatizada com IA",
  "Relatórios em tempo real",
  "Inteligência preditiva avançada",
  "Decisões baseadas em dados",
];

export function ComparisonCFO() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-display-lg mb-4 text-on-surface md:text-4xl">
            CFO Tradicional vs{" "}
            <span className="text-[#0059bb]">CFO Digital Lucraí</span>
          </h2>
          <p className="text-body-lg mx-auto max-w-2xl text-on-surface-variant">
            Descubra por que milhares de empresas estão migrando para o CFO
            Digital Inteligente.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2"
        >
          <div className="flex flex-col rounded-xl border border-[#e2e8f0] bg-[#ffffff] p-8">
            <span className="text-label-md mb-1 text-on-surface-variant">
              CFO TRADICIONAL
            </span>
            <h3 className="text-headline-md mb-6 text-on-surface">
              O modelo que está ficando para trás
            </h3>
            <ul className="flex flex-col gap-4">
              {traditionalItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                  <span className="text-body-md text-on-surface-variant">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex flex-col rounded-xl border-2 border-[#0059bb]/20 bg-[#ffffff] p-8 shadow-md">
            <div className="absolute -top-3 right-6">
              <span className="inline-flex items-center gap-1 rounded-full bg-[#0059bb] px-3 py-1 text-label-sm uppercase tracking-[0.08em] text-white">
                <Zap className="h-3 w-3" />
                RECOMENDADO PARA PMEs
              </span>
            </div>
            <span className="text-label-md mb-1 text-[#0059bb]">
              CFO DIGITAL LUCRAÍ
            </span>
            <h3 className="text-headline-md mb-6 text-on-surface">
              Seu Diretor Financeiro Digital Inteligente
            </h3>
            <ul className="flex flex-col gap-4">
              {lucraiItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                  <span className="text-body-md text-on-surface">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
