"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";

type Rect = { left: number; width: number };

const EMPTY_RECT: Rect = { left: 0, width: 0 };

function isSameRect(a: Rect, b: Rect) {
  return a.left === b.left && a.width === b.width;
}

/**
 * Mede as abas ativa e em hover, relativas ao container.
 * Remede automaticamente quando o container muda de tamanho.
 */
export function useTabIndicators(
  activeIndex: number,
  hoverIndex: number | null,
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const [activeRect, setActiveRect] = useState<Rect>(EMPTY_RECT);
  const [hoverRect, setHoverRect] = useState<Rect>(EMPTY_RECT);

  const measureActive = useCallback(() => {
    const el = itemsRef.current[activeIndex];
    if (!el) return;
    const next = { left: el.offsetLeft, width: el.offsetWidth };
    setActiveRect((prev) => (isSameRect(prev, next) ? prev : next));
  }, [activeIndex]);

  const measureHover = useCallback(() => {
    // Ao sair do hover, mantém o último retângulo para o fade-out no lugar
    if (hoverIndex === null) return;
    const el = itemsRef.current[hoverIndex];
    if (!el) return;
    const next = { left: el.offsetLeft, width: el.offsetWidth };
    setHoverRect((prev) => (isSameRect(prev, next) ? prev : next));
  }, [hoverIndex]);

  useLayoutEffect(() => {
    measureActive();
    measureHover();

    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(() => {
      measureActive();
      measureHover();
    });
    observer.observe(container);
    return () => observer.disconnect();
  }, [measureActive, measureHover]);

  const setItemRef = useCallback(
    (index: number) => (el: HTMLButtonElement | null) => {
      itemsRef.current[index] = el;
    },
    [],
  );

  return { containerRef, setItemRef, activeRect, hoverRect };
}
