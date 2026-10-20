"use client";

import clsx from "clsx";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const { toggleSidebar, open } = useSidebar();

  const isActive = data.playground.find((item) => item.url === pathname);

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Link
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
        <div className="" role="group">
          <div className="space-y-2">
            <div className="group/item relative">
              {isActive ? (
                <Link
                  href="/dashboard/onboarding"
                  className={clsx(
                    "relative flex group-data-[state=expanded]:w-full group-data-[state=expanded]:px-3 items-center overflow-hidden rounded-[10px] border border-transparent h-9 justify-start px-2 transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime/40 w-10 bg-[#b1fe7b]/80 text-[#214d12] dark:bg-lime",
                    {
                      ["pointer-events-none"]: isActive,
                    },
                  )}
                >
                  <RocketLaunchIcon
                    size={20}
                    className="shrink-0 transition-all duration-300 group-data-[state=collapsed]:translate-x-0.5 text-[#214d12]"
                  />
                  <div className="flex group-data-[state=expanded]:opacity-100 group-data-[state=expanded]:ml-3 flex-1 items-center overflow-hidden transition-[opacity,width,margin] duration-300 ease-in-out ml-0 w-0 opacity-0">
                    <span className="truncate text-[13px] font-medium whitespace-nowrap">
                      Onboarding
                    </span>
                  </div>
                </Link>
              ) : (
                <Link
                  href="/dashboard/onboarding"
                  className="relative group-data-[state=expanded]:w-full group-data-[state=expanded]:px-3 flex items-center overflow-hidden rounded-[10px] border border-transparent h-9 justify-start px-2 transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime/40 w-10 text-[#262626]/90 dark:text-muted-foreground hover:text-foreground hover:bg-accent cursor-pointer"
                >
                  <RocketLaunchIcon
                    size={20}
                    className="shrink-0 transition-all duration-300 group-data-[state=collapsed]:translate-x-0.5"
                  />
                  <div className="flex flex-1 group-data-[state=expanded]:opacity-100 group-data-[state=expanded]:ml-3 items-center overflow-hidden transition-[opacity,width,margin] duration-300 ease-in-out ml-0 w-0 opacity-0">
                    <span className="truncate text-[13px] font-medium whitespace-nowrap">
                      Onboarding
                    </span>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
        <NavMain overview={data.overview} />
      </SidebarContent>
      <SidebarFooter>
        <div className="shrink-0 border-t border-border py-1.75">
          <div className="px-[10.5px]">
            <div className="relative">
              <button
                className={clsx(
                  "group flex items-center rounded-[12px] h-10.5 -mx-1 w-10.5 justify-center translate-x-px cursor-pointer text-foreground transition-all duration-150 ease-out hover:bg-accent/50 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime/40",
                  {
                    ["min-h-14 w-full px-2 py-2"]: open,
                  },
                )}
              >
                <span
                  className={clsx("relative shrink-0", {
                    ["translate-x-0.5"]: !open,
                  })}
                >
                  <span className="flex h-8.25 w-8.25 items-center justify-center overflow-hidden rounded-[8px] border border-border bg-foreground/4 transition-colors group-hover:bg-foreground/6">
                    <Image
                      fill
                      src="https://github.com/alexqwa.png"
                      alt="Alexandre Ferreira"
                      className="h-full w-full object-cover rounded-[8px]"
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
        <div className="shrink-0 border-t border-border py-1.75">
          <div className="px-[10.5px]">
            <button
              aria-label="Recolher sidebar"
              onClick={() => toggleSidebar()}
              className={clsx(
                "group flex h-10.5 items-center overflow-hidden rounded-[12px] w-full pl-3 bg-foreground/4 hover:bg-foreground/6 text-foreground/75 hover:text-foreground cursor-pointer transition-all duration-150 ease-out active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime/40",
                {
                  ["-mx-1 w-10.5 translate-x-1"]: !open,
                },
              )}
            >
              <span
                className={clsx("flex items-center justify-center", {
                  ["rotate-180"]: open,
                })}
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
      </SidebarFooter>
    </Sidebar>
  );
}
