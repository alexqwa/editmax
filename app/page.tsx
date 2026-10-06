"use client";

import Link from "next/link";
import Image from "next/image";
import {
  LinkIcon,
  PlusIcon,
  CaretLeftIcon,
  CaretRightIcon,
  ShieldCheckIcon,
  ArrowUpRightIcon,
} from "@phosphor-icons/react";

import { AvatarGroup, AvatarGroupCount } from "@/components/ui/avatar";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";

import logoImg from "@/src/assets/logo.svg";
import mockupImg from "@/public/mockup_4x.png";
import { Header } from "@/src/components/header";
import { PlanCard } from "@/src/components/plan-card";

const plans = [
  {
    id: 0,
    planTitle: "Grátis",
    planDescription: "10 vídeos por nossa conta, sem renovação",
    planPrice: "0,00",
    planSubscriptionType: "one_time" as const,
    planCurrentSubscription: {
      title: "Gratuito",
      options: [
        { label: "Edição e exportação em lote" },
        { label: "Textos, recortes, fundos, logo e áudio" },
      ],
    },
    planNextSubscription: {
      title: "Starter",
      options: [
        { label: "Tudo do plano Gratuito" },
        { label: "Modo anti duplicidade" },
        { label: "Limpador de Metadados" },
        { label: "Sem marca d'água nos vídeos exportados" },
      ],
    },
    planMostPopular: false,
  },
  {
    id: 1,
    planTitle: "Starter",
    planDescription: "Para criadores que estão começando",
    planPrice: "69,99",
    planOldPrice: "99,99",
    planSubscriptionType: "monthly" as const,
    planCurrentSubscription: {
      title: "Starter",
      options: [
        { label: "Tudo do plano Gratuito" },
        { label: "Modo anti duplicidade" },
        { label: "Limpador de Metadados" },
        { label: "Sem marca d'água nos vídeos exportados" },
      ],
    },
    planNextSubscription: {
      title: "Publisher",
      options: [
        { label: "Prioridade no suporte" },
        { label: "Agende suas publicações em +8 plataformas" },
        { label: "Grupo VIP no WhatsApp para networking e suporte" },
      ],
    },
    planMostPopular: true,
  },
  {
    id: 2,
    planTitle: "Publisher",
    planDescription: "Para criadores com operações em escala",
    planPrice: "179,99",
    planOldPrice: "249,99",
    planSubscriptionType: "monthly" as const,
    planCurrentSubscription: {
      title: "Publisher",
    },
    planNextSubscription: {
      options: [
        { label: "Edição e exportação em lote" },
        { label: "Textos, recortes, fundos, logo e áudio" },
        { label: "Modo anti duplicidade" },
        { label: "Limpador de Metadados" },
        { label: "Sem marca d'água nos vídeos exportados" },
        { label: "Prioridade no suporte" },
        { label: "Agende suas publicações em +8 plataformas" },
        { label: "Grupo VIP no WhatsApp para networking e suporte" },
      ],
    },
    planMostPopular: false,
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <Header />
      <main className="relative">
        <section id="hero" className="scroll-mt-26.5 pt-26.5">
          <div className="flex flex-col gap-px bg-[#F2F4F8]">
            <div className="flex gap-px">
              <div className="hidden flex-1 xl:block">
                <div className="relative h-full overflow-hidden rounded-r-sm bg-white" />
              </div>
              <div className="w-full max-w-345 overflow-hidden rounded-sm bg-white">
                <div className="relative">
                  <div className="px-8 py-14 lg:px-12 lg:py-20">
                    <div className="flex items-center gap-3 w-fit">
                      <AvatarGroup className="hidden lg:flex">
                        <Avatar>
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar>
                          <AvatarImage
                            src="https://github.com/diego3g.png"
                            alt="@maxleiter"
                          />
                          <AvatarFallback>LR</AvatarFallback>
                        </Avatar>
                        <Avatar>
                          <AvatarImage
                            src="https://github.com/maxleiter.png"
                            alt="@maxleiter"
                          />
                          <AvatarFallback>LR</AvatarFallback>
                        </Avatar>
                        <Avatar>
                          <AvatarImage
                            src="https://github.com/alexqwa.png"
                            alt="@evilrabbit"
                          />
                          <AvatarFallback>ER</AvatarFallback>
                        </Avatar>
                        <AvatarGroupCount className="bg-[#052D2B] text-[11px] font-semibold text-white">
                          +99
                        </AvatarGroupCount>
                      </AvatarGroup>
                      <AvatarGroup className="flex lg:hidden">
                        <Avatar>
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar>
                          <AvatarImage
                            src="https://github.com/diego3g.png"
                            alt="@maxleiter"
                          />
                          <AvatarFallback>LR</AvatarFallback>
                        </Avatar>
                        <Avatar>
                          <AvatarImage
                            src="https://github.com/alexqwa.png"
                            alt="@maxleiter"
                          />
                          <AvatarFallback>LR</AvatarFallback>
                        </Avatar>
                        <AvatarGroupCount className="bg-[#052D2B] text-[11px] font-semibold text-white">
                          +99
                        </AvatarGroupCount>
                      </AvatarGroup>
                      <span className="text-[13px] text-muted-foreground">
                        <span className="hidden lg:inline">
                          Junte-se aos criadores que já usam a EditMax
                        </span>
                        <span className="lg:hidden">
                          Junte-se a +150 criadores na EditMax
                        </span>
                      </span>
                    </div>
                    <h1 className="mt-8 text-[2.5rem] font-semibold leading-[1.2] tracking-[-0.035em] text-[#052D2B] sm:text-[2.75rem] lg:text-[3.5rem] lg:leading-[1.15]">
                      <span className="block">A máquina de conteúdos</span>
                      <span className="block">
                        para quem quer{" "}
                        <span className="shiny-btn inline-block -translate-y-1.25 rounded-md bg-[#B1FE7B] px-2 align-middle text-[#052D2B]">
                          crescer.
                        </span>
                      </span>
                    </h1>
                    <p className="mt-7 max-w-2xl text-[18px] leading-[1.7] text-muted-foreground sm:text-[22px] sm:leading-[1.6]">
                      Automatize sua produção de vídeos e transforme horas de
                      trabalho repetitivo em conteúdo pronto para publicar.
                    </p>
                    <div className="mt-9 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
                      <div className="relative inline-flex min-w-0 w-full sm:w-auto">
                        <div className="inline-flex min-w-0 items-stretch w-full overflow-hidden rounded-lg border-[0.5px] border-white/25 bg-[#B1FE7B] ring-1 [--btn-ring:color-mix(in_oklab,var(--color-foreground)_15%,#B1FE7B)] ring-(--btn-ring) shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] sm:w-auto">
                          <Link
                            href="https://app.editmax.vercel.app"
                            className="flex min-w-0 flex-1 items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 group/btn h-11 w-full px-6 text-[15px] font-semibold text-[#052D2B] transition-all duration-300 hover:bg-[#a0f060] active:scale-[0.99] active:transition-none"
                          >
                            <span className="min-w-0">
                              Quero começar automatizar
                            </span>
                          </Link>
                        </div>
                      </div>
                      <Link
                        href="#demo"
                        className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-border/60 bg-white px-6 text-[15px] font-medium text-foreground transition-all duration-200 hover:bg-muted/50 active:scale-[0.99] active:transition-none sm:w-auto"
                      >
                        Ver demonstração
                      </Link>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[55%] overflow-hidden lg:block">
                    <Image
                      alt="mockup"
                      src={mockupImg}
                      className="absolute h-[70%] right-10 top-1/2 w-auto -translate-y-1/2"
                    />
                  </div>
                </div>
              </div>
              <div className="hidden flex-1 xl:block">
                <div className="relative h-full overflow-hidden rounded-r-sm bg-white" />
              </div>
            </div>
            <div className="flex gap-px">
              <div className="hidden flex-1 xl:block">
                <div className="relative h-full overflow-hidden rounded-r-sm bg-white" />
              </div>
              <div className="w-full max-w-345 overflow-hidden rounded-sm bg-[#F2F4F8]">
                <div className="grid grid-cols-2 gap-px lg:grid-cols-4">
                  <div className="rounded-sm bg-white px-8 py-6 lg:px-10 text-center">
                    <span className="block text-[34px] font-bold tracking-[-0.03em] text-[#052D2B] sm:text-[42px]">
                      <span className="inline-block tabular-nums">10.000</span>
                      <span className="text-[#99E36A]">+</span>
                    </span>
                    <span className="mt-1.5 block text-[15px] text-muted-foreground">
                      Vídeos editados em massa
                    </span>
                  </div>
                  <div className="rounded-sm bg-white px-8 py-6 lg:px-10 text-center">
                    <span className="block text-[34px] font-bold tracking-[-0.03em] text-[#052D2B] sm:text-[42px]">
                      <span className="inline-block tabular-nums">8</span>
                      <span className="text-[#99E36A]">+</span>
                    </span>
                    <span className="mt-1.5 block text-[15px] text-muted-foreground">
                      Plataformas integradas
                    </span>
                  </div>
                  <div className="rounded-sm bg-white px-8 py-6 lg:px-10 text-center">
                    <span className="block text-[34px] font-bold tracking-[-0.03em] text-[#052D2B] sm:text-[42px]">
                      <span className="inline-block tabular-nums">250</span>
                      <span className="text-[#99E36A]">+</span>
                    </span>
                    <span className="mt-1.5 block text-[15px] text-muted-foreground">
                      Criadores e empresas
                    </span>
                  </div>
                  <div className="rounded-sm bg-white px-8 py-6 lg:px-10 text-center">
                    <span className="block text-[34px] font-bold tracking-[-0.03em] text-[#052D2B] sm:text-[42px]">
                      &lt;
                      <span className="inline-block tabular-nums">15</span>
                      <span className="text-[#99E36A]">min</span>
                    </span>
                    <span className="mt-1.5 block text-[15px] text-muted-foreground">
                      P/ Gerar 150+ vídeos em massa
                    </span>
                  </div>
                </div>
              </div>
              <div className="hidden flex-1 xl:block">
                <div className="relative h-full overflow-hidden rounded-r-sm bg-white" />
              </div>
            </div>
            <div className="flex gap-px">
              <div className="hidden flex-1 xl:block">
                <div className="h-full rounded-r-sm bg-white"></div>
              </div>
              <div className="w-full max-w-345 overflow-hidden rounded-sm bg-white h-12"></div>
              <div className="hidden min-w-0.5 flex-1 xl:block">
                <div className="h-full rounded-l-sm bg-white"></div>
              </div>
            </div>
            <div id="how-works" className="flex gap-px scroll-mt-28">
              <div className="hidden flex-1 xl:block">
                <div className="h-full rounded-r-sm bg-white"></div>
              </div>
              <div className="w-full max-w-345 overflow-hidden rounded-sm bg-white">
                <div className="h-4 lg:h-12" />
                <div className="grid lg:grid-cols-[2.3fr_2fr] lg:min-h-130">
                  <div className="flex flex-col p-8 lg:p-10 lg:pb-8">
                    <span className="inline-flex w-fit items-center rounded-full bg-[#B1FE7B]/50 px-3.5 py-1.5 text-[14px] font-medium text-[#052D2B]">
                      Como funciona?
                    </span>
                    <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-[#052D2B] sm:text-4xl lg:text-[3.25rem] lg:leading-[1.15]">
                      <span className="hidden lg:block">
                        Edite centenas de vídeos
                      </span>
                      <span className="hidden lg:block">
                        com apenas{" "}
                        <span className="inline-block rounded-md bg-[#B1FE7B] px-2 text-[#052D2B]">
                          um clique.
                        </span>
                      </span>
                      <span className="block lg:hidden">Edite centenas de</span>
                      <span className="block lg:hidden">vídeos com um</span>
                      <span className="block lg:hidden">
                        <span className="inline-block rounded-md bg-[#B1FE7B] px-2 text-[#052D2B]">
                          só clique.
                        </span>
                      </span>
                    </h2>
                    <p className="mt-4 max-w-xl text-[15px] leading-[1.75] text-[#6B7280]">
                      Aplique legendas, cortes, formatos e sua identidade visual
                      em lote. Economize horas de trabalho e mantenha a
                      consistência da sua marca.
                    </p>
                    <div className="mt-auto flex items-center justify-center gap-4 pt-10 lg:justify-start">
                      <Link
                        href="/extensao"
                        className="group/link inline-flex items-center gap-2 text-[14px] font-medium text-[#052D2B] transition-colors duration-200 hover:text-[#052D2B]"
                      >
                        Abrir editor
                        <ArrowUpRightIcon
                          size={16}
                          className="size-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                        />
                      </Link>
                      <span className="hidden size-1 rounded-full bg-[#D1D5DB] lg:block"></span>
                      <Link
                        href="#feature-stories"
                        className="group/link hidden items-center gap-2 text-[14px] font-medium text-[#052D2B] transition-colors duration-200 hover:text-[#052D2B] lg:inline-flex"
                      >
                        Ver demonstração
                        <ArrowUpRightIcon
                          size={16}
                          className="size-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                        />
                      </Link>
                      <span className="size-1 rounded-full bg-[#D1D5DB]"></span>
                      <Link
                        href="#customers"
                        className="group/link inline-flex items-center gap-2 text-[14px] font-medium text-[#052D2B] transition-colors duration-200 hover:text-[#052D2B]"
                      >
                        <span className="hidden lg:inline">
                          O que os criadores dizem
                        </span>
                        <span className="lg:hidden">Feedbacks</span>
                        <ArrowUpRightIcon
                          size={16}
                          className="size-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center py-6 pl-6 pr-3 lg:py-8 lg:pl-8 lg:pr-4">
                    <div className="h-full min-h-90 w-full overflow-hidden rounded-xl border border-[#F2F4F8] bg-white p-2.5 shadow-[0_0_0_1px_rgba(0,0,0,0.02)] lg:min-h-70">
                      <div className="h-full w-full overflow-hidden rounded-lg border border-[#F2F4F8]/80 bg-[#FAFBFC] p-1.5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)]">
                        <video
                          className="h-full w-full rounded-md object-cover object-right"
                          src="/videos/vide-teste.mp4"
                          autoPlay
                          loop
                          muted
                          playsInline
                        ></video>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-4 lg:h-12"></div>
              </div>
              <div className="hidden min-w-0.5 flex-1 xl:block">
                <div className="h-full rounded-l-sm bg-white"></div>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="scroll-mt-28">
          <div className="flex flex-col gap-px bg-[#264B4E]">
            <div className="flex gap-px">
              <div className="hidden flex-1 xl:block">
                <div className="relative h-full overflow-hidden rounded-r-sm bg-[#1E4345]" />
              </div>
              <div className="w-full max-w-345 overflow-hidden rounded-sm bg-[#1E4345] h-10" />
              <div className="hidden min-w-0.5 flex-1 xl:block">
                <div className="relative h-full overflow-hidden rounded-l-sm bg-[#1E4345]" />
              </div>
            </div>
            <div className="flex gap-px">
              <div className="hidden flex-1 xl:block">
                <div className="relative h-full overflow-hidden rounded-r-sm bg-[#1E4345]" />
              </div>
              <div className="flex w-full max-w-345 flex-col gap-px">
                <div className="overflow-hidden rounded-sm bg-[#1E4345]">
                  <div className="h-4 lg:h-12" />
                  <div className="p-8 lg:p-10 lg:pb-8">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex w-fit items-center rounded-full bg-[#9EEA6C]/8 px-3.5 py-1.5 text-[14px] font-medium text-[#9EEA6C]">
                        Planos
                      </span>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          aria-label="Anterior"
                          className="flex size-10 group cursor-pointer items-center justify-center rounded-full border-[0.5px] border-white/15 bg-white/4 transition-colors duration-150 hover:bg-white/8 hover:text-white"
                        >
                          <CaretLeftIcon
                            size={18}
                            className="text-white/80 group-hover:text-white transition-colors duration-150"
                          />
                        </button>
                        <button
                          type="button"
                          aria-label="Anterior"
                          className="flex size-10 group cursor-pointer items-center justify-center rounded-full border-[0.5px] border-white/15 bg-white/4 transition-colors duration-150 hover:bg-white/8 hover:text-white"
                        >
                          <CaretRightIcon
                            size={18}
                            className="text-white/80 group-hover:text-white transition-colors duration-150"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="mt-5 flex flex-col gap-6 sm:gap-4 lg:flex-row lg:items-center lg:justify-between">
                      <div>
                        <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-[3.25rem] lg:leading-[1.15]">
                          <span className="block lg:hidden">
                            Acesso total, sem
                          </span>
                          <span className="block lg:hidden">
                            limites. Com uma
                          </span>
                          <span className="block lg:hidden">
                            <span className="shiny-btn inline-block translate-y-1 rounded-md bg-[#B1FE7B] px-2 text-[#1E4345]">
                              única assinatura.
                            </span>
                          </span>
                          <span className="hidden lg:block">
                            Acesso total, sem limites.
                          </span>
                          <span className="hidden lg:block">
                            Com uma{" "}
                            <span className="shiny-btn inline-block translate-y-3 rounded-md bg-[#B1FE7B] px-2 text-[#1E4345]">
                              única assinatura.
                            </span>
                          </span>
                        </h2>
                        <div className="mt-10 hidden sm:flex items-center gap-6 text-white/30">
                          <div className="flex items-center gap-2">
                            <ShieldCheckIcon
                              size={16}
                              className="size-4 shrink-0 text-white/40"
                            />
                            <span className="calc-dark-label text-[12px]">
                              Cancele quando quiser
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <ShieldCheckIcon
                              size={16}
                              className="size-4 shrink-0 text-white/40"
                            />
                            <span className="calc-dark-label text-[12px]">
                              Sem cartão p/ testar
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="max-w-sm text-[15px] leading-[1.75] lg:text-right text-white/60">
                        Um plano para acompanhar o ritmo da sua produção. Edite,
                        automatize e publique em escala.
                      </p>
                      <div className="sm:mt-10 sm:hidden flex items-center gap-6 text-white/30">
                        <div className="flex items-center gap-2">
                          <ShieldCheckIcon
                            size={16}
                            className="size-4 shrink-0 text-white/40"
                          />
                          <span className="calc-dark-label text-[12px]">
                            Cancele quando quiser
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ShieldCheckIcon
                            size={16}
                            className="size-4 shrink-0 text-white/40"
                          />
                          <span className="calc-dark-label text-[12px]">
                            Sem cartão p/ testar
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-4 lg:h-12" />
                </div>
                <div className="grid-cols-1 lg:grid-cols-3 grid gap-px">
                  {plans.map((item) => (
                    <PlanCard
                      key={item.id}
                      planTitle={item.planTitle}
                      planDescription={item.planDescription}
                      planPrice={item.planPrice}
                      planOldPrice={item.planOldPrice}
                      planSubscriptionType={item.planSubscriptionType}
                      planCurrentSubscription={item.planCurrentSubscription}
                      planNextSubscription={item.planNextSubscription}
                      planMostPopular={item.planMostPopular}
                    />
                  ))}
                </div>
              </div>
              <div className="hidden flex-1 xl:block">
                <div className="relative h-full overflow-hidden rounded-l-sm bg-[#1E4345]" />
              </div>
            </div>
            <div className="flex gap-px">
              <div className="hidden flex-1 xl:block">
                <div className="relative h-full overflow-hidden rounded-r-sm bg-[#1E4345]" />
              </div>
              <div className="w-full max-w-345 overflow-hidden rounded-sm bg-[#1E4345] h-10" />
              <div className="hidden min-w-0.5 flex-1 xl:block">
                <div className="relative h-full overflow-hidden rounded-l-sm bg-[#1E4345]" />
              </div>
            </div>
          </div>
        </section>
        <section id="faq" className="scroll-mt-28">
          <div className="flex flex-col gap-px bg-[#F2F4F8]">
            <div className="flex gap-px">
              <div className="hidden flex-1 xl:block">
                <div className="h-full rounded-r-sm bg-white"></div>
              </div>
              <div className="hidden min-w-0.5 flex-1 xl:block">
                <div className="h-full rounded-l-sm bg-white"></div>
              </div>
            </div>
            <div className="flex gap-px">
              <div className="hidden flex-1 xl:block">
                <div className="h-full rounded-r-sm bg-white" />
              </div>
              <div className="w-full max-w-345 overflow-hidden rounded-sm bg-white">
                <div className="grid lg:grid-cols-2">
                  <div className="flex flex-col justify-between bg-white px-8 pt-16 pb-16 lg:px-10">
                    <div>
                      <span className="inline-flex items-center rounded-full bg-[#B1FE7B]/50 px-3.5 py-1.5 text-[14px] font-medium text-[#052D2B]">
                        FAQ
                      </span>
                      <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-[#052D2B] sm:text-4xl lg:text-[3.25rem] lg:leading-[1.15]">
                        <span className="block">Ficou dúvidas? Relaxa,</span>
                        <span className="block">
                          <span className="inline-block rounded-md bg-[#B1FE7B] px-2 text-[#052D2B]">
                            a gente responde.
                          </span>
                        </span>
                      </h2>
                      <p className="mt-5 max-w-104 text-[15px] leading-[1.75] text-[#6B7280]">
                        As perguntas mais comuns de quem produz conteúdos e quer
                        entender como a EditMax funciona.
                      </p>
                    </div>
                    <div className="mt-10 flex items-center gap-5">
                      <a
                        className="inline-flex items-center gap-2 text-[13px] text-[#6B7280] transition-colors duration-200 hover:text-primary"
                        href="/privacidade"
                      >
                        <LinkIcon size={24} className="size-3.5 shrink-0" />
                        Política de privacidade
                      </a>
                      <a
                        className="inline-flex items-center gap-2 text-[13px] text-[#6B7280] transition-colors duration-200 hover:text-primary"
                        href="/privacidade"
                      >
                        <LinkIcon size={24} className="size-3.5 shrink-0" />
                        Termos e condições
                      </a>
                    </div>
                  </div>
                  <div className="bg-white p-6 pt-16 pb-16 lg:p-8 lg:pt-16 lg:pb-16">
                    <Accordion
                      className="flex flex-col gap-2.5"
                      defaultValue={["item-1"]}
                    >
                      <AccordionItem
                        className="overflow-hidden group rounded-xl border border-border/50 bg-background transition-colors duration-200"
                        value="item-1"
                      >
                        <AccordionTrigger className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left">
                          <span className="text-[17px] font-medium leading-[1.4] tracking-[-0.03em] text-foreground">
                            É realmente ilimitado?
                          </span>
                          <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background text-muted-foreground">
                            <PlusIcon
                              size={24}
                              className="size-3.5 transition-transform duration-300 group-data-open:rotate-45"
                            />
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="grid transition-all data-starting-style:animate-accordion-down data-ending-style:animate-accordion-up duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] grid-rows-[1fr] opacity-100">
                          <div className="overflow-hidden">
                            <p className="px-6 pb-5 text-[14px] leading-[1.8] text-[#6B7280]">
                              Sim. Nesta condição, não há limite de quantidade
                              de vídeos por dia ou por mês e as exportações não
                              descontam créditos. É necessário manter a
                              assinatura ativa.
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem
                        className="overflow-hidden group rounded-xl border border-border/50 bg-background transition-colors duration-200"
                        value="item-2"
                      >
                        <AccordionTrigger className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left">
                          <span className="text-[17px] font-medium leading-[1.4] tracking-[-0.03em] text-foreground">
                            Os planos renovam automaticamente?
                          </span>
                          <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background text-muted-foreground">
                            <PlusIcon
                              size={24}
                              className="size-3.5 transition-transform duration-300 group-data-open:rotate-45"
                            />
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="grid transition-all data-starting-style:animate-accordion-down data-ending-style:animate-accordion-up duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] grid-rows-[1fr] opacity-100">
                          <div className="overflow-hidden">
                            <p className="px-6 pb-5 text-[14px] leading-[1.8] text-[#6B7280]">
                              Sim. Apenas os planos **Starter** e **Publisher**
                              possuem renovação automática. Nesses planos, a
                              cobrança é realizada mensalmente, de forma
                              automática, utilizando o mesmo meio de pagamento
                              informado no momento da assinatura. Todos os
                              valores, condições e informações sobre a cobrança
                              são apresentados de forma clara antes da
                              confirmação do pagamento.
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem
                        className="overflow-hidden group rounded-xl border border-border/50 bg-background transition-colors duration-200"
                        value="item-3"
                      >
                        <AccordionTrigger className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left">
                          <span className="text-[17px] font-medium leading-[1.4] tracking-[-0.03em] text-foreground">
                            Posso editar mais de 500 vídeos por dia?
                          </span>
                          <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background text-muted-foreground">
                            <PlusIcon
                              size={24}
                              className="size-3.5 transition-transform duration-300 group-data-open:rotate-45"
                            />
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="grid transition-all data-starting-style:animate-accordion-down data-ending-style:animate-accordion-up duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] grid-rows-[1fr] opacity-100">
                          <div className="overflow-hidden">
                            <p className="px-6 pb-5 text-[14px] leading-[1.8] text-[#6B7280]">
                              Sim. O plano permite esse volume de processamento,
                              sem um limite diário fixo. O processamento dos
                              vídeos é realizado diretamente pela plataforma,
                              pela web, sem depender da potência do computador
                              do usuário. O tempo de processamento pode variar
                              de acordo com a quantidade, duração, resolução e
                              complexidade dos vídeos, além dos efeitos e
                              recursos utilizados. Por isso, não há um prazo
                              fixo de processamento aplicável a todos os casos.
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem
                        className="overflow-hidden group rounded-xl border border-border/50 bg-background transition-colors duration-200"
                        value="item-4"
                      >
                        <AccordionTrigger className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left">
                          <span className="text-[17px] font-medium leading-[1.4] tracking-[-0.03em] text-foreground">
                            Preciso saber editar? As legendas são automáticas?
                          </span>
                          <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background text-muted-foreground">
                            <PlusIcon
                              size={24}
                              className="size-3.5 transition-transform duration-300 group-data-open:rotate-45"
                            />
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="grid transition-all data-starting-style:animate-accordion-down data-ending-style:animate-accordion-up duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] grid-rows-[1fr] opacity-100">
                          <div className="overflow-hidden">
                            <p className="px-6 pb-5 text-[14px] leading-[1.8] text-[#6B7280]">
                              Você ajusta o visual e aplica aos vídeos
                              selecionados. O treinamento ajuda nos primeiros
                              passos. As frases e legendas de texto desta versão
                              são escritas por você, com controle de fonte,
                              tamanho e posição. Esta oferta não inclui
                              transcrição automática de fala nem o módulo de
                              clipagem de vídeos longos.
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem
                        className="overflow-hidden group rounded-xl border border-border/50 bg-background transition-colors duration-200"
                        value="item-5"
                      >
                        <AccordionTrigger className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left">
                          <span className="text-[17px] font-medium leading-[1.4] tracking-[-0.03em] text-foreground">
                            O que acontece se eu cancelar?
                          </span>
                          <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background text-muted-foreground">
                            <PlusIcon
                              size={24}
                              className="size-3.5 transition-transform duration-300 group-data-open:rotate-45"
                            />
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="grid transition-all data-starting-style:animate-accordion-down data-ending-style:animate-accordion-up duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] grid-rows-[1fr] opacity-100">
                          <div className="overflow-hidden">
                            <p className="px-6 pb-5 text-[14px] leading-[1.8] text-[#6B7280]">
                              Você pode cancelar a renovação. O acesso e o uso
                              ilimitado dependem da validade da assinatura:
                              quando o acesso expira ou é revogado por
                              cancelamento ou reembolso, o sistema deixa de
                              liberar novas exportações. Os vídeos já exportados
                              continuam no seu computador.
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </div>
              <div className="hidden min-w-0.5 flex-1 xl:block">
                <div className="h-full rounded-l-sm bg-white" />
              </div>
            </div>
            <div className="flex gap-px">
              <div className="hidden flex-1 xl:block">
                <div className="h-full rounded-r-sm bg-white" />
              </div>
              <div className="w-full max-w-345 overflow-hidden rounded-sm bg-white h-12" />
              <div className="hidden min-w-0.5 flex-1 xl:block">
                <div className="h-full rounded-l-sm bg-white" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="flex">
          <div className="hidden flex-1 xl:block">
            <div className="h-full border-r border-[#F2F4F8] bg-white"></div>
          </div>
          <div className="w-full max-w-345 bg-white">
            <div className="px-8 pb-10 pt-16 lg:px-10">
              <div className="grid gap-12 lg:grid-cols-[1fr_auto]">
                <div className="max-w-sm">
                  <Image
                    alt="Logo"
                    src={logoImg}
                    loading="eager"
                    className="h-9 w-auto"
                  />
                  <p className="mt-5 text-[14px] leading-[1.7] text-[#6B7280]">
                    Inteligência competitiva direto no navegador para monitorar
                    produtos, vendedores e oportunidades no Mercado Livre.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-x-16 gap-y-8">
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-foreground">
                      Navegação
                    </p>
                    <ul className="mt-4 space-y-3">
                      <li>
                        <Link
                          href="/#feature-stories"
                          className="text-[14px] text-[#6B7280] transition-colors duration-200 hover:text-foreground"
                        >
                          Funcionalidades
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/#pricing"
                          className="text-[14px] text-[#6B7280] transition-colors duration-200 hover:text-foreground"
                        >
                          Preços
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/#faq"
                          className="text-[14px] text-[#6B7280] transition-colors duration-200 hover:text-foreground"
                        >
                          Dúvidas
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/"
                          className="text-[14px] text-[#6B7280] transition-colors duration-200 hover:text-foreground"
                        >
                          Plataforma
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-foreground">
                      Legal
                    </p>
                    <ul className="mt-4 space-y-3">
                      <li>
                        <Link
                          className="text-[14px] text-[#6B7280] transition-colors duration-200 hover:text-foreground"
                          href="/privacidade"
                        >
                          Privacidade
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-[14px] text-[#6B7280] transition-colors duration-200 hover:text-foreground"
                          href="/termos"
                        >
                          Termos de uso
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
                <p className="text-[13px] text-[#6B7280]/60">
                  Copyright © 2026 EditMax
                </p>
              </div>
            </div>
          </div>
          <div className="hidden min-w-0.5 flex-1 xl:block">
            <div className="h-full border-l border-[#F2F4F8] bg-white" />
          </div>
        </div>
      </footer>
    </div>
  );
}
