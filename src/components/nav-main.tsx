"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  useSidebar,
  SidebarMenu,
  SidebarGroup,
  SidebarMenuItem,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { Icon } from "@phosphor-icons/react";

interface NavMainProps {
  overview: {
    name: string;
    url: string;
    icon: Icon;
    pro?: boolean;
  }[];
}

export function NavMain({ overview }: NavMainProps) {
  const { open } = useSidebar();
  const pathname = usePathname();

  return (
    <SidebarGroup>
      {open ? (
        <SidebarGroupLabel>OVERVIEW</SidebarGroupLabel>
      ) : (
        <div className="w-full mb-2 h-px bg-border" />
      )}
      <SidebarMenu>
        {overview.map((item) => {
          const isActive = item.url === pathname;

          return (
            <SidebarMenuItem key={item.url}>
              {isActive ? (
                <Link
                  href={item.url}
                  className={clsx(
                    "relative flex pointer-events-none items-center overflow-hidden rounded-[10px] border border-transparent h-[36px] justify-start px-2 transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime/40 w-[40px] bg-[#b1fe7b]/80 text-[#214d12] dark:bg-lime",
                    {
                      ["w-full px-3"]: open,
                    },
                  )}
                >
                  <item.icon
                    size={20}
                    className={clsx(
                      "shrink-0 transition-all duration-300 text-[#214d12]",
                      {
                        ["translate-x-0.5"]: !open,
                      },
                    )}
                  />
                  <div
                    className={clsx(
                      "flex flex-1 items-center overflow-hidden transition-[opacity,width,margin] duration-300 ease-in-out ml-0 w-0 opacity-0",
                      {
                        ["ml-3 opacity-100"]: open,
                      },
                    )}
                  >
                    <span className="truncate text-[13px] font-medium whitespace-nowrap">
                      {item.name}
                    </span>
                  </div>
                </Link>
              ) : (
                <Link
                  href={item.url}
                  className={clsx(
                    "relative flex items-center overflow-hidden rounded-[10px] border border-transparent h-9 justify-start px-2 transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime/40 w-10 text-[#262626]/90 dark:text-muted-foreground hover:text-foreground hover:bg-accent cursor-pointer",
                    {
                      ["w-full px-3"]: open,
                    },
                  )}
                >
                  <item.icon
                    size={20}
                    className={clsx("shrink-0 transition-all duration-300", {
                      ["translate-x-0.5"]: !open,
                    })}
                  />
                  <div
                    className={clsx(
                      "flex flex-1 items-center overflow-hidden transition-[opacity,width,margin] duration-300 ease-in-out ml-0 w-0 opacity-0",
                      {
                        ["ml-3 opacity-100"]: open,
                      },
                    )}
                  >
                    <span className="truncate text-[13px] font-medium whitespace-nowrap">
                      {item.name}
                    </span>
                    {item.pro && (
                      <span className="ml-auto shrink-0 rounded-[4.1px] px-1.75 py-1 text-[10px] font-semibold uppercase tracking-wide leading-none bg-[#B1FE7B] text-[#052D2B] dark:bg-[#B1FE7B]/15 dark:text-[#B1FE7B]">
                        PRO
                      </span>
                    )}
                  </div>
                </Link>
              )}
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
