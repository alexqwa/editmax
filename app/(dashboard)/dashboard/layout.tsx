"use client";

import { usePathname } from "next/navigation";

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const breadcrumbs = {
  items: [
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
    {
      name: "Onboarding",
      url: "/dashboard/onboarding",
    },
  ],
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="sticky top-0 z-30 h-15 border-b border-border bg-background/90 backdrop-blur-md">
          <div className="mx-auto flex h-full items-center justify-between pl-3 pr-4">
            <div className="flex min-w-0 items-center gap-2">
              <SidebarTrigger variant={"outline"} />
              <div className="mr-2 h-5 w-px bg-border"></div>
              <nav
                aria-label="breadcrumb"
                data-slot="breadcrumb"
                className="min-w-0"
              >
                <ol
                  data-slot="breadcrumb-list"
                  className="text-muted-foreground flex flex-wrap items-center gap-1.5 text-[14px] wrap-break-word sm:gap-2.5 min-w-0"
                >
                  <li
                    data-slot="breadcrumb-item"
                    className="inline-flex items-center gap-1.5 sm:hidden"
                  >
                    <span aria-hidden="true" className="text-muted-foreground">
                      …
                    </span>
                  </li>
                  <li
                    data-slot="breadcrumb-separator"
                    role="presentation"
                    aria-hidden="true"
                    className="flex items-center [&amp;&gt;svg]:size-3.5 shrink-0 sm:hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </li>
                  <li
                    data-slot="breadcrumb-item"
                    className="inline-flex items-center gap-1.5 max-sm:hidden"
                  >
                    <span className="whitespace-nowrap text-muted-foreground">
                      Overview
                    </span>
                  </li>
                  <li
                    data-slot="breadcrumb-separator"
                    role="presentation"
                    aria-hidden="true"
                    className="flex items-center [&amp;&gt;svg]:size-3.5 shrink-0 max-sm:hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </li>
                  <li
                    data-slot="breadcrumb-item"
                    className="inline-flex items-center gap-1.5 min-w-0"
                  >
                    <span
                      data-slot="breadcrumb-page"
                      role="link"
                      aria-disabled="true"
                      aria-current="page"
                      className="text-foreground font-medium block max-w-70 truncate"
                      data-qa="breadcrumb-current"
                      title="Produtos"
                    >
                      {
                        breadcrumbs.items.find((item) => item.url === pathname)
                          ?.name
                      }
                    </span>
                  </li>
                </ol>
              </nav>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Notificações"
                className="relative inline-flex h-10 items-center justify-center gap-1.5 rounded-[10px] px-3 text-[14px] font-medium text-[#052D2B] dark:text-foreground border border-[#052D2B]/12 bg-transparent hover:bg-[#052D2B]/4 hover:border-[#052D2B]/20 dark:border-border dark:hover:bg-foreground/5 dark:hover:border-foreground/15 transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:bg-transparent disabled:text-[#052D2B]/40 disabled:border-[#052D2B]/8 disabled:hover:bg-transparent disabled:hover:border-[#052D2B]/8 dark:disabled:text-foreground/40 dark:disabled:border-border/50 dark:disabled:hover:bg-transparent dark:disabled:hover:border-border/50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
                </svg>
              </button>
              <button
                type="button"
                aria-label="Ativar modo escuro"
                className="relative inline-flex h-10 items-center justify-center gap-1.5 rounded-[10px] px-3 text-[14px] font-medium text-[#052D2B] dark:text-foreground border border-[#052D2B]/12 bg-transparent hover:bg-[#052D2B]/4 hover:border-[#052D2B]/20 dark:border-border dark:hover:bg-foreground/5 dark:hover:border-foreground/15 transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:bg-transparent disabled:text-[#052D2B]/40 disabled:border-[#052D2B]/8 disabled:hover:bg-transparent disabled:hover:border-[#052D2B]/8 dark:disabled:text-foreground/40 dark:disabled:border-border/50 dark:disabled:hover:bg-transparent dark:disabled:hover:border-border/50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </svg>
              </button>
              <button
                type="button"
                aria-label="Ajuda"
                className="relative inline-flex h-10 items-center justify-center gap-1.5 rounded-[10px] px-3 text-[14px] font-medium text-[#052D2B] dark:text-foreground border border-[#052D2B]/12 bg-transparent hover:bg-[#052D2B]/4 hover:border-[#052D2B]/20 dark:border-border dark:hover:bg-foreground/5 dark:hover:border-foreground/15 transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:bg-transparent disabled:text-[#052D2B]/40 disabled:border-[#052D2B]/8 disabled:hover:bg-transparent disabled:hover:border-[#052D2B]/8 dark:disabled:text-foreground/40 dark:disabled:border-border/50 dark:disabled:hover:bg-transparent dark:disabled:hover:border-border/50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <path d="M12 17h.01"></path>
                </svg>
                <span>Ajuda</span>
              </button>
              <span
                aria-hidden="true"
                className="mx-1 h-5 w-px shrink-0 bg-border"
              ></span>
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
        {children}
      </div>
    </SidebarProvider>
  );
}
