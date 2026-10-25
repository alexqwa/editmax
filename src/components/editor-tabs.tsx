"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import { useTabIndicators } from "@/hooks/use-tab-indicators";

const TABS = ["Bordas", "Título", "Inferior", "Overlay", "Extras"] as const;

export function EditorTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const { containerRef, setItemRef, activeRect, hoverRect } = useTabIndicators(
    activeIndex,
    hoverIndex,
  );

  return (
    <div className="border-border relative border-b">
      <div
        ref={containerRef}
        className="relative flex gap-2"
        onMouseLeave={() => setHoverIndex(null)}
      >
        {TABS.map((label, i) => (
          <button
            key={label}
            ref={setItemRef(i)}
            type="button"
            aria-pressed={activeIndex === i}
            onClick={() => setActiveIndex(i)}
            onMouseEnter={() => setHoverIndex(i)}
            onFocus={() => setHoverIndex(i)}
            onBlur={() => setHoverIndex(null)}
            className={cn(
              "dark:text-foreground relative z-10 cursor-pointer rounded-[8.1px] px-3 pt-2 pb-3.5 text-[16px] font-medium tracking-[-0.01em] transition-colors duration-200",
              activeIndex === i ? "text-[#052D2B]" : "text-muted-foreground",
            )}
          >
            <span className="inline-flex items-center gap-1.5">{label}</span>
          </button>
        ))}
        <span
          aria-hidden="true"
          className="cg-tab-underline absolute -bottom-px left-0 h-0.5 w-px rounded-full bg-[#9EEA6C]"
          style={{
            transform: `translateX(${activeRect.left}px) scaleX(${activeRect.width})`,
            transformOrigin: "0px 50%",
          }}
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-1 bottom-2 rounded-[8.1px] bg-[#9EEA6C]/25 transition-all duration-200 ease-out dark:bg-[#9EEA6C]/15"
          style={{
            left: hoverRect.left,
            width: hoverRect.width,
            opacity: hoverIndex !== null ? 1 : 0,
          }}
        />
      </div>
    </div>
  );
}
