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
          <div className="relative h-7.75 w-42 origin-left translate-x-[-1.35px] translate-y-[-1.26px] scale-120 overflow-hidden transition-[width] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <Image
              src={logoImg}
              height={549}
              width={2253}
              alt="EditMax"
              className="h-7.75 w-42 max-w-none object-contain object-left dark:hidden"
            />
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <NavMain playground={data.playground} overview={data.overview} />
      </SidebarContent>
      <SidebarFooter>
        <div className="border-border shrink-0 border-t py-1.75">
          <div className="px-[10.5px]">
            <div className="relative">
              <button
                className={cn(
                  "group text-foreground hover:bg-accent/50 focus-visible:ring-lime/40 flex cursor-pointer items-center justify-center rounded-[12px] transition-all duration-150 ease-out focus-visible:ring-2 focus-visible:outline-none",
                  open
                    ? "min-h-14 w-full px-2 py-2 active:scale-[0.98]"
                    : "-mx-1 h-10.5 w-10.5 translate-x-px",
                )}
              >
                <span
                  className={cn(
                    "relative shrink-0",
                    !open && "translate-x-0.5",
                  )}
                >
                  <span className="border-border bg-foreground/4 group-hover:bg-foreground/6 relative flex h-8.25 w-8.25 items-center justify-center overflow-hidden rounded-[calc(var(--radius)/2+4px)] border transition-colors">
                    <Image
                      fill
                      src="https://github.com/alexqwa.png"
                      alt="Alexandre Ferreira"
                      className="h-full w-full rounded-[calc(var(--radius)/2+4px)] object-cover"
                    />
                  </span>
                  <span
                    aria-hidden="true"
                    className="ring-card absolute -right-0.5 -bottom-0.5 size-[10.5px] rounded-full bg-[#22C55E] ring-2"
                  />
                </span>
                {open && (
                  <span className="ml-3 flex min-w-0 flex-1 flex-col gap-0.5 text-left">
                    <span className="flex items-center gap-1.5">
                      <span className="text-foreground min-w-0 truncate text-[14px] leading-tight font-medium">
                        Alexandre Ferreira
                      </span>
                      <span className="inline-flex shrink-0 items-center rounded-[4.1px] bg-[#B1FE7B] px-1.75 py-1 text-[10px] leading-none font-semibold tracking-wide text-[#052D2B] uppercase dark:bg-[#B1FE7B]/15 dark:text-[#B1FE7B]">
                        Free
                      </span>
                    </span>
                    <span className="dark:text-muted-foreground truncate text-[12px] leading-tight text-[#5C5C5C]">
                      ale.ferreira5727@gmail.com
                    </span>
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
        {!isMobile && (
          <div className="border-border shrink-0 border-t py-1.75">
            <div className="px-[10.5px]">
              <button
                aria-label="Recolher sidebar"
                onClick={() => toggleSidebar()}
                className={cn(
                  "group bg-foreground/4 hover:bg-foreground/6 text-foreground/75 hover:text-foreground focus-visible:ring-lime/40 flex h-10.5 cursor-pointer items-center overflow-hidden rounded-[12px] pl-3 transition-all duration-150 ease-out focus-visible:ring-2 focus-visible:outline-none",
                  open
                    ? "w-full active:scale-[0.98]"
                    : "-mx-1 w-10.5 translate-x-1",
                )}
              >
                <span
                  className={cn(
                    "flex items-center justify-center",
                    !open && "rotate-180",
                  )}
                >
                  <CaretLeftIcon size={19} />
                </span>
                {open && (
                  <span className="ml-2.5 text-[14px] leading-none font-medium whitespace-nowrap">
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
