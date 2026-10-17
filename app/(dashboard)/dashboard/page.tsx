export default function Dashboard() {
  return (
    <div className="px-8 pt-6">
      <div
        role="status"
        data-qa="pro-banner"
        className="flex items-center justify-between gap-4 rounded-[8.1px] px-4 py-3 min-h-[52px] bg-[#DFFCCB] text-[#052D2B] dark:bg-[#B1FE7B]/10 dark:text-foreground"
      >
        <p className="text-[14px] leading-snug">
          <strong className="font-medium">Vá além do faturamento.</strong> No
          Pro você vê o lucro real de cada produto: margem, ticket médio e
          custos.
        </p>
        <button
          type="button"
          data-qa="pro-banner-cta"
          className="group/cta inline-flex h-7 shrink-0 cursor-pointer items-center justify-center rounded-[6px] px-3 text-[12px] font-medium tracking-[-0.2px] bg-[#B1FE7B] text-[#052D2B] border-[0.5px] border-white/25 ring-1 [--btn-ring:color-mix(in_oklab,#052D2B_30%,#B1FE7B)] ring-[var(--btn-ring)] shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] transition-colors duration-200 ease-out hover:bg-[#a0f060] active:scale-[0.99]"
        >
          Assinar Pro
          <span
            aria-hidden="true"
            className="ml-0 inline-flex max-w-0 items-center overflow-hidden opacity-0 transition-[max-width,margin-left,opacity] duration-200 ease-out group-hover/cta:ml-1.5 group-hover/cta:max-w-[14px] group-hover/cta:opacity-100"
          >
            <svg
              aria-hidden="true"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7"></path>
              <path d="M7 7h10v10"></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
