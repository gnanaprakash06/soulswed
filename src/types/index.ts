/**
 * src/types/index.ts
 * ──────────────────────────────────────────────────────────────
 * Centralised TypeScript interfaces for the SoulsWed application.
 * Import from here — never define types inside component or data files.
 */

// ── Category ──────────────────────────────────────────────────

/** A single wedding-service category shown in the Browse grid. */
export interface Category {
    /** Unique slug — used for routing (/category/:id) and DOM id attributes. */
    id: string;
    /** Display name shown on the card. */
    name: string;
    /** Short, evocative descriptor shown below the name. */
    description: string;
    /** Inline SVG element rendered inside the icon wrapper. */
    icon: React.ReactElement;
}

// ── Vendor ────────────────────────────────────────────────────

/** Tab filter item in the Featured Vendors section. */
export interface VendorTab {
    /** Unique key that maps to a filter value. */
    id: string;
    /** Label displayed on the tab button. */
    label: string;
}

/** A single featured vendor card. */
export interface Vendor {
    /** Unique slug — for routing and DOM ids. */
    id: string;
    /** Business / vendor name. */
    name: string;
    /**
     * Category slug — must match a VendorTab id so tab filtering works.
     * Use "all" as a special value to exclude from per-category filtering.
     */
    category: string;
    /** City and state / region. */
    location: string;
    /** Average rating out of 5 (one decimal max). */
    rating: number;
    /** Number of reviews. */
    reviewCount: number;
    /** Starting price string, e.g. "₹45,000". */
    startingPrice: string;
    /** Short one-liner tagline. */
    tagline: string;
    /**
     * Absolute Unsplash URL used as the card hero image.
     * Must be a direct image URL (not a page URL).
     */
    image: string;
    /** Whether to show a "Verified" badge. */
    verified: boolean;
}

// ── Footer ────────────────────────────────────────────────────

/** A single link entry inside a footer column. */
export interface FooterLink {
    label: string;
    href: string;
}

/** A labelled column of links in the footer grid. */
export interface FooterColumn {
    heading: string;
    links: FooterLink[];
}
