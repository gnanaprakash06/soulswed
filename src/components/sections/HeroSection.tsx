import { CalendarDays, MapPin, Search, Tag } from "lucide-react";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/* ─────────────────────────────────────────────────────────────
   Fallback gradient — shown while / if the image fails to load.
   Replace BG_IMAGE_URL with your real image URL once available.
───────────────────────────────────────────────────────────── */
const BG_IMAGE_URL =
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80";

export function HeroSection() {
    const [location, setLocation] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Wire to routing / search logic in a later phase
        console.log("Search →", { location, category, date });
    };

    return (
        <section
            id="hero"
            className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden"
            aria-label="Hero section"
        >
            {/* ── Background Image ── */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${BG_IMAGE_URL})` }}
                role="img"
                aria-label="Luxury wedding destination backdrop"
            />

            {/* ── Layered Overlay: dark gradient bottom-to-top + subtle navy tint ── */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(13,27,46,0.55) 0%, rgba(13,27,46,0.35) 40%, rgba(13,27,46,0.70) 100%)",
                }}
            />

            {/* ── Content Container ── */}
            <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 text-center">
                {/* ── Eyebrow badge ── */}
                <div
                    className="animate-fade-slide-up mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-widest uppercase"
                    style={{
                        borderColor: "rgba(201, 169, 110, 0.45)",
                        backgroundColor: "rgba(201, 169, 110, 0.12)",
                        color: "var(--sw-gold-light)",
                        opacity: 0,
                    }}
                >
                    <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: "var(--sw-gold)" }}
                    />
                    India's Premier Event Booking Platform
                </div>

                {/* ── Main Headline ── */}
                <h1
                    className="animate-fade-slide-up animation-delay-100 text-shadow-hero text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
                    style={{
                        fontFamily: "'Geist Variable', sans-serif",
                        opacity: 0,
                    }}
                >
                    Book your{" "}
                    <span
                        className="relative inline-block"
                        style={{ color: "var(--sw-gold-light)" }}
                    >
                        Dream Hall
                        {/* gold underline squiggle */}
                        <svg
                            className="absolute -bottom-2 left-0 w-full"
                            viewBox="0 0 200 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path
                                d="M1 5.5 C 30 1.5, 70 7.5, 100 4.5 S 170 1, 199 5.5"
                                stroke="var(--sw-gold)"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                fill="none"
                            />
                        </svg>
                    </span>
                    <br className="hidden sm:block" />
                    in Exciting Destinations,{" "}
                    <span className="font-light text-white/90 italic">
                        Effortlessly.
                    </span>
                </h1>

                {/* ── Subheading ── */}
                <p
                    className="animate-fade-slide-up animation-delay-200 mt-6 max-w-2xl text-base leading-relaxed font-light sm:text-lg"
                    style={{
                        color: "rgba(255,255,255,0.72)",
                        opacity: 0,
                        fontFamily: "'Geist Variable', sans-serif",
                    }}
                >
                    Discover curated venues, world-class vendors, and
                    unforgettable experiences — all in one seamless platform
                    built for your most important moments.
                </p>

                {/* ─────────────────────────────────────────────────────────
                    ── Pill-shaped Floating Search Bar ──
                    Airbnb / Booking.com inspired inline search component
                ───────────────────────────────────────────────────────── */}
                <form
                    id="hero-search-form"
                    onSubmit={handleSearch}
                    className="animate-fade-slide-up animation-delay-300 mt-10 w-full max-w-3xl"
                    style={{ opacity: 0 }}
                    aria-label="Venue search"
                >
                    <div
                        className="flex w-full flex-col items-stretch overflow-hidden rounded-2xl shadow-2xl sm:flex-row sm:items-center sm:rounded-full"
                        style={{
                            backgroundColor: "rgba(255, 255, 255, 0.97)",
                            boxShadow:
                                "0 8px 40px rgba(13,27,46,0.30), 0 0 0 1px rgba(201,169,110,0.25)",
                        }}
                    >
                        {/* ── Location Field ── */}
                        <div className="group flex flex-1 items-center gap-2.5 border-gray-100 px-5 py-4 sm:border-r sm:py-0">
                            <MapPin
                                className="h-4 w-4 flex-shrink-0 transition-colors duration-200"
                                style={{ color: "var(--sw-gold)" }}
                                aria-hidden="true"
                            />
                            <div className="flex min-w-0 flex-1 flex-col">
                                <label
                                    htmlFor="search-location"
                                    className="mb-0.5 text-[10px] font-semibold tracking-widest uppercase"
                                    style={{ color: "var(--sw-navy)" }}
                                >
                                    Location
                                </label>
                                <Input
                                    id="search-location"
                                    value={location}
                                    onChange={(e) =>
                                        setLocation(e.target.value)
                                    }
                                    placeholder="City or venue name"
                                    className="h-auto border-0 bg-transparent p-0 text-sm font-medium shadow-none placeholder:text-gray-400 focus-visible:ring-0"
                                    style={{ color: "var(--sw-navy)" }}
                                />
                            </div>
                        </div>

                        {/* ── Divider (mobile horizontal rule) ── */}
                        <div
                            className="mx-5 h-px sm:hidden"
                            style={{ backgroundColor: "var(--border)" }}
                        />

                        {/* ── Category Field ── */}
                        <div className="flex flex-1 items-center gap-2.5 border-gray-100 px-5 py-4 sm:border-r sm:py-0">
                            <Tag
                                className="h-4 w-4 flex-shrink-0"
                                style={{ color: "var(--sw-gold)" }}
                                aria-hidden="true"
                            />
                            <div className="flex min-w-0 flex-1 flex-col">
                                <label
                                    htmlFor="search-category"
                                    className="mb-0.5 text-[10px] font-semibold tracking-widest uppercase"
                                    style={{ color: "var(--sw-navy)" }}
                                >
                                    Category
                                </label>
                                <Input
                                    id="search-category"
                                    value={category}
                                    onChange={(e) =>
                                        setCategory(e.target.value)
                                    }
                                    placeholder="Venue, Photography…"
                                    className="h-auto border-0 bg-transparent p-0 text-sm font-medium shadow-none placeholder:text-gray-400 focus-visible:ring-0"
                                    style={{ color: "var(--sw-navy)" }}
                                />
                            </div>
                        </div>

                        {/* ── Divider ── */}
                        <div
                            className="mx-5 h-px sm:hidden"
                            style={{ backgroundColor: "var(--border)" }}
                        />

                        {/* ── Date Field ── */}
                        <div className="flex flex-1 items-center gap-2.5 px-5 py-4 sm:py-0">
                            <CalendarDays
                                className="h-4 w-4 flex-shrink-0"
                                style={{ color: "var(--sw-gold)" }}
                                aria-hidden="true"
                            />
                            <div className="flex min-w-0 flex-1 flex-col">
                                <label
                                    htmlFor="search-date"
                                    className="mb-0.5 text-[10px] font-semibold tracking-widest uppercase"
                                    style={{ color: "var(--sw-navy)" }}
                                >
                                    Date
                                </label>
                                <Input
                                    id="search-date"
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className="h-auto border-0 bg-transparent p-0 text-sm font-medium text-gray-400 shadow-none focus-visible:ring-0"
                                    style={{
                                        color: date
                                            ? "var(--sw-navy)"
                                            : undefined,
                                    }}
                                />
                            </div>
                        </div>

                        {/* ── Search Button ── */}
                        <div className="px-3 py-3 sm:py-2">
                            <Button
                                type="submit"
                                id="hero-search-btn"
                                size="lg"
                                className="flex w-full items-center gap-2 rounded-full px-7 text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg sm:w-auto"
                                style={{
                                    backgroundColor: "var(--sw-navy)",
                                    color: "#fff",
                                }}
                            >
                                <Search
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                />
                                Search
                            </Button>
                        </div>
                    </div>
                </form>

                {/* ── Trust strip ── */}
                <div
                    className="animate-fade-slide-up animation-delay-500 mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium"
                    style={{ color: "rgba(255,255,255,0.55)", opacity: 0 }}
                >
                    {[
                        "10,000+ Venues",
                        "50,000+ Bookings",
                        "4.9★ Rated Vendors",
                    ].map((stat) => (
                        <span key={stat} className="flex items-center gap-1.5">
                            <span
                                className="h-1 w-1 rounded-full"
                                style={{ backgroundColor: "var(--sw-gold)" }}
                            />
                            {stat}
                        </span>
                    ))}
                </div>
            </div>

            {/* ── Scroll cue ── */}
            <div
                className="absolute bottom-8 left-1/2 flex -translate-x-1/2 animate-bounce flex-col items-center gap-1"
                aria-hidden="true"
            >
                <span
                    className="text-[10px] tracking-widest uppercase"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                >
                    Scroll
                </span>
                <div
                    className="h-8 w-px"
                    style={{
                        background:
                            "linear-gradient(to bottom, rgba(201,169,110,0.6), transparent)",
                    }}
                />
            </div>
        </section>
    );
}
