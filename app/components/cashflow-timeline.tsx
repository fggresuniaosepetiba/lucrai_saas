"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Calendar, Wallet } from "lucide-react";
import { cn } from "@/app/lib/cn";

const events = [
  {
    label: "Receitas projetadas",
    value: "R$ 920.000",
    type: "income" as const,
    date: "Jun 2026",
  },
  {
    label: "Despesas fixas",
    value: "R$ 480.000",
    type: "expense" as const,
    date: "Jun 2026",
  },
  {
    label: "Investimento planejado",
    value: "R$ 120.000",
    type: "expense" as const,
    date: "Jul 2026",
  },
  {
    label: "Novos contratos",
    value: "R$ 250.000",
    type: "income" as const,
    date: "Ago 2026",
  },
  {
    label: "Saldo projetado",
    value: "R$ 2.4M",
    type: "balance" as const,
    date: "Próximo trimestre",
  },
];

export function CashflowTimeline() {
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
            Fluxo de caixa com{" "}
            <span className="text-[#0059bb]">visão de futuro</span>
          </h2>
          <p className="text-body-lg mx-auto max-w-2xl text-on-surface-variant">
            Antecipe entradas e saídas com projeções inteligentes baseadas em
            IA. Saiba hoje o que vai acontecer amanhã.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          <div className="relative rounded-xl border border-[#e2e8f0] bg-[#ffffff] p-6 md:p-8">
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Wallet className="h-5 w-5 text-[#0059bb]" />
                <span className="text-headline-sm text-on-surface">
                  Projeção Inteligente
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-green-50 px-3 py-1">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-label-sm text-green-700">
                  Saúde financeira: Excelente
                </span>
              </div>
            </div>

            <div className="relative mb-8">
              <div className="absolute top-0 bottom-0 left-[19px] w-px bg-[#e2e8f0]" />
              <div className="flex flex-col gap-6">
                {events.map((event, index) => {
                  const Icon =
                    event.type === "income"
                      ? TrendingUp
                      : event.type === "expense"
                        ? TrendingDown
                        : Calendar;
                  return (
                    <div key={event.label} className="relative flex items-start gap-4">
                      <div
                        className={cn(
                          "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#ffffff]",
                          event.type === "income" && "bg-green-50",
                          event.type === "expense" && "bg-red-50",
                          event.type === "balance" && "bg-blue-50",
                        )}
                      >
                        <Icon
                          className={cn(
                            "h-4 w-4",
                            event.type === "income" && "text-green-600",
                            event.type === "expense" && "text-red-500",
                            event.type === "balance" && "text-[#0059bb]",
                          )}
                        />
                      </div>
                      <div className="flex flex-1 items-center justify-between gap-4">
                        <div>
                          <span className="text-body-md block font-medium text-on-surface">
                            {event.label}
                          </span>
                          <span className="text-label-sm text-on-surface-variant">
                            {event.date}
                          </span>
                        </div>
                        <span
                          className={cn(
                            "text-headline-sm shrink-0",
                            event.type === "income" && "text-green-600",
                            event.type === "expense" && "text-red-500",
                            event.type === "balance" && "text-[#0059bb]",
                          )}
                        >
                          {event.value}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-lg bg-[#f8f9ff] p-4">
              <div className="flex items-center justify-between">
                <span className="text-body-md text-on-surface-variant">
                  Projeção para os próximos meses
                </span>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-sm bg-green-500" />
                    <span className="text-label-sm text-on-surface-variant">
                      Entradas
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-sm bg-red-400" />
                    <span className="text-label-sm text-on-surface-variant">
                      Saídas
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex h-10 items-end gap-1">
                {[65, 70, 55, 75, 60, 80, 72, 85, 78, 90, 82, 88].map(
                  (val, i) => (
                    <div
                      key={i}
                      className="flex flex-1 flex-col items-center gap-0.5"
                    >
                      <div
                        className="w-full rounded-t-sm bg-green-500/80"
                        style={{ height: `${val}%` }}
                      />
                      <div
                        className="w-full rounded-t-sm bg-red-400/60"
                        style={{ height: `${Math.max(val - 30, 10)}%` }}
                      />
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
