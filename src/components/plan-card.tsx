import Link from "next/link";
import { useMemo } from "react";
import { ArrowUpRightIcon, CheckIcon } from "@phosphor-icons/react";

type PlanSubscriptionType = "one_time" | "monthly" | "annual";

interface PlanCardProps {
  planTitle: string;
  planDescription: string;
  planPrice: string;
  planOldPrice?: string;
  planSubscriptionType: "one_time" | "monthly" | "annual";
  planCurrentSubscription: {
    title?: string;
    options?: {
      label: string;
    }[];
  };
  planNextSubscription: {
    title?: string;
    options?: {
      label: string;
    }[];
  };
  planMostPopular: boolean;
}

const statusMap: Record<PlanSubscriptionType, string> = {
  one_time: "única",
  monthly: "mês",
  annual: "anual",
};

export function PlanCard({
  planTitle,
  planDescription,
  planPrice,
  planOldPrice,
  planSubscriptionType,
  planCurrentSubscription,
  planNextSubscription,
  planMostPopular,
}: PlanCardProps) {
  const parsePrice = (price: string | number | undefined) =>
    Number(String(price ?? "0").replace(",", "."));

  const discount = useMemo(() => {
    const oldPrice = parsePrice(planOldPrice);
    const price = parsePrice(planPrice);

    if (!oldPrice || oldPrice <= price) return 0;

    return Math.round(((oldPrice - price) / oldPrice) * 100);
  }, [planPrice, planOldPrice]);

  return (
    <>
      <div className="rounded-sm relative bg-[#1E4345] flex flex-1 flex-col p-6 sm:pb-30 lg:pb-30 lg:p-8">
        {planMostPopular && (
          <>
            <div className="h-1 bg-[#9EEA6C] hidden sm:block absolute top-0 rounded-t-sm w-full left-0 shadow-[0_0_20px_rgba(158,234,108,0.3),0_0_60px_rgba(158,234,108,0.1)]" />
            <span className="calc-dark-label inline-flex w-fit items-center rounded-full bg-[#9EEA6C]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9EEA6C]">
              Mais popular
            </span>
          </>
        )}
        <h3 className="mt-5 text-xl font-semibold text-white">{planTitle}</h3>
        <p className="mt-1 text-[13px] text-white/40">{planDescription}</p>
        <div className="mt-6">
          {planOldPrice && (
            <div className="flex items-center gap-3">
              <span className="text-[15px] tabular-nums text-white/30 line-through decoration-white/20">
                R$ {planOldPrice}
              </span>
              <span className="inline-flex items-center rounded-full bg-[#9EEA6C]/15 px-2.5 py-0.5 text-[11px] font-semibold text-[#9EEA6C]">
                {discount}% OFF
              </span>
            </div>
          )}
          <div className="mt-2 flex items-center gap-1.5">
            <span className="text-[32px] font-normal tabular-nums leading-none tracking-tight text-white/40">
              R$
            </span>
            <span className="text-[56px] font-bold tabular-nums leading-none tracking-tight text-white">
              {planPrice.split(",")[0]}
            </span>
            <span className="text-[32px] font-bold tabular-nums leading-none tracking-tight text-white/60">
              ,{planPrice.split(",")[1]}
            </span>
            <span className="ml-1.5 text-[18px] font-medium tabular-nums leading-none tracking-tight text-white/35">
              /{statusMap[planSubscriptionType]}
            </span>
          </div>
        </div>
        <p className="mt-6 mb-4 text-[12px] text-white/30">
          Incluso no plano {planCurrentSubscription.title}
        </p>
        <div className="space-y-3.5">
          {planCurrentSubscription.options &&
            planCurrentSubscription.options?.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#4B5563] to-[#374151]">
                  <CheckIcon
                    size={24}
                    weight="bold"
                    className="size-3 stroke-[4px] text-white/70"
                  />
                </div>
                <span className="calc-dark-label text-[13px] text-white/60">
                  {item.label}
                </span>
              </div>
            ))}
        </div>
        {planNextSubscription.title && (
          <div className="relative flex -mx-4 mt-8 mb-8 items-center gap-3">
            <div className="h-px flex-1 bg-[linear-gradient(to_right,rgba(255,255,255,0.15),rgba(255,255,255,0.15)_50%,transparent_0,transparent)] bg-size-[5px_1px] mask-[linear-gradient(to_right,transparent,black_30%)]"></div>
            <span className="shrink-0 rounded-full border border-white/20 bg-[#1E4345] px-3 py-1 text-[11px] tracking-[0.04em] text-white/60 shadow-sm">
              Incluso na assinatura {planNextSubscription.title}
            </span>
            <div className="h-px flex-1 bg-[linear-gradient(to_right,rgba(255,255,255,0.15),rgba(255,255,255,0.15)_50%,transparent_0,transparent)] bg-size-[5px_1px] mask-[linear-gradient(to_left,transparent,black_30%)]"></div>
          </div>
        )}
        <div className="space-y-3.5">
          {planNextSubscription.options?.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#9EEA6C] to-[#6BD44C]">
                <CheckIcon
                  size={24}
                  weight="bold"
                  className="size-3 stroke-[4px] text-[#0D2D18]"
                />
              </div>
              <span className="calc-dark-label text-[13px] text-white/60">
                {item.label}
              </span>
            </div>
          ))}
        </div>
        {planSubscriptionType !== "one_time" && (
          <Link
            href="/"
            className="inline-flex mt-10 sm:absolute sm:bottom-10 h-11 sm:w-[calc(100%-64px)] shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-lg border-[0.5px] border-white/25 bg-[#B1FE7B] px-6 ring-1 [--btn-ring:color-mix(in_oklab,#052D2B_15%,#B1FE7B)] ring-(--btn-ring) shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] text-sm font-semibold text-[#052D2B] transition-all duration-150 hover:bg-[#a0f060] active:scale-[0.99] active:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Assinar o {planTitle}
            <ArrowUpRightIcon size={24} className="size-4" />
          </Link>
        )}
      </div>
    </>
  );
}
