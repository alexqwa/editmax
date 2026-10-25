"use client";

import { ImageIcon } from "@phosphor-icons/react";

import { ProBanner } from "@/components/pro-banner";
import { EditorTabs } from "@/components/editor-tabs";

export default function Editor() {
  return (
    <div className="bg-background text-foreground min-h-full">
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
        <div className="grid grid-cols-2 items-stretch gap-3 @[1080px]/editor-row:grid-cols-[320px_minmax(0,1fr)_320px]">
          <div></div>
          <div className="border-border bg-card relative col-span-2 flex h-full w-full flex-col justify-between gap-4 overflow-hidden rounded-lg border p-5 py-4 sm:col-span-1 @[1080px]/editor-row:col-span-1">
            <div className="flex flex-row items-center justify-between">
              <h4 className="text-foreground text-[15px] font-medium tracking-[-0.01em]">
                Preview do vídeo
              </h4>
              <div className="border-border rounded-[8.1px] border p-1">
                <ImageIcon className="text-muted-foreground size-3.5" />
              </div>
            </div>
            <div className="grid grid-cols-1 items-stretch gap-3 @sm/editor-row:grid-cols-[330px_minmax(0,1fr)]">
              <div></div>
              <div className="border-border bg-card flex flex-col gap-4 rounded-lg border p-5 py-4">
                <h4 className="text-foreground text-[15px] font-medium tracking-[-0.01em]">
                  Ajustes
                </h4>
                <div className="w-full">
                  <EditorTabs />
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
