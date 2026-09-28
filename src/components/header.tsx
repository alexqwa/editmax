"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import logoImg from "@/src/assets/logo.svg";

const navItems: { title: string; href: string }[] = [
  {
    title: "Funcionalidades",
    href: "/",
  },
  {
    title: "Preços",
    href: "/",
  },
  {
    title: "Quem usa",
    href: "/",
  },
  {
    title: "Editor",
    href: "/",
  },
  {
    title: "Plataforma",
    href: "/",
  },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex h-10.5 items-center justify-center gap-2 bg-[#1E4345] text-[13px] text-white/80">
        <span>
          Garanta <b className="text-white">15% OFF</b> no Plano Publisher.
          Cupom:
        </span>
        <button className="inline-flex items-center gap-1.5 rounded-md bg-[#9EEA6C] px-2.5 py-0.5 text-[12px] font-bold text-[#1E4345] transition-colors duration-200 hover:bg-[#B1FE7B]">
          NOVO15
          <span className="relative inline-flex size-3.5">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute inset-0 size-3.5 transition-all duration-300 rotate-0 scale-100 opacity-100"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path>
            </svg>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute inset-0 size-3.5 transition-all duration-300 -rotate-90 scale-0 opacity-0"
            >
              <path d="M5 12l5 5L20 7"></path>
            </svg>
          </span>
        </button>
      </div>
      <header className="fixed top-10.5 left-0 right-0 z-50 border-b border-border/60 bg-white/75 backdrop-blur-md">
        <div className="relative mx-auto flex h-16 max-w-360 items-center px-8 lg:px-12">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              alt="Logo"
              src={logoImg}
              loading="eager"
              className="h-9 w-auto"
            />
          </Link>
          <NavigationMenu className="absolute left-1/2 -translate-x-1/2 items-center gap-0.5 hidden md:flex">
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink
                    className="rounded-lg px-3.5 py-1.5 text-[14px] font-medium transition-all text-[#86868b]! duration-150 hover:bg-[#F2F4F8] hover:text-[#1d1d1f]!"
                    render={<Link href={item.href}>{item.title}</Link>}
                  />
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="ml-auto flex shrink-0 items-center gap-2.5">
            <Link
              href="/"
              className="hidden h-9 items-center justify-center rounded-lg border border-border/60 bg-white px-3.5 text-[13px] font-medium text-foreground transition-all duration-200 hover:bg-muted/50 active:scale-[0.99] active:transition-none sm:inline-flex"
            >
              Acessar Dashboard
            </Link>
            <div className="relative inline-flex min-w-0">
              <div className="inline-flex min-w-0 items-stretch overflow-hidden rounded-lg border-[0.5px] border-white/25 bg-[#B1FE7B] ring-1 [--btn-ring:color-mix(in_oklab,var(--color-foreground)_15%,#B1FE7B)] ring-(--btn-ring) shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
                <Link
                  href="/"
                  className="flex min-w-0 flex-1 items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-8 px-4 text-[13px] font-semibold text-[#052D2B] transition-all duration-300 hover:bg-[#a0f060] active:scale-[0.99] active:transition-none"
                >
                  <span className="min-w-0">
                    <span className="hidden sm:inline">Como funciona?</span>
                    <span className="sm:hidden">Ajuda</span>
                  </span>
                </Link>
              </div>
            </div>
            <button
              onClick={() => setMenuOpen(true)}
              className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 transition-colors duration-150 hover:bg-muted/50 md:hidden"
              aria-label="Toggle menu"
            >
              <ListIcon size={18} className="text-foreground" />
            </button>
          </div>
        </div>
      </header>
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-60 bg-black/20 transition-opacity duration-300 md:pointer-events-none md:hidden ${menuOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />
      <div
        className={`fixed right-0 z-60 flex h-[calc(100%-42px)] top-10.5 w-75 flex-col bg-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:pointer-events-none md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex h-16 items-center justify-between border-b border-border/60 px-6">
          <span className="mt-1 text-[16px] font-medium text-foreground">
            Menu
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/60 text-foreground transition-colors duration-150 hover:text-foreground"
            aria-label="Fechar menu"
          >
            <XIcon size={18} className="text-foreground" />
          </button>
        </div>
        <nav className="flex flex-col px-3 py-2">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-lg px-3 py-2.5 text-[14px] font-medium text-muted-foreground transition-colors duration-150 hover:bg-[#F2F4F8] hover:text-foreground"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="mt-auto space-y-2.5 px-5 py-5">
          <div className="relative inline-flex min-w-0 w-full">
            <div className="inline-flex min-w-0 items-stretch shiny-btn w-full overflow-hidden rounded-lg border-[0.5px] border-white/25 bg-[#B1FE7B] ring-1 [--btn-ring:color-mix(in_oklab,var(--color-foreground)_15%,#B1FE7B)] ring-(--btn-ring) shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
              <Link
                href="/"
                className="flex min-w-0 items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-11 flex-1 text-[13.5px] font-semibold text-[#052D2B] transition-all duration-300 hover:bg-[#a0f060]"
              >
                <span className="min-w-0">Como funciona?</span>
              </Link>
            </div>
          </div>
          <Link
            href="/"
            className="flex h-11 w-full items-center justify-center rounded-lg border border-border/60 text-[13.5px] font-medium text-muted-foreground transition-colors duration-150 hover:bg-[#F2F4F8] hover:text-foreground"
          >
            Acessar Dashboard
          </Link>
        </div>
      </div>
    </>
  );
}
