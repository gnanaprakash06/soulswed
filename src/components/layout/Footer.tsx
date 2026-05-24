import {
    ALL_CATEGORIES_FOOTER,
    FOOTER_COLUMNS,
    SOCIAL_LINKS,
} from "@/static/footer";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";

export function Footer() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) {
            setSubscribed(true);
            setEmail("");
        }
    };

    return (
        <footer
            id="site-footer"
            aria-label="Site footer"
            className="bg-(--sw-navy) text-white"
        >
            <div className="border-b border-white/10">
                <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
                    <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex flex-col gap-1">
                            <h3 className="text-lg font-bold tracking-tight text-white">
                                Get wedding inspiration in your inbox
                            </h3>
                            <p className="text-sm text-white/55">
                                Venue guides, vendor spotlights, and real
                                wedding stories — weekly.
                            </p>
                        </div>

                        {subscribed ? (
                            <div className="flex items-center gap-2 rounded-full border border-(--sw-gold)/40 bg-(--sw-gold)/10 px-5 py-2.5 text-sm font-semibold text-(--sw-gold)">
                                ✓ You're subscribed!
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubscribe}
                                className="flex w-full max-w-sm items-center gap-2"
                                aria-label="Newsletter signup"
                            >
                                <Input
                                    id="footer-newsletter-email"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your@email.com"
                                    className={cn(
                                        "h-10 flex-1 rounded-full border-white/20 bg-white/10",
                                        "text-white placeholder:text-white/40",
                                        "focus-visible:border-(--sw-gold) focus-visible:ring-(--sw-gold)/30"
                                    )}
                                />
                                <Button
                                    type="submit"
                                    id="footer-subscribe-btn"
                                    className={cn(
                                        "h-10 shrink-0 rounded-full px-5 text-sm font-semibold",
                                        "bg-(--sw-gold) text-(--sw-navy)",
                                        "transition-colors duration-200 hover:bg-(--sw-gold-light)"
                                    )}
                                >
                                    Subscribe
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
                    {/* Brand column */}
                    <div className="flex flex-col gap-6">
                        <a
                            href="/"
                            aria-label="SoulsWed home"
                            className="inline-block w-fit no-underline"
                        >
                            <span className="text-2xl font-bold tracking-tight text-white">
                                Souls
                                <span className="text-(--sw-gold)">Wed</span>
                            </span>
                            <span
                                className="ml-1.5 inline-block h-1.5 w-1.5 rounded-full bg-(--sw-gold) align-middle"
                                aria-hidden="true"
                            />
                        </a>

                        <p className="max-w-xs text-sm leading-relaxed text-white/55">
                            India's premier wedding & event booking platform —
                            connecting couples with the finest venues and
                            vendors across the country.
                        </p>

                        <div className="flex items-center gap-3">
                            {SOCIAL_LINKS.map(({ id, label, href, icon }) => (
                                <a
                                    key={id}
                                    id={`social-${id}`}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Follow us on ${label}`}
                                    className={[
                                        "flex h-9 w-9 items-center justify-center rounded-full",
                                        "border border-white/15 text-white/60",
                                        "transition-all duration-200",
                                        "hover:border-(--sw-gold)/50 hover:bg-(--sw-gold)/10 hover:text-(--sw-gold)",
                                    ].join(" ")}
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {["App Store", "Google Play"].map((store) => (
                                <a
                                    key={store}
                                    href="#"
                                    className={[
                                        "rounded-lg border border-white/20 px-3.5 py-2",
                                        "text-[11px] font-semibold tracking-wide text-white/70",
                                        "transition-colors duration-200 hover:border-white/40 hover:text-white",
                                        "no-underline",
                                    ].join(" ")}
                                >
                                    {store}
                                </a>
                            ))}
                        </div>
                    </div>

                    {FOOTER_COLUMNS.map((col) => (
                        <div key={col.heading} className="flex flex-col gap-4">
                            <h4 className="text-xs font-bold tracking-[0.15em] text-(--sw-gold) uppercase">
                                {col.heading}
                            </h4>
                            <ul className="flex flex-col gap-2.5" role="list">
                                {col.links.map((link) => (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            className={[
                                                "text-sm text-white/60 no-underline",
                                                "transition-colors duration-200 hover:text-(--sw-gold)",
                                            ].join(" ")}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-16 border-t border-white/10 pt-12">
                    <h4 className="mb-6 text-xs font-bold tracking-[0.15em] text-(--sw-gold) uppercase">
                        Browse All Categories
                    </h4>
                    <ul
                        className="grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
                        role="list"
                    >
                        {ALL_CATEGORIES_FOOTER.map((cat) => (
                            <li key={cat}>
                                <a
                                    href={`/category/${cat
                                        .toLowerCase()
                                        .replace(/\s+/g, "-")
                                        .replace(/[^a-z0-9-]/g, "")}`}
                                    className={cn(
                                        "text-[12px] text-white/50 no-underline",
                                        "transition-colors duration-200 hover:text-(--sw-gold)"
                                    )}
                                >
                                    {cat}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-[11px] text-white/35 sm:flex-row lg:px-10">
                    <span>
                        © {new Date().getFullYear()} SoulsWed Technologies Pvt.
                        Ltd. All rights reserved.
                    </span>
                    <div className="flex items-center gap-4">
                        {["Privacy", "Terms", "Cookies"].map((item) => (
                            <a
                                key={item}
                                href={`/${item.toLowerCase()}`}
                                className="no-underline transition-colors duration-200 hover:text-white/70"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
