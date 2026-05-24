/**
 * src/components/sections/CategoriesSection.tsx
 * ──────────────────────────────────────────────────────────────
 * Browse by Category section.
 *
 * Rules enforced:
 *   ✅ 100% Tailwind CSS — zero custom CSS classes
 *   ✅ Data imported from src/static/categories.tsx
 *   ✅ Types imported from src/types/index.ts
 *   ✅ group / group-hover: drive all interactive effects
 */
import { CATEGORIES } from "@/static/categories";
import type { Category } from "@/types";

import { Card, CardContent } from "@/components/ui/card";

// ── Sub-component: individual card ────────────────────────────

function CategoryCard({ category }: { category: Category }) {
    const { id, name, description, icon } = category;

    return (
        <a
            href={`/category/${id}`}
            id={`category-${id}`}
            aria-label={`Browse ${name}`}
            className="group block rounded-2xl no-underline outline-offset-4"
        >
            {/* ── Card shell ───────────────────────────────────
                group-hover: translateY(-8px) + layered shadow
                Relative + overflow-hidden lets ::before shimmer work;
                Since Tailwind can't target ::before on a child, we use
                a real <span> as the top-edge shimmer element instead.
            ──────────────────────────────────────────────────── */}
            <Card
                className={[
                    // Reset Shadcn defaults we don't want
                    "gap-0 py-0",
                    // Layout
                    "relative h-full overflow-hidden rounded-2xl",
                    // Borderless look: near-invisible gold-tinted border
                    "border border-[rgba(201,169,110,0.12)]",
                    // Base shadow
                    "shadow-[0_1px_4px_rgba(13,27,46,0.05)]",
                    // Smooth spring transition for lift + shadow + border
                    "transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    // Hover: Y-axis lift
                    "group-hover:-translate-y-2",
                    // Hover: elevated shadow (navy depth + gold glow)
                    "group-hover:shadow-[0_20px_48px_rgba(13,27,46,0.13),0_4px_16px_rgba(201,169,110,0.12)]",
                    // Hover: slightly more visible gold border
                    "group-hover:border-[rgba(201,169,110,0.35)]",
                    "cursor-pointer",
                ].join(" ")}
            >
                {/* ── Gold shimmer: top-edge gradient bar ──────
                    Rendered as a real <span> (not ::before pseudo),
                    hidden by default, fades in on group-hover.
                ──────────────────────────────────────────────── */}
                <span
                    aria-hidden="true"
                    className={[
                        "absolute inset-x-0 top-0 h-[2px] rounded-t-2xl",
                        "bg-[linear-gradient(90deg,transparent,var(--sw-gold),transparent)]",
                        // Hidden → visible on hover
                        "opacity-0 transition-opacity duration-300",
                        "group-hover:opacity-100",
                    ].join(" ")}
                />

                <CardContent
                    className={[
                        "flex flex-col items-center text-center",
                        "gap-3.5 px-5 pt-7 pb-7",
                    ].join(" ")}
                >
                    {/* ── Icon wrapper ─────────────────────────
                        Warm gold-tinted bg at rest → deeper gold on hover.
                        Icon stroke colour: navy → gold on hover.
                    ──────────────────────────────────────────── */}
                    <div
                        className={[
                            "flex h-[60px] w-[60px] shrink-0 items-center justify-center",
                            "rounded-[14px]",
                            "border border-[rgba(201,169,110,0.18)]",
                            // Bg gradient at rest
                            "bg-[linear-gradient(135deg,rgba(201,169,110,0.10)_0%,rgba(201,169,110,0.05)_100%)]",
                            // Icon colour at rest: deep navy
                            "text-[var(--sw-navy)]",
                            // Transition both bg and colour
                            "transition-[background,color] duration-300",
                            // Hover: richer gold bg
                            "group-hover:bg-[linear-gradient(135deg,rgba(201,169,110,0.22)_0%,rgba(201,169,110,0.12)_100%)]",
                            // Hover: icon strokes turn champagne gold
                            "group-hover:text-[var(--sw-gold)]",
                        ].join(" ")}
                        aria-hidden="true"
                    >
                        {icon}
                    </div>

                    {/* ── Text block ──────────────────────────── */}
                    <div className="flex flex-col items-center gap-1">
                        <span
                            className={[
                                "text-[13px] leading-snug font-bold tracking-[-0.01em]",
                                "text-[var(--sw-text-primary)]",
                                "transition-colors duration-300",
                                "group-hover:text-[var(--sw-gold)]",
                            ].join(" ")}
                        >
                            {name}
                        </span>
                        <span
                            className={[
                                "text-[11px] leading-relaxed font-normal",
                                "text-[var(--sw-text-secondary)] opacity-85",
                            ].join(" ")}
                        >
                            {description}
                        </span>
                    </div>

                    {/* ── Arrow affordance ─────────────────────
                        Hidden + shifted left at rest.
                        Slides in + fades in on group-hover.
                    ──────────────────────────────────────────── */}
                    <div
                        aria-hidden="true"
                        className={[
                            "text-[var(--sw-gold)]",
                            "-translate-x-1 opacity-0",
                            "transition-[opacity,transform] duration-200 ease-out",
                            "group-hover:translate-x-0 group-hover:opacity-100",
                        ].join(" ")}
                    >
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 7H12M8 3L12 7L8 11"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </CardContent>
            </Card>
        </a>
    );
}

// ── Main section ──────────────────────────────────────────────

export function CategoriesSection() {
    return (
        <section
            id="browse-categories"
            aria-labelledby="categories-heading"
            className="bg-[var(--sw-cream)] py-24 pb-28"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                {/* ── Section header ────────────────────────── */}
                <div className="mb-14 flex flex-col items-center text-center">
                    {/* Gold eyebrow with flanking rules */}
                    <span className="mb-4 inline-flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-[var(--sw-gold)] uppercase">
                        <span className="block h-px w-8 bg-[var(--sw-gold)] opacity-50" />
                        What are you looking for?
                        <span className="block h-px w-8 bg-[var(--sw-gold)] opacity-50" />
                    </span>

                    <h2
                        id="categories-heading"
                        className="text-3xl font-extrabold tracking-tight text-[var(--sw-navy)] sm:text-4xl lg:text-5xl"
                    >
                        Browse by Category
                    </h2>

                    <p className="mt-4 max-w-xl text-base leading-relaxed font-light text-[var(--sw-text-secondary)]">
                        Everything you need for your perfect wedding, all in one
                        place — from grand venues to the finest artisan touches.
                    </p>
                </div>

                {/* ── Responsive card grid ──────────────────────
                    2 cols  (default / mobile)
                    3 cols  (sm: ≥640px)
                    5 cols  (xl: ≥1280px)
                ──────────────────────────────────────────────── */}
                <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 xl:grid-cols-5">
                    {CATEGORIES.map((category) => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
                </div>

                {/* ── Bottom CTA ────────────────────────────── */}
                <div className="mt-14 flex justify-center">
                    <a
                        id="browse-all-categories-btn"
                        href="/categories"
                        className={[
                            "inline-flex items-center gap-2 rounded-full px-7 py-3",
                            "border border-(--sw-gold)",
                            "text-sm font-semibold tracking-wide text-(--sw-navy)",
                            "transition-all duration-300 hover:shadow-md",
                            "no-underline",
                        ].join(" ")}
                    >
                        View All Categories
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
