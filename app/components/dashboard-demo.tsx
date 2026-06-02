"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, DollarSign, BarChart3, AlertTriangle, Lightbulb } from "lucide-react";
import { cn } from "@/app/lib/cn";

const cards = [
  {
    label: "Receita do mês",
    value: "R$ 847.320,00",
    change: "+12,5%",
    positive: true,
    icon: TrendingUp,
  },
  {
    label: "Despesas do mês",
    value: "R$ 523.180,00",
    change: "+3,2%",
    positive: false,
    icon: TrendingDown,
  },
  {
    label: "Margem líquida",
    value: "38,2%",
    change: "+8,3%",
    positive: true,
    icon: DollarSign,
  },
  {
    label: "Saldo projetado",
    value: "R$ 2,4M",
    change: "Próximo trimestre",
    positive: true,
    icon: BarChart3,
  },
];

export function DashboardDemo() {
  return (
    <section id="recursos" className="py-16 md:py-24">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-display-lg mb-4 text-on-surface md:text-4xl">
            Seu painel de comando financeiro
          </h2>
          <p className="text-body-lg mx-auto max-w-2xl text-on-surface-variant">
            Visualize em tempo real a saúde financeira da sua empresa com
            inteligência artificial preditiva.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-xl border border-[#e2e8f0] bg-[#ffffff] shadow-sm"
        >
          <div className="grid grid-cols-1 gap-px bg-[#e2e8f0] sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.label}
                  className="flex flex-col gap-2 bg-[#ffffff] p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-body-md text-on-surface-variant">
                      {card.label}
                    </span>
                    <Icon className="h-5 w-5 text-on-surface-variant" />
                  </div>
                  <span className="text-headline-md text-on-surface">
                    {card.value}
                  </span>
                  <span
                    className={cn(
                      "text-label-sm flex items-center gap-1",
                      card.positive ? "text-green-600" : "text-red-500",
                    )}
                  >
                    {card.positive ? (
                      <TrendingUp className="h-3 w-3" />
                    ) : (
                      <TrendingDown className="h-3 w-3" />
                    )}
                    {card.change}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 gap-px bg-[#e2e8f0] md:grid-cols-2">
            <div className="flex items-start gap-3 bg-[#ffffff] p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <span className="text-label-md mb-1 block text-on-surface">
                  Alerta Inteligente
                </span>
                <p className="text-body-md text-on-surface-variant">
                  Custos operacionais subiram 15% — Revise fornecedores este
                  mês para manter a margem.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-[#ffffff] p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                <Lightbulb className="h-5 w-5 text-[#0059bb]" />
              </div>
              <div>
                <span className="text-label-md mb-1 block text-on-surface">
                  Insight Estratégico
                </span>
                <p className="text-body-md text-on-surface-variant">
                  Margem líquida 8% acima da média do setor — Sua empresa está
                  no top 15% do mercado.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
