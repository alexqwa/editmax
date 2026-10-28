"use client";

import { ProBanner } from "@/components/pro-banner";

export default function Settings() {
  return (
    <div className="bg-background text-foreground relative min-h-full">
      <ProBanner />
      <div className="flex flex-col px-8 pt-10 pb-9">
        <div className="min-w-0">
          <h1 className="dark:text-foreground text-[36px] leading-[1.1] font-medium tracking-[-0.03em] text-[#052D2B]">
            <span className="sm:hidden">Configurações</span>
            <span className="hidden sm:inline">Configurações</span>
          </h1>
          <p className="text-muted-foreground mt-2 max-w-160 text-[15px] leading-[1.55]">
            Personalize a ferramenta para o seu fluxo.
          </p>
        </div>
      </div>
    </div>
  );
}
