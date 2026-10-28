"use client";

import Link from "next/link";

import {
  EyeIcon,
  LockKeyIcon,
  LockKeyOpenIcon,
  EnvelopeSimpleIcon,
} from "@phosphor-icons/react";

export default function Auth() {
  return (
    <div className="min-h-screen w-full bg-background overflow-hidden">
      <div className="flex min-h-screen">
        <div className="flex-1">
          <div className="flex flex-col min-h-screen">
            <div className="flex flex-1">
              <div className="flex-1 min-w-0 bg-secondary/70">
                <div className="w-full h-full border-r border-b border-border rounded-br-sm bg-background" />
              </div>
              <div className="w-full max-w-140 bg-secondary/70 relative overflow-hidden">
                <div className="w-full h-full border-b border-border rounded-b-sm bg-background relative overflow-hidden" />
              </div>
              <div className="flex-1 min-w-0 bg-secondary/70">
                <div className="w-full h-full border-l border-b border-border rounded-bl-sm bg-background" />
              </div>
            </div>
            <div className="flex">
              <div className="flex-1 min-w-0 bg-secondary/70 relative overflow-hidden">
                <div className="w-full h-full border-r border-border rounded-r-sm bg-background relative overflow-hidden" />
              </div>
              <div className="w-full max-w-140 bg-secondary/70">
                <div className="w-full h-full relative z-20 overflow-hidden rounded-sm bg-card flex items-center justify-center">
                  <div className="w-full">
                    <div className="w-full mx-auto py-10 md:py-16 px-6 sm:px-10">
                      <div className="pb-2">
                        <h1
                          data-qa="auth-title"
                          className="font-sans font-medium text-[26px] text-[#052D2B] dark:text-foreground tracking-[-1.2px] leading-[1.1]"
                        >
                          Entrar na EditMax
                        </h1>
                        <p className="mt-3 text-[#52525A] dark:text-muted-foreground text-[15px] leading-relaxed tracking-[-0.3px] font-eudoxus">
                          Acesse o ecossistema de vídeos em massa.
                        </p>
                      </div>
                      <form className="mt-5 grid gap-5">
                        <fieldset className="grid gap-4">
                          <div className="space-y-1.5">
                            <label
                              htmlFor="auth-email"
                              className="text-[14px] font-medium text-[#052D2B]/70 dark:text-muted-foreground font-sans tracking-[-0.2px] pl-2"
                            >
                              Email
                            </label>
                            <div className="relative pt-1">
                              <span className="pointer-events-none absolute left-3.5 top-[calc(50%+2px)] text-muted-foreground/45 -translate-y-1/2">
                                <EnvelopeSimpleIcon size={17} />
                              </span>
                              <input
                                id="auth-email"
                                data-qa="auth-email"
                                placeholder="nome@exemplo.com"
                                autoComplete="off"
                                required
                                className="w-full h-11 px-3.5 rounded-[calc(var(--radius))+4px] border text-[13px] text-foreground bg-transparent placeholder:text-muted-foreground/40 transition-all duration-200 focus-visible:outline-none focus-visible:ring-0 focus-visible:border-[#052D2B]/25 dark:focus-visible:border-border border-border/70 disabled:opacity-50 disabled:cursor-not-allowed font-sans tracking-[-0.2px] pl-10 pr-11"
                                type="email"
                              />
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <label
                              htmlFor="auth-password"
                              className="text-[14px] font-medium text-[#052D2B]/70 dark:text-muted-foreground font-sans tracking-[-0.2px] pl-2"
                            >
                              Senha
                            </label>
                            <div className="relative pt-1">
                              <span className="pointer-events-none absolute left-3.5 top-[calc(50%+2px)] text-muted-foreground/45 -translate-y-1/2">
                                <LockKeyIcon size={17} />
                              </span>
                              <input
                                id="auth-password"
                                data-qa="auth-password"
                                placeholder="• • • • • • • •"
                                autoComplete="current-password"
                                required
                                className="w-full h-11 px-3.5 rounded-[calc(var(--radius))+4px] border text-[13px] text-foreground bg-transparent placeholder:text-muted-foreground/40 transition-all duration-200 focus-visible:outline-none focus-visible:ring-0 focus-visible:border-[#052D2B]/25 dark:focus-visible:border-border border-border/70 disabled:opacity-50 disabled:cursor-not-allowed font-sans tracking-[-0.2px] pl-10 pr-11"
                                type="password"
                              />
                              <button
                                type="button"
                                tabIndex={-1}
                                className="absolute right-3.5 top-[calc(50%+2px)] text-muted-foreground/40 -translate-y-1/2 hover:text-foreground/60 transition-colors cursor-pointer"
                              >
                                <EyeIcon size={16} />
                              </button>
                            </div>
                            <div className="flex justify-end pt-1">
                              <button
                                type="button"
                                className="text-[12px] font-eudoxus tracking-[-0.2px] text-[#52525A]/60 dark:text-muted-foreground/60 transition-colors hover:text-[#052D2B] dark:hover:text-foreground hover:underline cursor-pointer"
                              >
                                Esqueci minha senha
                              </button>
                            </div>
                          </div>
                          <Link
                            href="/dashboard/onboarding"
                            data-qa="auth-submit"
                            className="group w-full mt-1 inline-flex h-11 items-center justify-center gap-2 rounded-[calc(var(--radius))+4px] bg-[#B1FE7B] px-6 font-sans text-[15px] font-semibold text-[#052D2B] tracking-[-0.4px] border-[0.5px] border-white/25 ring-1 [--btn-ring:color-mix(in_oklab,#052D2B_15%,#B1FE7B)] ring-(--btn-ring) shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] transition-all duration-300 enabled:hover:bg-[#a0f060] enabled:active:scale-[0.99] enabled:active:transition-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                          >
                            <span>Entrar</span>
                            <span className="inline-flex w-0 overflow-hidden opacity-0 transition-all duration-300 group-enabled:group-hover:w-4 group-enabled:group-hover:opacity-100">
                              <LockKeyOpenIcon
                                size={16}
                                weight="fill"
                                className="shrink-0"
                              />
                            </span>
                          </Link>
                        </fieldset>
                        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-border after:border-t">
                          <span className="relative z-10 rounded-full border border-border bg-background px-2.5 py-0.5 text-muted-foreground text-xs font-medium font-eudoxus">
                            ou continue com
                          </span>
                        </div>
                        <button
                          type="button"
                          className="w-full h-11 px-6 rounded-[calc(var(--radius))+4px] font-sans text-[14px] font-medium tracking-[-0.3px] inline-flex items-center justify-center gap-2.5 bg-transparent text-[#052D2B] dark:text-foreground border border-[#052D2B]/12 dark:border-border hover:bg-[#052D2B]/3 hover:border-[#052D2B]/20 dark:hover:bg-muted/20 active:scale-[0.99] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B1FE7B]/50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            aria-hidden="true"
                            className="shrink-0"
                          >
                            <path
                              d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62z"
                              fill="#4285F4"
                            ></path>
                            <path
                              d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.81.54-1.85.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.96v2.33A9 9 0 0 0 9 18z"
                              fill="#34A853"
                            ></path>
                            <path
                              d="M3.97 10.72A5.41 5.41 0 0 1 3.68 9c0-.6.1-1.18.29-1.72V4.95H.96A9 9 0 0 0 0 9c0 1.45.35 2.82.96 4.05l3.01-2.33z"
                              fill="#FBBC05"
                            ></path>
                            <path
                              d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .96 4.95l3.01 2.33C4.68 5.16 6.66 3.58 9 3.58z"
                              fill="#EA4335"
                            ></path>
                          </svg>
                          Continuar com Google
                        </button>
                        <p className="text-center text-[13px] text-[#52525A] dark:text-muted-foreground font-eudoxus tracking-[-0.2px]">
                          Não tem cadastro?&nbsp;
                          <button
                            type="button"
                            className="font-medium text-[#052D2B] dark:text-foreground underline-offset-2 hover:underline cursor-pointer"
                          >
                            Crie uma conta
                          </button>
                        </p>
                        <p className="text-center text-[11px] text-muted-foreground leading-relaxed font-eudoxus">
                          Ao continuar, você concorda com os&nbsp;
                          <Link
                            href="/termos"
                            className="underline hover:text-foreground transition-colors"
                          >
                            Termos
                          </Link>
                          &nbsp; e a&nbsp;
                          <Link
                            href="/privacidade"
                            className="underline hover:text-foreground transition-colors"
                          >
                            Política de Privacidade
                          </Link>
                          .
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 min-w-0 bg-secondary/70 relative overflow-hidden">
                <div className="w-full h-full border-l border-border rounded-l-sm bg-background relative overflow-hidden" />
              </div>
            </div>
            <div className="flex flex-1">
              <div className="flex-1 min-w-0 bg-secondary/70">
                <div className="w-full h-full border-r border-t border-border rounded-tr-sm bg-background" />
              </div>
              <div className="w-full max-w-140 bg-secondary/70 relative overflow-hidden">
                <div className="w-full h-full border-t border-border rounded-t-sm bg-background relative overflow-hidden" />
              </div>
              <div className="flex-1 min-w-0 bg-secondary/70">
                <div className="w-full h-full border-l border-t border-border rounded-tl-sm bg-background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
