import { ArrowUpRightIcon } from "@phosphor-icons/react";

export function ProBanner() {
  return (
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
  );
}
