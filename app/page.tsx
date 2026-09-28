"use client";

import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

import { Header } from "@/src/components/header";
import { AvatarGroup, AvatarGroupCount } from "@/components/ui/avatar";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
                          <AvatarGroup>
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
                          <span className="text-[13px] text-muted-foreground">
                            <span className="hidden lg:inline">
                              Junte-se aos criadores que já usam a EditMax
                            </span>
                            <span className="lg:hidden">
                              Junte-se a +300 sellers na Cargoos
                            </span>
                          </span>
                        </div>
                        <h1 className="mt-8 text-[2.5rem] font-semibold leading-[1.2] tracking-[-0.035em] text-[#052D2B] sm:text-[2.75rem] lg:text-[3.5rem] lg:leading-[1.15]">
                          <span className="block">
                            Edite milhares de vídeos
                          </span>
                          <span className="block">e agende em todas as</span>
                          <span className="block mt-1">
                            plataformas,{" "}
                            <span className="shiny-btn inline-block -translate-y-1.25 rounded-md bg-[#B1FE7B] px-2 align-middle text-[#052D2B]">
                              sem esforço.
                            </span>
                          </span>
                        </h1>
                        <p className="mt-7 max-w-2xl text-[18px] leading-[1.7] text-muted-foreground sm:text-[22px] sm:leading-[1.6]">
                          Transforme seus videos em lote, personalize com sua
                          marca, agende em segundos e publique automaticamente
                          nas principais redes sociais.
                        </p>
                        <div className="mt-9 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
                          <div className="relative inline-flex min-w-0 w-full sm:w-auto">
                            <div className="inline-flex min-w-0 items-stretch w-full overflow-hidden rounded-lg border-[0.5px] border-white/25 bg-[#B1FE7B] ring-1 [--btn-ring:color-mix(in_oklab,var(--color-foreground)_15%,#B1FE7B)] ring-(--btn-ring) shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] sm:w-auto">
                              <Link
                                href="https://app.editmax.vercel.app"
                                className="flex min-w-0 flex-1 items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 group/btn h-11 w-full px-6 text-[15px] font-semibold text-[#052D2B] transition-all duration-300 hover:bg-[#a0f060] active:scale-[0.99] active:transition-none"
                              >
                                <span className="min-w-0">
                                  Comece agora gratuitamente
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
                            com um{" "}
                            <span className="inline-block rounded-md bg-[#B1FE7B] px-2 text-[#052D2B]">
                              só clique.
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
        <section id="feature-stories" className="scroll-mt-28">
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
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
