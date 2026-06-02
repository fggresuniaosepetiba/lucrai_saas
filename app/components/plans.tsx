"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket,
  BarChart3,
  BrainCircuit,
  Building2,
  Shield,
  RefreshCw,
  Lock,
  HeadphonesIcon,
  ChevronDown,
  Check,
  Star,
} from "lucide-react";
import { cn } from "@/app/lib/cn";

const plans = [
  {
    id: "starter",
    name: "STARTER",
    icon: Rocket,
    description: "Para quem está começando a organizar as finanças.",
    price: "R$ 29,90",
    period: "/mês",
    highlight: false,
    color: "blue",
    buttonVariant: "outline" as const,
    buttonText: "Começar agora",
    features: [
      "Dashboard financeiro completo",
      "Até 500 transações/mês",
      "Conciliação bancária automática",
      "Categorização inteligente",
      "Suporte por email prioritário",
    ],
  },
  {
    id: "basic",
    name: "BASIC",
    icon: BarChart3,
    description: "Para empresas que querem crescer com previsibilidade.",
    price: "R$ 59,90",
    period: "/mês",
    highlight: false,
    color: "blue",
    buttonVariant: "outline" as const,
    buttonText: "Começar agora",
    features: [
      "Tudo do Starter",
      "Até 2.000 transações/mês",
      "Projeções de fluxo de caixa",
      "Alertas inteligentes",
      "Múltiplas contas",
    ],
  },
  {
    id: "pro",
    name: "PRO",
    icon: BrainCircuit,
    description: "Seu CFO Digital Inteligente.",
    price: "R$ 99,90",
    period: "/mês",
    highlight: true,
    color: "blue",
    buttonVariant: "filled" as const,
    buttonText: "Começar agora",
    features: [
      "Tudo do Basic",
      "Transações ilimitadas",
      "IA preditiva avançada",
      "Insights estratégicos",
      "API dedicada",
    ],
  },
  {
    id: "custom",
    name: "CUSTOM",
    icon: Building2,
    description: "Solução personalizada para operações de alto volume.",
    price: "Sob consulta",
    period: "",
    highlight: false,
    color: "purple",
    buttonVariant: "outline" as const,
    buttonText: "Falar com especialista",
    features: [
      "Tudo do Pro",
      "Volume personalizado",
      "Onboarding dedicado",
      "Gerente de conta exclusivo",
      "Treinamento da equipe",
    ],
  },
];

const trustItems = [
  { icon: Shield, label: "Segurança de ponta", description: "Seus dados protegidos com padrão bancário." },
  { icon: RefreshCw, label: "Dados em tempo real", description: "Atualizações instantâneas das suas movimentações." },
  { icon: Lock, label: "Privacidade garantida", description: "Total conformidade com a LGPD." },
  { icon: HeadphonesIcon, label: "Suporte humanizado", description: "Atendimento por pessoas reais." },
];

export function Plans() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  function PricingCard({
    plan,
    index,
  }: {
    plan: (typeof plans)[number];
    index: number;
  }) {
    const isOpen = openAccordion === plan.id;
    const Icon = plan.icon;
    const isPro = plan.highlight;

    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={cn(
          "relative flex flex-col rounded-[24px] bg-[#ffffff] p-8 transition-all duration-300",
          isPro
            ? "border-2 border-[#017AFD]/40 shadow-xl shadow-[#017AFD]/5 xl:scale-[1.05]"
            : "border border-[#e2e8f0]/80 shadow-sm hover:shadow-md",
        )}
      >
        {isPro && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <span className="inline-flex items-center gap-1 rounded-full bg-[#017AFD] px-4 py-1.5 text-label-sm font-semibold uppercase tracking-[0.06em] text-white shadow-lg">
              <Star className="h-3 w-3" />
              MAIS POPULAR
            </span>
          </div>
        )}

        <div
          className={cn(
            "mb-4 flex h-12 w-12 items-center justify-center rounded-xl",
            plan.color === "purple" ? "bg-purple-50" : "bg-[#017AFD]/10",
          )}
        >
          <Icon
            className={cn(
              "h-6 w-6",
              plan.color === "purple" ? "text-purple-600" : "text-[#017AFD]",
            )}
          />
        </div>

        <span className="text-label-md mb-1 font-semibold tracking-[0.06em] text-on-surface">
          {plan.name}
        </span>

        <p className="text-body-md mb-5 text-on-surface-variant">
          {plan.description}
        </p>

        <div className="mb-4 flex items-baseline gap-1">
          <span
            className={cn(
              "text-4xl font-bold tracking-tight",
              isPro ? "text-[#017AFD]" : "text-on-surface",
            )}
            style={{ fontFamily: "var(--font-geist)" }}
          >
            {plan.price}
          </span>
          {plan.period && (
            <span className="text-body-md text-on-surface-variant">
              {plan.period}
            </span>
          )}
        </div>

        <div className="mb-6 flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-50">
            <Check className="h-3 w-3 text-green-600" />
          </div>
          <span className="text-body-md text-on-surface">14 dias grátis</span>
        </div>

        <a
          href={plan.id === "custom" ? "#contato" : "#comecar"}
          className={cn(
            "mb-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg text-sm font-semibold transition-all duration-200 active:scale-[0.98]",
            plan.buttonVariant === "filled"
              ? "bg-[#017AFD] text-white shadow-sm hover:bg-[#006AE0] hover:shadow-md"
              : plan.color === "purple"
                ? "border border-purple-300 bg-[#ffffff] text-purple-700 hover:bg-purple-50"
                : "border border-[#017AFD]/30 bg-[#ffffff] text-[#017AFD] hover:bg-[#017AFD]/5",
          )}
        >
          {plan.buttonText}
        </a>

        <button
          onClick={() => setOpenAccordion(isOpen ? null : plan.id)}
          className="mt-auto flex w-full items-center justify-center gap-1.5 border-t border-[#e2e8f0] pt-4 text-label-sm text-on-surface-variant transition-colors hover:text-on-surface"
        >
          Ver o que está incluso
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.span>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <ul className="flex flex-col gap-3 pt-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={cn(
                        "mt-0.5 h-4 w-4 shrink-0",
                        plan.color === "purple"
                          ? "text-purple-500"
                          : "text-[#017AFD]",
                      )}
                    />
                    <span className="text-body-md text-on-surface">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }

  return (
    <section id="planos" className="py-16 md:py-24">
      <div className="container-main">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex justify-center"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#017AFD]/10 px-4 py-1.5 text-label-sm font-semibold uppercase tracking-[0.06em] text-[#017AFD]">
              <Shield className="h-3.5 w-3.5" />
              14 DIAS GRÁTIS EM TODOS OS PLANOS
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12 text-center"
          >
            <h2
              className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-geist)" }}
            >
              Planos que{" "}
              <span className="bg-gradient-to-r from-[#017AFD] to-[#0059bb] bg-clip-text text-transparent">
                crescem
              </span>{" "}
              com você
            </h2>
            <p className="text-body-lg mx-auto max-w-2xl text-[#64748B]">
              Escolha o plano ideal para o seu negócio e comece a lucrar mais
              com o Lucraí.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:items-start">
            {plans.map((plan, index) => (
              <PricingCard key={plan.id} plan={plan} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 grid grid-cols-1 gap-6 rounded-[24px] border border-[#e2e8f0]/80 bg-[#ffffff] p-8 shadow-sm md:grid-cols-4 md:gap-0"
          >
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-start gap-4 md:border-r md:border-[#e2e8f0] md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                >
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#64748B]" />
                  <div>
                    <span className="text-label-sm block font-semibold text-on-surface">
                      {item.label}
                    </span>
                    <span className="text-body-md text-[#64748B]">
                      {item.description}
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 text-center text-body-md text-[#94A3B8]"
          >
            Cancelamento a qualquer momento. Sem burocracia.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
