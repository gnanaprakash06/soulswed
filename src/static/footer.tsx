/**
 * src/static/footer.ts
 * ──────────────────────────────────────────────────────────────
 * Static data for the site footer.
 * Import FOOTER_COLUMNS and ALL_CATEGORIES_FOOTER from here.
 */
import type { FooterColumn } from "@/types";

// ── Company / support / legal columns ────────────────────────

export const FOOTER_COLUMNS: FooterColumn[] = [
    {
        heading: "Company",
        links: [
            { label: "About Us", href: "/about" },
            { label: "How It Works", href: "/how-it-works" },
            { label: "Careers", href: "/careers" },
            { label: "Press Kit", href: "/press" },
            { label: "Blog", href: "/blog" },
        ],
    },
    {
        heading: "Support",
        links: [
            { label: "Help Center", href: "/help" },
            { label: "Contact Us", href: "/contact" },
            { label: "List Your Business", href: "/list" },
            { label: "Vendor Dashboard", href: "/dashboard" },
            { label: "Booking Guide", href: "/guide" },
        ],
    },
    {
        heading: "Legal",
        links: [
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms of Service", href: "/terms" },
            { label: "Cookie Policy", href: "/cookies" },
            { label: "Refund Policy", href: "/refunds" },
            { label: "Sitemap", href: "/sitemap" },
        ],
    },
];

// ── All 24 event-category text links ─────────────────────────

export const ALL_CATEGORIES_FOOTER: string[] = [
    "Venues & Banquet Halls",
    "Wedding Planners",
    "Photographers",
    "Videographers",
    "Decorators & Florists",
    "Make-up Artists",
    "Mehndi Artists",
    "Priests & Pandits",
    "Caterers",
    "Wedding Cakes & Bakers",
    "Invitation Cards",
    "Jewellery",
    "Bridal Wear",
    "Groom Wear",
    "DJ & Entertainment",
    "Live Bands & Performers",
    "Horse & Barat",
    "Wedding Cars",
    "Event Security",
    "Rooms & Accommodation",
    "Honeymoon Packages",
    "Pre-wedding Shoots",
    "Choreographers",
    "Wedding Insurance",
];

export const SOCIAL_LINKS = [
    {
        id: "instagram",
        label: "Instagram",
        href: "https://instagram.com",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
                aria-hidden="true"
            >
                <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                />
                <circle
                    cx="12"
                    cy="12"
                    r="4.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
        ),
    },
    {
        id: "facebook",
        label: "Facebook",
        href: "https://facebook.com",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
                aria-hidden="true"
            >
                <path
                    d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
    {
        id: "youtube",
        label: "YouTube",
        href: "https://youtube.com",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
                aria-hidden="true"
            >
                <rect
                    x="2"
                    y="5"
                    width="20"
                    height="14"
                    rx="4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                />
                <path
                    d="M10 9l5 3-5 3V9z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
    {
        id: "pinterest",
        label: "Pinterest",
        href: "https://pinterest.com",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
                aria-hidden="true"
            >
                <path
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.853 0 1.267.641 1.267 1.408 0 .858-.546 2.141-.828 3.33-.236.995.498 1.806 1.476 1.806 1.771 0 3.135-1.866 3.135-4.56 0-2.385-1.715-4.053-4.161-4.053-2.834 0-4.497 2.126-4.497 4.322 0 .856.329 1.774.74 2.276a.3.3 0 0 1 .069.286c-.075.314-.243.994-.276 1.133-.044.183-.146.222-.337.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                />
            </svg>
        ),
    },
];
