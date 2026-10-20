"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  useSidebar,
  SidebarFooter,
  SidebarHeader,
  SidebarContent,
} from "@/components/ui/sidebar";
import {
  GearSixIcon,
  CalendarIcon,
  FilmReelIcon,
  ScissorsIcon,
  CaretLeftIcon,
  HouseLineIcon,
  ChartLineUpIcon,
  RocketLaunchIcon,
} from "@phosphor-icons/react";

import { cn } from "@/lib/utils";

import logoImg from "@/assets/logo.svg";

const data = {
  playground: [
    {
      name: "Onboarding",
      url: "/dashboard/onboarding",
      icon: RocketLaunchIcon,
    },
  ],
  overview: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: HouseLineIcon,
      exact: true,
    },
    {
      name: "Editor",
      url: "/dashboard/editor",
      icon: ScissorsIcon,
    },
    {
      name: "Vídeos",
      url: "/dashboard/videos",
      icon: FilmReelIcon,
    },
    {
      name: "Agendamentos",
      url: "/dashboard/appointments",
      icon: CalendarIcon,
      pro: true,
    },
    {
      name: "Métricas",
      url: "/dashboard/statistics",
      icon: ChartLineUpIcon,
    },
    {
      name: "Configurações",
      url: "/dashboard/settings",
      icon: GearSixIcon,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { toggleSidebar, open, isMobile } = useSidebar();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Link
          onClick={isMobile ? () => setTimeout(toggleSidebar, 200) : undefined}
          href="/dashboard"
          className="flex w-full cursor-pointer items-center"
        >
          <div className="relative h-7.75 overflow-hidden scale-120 origin-left translate-x-[-1.35px] translate-y-[-1.26px] transition-[width] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] w-42">
            <Image
              src={logoImg}
              height={549}
              width={2253}
              alt="EditMax"
              className="h-7.75 w-42 max-w-none object-left object-contain dark:hidden"
            />
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <NavMain playground={data.playground} overview={data.overview} />
      </SidebarContent>
      <SidebarFooter>
        <div className="shrink-0 border-t border-border py-1.75">
          <div className="px-[10.5px]">
            <div className="relative">
              <button
                className={cn(
                  "group flex items-center rounded-[12px] justify-center cursor-pointer text-foreground transition-all duration-150 ease-out hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime/40",
                  open
                    ? "min-h-14 w-full px-2 py-2 active:scale-[0.98]"
                    : "h-10.5 -mx-1 w-10.5 translate-x-px",
                )}
              >
                <span
                  className={cn(
                    "relative shrink-0",
                    !open && "translate-x-0.5",
                  )}
                >
                  <span className="flex h-8.25 w-8.25 items-center justify-center overflow-hidden rounded-[calc(var(--radius)/2+4px)] border border-border bg-foreground/4 transition-colors group-hover:bg-foreground/6">
                    <Image
                      fill
                      src="https://github.com/alexqwa.png"
                      alt="Alexandre Ferreira"
                      className="h-full w-full object-cover rounded-[calc(var(--radius)/2+4px)]"
                    />
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-0.5 -right-0.5 size-[10.5px] rounded-full bg-[#22C55E] ring-2 ring-card"
                  />
                </span>
                {open && (
                  <span className="ml-3 flex min-w-0 flex-1 flex-col gap-0.5 text-left">
                    <span className="flex items-center gap-1.5">
                      <span className="min-w-0 truncate text-[14px] font-medium leading-tight text-foreground">
                        Alexandre Ferreira
                      </span>
                      <span className="inline-flex shrink-0 items-center rounded-[4.1px] px-1.75 py-1 text-[10px] font-semibold uppercase tracking-wide leading-none bg-[#B1FE7B] text-[#052D2B] dark:bg-[#B1FE7B]/15 dark:text-[#B1FE7B]">
                        Free
                      </span>
                    </span>
                    <span className="truncate text-[12px] leading-tight text-[#5C5C5C] dark:text-muted-foreground">
                      ale.ferreira5727@gmail.com
                    </span>
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
        {!isMobile && (
          <div className="shrink-0 border-t border-border py-1.75">
            <div className="px-[10.5px]">
              <button
                aria-label="Recolher sidebar"
                onClick={() => toggleSidebar()}
                className={cn(
                  "group flex h-10.5 items-center overflow-hidden pl-3 rounded-[12px] bg-foreground/4 hover:bg-foreground/6 text-foreground/75 hover:text-foreground cursor-pointer transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime/40",
                  open
                    ? "w-full active:scale-[0.98]"
                    : "-mx-1 w-10.5 translate-x-1",
                )}
              >
                <span
                  className={cn(
                    "flex items-center justify-center",
                    open && "rotate-180",
                  )}
                >
                  <CaretLeftIcon size={20} />
                </span>
                {open && (
                  <span className="ml-2.5 whitespace-nowrap text-[14px] font-medium leading-none">
                    Recolher sidebar
                  </span>
                )}
              </button>
            </div>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
