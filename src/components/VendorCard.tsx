/**
 * src/components/VendorCard.tsx
 * ──────────────────────────────────────────────────────────────
 * High-end vendor card component.
 * Rules: 100% Tailwind | types from @/types | no hardcoded data.
 */
import type { Vendor } from "@/types";
import { MapPin, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// ── Helpers ───────────────────────────────────────────────────

/** Renders 5 stars, filled/half/empty based on the rating value. */
function StarRating({ rating }: { rating: number }) {
    return (
        <div
            className="flex items-center gap-0.5"
            aria-label={`Rated ${rating} out of 5`}
        >
            {Array.from({ length: 5 }).map((_, i) => {
                const filled = i < Math.floor(rating);
                const half =
                    !filled && i < Math.ceil(rating) && rating % 1 !== 0;
                return (
                    <Star
                        key={i}
                        className={[
                            "h-3.5 w-3.5",
                            filled || half
                                ? "fill-[var(--sw-gold)] text-[var(--sw-gold)]"
                                : "fill-transparent text-[var(--sw-text-muted)]",
                        ].join(" ")}
                        aria-hidden="true"
                    />
                );
            })}
        </div>
    );
}

// ── VendorCard ────────────────────────────────────────────────

interface VendorCardProps {
    vendor: Vendor;
}

export function VendorCard({ vendor }: VendorCardProps) {
    const {
        id,
        name,
        location,
        rating,
        reviewCount,
        startingPrice,
        tagline,
        image,
        verified,
    } = vendor;

    return (
        <div className="group h-full">
            <Card
                className={[
                    // Reset Shadcn defaults
                    "gap-0 py-0",
                    // Layout & shape
                    "h-full overflow-hidden rounded-2xl",
                    // Borderless feel
                    "border border-[rgba(201,169,110,0.10)]",
                    // Base shadow
                    "shadow-[0_2px_8px_rgba(13,27,46,0.07)]",
                    // Smooth spring transition
                    "transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    // Hover lift
                    "group-hover:-translate-y-2",
                    // Hover shadow depth
                    "group-hover:shadow-[0_24px_56px_rgba(13,27,46,0.14),0_4px_16px_rgba(201,169,110,0.10)]",
                    // Hover border shimmer
                    "group-hover:border-[rgba(201,169,110,0.30)]",
                    "cursor-pointer bg-white",
                ].join(" ")}
            >
                {/* ── Hero image ───────────────────────────── */}
                <div className="relative h-48 w-full overflow-hidden">
                    <img
                        src={image}
                        alt={name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    {/* Dark gradient scrim at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {/* Verified badge */}
                    {verified && (
                        <span
                            className={[
                                "absolute top-3 left-3",
                                "inline-flex items-center gap-1 rounded-full px-2.5 py-1",
                                "bg-[var(--sw-gold)] text-[var(--sw-navy)]",
                                "text-[10px] font-bold tracking-widest uppercase",
                            ].join(" ")}
                            aria-label="Verified vendor"
                        >
                            ✓ Verified
                        </span>
                    )}

                    {/* Starting price chip */}
                    <span
                        className={[
                            "absolute right-3 bottom-3",
                            "rounded-full px-2.5 py-1",
                            "bg-[var(--sw-navy)]/90 backdrop-blur-sm",
                            "text-[10px] font-semibold text-white",
                        ].join(" ")}
                    >
                        From {startingPrice}
                    </span>
                </div>

                <CardContent className="flex flex-col gap-3 px-5 pt-4 pb-5">
                    {/* ── Name & tagline ───────────────────── */}
                    <div className="flex flex-col gap-0.5">
                        <h3
                            className={[
                                "text-[15px] leading-snug font-bold tracking-tight",
                                "text-[var(--sw-navy)]",
                                "transition-colors duration-200 group-hover:text-[var(--sw-gold)]",
                            ].join(" ")}
                        >
                            {name}
                        </h3>
                        <p className="line-clamp-1 text-[11px] text-[var(--sw-text-secondary)]">
                            {tagline}
                        </p>
                    </div>

                    {/* ── Rating row ───────────────────────── */}
                    <div className="flex items-center gap-2">
                        <StarRating rating={rating} />
                        <span className="text-[12px] font-semibold text-[var(--sw-navy)]">
                            {rating.toFixed(1)}
                        </span>
                        <span className="text-[11px] text-[var(--sw-text-secondary)]">
                            ({reviewCount} reviews)
                        </span>
                    </div>

                    {/* ── Location ─────────────────────────── */}
                    <div className="flex items-center gap-1.5 text-[var(--sw-text-secondary)]">
                        <MapPin
                            className="h-3.5 w-3.5 shrink-0 text-[var(--sw-gold)]"
                            aria-hidden="true"
                        />
                        <span className="text-[12px]">{location}</span>
                    </div>

                    {/* ── Divider ──────────────────────────── */}
                    <div className="h-px bg-[rgba(201,169,110,0.15)]" />

                    {/* ── CTA button ───────────────────────── */}
                    <Button
                        asChild
                        size="sm"
                        id={`view-profile-${id}`}
                        className={[
                            "w-full rounded-full text-xs font-semibold tracking-wide",
                            "bg-[var(--sw-navy)] text-white",
                            "hover:scale-[1.02] hover:bg-[var(--sw-navy-mid)]",
                            "transition-all duration-200",
                        ].join(" ")}
                    >
                        <a
                            href={`/vendor/${id}`}
                            aria-label={`View profile for ${name}`}
                        >
                            View Profile
                        </a>
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
