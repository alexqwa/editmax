"use client";

import Image from "next/image";
import {
  ImageIcon,
  TrashIcon,
  UploadIcon,
  ShareNetworkIcon,
  DownloadSimpleIcon,
} from "@phosphor-icons/react";

import { Slider } from "@/components/ui/slider";
import { ProBanner } from "@/components/pro-banner";
import { EditorTabs } from "@/components/editor-tabs";

import { TitlePanel } from "@/components/panels/TitlePanel";
import { BorderPanel } from "@/components/panels/BorderPanel";
import { BottomPanel } from "@/components/panels/BottomPanel";
import { ExtrasPanel } from "@/components/panels/ExtrasPanel";
import { OverlayPanel } from "@/components/panels/OverlayPanel";

import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

import bannerImg from "@/../public/banner.png";

export default function Editor() {
  const isMobile = useIsMobile();

  return (
    <div className="bg-background text-foreground relative min-h-full">
      <ProBanner />
      <div className="flex flex-col px-8 pt-10 pb-9">
        <div className="min-w-0">
          <h1 className="dark:text-foreground text-[36px] leading-[1.1] font-medium tracking-[-0.03em] text-[#052D2B]">
            <span className="sm:hidden">Editor</span>
            <span className="hidden sm:inline">Editor</span>
          </h1>
          <p className="text-muted-foreground mt-2 max-w-160 text-[15px] leading-[1.55]">
            Edite, personalize e prepare centenas de vídeos em poucos cliques.
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="bg-border h-px w-full" />
      <div className="@container/editor-row px-8 py-8">
        <div className="grid grid-cols-2 items-stretch gap-3 @[1080px]/editor-row:grid-cols-[350px_minmax(0,1fr)_320px]">
          <div
            className={cn(
              "border-border bg-card col-span-2 flex h-fit flex-col gap-4 rounded-lg border p-5 py-4 sm:col-span-1",
              isMobile && "hidden",
            )}
          >
            <div className="flex flex-row items-center justify-between">
              <h4 className="text-foreground text-[15px] font-medium tracking-[-0.01em]">
                Envie seus vídeos
              </h4>
              <div className="border-border rounded-[8.1px] border p-1">
                <UploadIcon className="text-muted-foreground size-3.5" />
              </div>
            </div>
            <div className="border-border bg-background relative flex flex-col items-center justify-center gap-3 rounded-[10px] border border-dashed py-5">
              <span className="border-border bg-card flex size-11 transform-none items-center justify-center rounded-full border border-dashed opacity-100 shadow-[0_4px_14px_-6px_rgba(5,45,43,0.15)]">
                <UploadIcon size={20} className="text-muted-foreground" />
              </span>
              <div className="text-center">
                <p className="text-foreground text-[15px] font-medium tracking-[-0.01em]">
                  Arraste vídeos ou clique
                </p>
                <p className="text-muted-foreground mt-0.5 text-[12.5px]">
                  MP4, MOV, WebM
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="border-border flex items-center justify-between rounded-lg border p-2 text-[12px]"
                >
                  <div className="flex flex-row items-center gap-2">
                    <div className="relative h-13 w-10 overflow-hidden rounded-lg">
                      <Image fill src={bannerImg} alt="Vídeo image preview" />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <span className="text-foreground line-clamp-1 font-semibold">
                        Desktop 2026.10.19 - 23.13.13.02
                      </span>
                      <span className="text-muted-foreground font-medium tabular-nums">
                        24.5 MB · Aguardando
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    aria-label="Excluir"
                    className="focus-visible:ring-border focus-visible:ring-offset-background relative inline-flex size-8 cursor-pointer items-center justify-center rounded-lg border border-[#052D2B]/12 bg-transparent transition-colors duration-150 hover:border-[#052D2B]/20 hover:bg-[#052D2B]/4 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                  >
                    <TrashIcon size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="border-border bg-card relative col-span-2 flex h-fit w-full flex-col gap-4 overflow-hidden rounded-lg border p-5 py-4 sm:col-span-1 @[1080px]/editor-row:col-span-1">
            <div className="flex flex-row items-center justify-between">
              <h4 className="text-foreground text-[15px] font-medium tracking-[-0.01em]">
                Preview do vídeo
              </h4>
              <div className="border-border rounded-[8.1px] border p-1">
                <ImageIcon className="text-muted-foreground size-3.5" />
              </div>
            </div>
            <div className="col-span-1 flex flex-col items-stretch gap-3 sm:grid @sm/editor-row:grid-cols-[330px_minmax(0,1fr)]">
              <div
                className={cn(
                  "border-border bg-card relative overflow-hidden rounded-lg border",
                  isMobile && "aspect-9/16 w-full",
                )}
              >
                <Image
                  src={bannerImg}
                  fill
                  alt="Banner"
                  className="object-cover"
                />
              </div>
              <div className="border-border bg-card flex flex-col gap-4 rounded-lg border p-5 py-4">
                <h4 className="text-foreground text-[15px] font-medium tracking-[-0.01em]">
                  Ajustes
                </h4>
                <div className="w-full">
                  <EditorTabs
                    content={{
                      Título: <TitlePanel />,
                      Extras: <ExtrasPanel />,
                      Bordas: <BorderPanel />,
                      Overlay: <OverlayPanel />,
                      Inferior: <BottomPanel />,
                    }}
                  />
                </div>
              </div>
              <div className="border-border col-span-2 flex flex-row items-center justify-between gap-3 rounded-lg border p-2">
                <button
                  type="button"
                  data-qa="pro-banner-cta"
                  className="group/cta inline-flex h-7 shrink-0 cursor-pointer items-center justify-center rounded-[6px] border-[0.5px] border-white/25 bg-[#B1FE7B] px-3 text-[12px] font-medium tracking-[-0.2px] text-[#052D2B] shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] ring-1 ring-(--btn-ring) transition-colors duration-200 ease-out [--btn-ring:color-mix(in_oklab,#052D2B_30%,#B1FE7B)] hover:bg-[#a0f060] active:scale-[0.99]"
                >
                  Play
                </button>
                <Slider max={100} step={1} className="flex-1" />
                <span className="text-muted-foreground text-[13px] font-medium">
                  0:42
                </span>
              </div>
            </div>
          </div>
          <div className="border-border bg-card col-span-2 flex h-fit flex-col gap-4 rounded-lg border p-5 py-4 sm:col-span-1">
            <div className="flex flex-row items-center justify-between">
              <h4 className="text-foreground text-[15px] font-medium tracking-[-0.01em]">
                Exportar vídeos
              </h4>
              <div className="border-border rounded-[8.1px] border p-1">
                <ShareNetworkIcon className="text-muted-foreground size-3.5" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <button
                type="button"
                className="inline-flex h-11 cursor-pointer items-center justify-center gap-2 rounded-[8.1px] border border-[#052D2B]/12 bg-transparent px-4 text-[13.5px] font-medium tracking-[-0.01em] text-[#052D2B] transition-colors hover:border-[#052D2B]/20 hover:bg-[#052D2B]/3 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <DownloadSimpleIcon size={16} />
                Exportar em lote
              </button>
              <button
                type="button"
                className="inline-flex h-11 cursor-pointer items-center justify-center gap-2 rounded-[8.1px] border border-[#052D2B]/12 bg-transparent px-4 text-[13.5px] font-medium tracking-[-0.01em] text-[#052D2B] transition-colors hover:border-[#052D2B]/20 hover:bg-[#052D2B]/3 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <DownloadSimpleIcon size={16} />
                Exportar somente esse vídeo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
