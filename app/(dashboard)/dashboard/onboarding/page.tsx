"use client";

import {
  LinkIcon,
  LockIcon,
  CheckIcon,
  ListChecksIcon,
  WarningCircleIcon,
  ArrowsClockwiseIcon,
} from "@phosphor-icons/react";

import { ProBanner } from "@/components/pro-banner";

export default function Onboarding() {
  return (
    <div className="min-h-full bg-background text-foreground">
      <ProBanner />
      <div className="flex flex-col gap-4 px-8 pb-9 pt-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <h1 className="text-[36px] font-medium leading-[1.1] tracking-[-0.03em] text-[#052D2B] dark:text-foreground">
            <span className="sm:hidden">Bem-vindo, Alexandre.</span>
            <span className="hidden sm:inline">
              Bem-vindo ao time, Alexandre.
            </span>
          </h1>
          <p className="mt-2 max-w-160 text-[15px] leading-[1.55] text-muted-foreground">
            Quatro passos para você começar a utilizar o Editmax.
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="h-px w-full bg-border" />
      <section className="@container/onboarding-row px-8 py-8">
        <div className="grid items-stretch gap-3 grid-cols-1 sm:grid-cols-2 @[1080px]/onboarding-row:grid-cols-[minmax(0,1fr)_320px_320px]">
          <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-[#9EEA6C] col-span-2 @[1080px]/onboarding-row:col-span-1">
            <div
              aria-hidden="true"
              className="landing-cta-bg pointer-events-none absolute inset-0 opacity-80"
            />
            <div className="relative flex h-full flex-col justify-center px-6 py-5 sm:px-10 sm:py-7 lg:px-12 lg:py-8">
              <div className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#1E4345]/18 py-1 pl-2 pr-2.5">
                <LockIcon size={12} className="text-[#1E4345]" />
                <span className="text-[12.5px] font-medium text-[#1E4345]">
                  <span className="tabular-nums">1/4</span> · falta 3 passos
                </span>
              </div>
              <h2 className="max-w-136 text-[24px] font-medium leading-[1.15] tracking-[-0.03em] text-[#052D2B] sm:text-[30px] sm:leading-[1.1] md:text-[34px] lg:text-[38px] mt-4">
                Nós crescemos
                <br />
                com quem cresce junto.
              </h2>
              <p className="mt-2 max-w-md text-[13px] leading-normal font-medium text-[#1E4345]/70 sm:mt-3 sm:text-[14px] sm:leading-[1.55] lg:text-[15px]">
                <span className="sm:hidden">
                  Indique quem ainda edita vídeos manualmente. O&nbsp;Editmax
                  melhora com mais gente.
                </span>
                <span className="hidden sm:inline">
                  Indique quem ainda edita vídeos manualmente. O&nbsp;Editmax se
                  torna melhor com mais pessoas por aqui.
                </span>
              </p>
            </div>
          </div>
          <div className="flex h-full w-full col-span-2 sm:col-span-1 @[1080px]/onboarding-row:col-span-1 flex-col justify-between gap-4 rounded-lg border border-border bg-card p-5 py-4">
            <div className="flex flex-row items-center justify-between">
              <h4 className="text-[15px] font-medium tracking-[-0.01em] text-foreground">
                Seu código de convite
              </h4>
              <div className="rounded-[8.1px] border border-border p-1">
                <LockIcon className="size-3.5 text-muted-foreground" />
              </div>
            </div>
            <div className="relative flex flex-1 flex-col items-center justify-center gap-3 rounded-[10px] border border-dashed border-border bg-background py-5">
              <span className="flex size-11 items-center justify-center rounded-full border border-dashed border-border bg-card shadow-[0_4px_14px_-6px_rgba(5,45,43,0.15)] opacity-100 transform-none">
                <LockIcon size={20} className="text-muted-foreground" />
              </span>
              <div className="text-center">
                <p className="text-[15px] font-medium tracking-[-0.01em] text-foreground">
                  Trancado
                </p>
                <p className="mt-0.5 text-[12.5px] text-muted-foreground">
                  Conclua o último passo pra liberar.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-[11.5px]">
                <span className="font-medium text-muted-foreground">
                  Progresso do onboarding
                </span>
                <span className="font-semibold tabular-nums text-foreground">
                  1/4
                </span>
              </div>
              <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-[#1E4345]/8">
                <div className="h-full rounded-full bg-linear-to-r from-[#9EEA6C] to-[#86D852] w-[25%]" />
              </div>
            </div>
          </div>
          <div className="flex h-full w-full col-span-2 sm:col-span-1 @[1080px]/onboarding-row:col-span-1 flex-col justify-between gap-4 rounded-lg border border-border bg-card p-5 py-4">
            <div className="flex flex-row items-center justify-between">
              <h4 className="text-[15px] font-medium tracking-[-0.01em] text-foreground">
                Sua rede de convidados
              </h4>
              <div className="rounded-[8.1px] border border-border p-1">
                <LockIcon className="size-3.5 text-muted-foreground" />
              </div>
            </div>
            <div className="relative flex flex-1 flex-col items-center justify-center gap-3 rounded-[10px] border border-dashed border-border bg-background py-5">
              <span className="flex size-11 items-center justify-center rounded-full border border-dashed border-border bg-card shadow-[0_4px_14px_-6px_rgba(5,45,43,0.15)] opacity-100 transform-none">
                <LockIcon size={20} className="text-muted-foreground" />
              </span>
              <div className="text-center">
                <p className="text-[15px] font-medium tracking-[-0.01em] text-foreground">
                  Trancado
                </p>
                <p className="mt-0.5 text-[12.5px] text-muted-foreground">
                  Conclua o último passo pra liberar.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-[11.5px]">
                <span className="font-medium text-muted-foreground">
                  Progresso do onboarding
                </span>
                <span className="font-semibold tabular-nums text-foreground">
                  1/4
                </span>
              </div>
              <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-[#1E4345]/8">
                <div className="h-full rounded-full bg-linear-to-r from-[#9EEA6C] to-[#86D852] w-[25%]" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div aria-hidden="true" className="h-px w-full bg-border" />
      <section className="relative px-8 pb-12 pt-9 @container/onboarding-steps">
        <div className="flex flex-col gap-8 @[1080px]/onboarding-steps:flex-row @[1080px]/onboarding-steps:items-stretch">
          <div className="min-w-0 flex-1">
            <div className="flex h-full flex-col rounded-[12px] border border-border bg-card">
              <div className="h-[53.5px] rounded-t-[12px] border-b border-border px-3 flex items-center">
                <div className="flex w-full items-center justify-between gap-4">
                  <div className="flex flex-row items-center gap-3">
                    <div className="flex size-8 items-center justify-center rounded-[8.1px] border border-border">
                      <ListChecksIcon
                        size={15.75}
                        className="text-muted-foreground"
                      />
                    </div>
                    <h2 className="text-[18px] font-medium leading-tight text-[#052D2B] dark:text-foreground">
                      Falta pouco pra liberar tudo
                    </h2>
                  </div>
                  <span className="group/tooltip relative inline-flex">
                    <button
                      type="button"
                      aria-label="Mais informações sobre o onboarding"
                      className="inline-flex size-9 cursor-pointer items-center justify-center rounded-[8.1px] bg-transparent text-muted-foreground transition-colors hover:bg-[#052D2B]/4 hover:text-[#052D2B] dark:hover:bg-muted/30 dark:hover:text-foreground"
                    >
                      <WarningCircleIcon size={18} />
                    </button>
                    <span
                      role="tooltip"
                      className="pointer-events-none absolute right-0 top-full z-50 mt-2 w-55 -translate-y-0.5 rounded-[6px] bg-[#052D2B] px-3 py-2 text-[12px] font-medium text-white opacity-0 shadow-[0_4px_14px_-4px_rgba(0,0,0,0.25)] transition-all duration-150 group-hover/tooltip:translate-y-0 group-hover/tooltip:opacity-100 dark:bg-foreground dark:text-background"
                    >
                      Conclua os passos para começar a utilizar o Editmax e
                      liberar seu link de convite.
                      <span
                        aria-hidden="true"
                        className="absolute right-3 top-0 size-2 -translate-y-1/2 rotate-45 bg-[#052D2B] dark:bg-foreground"
                      ></span>
                    </span>
                  </span>
                </div>
              </div>
              <div className="w-full px-6 pb-7 pt-7">
                <ol className="flex list-none flex-col gap-3">
                  <li className="list-none overflow-hidden rounded-xl border border-border/50 bg-background transition-colors duration-200">
                    <div className="flex items-center gap-5 px-6 py-5 sm:px-7 sm:py-6">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full border-2 border-white dark:border-card bg-[#10B981] shadow-[0_0_0_1.5px_#10B981,0_5px_12px_-5px_rgba(16,185,129,0.5)]">
                        <CheckIcon
                          size={16}
                          className="text-white dark:text-card"
                          weight="bold"
                        />
                      </span>
                      <h3 className="flex-1 text-[18px] font-medium leading-tight tracking-[-0.01em] text-[#052D2B] dark:text-foreground">
                        Conta criada
                      </h3>
                      <span className="sr-only text-[13px] font-medium text-muted-foreground sm:not-sr-only sm:inline-flex sm:items-center sm:gap-2">
                        <span>2 dias</span>
                        <span
                          aria-hidden="true"
                          className="size-1 shrink-0 rounded-full bg-foreground"
                        ></span>
                        Concluído
                      </span>
                    </div>
                  </li>
                  <li className="list-none overflow-hidden rounded-xl border border-border/50 bg-background transition-colors duration-200">
                    <div className="flex flex-col gap-4 px-6 py-5 transition-colors sm:flex-row sm:items-center sm:gap-5 sm:px-7 sm:py-6">
                      <span className="relative flex size-9 shrink-0 items-center justify-center rounded-full bg-card">
                        <svg
                          viewBox="0 0 36 36"
                          className="pointer-events-none absolute inset-0 size-full text-border"
                          aria-hidden="true"
                        >
                          <circle
                            cx="18"
                            cy="18"
                            r="17"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeDasharray="3 3"
                          ></circle>
                        </svg>
                        <span className="relative text-[14px] font-semibold tabular-nums text-[#1E4345] dark:text-foreground">
                          2
                        </span>
                      </span>
                      <div className="flex min-w-0 flex-1 flex-col gap-1">
                        <h3 className="text-[17px] font-medium leading-[1.4] tracking-[-0.01em] text-[#052D2B] dark:text-foreground">
                          <span className="sm:hidden">
                            Verificar e-mail de cadastro
                          </span>
                          <span className="hidden sm:inline">
                            Verificar e-mail de cadastro
                          </span>
                        </h3>
                        <p className="text-[14px] leading-normal text-muted-foreground">
                          Sem isso a gente não consegue prosseguir.
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-2">
                        <button
                          type="button"
                          className="inline-flex h-10 cursor-pointer items-center gap-2 rounded-[8.1px] px-4 text-[14px] font-medium tracking-[-0.01em] bg-[#B1FE7B] text-[#052D2B] border-[0.5px] border-white/25 ring-1 [--btn-ring:color-mix(in_oklab,#052D2B_15%,#B1FE7B)] ring-(--btn-ring) shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] transition-all duration-150 enabled:hover:bg-[#a0f060] disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          Verificar e-mail
                        </button>
                        <button
                          type="button"
                          className="inline-flex h-11 cursor-pointer items-center gap-2 rounded-[8.1px] px-4 text-[13.5px] font-medium tracking-[-0.01em] bg-transparent text-[#052D2B] dark:text-foreground border border-[#052D2B]/12 dark:border-border transition-colors hover:bg-[#052D2B]/3 hover:border-[#052D2B]/20 dark:hover:bg-muted/30 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <ArrowsClockwiseIcon size={12} />
                          Atualizar
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="list-none overflow-hidden rounded-xl border border-border/50 bg-background transition-colors duration-200">
                    <div className="flex flex-col gap-4 px-6 py-5 transition-colors sm:flex-row sm:items-center sm:gap-5 sm:px-7 sm:py-6 opacity-60">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full border-[1.5px] border-border bg-card">
                        <LockIcon size={14} className="text-muted-foreground" />
                      </span>
                      <div className="flex min-w-0 flex-1 flex-col gap-1">
                        <h3 className="text-[17px] font-medium leading-[1.4] tracking-[-0.01em] text-[#052D2B] dark:text-foreground">
                          Conecte suas plataformas para agendamentos
                        </h3>
                        <p className="text-[14px] leading-normal text-muted-foreground">
                          Conecte as plataformas que usaremos para publicar os
                          vídeos.
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-2">
                        <button
                          type="button"
                          disabled
                          className="inline-flex h-10 cursor-pointer items-center gap-2 rounded-[8.1px] px-4 text-[14px] font-medium tracking-[-0.01em] bg-[#B1FE7B] text-[#052D2B] border-[0.5px] border-white/25 ring-1 [--btn-ring:color-mix(in_oklab,#052D2B_15%,#B1FE7B)] ring-(--btn-ring) shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] transition-all duration-150 enabled:hover:bg-[#a0f060] enabled:active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          Configurar
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="list-none overflow-hidden rounded-xl border border-border/50 bg-background transition-colors duration-200">
                    <div className="flex flex-col gap-4 px-6 py-5 transition-colors sm:flex-row sm:items-center sm:gap-5 sm:px-7 sm:py-6 opacity-60">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full border-[1.5px] border-border bg-card">
                        <LockIcon size={14} className="text-muted-foreground" />
                      </span>
                      <div className="flex min-w-0 flex-1 flex-col gap-1">
                        <h3 className="text-[17px] font-medium leading-[1.4] tracking-[-0.01em] text-[#052D2B] dark:text-foreground">
                          Edite seu primeiro vídeo
                        </h3>
                        <p className="text-[14px] leading-normal text-muted-foreground">
                          Comece a editar seu primeiro vídeo em nossa
                          plataforma.
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-2">
                        <button
                          type="button"
                          disabled
                          className="inline-flex h-10 cursor-pointer items-center gap-2 rounded-[8.1px] px-4 text-[14px] font-medium tracking-[-0.01em] bg-[#B1FE7B] text-[#052D2B] border-[0.5px] border-white/25 ring-1 [--btn-ring:color-mix(in_oklab,#052D2B_15%,#B1FE7B)] ring-(--btn-ring) shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] transition-all duration-150 enabled:hover:bg-[#a0f060] enabled:active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          Começar
                        </button>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute bottom-0 top-0 hidden w-px @[1080px]/onboarding-steps:block right-117"
            style={{
              background:
                "linear-gradient(to bottom, var(--border) 0%, var(--border) 65%, transparent 100%)",
            }}
          />
          <div className="w-full @[1080px]/onboarding-steps:w-105">
            <div className="flex h-full flex-col overflow-hidden rounded-[12px] border border-border bg-card">
              <div className="relative z-10 flex h-[53.5px] items-center justify-between gap-3 rounded-t-[12px] border-b border-border bg-card px-3">
                <div className="flex items-center gap-3">
                  <div className="flex size-8 items-center justify-center rounded-[8.1px] border border-border">
                    <LinkIcon size={15.75} className="text-muted-foreground" />
                  </div>
                  <h2 className="text-[18px] font-medium leading-tight text-[#052D2B] dark:text-foreground">
                    Sua rede de convidados
                  </h2>
                </div>
              </div>
              <div className="relative flex flex-1 flex-col items-center justify-center gap-8 px-6 py-16">
                <div
                  className="relative z-10 flex flex-col items-center gap-2"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <h3 className="text-[22px] font-medium leading-none tracking-[-0.01em] text-foreground">
                    Em breve
                  </h3>
                  <p className="max-w-70 text-center text-[13px] leading-snug text-muted-foreground">
                    Sua rede de convidados aqui. Ranking ao vivo, atualiza
                    sozinho.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
