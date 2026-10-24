"use client";

import {
  TrashIcon,
  ArrowUpRightIcon,
  UploadSimpleIcon,
  FileArrowDownIcon,
  DownloadSimpleIcon,
} from "@phosphor-icons/react";

export default function Editor() {
  return (
    <div className="min-h-full bg-background text-foreground">
      <div className="px-8 pt-6">
        <div
          role="status"
          data-qa="pro-banner"
          className="flex items-center justify-between gap-4 rounded-[8.1px] px-4 py-3 min-h-13 bg-[#DFFCCB] text-[#052D2B] dark:bg-[#B1FE7B]/10 dark:text-foreground"
        >
          <p className="text-[14px] leading-snug">
            <strong className="font-medium">
              Seu conteúdo não termina na edição.
            </strong>
            &nbsp;Com o Publisher, transforme vídeos em publicações prontas para
            todas as plataformas.
          </p>
          <button
            type="button"
            data-qa="pro-banner-cta"
            className="group/cta inline-flex h-7 shrink-0 cursor-pointer items-center justify-center rounded-[6px] px-3 text-[12px] font-medium tracking-[-0.2px] bg-[#B1FE7B] text-[#052D2B] border-[0.5px] border-white/25 ring-1 [--btn-ring:color-mix(in_oklab,#052D2B_30%,#B1FE7B)] ring-(--btn-ring) shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] transition-colors duration-200 ease-out hover:bg-[#a0f060] active:scale-[0.99]"
          >
            Assinar Publisher
            <span
              aria-hidden="true"
              className="ml-0 inline-flex max-w-0 items-center overflow-hidden opacity-0 transition-[max-width,margin-left,opacity] duration-200 ease-out group-hover/cta:ml-1.5 group-hover/cta:max-w-3.5 group-hover/cta:opacity-100"
            >
              <ArrowUpRightIcon size={12} />
            </span>
          </button>
        </div>
      </div>
      <header className="flex flex-col gap-4 px-8 pb-9 pt-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <h1 className="text-[36px] font-medium leading-[1.1] tracking-[-0.03em] text-[#052D2B] dark:text-foreground">
            <span className="sm:hidden">Editor</span>
            <span className="hidden sm:inline">Editor</span>
          </h1>
          <p className="mt-2 max-w-160 text-[15px] leading-[1.55] text-muted-foreground">
            Edite, personalize e prepare centenas de vídeos em poucos cliques.
          </p>
        </div>
      </header>
      <div aria-hidden="true" className="h-px w-full bg-border" />
      <div className="@container/onboarding-row px-8 py-8">
        <div className="grid items-strech gap-3 grid-cols-2 @[1080px]/onboarding-row:grid-cols-[360px_minmax(0,1fr)_360px]">
          <div className="flex h-full w-full col-span-2 @[1080px]/onboarding-row:col-span-1 flex-col justify-between gap-4 rounded-lg border border-border bg-card p-5 py-4">
            <div className="flex flex-row items-center justify-between">
              <h4 className="text-[15px] font-medium tracking-[-0.01em] text-foreground">
                Envie seus vídeos
              </h4>
              <div className="rounded-[8.1px] border border-border p-1">
                <UploadSimpleIcon className="size-3.5 text-muted-foreground" />
              </div>
            </div>
            <div className="relative flex flex-1 flex-col items-center justify-center gap-3 rounded-[10px] border border-dashed border-border bg-background py-5">
              <span className="flex size-11 items-center justify-center rounded-full border border-dashed border-border bg-card shadow-[0_4px_14px_-6px_rgba(5,45,43,0.15)] opacity-100 transform-none">
                <UploadSimpleIcon size={20} className="text-muted-foreground" />
              </span>
              <div className="text-center">
                <p className="text-[15px] font-medium tracking-[-0.01em] text-foreground">
                  Arraste vídeos ou clique
                </p>
                <p className="mt-0.5 text-[12.5px] text-muted-foreground">
                  MP4, MOV, WebM
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              {Array.from({ length: 3 }).map((item, i) => (
                <div
                  key={i}
                  className="w-full px-2 py-2 rounded-[10px] border border-border flex items-center"
                >
                  <div className="flex items-center gap-3 flex-1 overflow-hidden">
                    <div className="w-12 h-15 border border-border rounded-[10px]" />
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold line-clamp-1 tabular-nums text-[15px] text-foreground">
                        Desktop 2026.10.19 - 23.13.13.02
                      </span>
                      <span className="font-medium line-clamp-1 text-[12px] text-muted-foreground">
                        24.5 MB · Aguardando
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    aria-label="Apagar"
                    className="relative inline-flex mr-2 h-10 items-center justify-center gap-1.5 rounded-[10px] px-3 text-[14px] font-medium text-[#052D2B] dark:text-foreground border border-[#052D2B]/12 bg-transparent hover:bg-[#052D2B]/4 hover:border-[#052D2B]/20 dark:border-border dark:hover:bg-foreground/5 dark:hover:border-foreground/15 transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:bg-transparent disabled:text-[#052D2B]/40 disabled:border-[#052D2B]/8 disabled:hover:bg-transparent disabled:hover:border-[#052D2B]/8 dark:disabled:text-foreground/40 dark:disabled:border-border/50 dark:disabled:hover:bg-transparent dark:disabled:hover:border-border/50"
                  >
                    <TrashIcon size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex h-full flex-col overflow-hidden rounded-lg bg-[#9EEA6C] col-span-2 @[1080px]/onboarding-row:col-span-1">
            <div
              aria-hidden="true"
              className="landing-cta-bg pointer-events-none absolute inset-0 opacity-80"
            />
          </div>
          <div className="flex w-full h-fit flex-col col-span-2 @[1080px]/onboarding-row:col-span-1 justify-between gap-4 rounded-lg border border-border bg-card p-5 py-4">
            <div className="flex flex-row items-center justify-between">
              <h4 className="text-[15px] font-medium tracking-[-0.01em] text-foreground">
                Exportar vídeos
              </h4>
              <div className="rounded-[8.1px] border border-border p-1">
                <DownloadSimpleIcon className="size-3.5 text-muted-foreground" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <button
                type="button"
                data-qa="pro-banner-cta"
                className="group/cta inline-flex h-10 shrink-0 cursor-pointer items-center justify-between rounded-[6px] px-3 text-[14px] font-medium tracking-[-0.2px] bg-[#B1FE7B] text-[#052D2B] border-[0.5px] border-white/25 ring-1 [--btn-ring:color-mix(in_oklab,#052D2B_30%,#B1FE7B)] ring-(--btn-ring) shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] transition-colors duration-200 ease-out hover:bg-[#a0f060] active:scale-[0.99]"
              >
                Exportar 3 vídeos
                <span
                  aria-hidden="true"
                  className="ml-0 inline-flex items-center transition-[max-width,margin-left,opacity] duration-200 ease-out"
                >
                  <FileArrowDownIcon size={20} />
                </span>
              </button>
              <button
                type="button"
                data-qa="pro-banner-cta"
                className="group/cta inline-flex h-10 shrink-0 cursor-pointer items-center justify-between rounded-[6px] px-3 text-[14px] font-medium tracking-[-0.2px] bg-[#B1FE7B] text-[#052D2B] border-[0.5px] border-white/25 ring-1 [--btn-ring:color-mix(in_oklab,#052D2B_30%,#B1FE7B)] ring-(--btn-ring) shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] transition-colors duration-200 ease-out hover:bg-[#a0f060] active:scale-[0.99]"
              >
                Exportar somente este vídeo
                <span
                  aria-hidden="true"
                  className="ml-0 inline-flex items-center transition-[max-width,margin-left,opacity] duration-200 ease-out"
                >
                  <FileArrowDownIcon size={20} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
