import { Menu, X } from "lucide-react";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
    { label: "Venues", href: "#venues" },
    { label: "Vendors", href: "#vendors" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className="fixed top-0 right-0 left-0 z-50 transition-all duration-500 ease-in-out"
            style={{
                backgroundColor: scrolled
                    ? "rgba(13, 27, 46, 0.97)"
                    : "transparent",
                backdropFilter: scrolled ? "blur(16px)" : "none",
                boxShadow: scrolled
                    ? "0 1px 0 rgba(201, 169, 110, 0.12), 0 4px 32px rgba(0,0,0,0.25)"
                    : "none",
            }}
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="flex h-20 items-center justify-between">
                    {/* ── Logo ── */}
                    <a
                        href="/"
                        className="group flex items-center gap-2.5"
                        aria-label="SoulsWed home"
                    >
                        <span
                            className="text-2xl font-bold tracking-tight transition-colors duration-300"
                            style={{
                                color: scrolled ? "#ffffff" : "#ffffff",
                                fontFamily: "'Geist Variable', sans-serif",
                            }}
                        >
                            Souls
                            <span style={{ color: "var(--sw-gold)" }}>Wed</span>
                        </span>
                        <span
                            className="mt-1 h-1 w-1 rounded-full transition-all duration-300 group-hover:scale-125"
                            style={{ backgroundColor: "var(--sw-gold)" }}
                        />
                    </a>

                    {/* ── Desktop Nav ── */}
                    <nav
                        className="hidden items-center gap-8 md:flex"
                        aria-label="Main navigation"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="group relative text-sm font-medium tracking-wide text-white/80 transition-colors duration-200 hover:text-white"
                            >
                                {link.label}
                                <span
                                    className="absolute -bottom-0.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
                                    style={{
                                        backgroundColor: "var(--sw-gold)",
                                    }}
                                />
                            </a>
                        ))}
                    </nav>

                    {/* ── Desktop CTA ── */}
                    <div className="hidden items-center gap-4 md:flex">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-sm font-medium tracking-wide text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white"
                            id="navbar-login-btn"
                        >
                            Login
                        </Button>
                        <Button
                            size="sm"
                            className="rounded-full border px-6 text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105"
                            style={{
                                backgroundColor: "var(--sw-gold)",
                                borderColor: "var(--sw-gold)",
                                color: "var(--sw-navy)",
                            }}
                            id="navbar-list-cta"
                            onMouseEnter={(e) => {
                                (
                                    e.currentTarget as HTMLButtonElement
                                ).style.backgroundColor =
                                    "var(--sw-gold-light)";
                            }}
                            onMouseLeave={(e) => {
                                (
                                    e.currentTarget as HTMLButtonElement
                                ).style.backgroundColor = "var(--sw-gold)";
                            }}
                        >
                            List Your Business
                        </Button>
                    </div>

                    {/* ── Mobile Hamburger ── */}
                    <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-white hover:bg-white/10 md:hidden"
                                aria-label="Open mobile menu"
                                id="navbar-mobile-menu-trigger"
                            >
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="right"
                            className="w-72 border-l border-white/10 p-0"
                            style={{ backgroundColor: "var(--sw-navy)" }}
                        >
                            {/* Mobile Header */}
                            <div className="flex items-center justify-between border-b border-white/10 px-6 py-6">
                                <span
                                    className="text-xl font-bold tracking-tight text-white"
                                    style={{
                                        fontFamily:
                                            "'Geist Variable', sans-serif",
                                    }}
                                >
                                    Souls
                                    <span style={{ color: "var(--sw-gold)" }}>
                                        Wed
                                    </span>
                                </span>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setMobileOpen(false)}
                                    className="text-white/60 hover:bg-white/10 hover:text-white"
                                    aria-label="Close menu"
                                >
                                    <X className="h-4 w-4" />
                                </Button>
                            </div>

                            {/* Mobile Links */}
                            <nav className="flex flex-col gap-2 px-6 py-8">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="border-b border-white/5 py-3 text-base font-medium text-white/80 transition-colors duration-200 hover:text-white"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </nav>

                            {/* Mobile CTAs */}
                            <div className="flex flex-col gap-3 px-6 pt-4">
                                <Button
                                    variant="outline"
                                    className="w-full border-white/20 bg-transparent text-white hover:bg-white/10"
                                    id="mobile-login-btn"
                                >
                                    Login
                                </Button>
                                <Button
                                    className="w-full rounded-full font-semibold"
                                    style={{
                                        backgroundColor: "var(--sw-gold)",
                                        color: "var(--sw-navy)",
                                    }}
                                    id="mobile-list-cta"
                                >
                                    List Your Business
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
