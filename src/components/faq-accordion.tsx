"use client";

import { PlusIcon } from "@phosphor-icons/react";

import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqAccordionSchema = {
  title: string;
  subtitle: string;
};

type FaqAccordionProps = {
  data: FaqAccordionSchema[];
};

export function FaqAccordion({ data }: FaqAccordionProps) {
  return (
    <Accordion className="flex flex-col gap-2.5">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          className="overflow-hidden group rounded-xl border border-border/50 bg-background transition-colors duration-200"
          value={`value-${index}`}
        >
          <AccordionTrigger className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left">
            <span className="text-[17px] font-medium leading-[1.4] tracking-[-0.03em] text-foreground">
              {item.title}
            </span>
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background text-muted-foreground">
              <PlusIcon
                size={24}
                className="size-3.5 transition-transform duration-300 group-data-open:rotate-45"
              />
            </span>
          </AccordionTrigger>
          <AccordionContent className="grid transition-all data-starting-style:animate-accordion-down data-ending-style:animate-accordion-up duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] grid-rows-[1fr] opacity-100">
            <div className="overflow-hidden">
              <p className="px-6 pb-5 text-[14px] leading-[1.8] text-[#6B7280]">
                {item.subtitle}
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
