"use client";

import Link from "next/link";
import Image from "next/image";
import {
  CheckIcon,
  CaretLeftIcon,
  CaretRightIcon,
  ArrowUpRightIcon,
} from "@phosphor-icons/react";

import { Header } from "@/src/components/header";
import { AvatarGroup, AvatarGroupCount } from "@/components/ui/avatar";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import mockupImg from "@/public/mockup_4x.png";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <Header />
      <main className="relative">
        <section id="hero" className="scroll-mt-26.5 pt-26.5">
          <div
            className="landing-reveal landing-reveal--visible"
            style={{ transitionDelay: "0ms" }}
          >
            <div className="landing-bento-frame">
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
                          Automatize sua produção de vídeos e transforme horas
                          de trabalho repetitivo em conteúdo pronto para
                          publicar.
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
                          <span className="inline-block tabular-nums">
                            10.000
                          </span>
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
                <div className="flex gap-px">
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
                          <span className="block lg:hidden">
                            Edite centenas de
                          </span>
                          <span className="block lg:hidden">vídeos com um</span>
                          <span className="block lg:hidden">
                            <span className="inline-block rounded-md bg-[#B1FE7B] px-2 text-[#052D2B]">
                              só clique.
                            </span>
                          </span>
                        </h2>
                        <p className="landing-bento-card-desc mt-4 max-w-xl text-[15px] leading-[1.75] text-[#6B7280]">
                          Aplique legendas, cortes, formatos e sua identidade
                          visual em lote. Economize horas de trabalho e mantenha
                          a consistência da sua marca.
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
                              src="/videos/vide-teste-cargoos.mp4"
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
            </div>
          </div>
        </section>
        <section id="pricing" className="scroll-mt-28">
          <div
            className="landing-reveal landing-reveal--visible"
            style={{ transitionDelay: "0ms" }}
          >
            <div className="landing-bento-frame">
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
                      <div className="px-6 pb-12 pt-20 sm:px-8 sm:pb-14 sm:pt-20 lg:px-10">
                        <div className="flex items-center justify-between">
                          <span className="inline-flex w-fit items-center rounded-full bg-[#9EEA6C]/8 px-3.5 py-1.5 text-[14px] font-medium text-[#9EEA6C]">
                            Planos
                          </span>
                          <div className="flex items-center gap-3">
                            <button
                              type="button"
                              aria-label="Anterior"
                              className="flex size-10 group cursor-pointer items-center justify-center rounded-full border-[0.5px] border-white/15 bg-white/[0.04] transition-colors duration-150 hover:bg-white/[0.08] hover:text-white"
                            >
                              <CaretLeftIcon
                                size={18}
                                className="text-white/80 group-hover:text-white transition-colors duration-150"
                              />
                            </button>
                            <button
                              type="button"
                              aria-label="Anterior"
                              className="flex size-10 group cursor-pointer items-center justify-center rounded-full border-[0.5px] border-white/15 bg-white/[0.04] transition-colors duration-150 hover:bg-white/[0.08] hover:text-white"
                            >
                              <CaretRightIcon
                                size={18}
                                className="text-white/80 group-hover:text-white transition-colors duration-150"
                              />
                            </button>
                          </div>
                        </div>
                        <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
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
                          <p className="max-w-sm text-[15px] leading-[1.75] lg:text-right text-white/60">
                            Um plano para acompanhar o ritmo da sua produção.
                            Edite, automatize e publique em escala.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="grid-cols-1 lg:grid-cols-3 grid gap-px">
                      <div className="rounded-sm bg-[#1E4345] flex flex-1 flex-col p-6 lg:p-8">
                        <h3 className="mt-5 text-xl font-semibold text-white">
                          Grátis
                        </h3>
                        <p className="mt-1 text-[13px] text-white/40">
                          10 vídeos por conta nossa, sem renovação
                        </p>
                        <div className="mt-6">
                          <div className="mt-2 flex items-center gap-1.5">
                            <span className="text-[32px] font-normal tabular-nums leading-none tracking-tight text-white/40">
                              R$
                            </span>
                            <span className="text-[56px] font-bold tabular-nums leading-none tracking-tight text-white">
                              0
                            </span>
                            <span className="text-[32px] font-bold tabular-nums leading-none tracking-tight text-white/60">
                              ,00
                            </span>
                            <span className="ml-1.5 text-[18px] font-medium tabular-nums leading-none tracking-tight text-white/35">
                              /único
                            </span>
                          </div>
                        </div>
                        <p className="mt-6 mb-4 text-[12px] text-white/30">
                          Incluso no plano gratuito
                        </p>
                        <div className="space-y-3.5">
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#4B5563] to-[#374151]">
                              <CheckIcon
                                size={24}
                                weight="bold"
                                className="size-3 stroke-[4px] text-white/70"
                              />
                            </div>
                            <span className="calc-dark-label text-[13px] text-white/60">
                              Edição e exportação em lote
                            </span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#4B5563] to-[#374151]">
                              <CheckIcon
                                size={24}
                                weight="bold"
                                className="size-3 stroke-[4px] text-white/70"
                              />
                            </div>
                            <span className="calc-dark-label text-[13px] text-white/60">
                              Textos, recortes, fundos, logo e áudio
                            </span>
                          </div>
                        </div>
                        <div className="relative flex -mx-4 mt-8 mb-8 items-center gap-3">
                          <div className="h-px flex-1 bg-[linear-gradient(to_right,rgba(255,255,255,0.15),rgba(255,255,255,0.15)_50%,transparent_0,transparent)] bg-[length:5px_1px] [mask-image:linear-gradient(to_right,transparent,black_30%)]"></div>
                          <span className="shrink-0 rounded-full border border-white/20 bg-[#1E4345] px-3 py-1 text-[11px] tracking-[0.04em] text-white/60 shadow-sm">
                            Incluso na assinatura Starter
                          </span>
                          <div className="h-px flex-1 bg-[linear-gradient(to_right,rgba(255,255,255,0.15),rgba(255,255,255,0.15)_50%,transparent_0,transparent)] bg-[length:5px_1px] [mask-image:linear-gradient(to_left,transparent,black_30%)]"></div>
                        </div>
                        <div className="space-y-3.5">
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#9EEA6C] to-[#6BD44C]">
                              <CheckIcon
                                size={24}
                                weight="bold"
                                className="size-3 stroke-[4px] text-[#0D2D18]"
                              />
                            </div>
                            <span className="calc-dark-label text-[13px] text-white/60">
                              Tudo do plano gratuito
                            </span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#9EEA6C] to-[#6BD44C]">
                              <CheckIcon
                                size={24}
                                weight="bold"
                                className="size-3 stroke-[4px] text-[#0D2D18]"
                              />
                            </div>
                            <span className="calc-dark-label text-[13px] text-white/60">
                              100 vídeos
                            </span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#9EEA6C] to-[#6BD44C]">
                              <CheckIcon
                                size={24}
                                weight="bold"
                                className="size-3 stroke-[4px] text-[#0D2D18]"
                              />
                            </div>
                            <span className="calc-dark-label text-[13px] text-white/60">
                              Modo anti duplicidade
                            </span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#9EEA6C] to-[#6BD44C]">
                              <CheckIcon
                                size={24}
                                weight="bold"
                                className="size-3 stroke-[4px] text-[#0D2D18]"
                              />
                            </div>
                            <span className="calc-dark-label text-[13px] text-white/60">
                              Limpador de Metadados
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden flex-1 xl:block">
                    <div className="relative h-full overflow-hidden rounded-l-sm bg-[#1E4345]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
