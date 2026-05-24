/**
 * src/components/sections/FeaturedVendorsSection.tsx
 * ──────────────────────────────────────────────────────────────
 * "Discover Top Vendors" section with a tab filter + Shadcn Carousel.
 * Rules: 100% Tailwind | data from @/static/vendors | types from @/types.
 */
import { VENDORS, VENDOR_TABS } from "@/static/vendors";
import type { VendorTab } from "@/types";

import { useState } from "react";

import { VendorCard } from "@/components/VendorCard";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

// ── Tab button sub-component ──────────────────────────────────

interface TabButtonProps {
    tab: VendorTab;
    active: boolean;
    onClick: () => void;
}

function TabButton({ tab, active, onClick }: TabButtonProps) {
    return (
        <button
            id={`vendor-tab-${tab.id}`}
            onClick={onClick}
            aria-pressed={active}
            className={[
                "relative rounded-full px-4 py-2 text-sm font-semibold",
                "transition-all duration-200 ease-out",
                "whitespace-nowrap",
                active
                    ? [
                          "bg-[var(--sw-navy)] text-white",
                          "shadow-[0_4px_14px_rgba(13,27,46,0.25)]",
                      ].join(" ")
                    : [
                          "text-[var(--sw-text-secondary)]",
                          "hover:bg-[rgba(13,27,46,0.06)] hover:text-[var(--sw-navy)]",
                      ].join(" "),
            ].join(" ")}
        >
            {tab.label}
            {/* Active gold underline dot */}
            {active && (
                <span
                    className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[var(--sw-gold)]"
                    aria-hidden="true"
                />
            )}
        </button>
    );
}

// ── Main section ──────────────────────────────────────────────

export function FeaturedVendorsSection() {
    const [activeTab, setActiveTab] = useState<string>("all");

    const filteredVendors =
        activeTab === "all"
            ? VENDORS
            : VENDORS.filter((v) => v.category === activeTab);

    return (
        <section
            id="featured-vendors"
            aria-labelledby="vendors-heading"
            className="bg-white py-24 pb-28"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                {/* ── Section header row ────────────────────── */}
                <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                    {/* Left: title + subtitle */}
                    <div className="flex flex-col gap-2">
                        <span className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-[var(--sw-gold)] uppercase">
                            <span className="block h-px w-8 bg-[var(--sw-gold)] opacity-50" />
                            Handpicked for you
                        </span>
                        <h2
                            id="vendors-heading"
                            className="text-3xl font-extrabold tracking-tight text-[var(--sw-navy)] sm:text-4xl"
                        >
                            Discover Top Vendors
                        </h2>
                        <p className="max-w-md text-sm leading-relaxed font-light text-[var(--sw-text-secondary)]">
                            Curated, verified professionals trusted by thousands
                            of couples across India.
                        </p>
                    </div>

                    {/* Right: tab filter pills */}
                    <div
                        role="group"
                        aria-label="Filter vendors by category"
                        className="flex flex-wrap items-center gap-2"
                    >
                        {VENDOR_TABS.map((tab) => (
                            <TabButton
                                key={tab.id}
                                tab={tab}
                                active={activeTab === tab.id}
                                onClick={() => setActiveTab(tab.id)}
                            />
                        ))}
                    </div>
                </div>

                {/* ── Carousel ─────────────────────────────── */}
                <div className="relative px-10">
                    <Carousel
                        opts={{ align: "start", loop: false }}
                        className="w-full"
                        aria-label="Featured vendors carousel"
                    >
                        <CarouselContent className="-ml-5">
                            {filteredVendors.map((vendor) => (
                                <CarouselItem
                                    key={vendor.id}
                                    className="basis-full pl-5 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                                >
                                    <VendorCard vendor={vendor} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Nav buttons — positioned outside card area */}
                        <CarouselPrevious
                            className={[
                                "border-[rgba(201,169,110,0.35)] bg-white text-[var(--sw-navy)]",
                                "hover:border-[var(--sw-navy)] hover:bg-[var(--sw-navy)] hover:text-white",
                                "shadow-md transition-all duration-200",
                                "-left-5",
                            ].join(" ")}
                            aria-label="Previous vendors"
                        />
                        <CarouselNext
                            className={[
                                "border-[rgba(201,169,110,0.35)] bg-white text-[var(--sw-navy)]",
                                "hover:border-[var(--sw-navy)] hover:bg-[var(--sw-navy)] hover:text-white",
                                "shadow-md transition-all duration-200",
                                "-right-5",
                            ].join(" ")}
                            aria-label="Next vendors"
                        />
                    </Carousel>
                </div>

                {/* ── Bottom CTA ───────────────────────────── */}
                <div className="mt-12 flex justify-center">
                    <a
                        id="browse-all-vendors-btn"
                        href="/vendors"
                        className={[
                            "inline-flex items-center gap-2 rounded-full px-7 py-3",
                            "border border-[var(--sw-navy)] text-[var(--sw-navy)]",
                            "text-sm font-semibold tracking-wide",
                            "transition-all duration-300 hover:bg-[var(--sw-navy)] hover:text-white hover:shadow-lg",
                            "no-underline",
                        ].join(" ")}
                    >
                        Browse All Vendors
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M2 7H12M8 3L12 7L8 11"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
