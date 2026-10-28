import { SparkleIcon } from "@phosphor-icons/react";

import { Slider } from "@/components/ui/slider";

export function BorderPanel() {
  return (
    <>
      <div
        role="status"
        data-qa="pro-banner"
        className="dark:text-foreground flex min-h-13 items-center justify-between gap-4 rounded-[8.1px] bg-[#DFFCCB] px-4 py-3 text-[#052D2B] dark:bg-[#B1FE7B]/10"
      >
        <p className="text-[14px] leading-snug">
          <strong className="font-medium">
            Aqui você remove as bordas superior e inferior do vídeo original
            (marcas d&apos;água, legendas, logos).
          </strong>
          &nbsp;As linhas tracejadas no preview mostram exatamente onde será o
          corte.
        </p>
      </div>
      <div
        role="radiogroup"
        aria-label="Modo de detecção"
        className="dark:bg-muted/60 relative inline-flex h-10 items-center gap-2 rounded-[8px] bg-[#052D2B]/6 p-0.75"
      >
        <div
          aria-hidden="true"
          className="bg-card pointer-events-none absolute top-0.75 left-0.75 h-[calc(100%-6px)] w-[calc(50%-3px)] rounded-[6px] shadow-[0_1px_2px_rgba(5,45,43,0.12),0_1px_0_rgba(255,255,255,0.6)_inset] dark:shadow-[0_1px_2px_rgba(0,0,0,0.4),0_1px_0_rgba(255,255,255,0.06)_inset]"
        ></div>
        <button
          type="button"
          role="radio"
          aria-checked="true"
          className="dark:text-foreground relative z-10 inline-flex h-full flex-1 cursor-default items-center justify-center rounded-[6px] text-[13px] font-medium tracking-[-0.01em] text-[#052D2B]"
        >
          Manual
        </button>
        <button
          type="button"
          role="radio"
          aria-checked="false"
          aria-disabled="true"
          title="Plano anual em breve"
          className="text-muted-foreground/55 relative z-10 inline-flex h-full flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-[6px] text-[13px] font-medium tracking-[-0.01em]"
        >
          Automático
        </button>
      </div>
      <button
        type="button"
        className="inline-flex h-11 cursor-pointer items-center justify-center gap-2 rounded-[8.1px] border border-[#052D2B]/12 bg-transparent px-4 text-[13.5px] font-medium tracking-[-0.01em] text-[#052D2B] transition-colors hover:border-[#052D2B]/20 hover:bg-[#052D2B]/3 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <SparkleIcon size={16} />
        Detectar automáticamente
      </button>
      <div className="flex flex-col gap-1">
        <div className="flex flex-row items-center justify-between">
          <span className="text-[13px] font-medium">Topo</span>
          <span className="text-muted-foreground text-[13px] font-medium">
            15%
          </span>
        </div>
        <Slider max={100} step={1} />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex flex-row items-center justify-between">
          <span className="text-[13px] font-medium">Inferior</span>
          <span className="text-muted-foreground text-[13px] font-medium">
            15%
          </span>
        </div>
        <Slider max={100} step={1} />
      </div>
    </>
  );
}
