"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTabIndicators } from "@/hooks/use-tab-indicators";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const TABS = ["Bordas", "Título", "Inferior", "Overlay", "Extras"] as const;
type TabValue = (typeof TABS)[number];

export function EditorTabs({
  content,
}: {
  content: Record<TabValue, React.ReactNode>;
}) {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState<TabValue>(TABS[0]);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const activeIndex = TABS.indexOf(activeTab);

  const { containerRef, setItemRef, activeRect, hoverRect } = useTabIndicators(
    activeIndex,
    hoverIndex,
  );

  return (
    <>
      <Tabs
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as TabValue)}
      >
        <div className="border-border relative border-b">
          <ScrollArea>
            <TabsList
              variant="line"
              ref={containerRef}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {TABS.map((label, i) => (
                <TabsTrigger
                  key={label}
                  value={label}
                  ref={setItemRef(i)}
                  onFocus={() => setHoverIndex(i)}
                  onBlur={() => setHoverIndex(null)}
                  onMouseEnter={() => setHoverIndex(i)}
                  className={cn(
                    "dark:text-foreground relative z-10 cursor-pointer rounded-[8.1px] px-3 pt-2 pb-3.5 text-[16px] font-medium tracking-[-0.01em] transition-colors duration-200",
                    activeIndex === i
                      ? "text-[#052D2B]"
                      : "text-muted-foreground",
                  )}
                >
                  {label}
                </TabsTrigger>
              ))}
              <span
                aria-hidden="true"
                className={cn(
                  "cg-tab-underline absolute -bottom-px left-0 h-0.5 w-px rounded-full bg-[#9EEA6C]",
                  isMobile && "hidden",
                )}
                style={{
                  transform: `translateX(${activeRect.left}px) scaleX(${activeRect.width})`,
                  transformOrigin: "0px 50%",
                }}
              />
              <span
                aria-hidden="true"
                className={cn(
                  "pointer-events-none absolute top-1 bottom-2 rounded-[8.1px] bg-[#9EEA6C]/25 transition-all duration-200 ease-out dark:bg-[#9EEA6C]/15",
                  isMobile && "hidden",
                )}
                style={{
                  left: hoverRect.left,
                  width: hoverRect.width,
                  opacity: hoverIndex !== null ? 1 : 0,
                }}
              />
            </TabsList>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
        {TABS.map((tab) => (
          <TabsContent key={tab} value={tab}>
            {content[tab]}
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
}
