import Link from "next/link";

import { Header } from "@/src/components/header";
import { AvatarGroup, AvatarGroupCount } from "@/components/ui/avatar";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <Header />
      <main className="relative">
        <section id="hero" className="scroll-mt-26.5 pt-26.5">
          <div className="flex flex-col gap-px bg-[#F2F4F8]">
            <div className="flex gap-px">
              <div className="hidden flex-1 xl:block">
                <div className="relative h-full overflow-hidden rounded-r-[4px] bg-white" />
              </div>
              <div className="w-full max-w-[1380px] overflow-hidden rounded-[4px] bg-white">
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
                            src="https://github.com/maxleiter.png"
                            alt="@maxleiter"
                          />
                          <AvatarFallback>LR</AvatarFallback>
                        </Avatar>
                        <Avatar>
                          <AvatarImage
                            src="https://github.com/evilrabbit.png"
                            alt="@evilrabbit"
                          />
                          <AvatarFallback>ER</AvatarFallback>
                        </Avatar>
                        <AvatarGroupCount className="bg-[#052D2B] text-[11px] font-semibold text-white">
                          +99
                        </AvatarGroupCount>
                      </AvatarGroup>
                      <span className="text-[13px] text-[#86868b]">
                        <span className="hidden lg:inline">
                          Junte-se aos criadores que já usam a EditMax
                        </span>
                        <span className="lg:hidden">
                          Junte-se a +300 sellers na Cargoos
                        </span>
                      </span>
                    </div>
                    <h1 className="mt-8 text-[2.5rem] font-semibold leading-[1.2] tracking-[-0.035em] text-[#052D2B] sm:text-[2.75rem] lg:text-[3.5rem] lg:leading-[1.15]">
                      <span className="block">Edite milhares de vídeos</span>
                      <span className="block">e agende em todas as</span>
                      <span className="block mt-1">
                        plataformas,{" "}
                        <span className="shiny-btn inline-block -translate-y-[5px] rounded-md bg-[#B1FE7B] px-2 align-middle text-[#052D2B]">
                          sem esforço.
                        </span>
                      </span>
                    </h1>
                    <p className="mt-7 max-w-[42rem] text-[18px] leading-[1.7] text-[#86868b] sm:text-[22px] sm:leading-[1.6]">
                      Transforme seus vídeos em lote, adicione legendas,
                      personalize formatos e publique automaticamente nas
                      principais redes sociais. Mais alcance, menos trabalho.
                    </p>
                    <div className="mt-9 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
                      <div className="relative inline-flex min-w-0 w-full sm:w-auto">
                        <div className="inline-flex min-w-0 items-stretch w-full overflow-hidden rounded-lg border-[0.5px] border-white/25 bg-[#B1FE7B] ring-1 [--btn-ring:color-mix(in_oklab,var(--color-foreground)_15%,#B1FE7B)] ring-[var(--btn-ring)] shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] sm:w-auto">
                          <a
                            href="/extensao"
                            target="_blank"
                            rel="noreferrer"
                            className="flex min-w-0 flex-1 items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 group/btn h-11 w-full px-6 text-[15px] font-semibold text-[#052D2B] transition-all duration-300 hover:bg-[#a0f060] active:scale-[0.99] active:transition-none"
                          >
                            <span className="min-w-0">Como funciona?</span>
                          </a>
                        </div>
                      </div>
                      <Link
                        href="https://app.cargoos.com.br"
                        className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-border/60 bg-white px-6 text-[15px] font-medium text-foreground transition-all duration-200 hover:bg-muted/50 active:scale-[0.99] active:transition-none sm:w-auto"
                      >
                        Acessar Dashboard
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden flex-1 xl:block">
                <div className="relative h-full overflow-hidden rounded-r-[4px] bg-white" />
              </div>
            </div>
            <div className="flex gap-px">
              <div className="hidden flex-1 xl:block">
                <div className="relative h-full overflow-hidden rounded-r-[4px] bg-white" />
              </div>
              <div className="w-full max-w-[1380px] overflow-hidden rounded-[4px] bg-[#F2F4F8]">
                <div className="grid grid-cols-2 gap-[1px] lg:grid-cols-4">
                  <div className="rounded-[4px] bg-white px-8 py-6 lg:px-10 text-center">
                    <span className="block text-[34px] font-bold tracking-[-0.03em] text-[#052D2B] sm:text-[42px]">
                      <span className="inline-block tabular-nums">10.000</span>
                      <span className="text-[#99E36A]">+</span>
                    </span>
                    <span className="mt-1.5 block text-[15px] text-[#86868b]">
                      Vídeos editados em massa
                    </span>
                  </div>
                  <div className="rounded-[4px] bg-white px-8 py-6 lg:px-10 text-center">
                    <span className="block text-[34px] font-bold tracking-[-0.03em] text-[#052D2B] sm:text-[42px]">
                      <span className="inline-block tabular-nums">8</span>
                      <span className="text-[#99E36A]">+</span>
                    </span>
                    <span className="mt-1.5 block text-[15px] text-[#86868b]">
                      Plataformas integradas
                    </span>
                  </div>
                  <div className="rounded-[4px] bg-white px-8 py-6 lg:px-10 text-center">
                    <span className="block text-[34px] font-bold tracking-[-0.03em] text-[#052D2B] sm:text-[42px]">
                      <span className="inline-block tabular-nums">250</span>
                      <span className="text-[#99E36A]">+</span>
                    </span>
                    <span className="mt-1.5 block text-[15px] text-[#86868b]">
                      Criadores e empresas
                    </span>
                  </div>
                  <div className="rounded-[4px] bg-white px-8 py-6 lg:px-10 text-center">
                    <span className="block text-[34px] font-bold tracking-[-0.03em] text-[#052D2B] sm:text-[42px]">
                      &lt;<span className="inline-block tabular-nums">15</span>
                      <span className="text-[#99E36A]">min</span>
                    </span>
                    <span className="mt-1.5 block text-[15px] text-[#86868b]">
                      P/ Gerar 150+ vídeos em massa
                    </span>
                  </div>
                </div>
              </div>
              <div className="hidden flex-1 xl:block">
                <div className="relative h-full overflow-hidden rounded-r-[4px] bg-white" />
              </div>
            </div>
            <div className="flex gap-px">
              <div className="hidden flex-1 xl:block">
                <div className="h-full rounded-r-[4px] bg-white"></div>
              </div>
              <div className="w-full max-w-[1380px] overflow-hidden rounded-[4px] bg-white h-12"></div>
              <div className="hidden min-w-[2px] flex-1 xl:block">
                <div className="h-full rounded-l-[4px] bg-white"></div>
              </div>
            </div>
            <div className="flex gap-px">
            
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
