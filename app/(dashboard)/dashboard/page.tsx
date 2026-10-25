"use client";

import { ProBanner } from "@/components/pro-banner";

export default function Dashboard() {
  return (
    <div className="min-h-full bg-background text-foreground">
      <ProBanner />
      <div className="flex flex-col gap-4 px-8 pb-9 pt-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <h1 className="text-[36px] font-medium leading-[1.1] tracking-[-0.03em] text-[#052D2B] dark:text-foreground">
            <span className="sm:hidden">Dashboard</span>
            <span className="hidden sm:inline">Dashboard</span>
          </h1>
          <p className="mt-2 max-w-160 text-[15px] leading-[1.55] text-muted-foreground">
            Vídeos editados, agendamentos e estatísticas em uma tela.
          </p>
        </div>
      </div>
    </div>
  );
}
