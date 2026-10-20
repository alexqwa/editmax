"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Icon } from "@phosphor-icons/react";

import { cn } from "@/lib/utils";

import {
  useSidebar,
  SidebarMenu,
  SidebarGroup,
  SidebarMenuItem,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";

export interface NavItem {
  name: string;
  url: string;
  icon: Icon;
  pro?: boolean;
  exact?: boolean;
}

interface NavMainProps {
  overview: NavItem[];
  playground: NavItem[];
}

function isRouteActive(pathname: string, url: string, exact?: boolean) {
  if (exact) return pathname === url;
  return pathname === url || pathname.startsWith(`${url}/`);
}

export function NavMain({ overview, playground }: NavMainProps) {
  const { open, toggleSidebar, isMobile } = useSidebar();
  const pathname = usePathname();

  return (
    <>
      <SidebarMenu>
        {playground.map(({ name, url, icon: ItemIcon, pro, exact }) => {
          const isActive = isRouteActive(pathname, url, exact);

          return (
            <SidebarMenuItem key={url}>
              <Link
                onClick={
                  isMobile ? () => setTimeout(toggleSidebar, 200) : undefined
                }
                href={url}
                title={!open ? name : undefined}
                aria-label={name}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative flex h-9 items-center justify-start overflow-hidden rounded-[10px] border border-transparent px-2",
                  "transition-all duration-200 ease-out",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime/40",
                  open ? "w-full px-3" : "w-10",
                  isActive
                    ? "bg-[#b1fe7b]/80 text-[#214d12] dark:bg-lime pointer-events-none"
                    : "cursor-pointer text-[#262626]/90 hover:bg-accent hover:text-foreground dark:text-muted-foreground",
                )}
              >
                <ItemIcon
                  size={20}
                  className={cn(
                    "shrink-0 transition-all duraiton-300",
                    !open && "translate-x-0.5",
                    isActive && "text-[#214d12]",
                  )}
                />

                <div
                  className={cn(
                    "flex flex-1 items-center overflow-hidden transition-[opacity,width,margin] duration-300 ease-in-out",
                    open ? "ml-3 opacity-100" : "ml-0 w-0 opacity-0",
                  )}
                >
                  <span className="trucate whitespace-nowrap text-[13px] font-medium">
                    {name}
                  </span>
                  {pro && !isActive && (
                    <span className="ml-auto shrink-0 rounded-sm bg-[#B1FE7B] px-1.5 py-1 text-[10px] font-semibold uppercase leading-none tracking-wide text-[#052D2B] dark:bg-[#B1FE7B]/15 dark:text-[#B1FE7B]">
                      PRO
                    </span>
                  )}
                </div>
              </Link>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
      <SidebarGroup>
        {open ? (
          <SidebarGroupLabel>OVERVIEW</SidebarGroupLabel>
        ) : (
          <div className="w-full mb-2 h-px bg-border" />
        )}
        <SidebarMenu>
          {overview.map(({ name, url, icon: ItemIcon, pro, exact }) => {
            const isActive = isRouteActive(pathname, url, exact);

            return (
              <SidebarMenuItem key={url}>
                <Link
                  onClick={
                    isMobile ? () => setTimeout(toggleSidebar, 200) : undefined
                  }
                  href={url}
                  title={!open ? name : undefined}
                  aria-label={name}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative flex h-9 items-center justify-start overflow-hidden rounded-[10px] border border-transparent px-2",
                    "transition-all duration-200 ease-out",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime/40",
                    open ? "w-full px-3" : "w-10",
                    isActive
                      ? "bg-[#b1fe7b]/80 text-[#214d12] dark:bg-lime pointer-events-none"
                      : "cursor-pointer text-[#262626]/90 hover:bg-accent hover:text-foreground dark:text-muted-foreground",
                  )}
                >
                  <ItemIcon
                    size={20}
                    className={cn(
                      "shrink-0 transition-all duraiton-300",
                      !open && "translate-x-0.5",
                      isActive && "text-[#214d12]",
                    )}
                  />

                  <div
                    className={cn(
                      "flex flex-1 items-center overflow-hidden transition-[opacity,width,margin] duration-300 ease-in-out",
                      open ? "ml-3 opacity-100" : "ml-0 w-0 opacity-0",
                    )}
                  >
                    <span className="trucate whitespace-nowrap text-[13px] font-medium">
                      {name}
                    </span>
                    {pro && !isActive && (
                      <span className="ml-auto shrink-0 rounded-sm bg-[#B1FE7B] px-1.5 py-1 text-[10px] font-semibold uppercase leading-none tracking-wide text-[#052D2B] dark:bg-[#B1FE7B]/15 dark:text-[#B1FE7B]">
                        PRO
                      </span>
                    )}
                  </div>
                </Link>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroup>
    </>
  );
}
