import { usePathname } from "next/navigation";

import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { BellIcon, QuestionIcon, SunIcon } from "@phosphor-icons/react";

const breadcrumbs = {
  playground: [
    {
      name: "Onboarding",
      url: "/dashboard/onboarding",
    },
  ],
  overview: [
    {
      name: "Dashboard",
      url: "/dashboard",
    },
    {
      name: "Editor",
      url: "/dashboard/editor",
    },
    {
      name: "Vídeos",
      url: "/dashboard/videos",
    },
    {
      name: "Agendamentos",
      url: "/dashboard/appointments",
    },
    {
      name: "Métricas",
      url: "/dashboard/statistics",
    },
    {
      name: "Configurações",
      url: "/dashboard/settings",
    },
  ],
};

export function NavHeader() {
  const pathname = usePathname();
  const { isMobile } = useSidebar();

  return (
    <div className="sticky top-0 z-30 h-15 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-full items-center justify-between pl-3 pr-4">
        <div className="flex min-w-0 items-center gap-2">
          <SidebarTrigger variant={"outline"} />
          <div className="mr-2 h-5 w-px bg-border" />
          <Breadcrumb>
            <BreadcrumbList className="text-muted-foreground flex items-center gap-1.5 text-[14px] wrap-break-word sm:gap-2.5 min-w-0 flex-nowrap">
              {breadcrumbs.playground.find((item) => item.url === pathname) ? (
                <BreadcrumbItem className="inline-flex items-center gap-1.5">
                  <BreadcrumbPage className="text-foreground font-medium block max-w-70 truncate">
                    Onboarding
                  </BreadcrumbPage>
                </BreadcrumbItem>
              ) : (
                <>
                  <BreadcrumbItem className="inline-flex items-center gap-1.5">
                    <BreadcrumbPage className="whitespace-nowrap text-muted-foreground">
                      Overview
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem className="inline-flex items-center gap-1">
                    <BreadcrumbPage className="text-foreground font-medium block max-w-70 truncate">
                      {
                        breadcrumbs.overview.find(
                          (item) => item.url === pathname,
                        )?.name
                      }
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </>
              )}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex items-center gap-2">
          {!isMobile && (
            <>
              <button
                type="button"
                aria-label="Notificações"
                className="relative inline-flex h-10 items-center justify-center gap-1.5 rounded-[10px] px-3 text-[14px] font-medium text-[#052D2B] dark:text-foreground border border-[#052D2B]/12 bg-transparent hover:bg-[#052D2B]/4 hover:border-[#052D2B]/20 dark:border-border dark:hover:bg-foreground/5 dark:hover:border-foreground/15 transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:bg-transparent disabled:text-[#052D2B]/40 disabled:border-[#052D2B]/8 disabled:hover:bg-transparent disabled:hover:border-[#052D2B]/8 dark:disabled:text-foreground/40 dark:disabled:border-border/50 dark:disabled:hover:bg-transparent dark:disabled:hover:border-border/50"
              >
                <BellIcon size={16} />
              </button>
              <button
                type="button"
                aria-label="Ativar modo escuro"
                className="relative inline-flex h-10 items-center justify-center gap-1.5 rounded-[10px] px-3 text-[14px] font-medium text-[#052D2B] dark:text-foreground border border-[#052D2B]/12 bg-transparent hover:bg-[#052D2B]/4 hover:border-[#052D2B]/20 dark:border-border dark:hover:bg-foreground/5 dark:hover:border-foreground/15 transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:bg-transparent disabled:text-[#052D2B]/40 disabled:border-[#052D2B]/8 disabled:hover:bg-transparent disabled:hover:border-[#052D2B]/8 dark:disabled:text-foreground/40 dark:disabled:border-border/50 dark:disabled:hover:bg-transparent dark:disabled:hover:border-border/50"
              >
                <SunIcon size={16} />
              </button>
              <button
                type="button"
                aria-label="Ajuda"
                className="relative inline-flex h-10 items-center justify-center gap-1.5 rounded-[10px] px-3 text-[14px] font-medium text-[#052D2B] dark:text-foreground border border-[#052D2B]/12 bg-transparent hover:bg-[#052D2B]/4 hover:border-[#052D2B]/20 dark:border-border dark:hover:bg-foreground/5 dark:hover:border-foreground/15 transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:bg-transparent disabled:text-[#052D2B]/40 disabled:border-[#052D2B]/8 disabled:hover:bg-transparent disabled:hover:border-[#052D2B]/8 dark:disabled:text-foreground/40 dark:disabled:border-border/50 dark:disabled:hover:bg-transparent dark:disabled:hover:border-border/50"
              >
                <QuestionIcon size={16} />
                <span>Ajuda</span>
              </button>
              <span
                aria-hidden="true"
                className="mx-1 h-5 w-px shrink-0 bg-border"
              />
            </>
          )}
          <button
            type="button"
            className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-[#B1FE7B] text-[#052D2B] font-medium border-[0.5px] border-white/25 ring-1 [--btn-ring:color-mix(in_oklab,#052D2B_15%,#B1FE7B)] ring-(--btn-ring) shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 enabled:hover:bg-[#a0f060] enabled:active:scale-[0.99] h-9 gap-1.5 px-3 text-[14px] tracking-[-0.01em]"
            aria-label="Fazer upgrade pro Plano Pro"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 20 20"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fillRule="evenodd"
                d="M13.2 6.6L14.39 5.17L17.23 7.6L18.43 6.18L15.59 3.75L16.39 2.8L14.95 1.64L7.65 10.41C5.93 9.66 3.87 10.03 2.61 11.53C1.87 12.42 1.51 13.56 1.61 14.7C1.71 15.85 2.26 16.91 3.15 17.65C4.03 18.39 5.17 18.75 6.32 18.65C7.46 18.55 8.52 18 9.26 17.11C10.53 15.61 10.45 13.15 9.03 11.57L11.97 8.06L14.88 10.46L16.04 9.03L13.2 6.6L13.2 6.6ZM7.71 15.96C6.86 16.98 5.39 17.16 4.31 16.26C3.24 15.36 3.18 13.86 4.02 12.87C4.85 11.87 6.4 11.72 7.41 12.57C7.9 12.98 8.2 13.57 8.26 14.2C8.31 14.84 8.12 15.47 7.71 15.96ZM5.35 0.97L4.42 3.03L2.37 3.96L4.42 4.89L5.35 6.94L6.28 4.89L8.33 3.96L6.28 3.03L5.35 0.97Z"
                fill="currentColor"
              ></path>
            </svg>
            <span>Upgrade</span>
          </button>
        </div>
      </div>
    </div>
  );
}
