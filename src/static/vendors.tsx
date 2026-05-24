/**
 * src/static/vendors.tsx
 * ──────────────────────────────────────────────────────────────
 * Static dummy data for the Featured Vendors section.
 * Import VENDOR_TABS and VENDORS from here — never define in a component.
 */
import type { Vendor, VendorTab } from "@/types";

// ── Tab filter definitions ────────────────────────────────────

export const VENDOR_TABS: VendorTab[] = [
    { id: "all", label: "All" },
    { id: "venues", label: "Venues" },
    { id: "photographers", label: "Photographers" },
    { id: "makeup", label: "Makeup Artists" },
    { id: "decorators", label: "Decorators" },
];

// ── Vendor cards ─────────────────────────────────────────────

export const VENDORS: Vendor[] = [
    {
        id: "the-grand-palace",
        name: "The Grand Palace",
        category: "venues",
        location: "Jaipur, Rajasthan",
        rating: 4.9,
        reviewCount: 312,
        startingPrice: "₹2,50,000",
        tagline: "Regal grandeur for your most cherished celebration",
        image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=75",
        verified: true,
    },
    {
        id: "lens-and-love",
        name: "Lens & Love Studio",
        category: "photographers",
        location: "Mumbai, Maharashtra",
        rating: 4.8,
        reviewCount: 198,
        startingPrice: "₹45,000",
        tagline: "Cinematic storytelling for timeless memories",
        image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=75",
        verified: true,
    },
    {
        id: "blush-and-bloom",
        name: "Blush & Bloom",
        category: "makeup",
        location: "Delhi, NCR",
        rating: 4.9,
        reviewCount: 274,
        startingPrice: "₹18,000",
        tagline: "Bridal artistry that frames your natural radiance",
        image: "https://images.unsplash.com/photo-1596704017258-2e4529afc4b2?auto=format&fit=crop&w=800&q=75",
        verified: true,
    },
    {
        id: "royal-decor-co",
        name: "Royal Décor Co.",
        category: "decorators",
        location: "Udaipur, Rajasthan",
        rating: 4.7,
        reviewCount: 156,
        startingPrice: "₹80,000",
        tagline: "Transforming venues into breathtaking dreamscapes",
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=75",
        verified: false,
    },
    {
        id: "lakeside-manor",
        name: "Lakeside Manor",
        category: "venues",
        location: "Udaipur, Rajasthan",
        rating: 4.8,
        reviewCount: 203,
        startingPrice: "₹3,20,000",
        tagline: "Lakefront luxury for unforgettable celebrations",
        image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=75",
        verified: true,
    },
    {
        id: "frame-perfect",
        name: "Frame Perfect",
        category: "photographers",
        location: "Bengaluru, Karnataka",
        rating: 4.6,
        reviewCount: 141,
        startingPrice: "₹32,000",
        tagline: "Every glance, every tear — frame perfect",
        image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=800&q=75",
        verified: true,
    },
    {
        id: "glow-studio",
        name: "Glow Studio",
        category: "makeup",
        location: "Chennai, Tamil Nadu",
        rating: 4.7,
        reviewCount: 189,
        startingPrice: "₹14,000",
        tagline: "Modern glam meets traditional elegance",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=75",
        verified: false,
    },
    {
        id: "flora-events",
        name: "Flora Events",
        category: "decorators",
        location: "Pune, Maharashtra",
        rating: 4.8,
        reviewCount: 167,
        startingPrice: "₹65,000",
        tagline: "Floral poetry woven into your wedding story",
        image: "https://images.unsplash.com/photo-1487530811015-780eb6ab804e?auto=format&fit=crop&w=800&q=75",
        verified: true,
    },
];
