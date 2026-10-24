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
      name: "Configurações",
      url: "/dashboard/settings",
    },
  ],
};

export function NavHeader() {
  const pathname = usePathname();
  const { isMobile } = useSidebar();

  return (
    <div className="sticky top-0 z-30 h-15 border-b border-border bg-background">
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
                  {!isMobile && (
                    <>
                      <BreadcrumbItem className="inline-flex items-center gap-1.5">
                        <BreadcrumbPage className="whitespace-nowrap text-muted-foreground">
                          Overview
                        </BreadcrumbPage>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                    </>
                  )}
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
          <button
            type="button"
            aria-label="Notificações"
            className="relative inline-flex h-10 items-center justify-center gap-1.5 rounded-[10px] px-3 text-[14px] font-medium text-[#052D2B] dark:text-foreground border border-[#052D2B]/12 bg-transparent hover:bg-[#052D2B]/4 hover:border-[#052D2B]/20 dark:border-border dark:hover:bg-foreground/5 dark:hover:border-foreground/15 transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:bg-transparent disabled:text-[#052D2B]/40 disabled:border-[#052D2B]/8 disabled:hover:bg-transparent disabled:hover:border-[#052D2B]/8 dark:disabled:text-foreground/40 dark:disabled:border-border/50 dark:disabled:hover:bg-transparent dark:disabled:hover:border-border/50"
          >
            <BellIcon size={16} />
          </button>
          {!isMobile && (
            <>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}
