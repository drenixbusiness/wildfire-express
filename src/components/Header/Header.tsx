"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState, type MouseEvent } from "react";
import { PhoneStroke } from "../icons/WildfireIcons";
import Image from "next/image";

const NAV = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
] as const;

function isActiveNav(pathname: string, navHref: string) {
    const base = navHref.split("#")[0] ?? navHref;
    if (base === "/") return pathname === "/";
    return pathname === base || pathname.startsWith(`${base}/`);
}

export default function Header() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    const closeMobile = useCallback(() => setMobileOpen(false), []);

    const handleNavClick = useCallback(
        (href: string) => (e: MouseEvent<HTMLAnchorElement>) => {
            closeMobile();
            const base = href.split("#")[0] ?? href;

            if (base === "/" && pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                window.history.replaceState(null, "", "/");
                return;
            }

            if (
                base === "/contact" &&
                pathname === "/contact" &&
                href.includes("contact-bottom")
            ) {
                e.preventDefault();
                document
                    .getElementById("contact-bottom")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                window.history.replaceState(null, "", "/contact#contact-bottom");
            }
        },
        [pathname, closeMobile],
    );

    return (
        <header
            className={`site-header${mobileOpen ? " nav-mobile-open" : ""}`}
        >
            <div className="wf-container nav">
                <Link
                    href="/"
                    className="logo"
                    aria-label="Wildfire Express home"
                    onClick={handleNavClick("/")}
                >
                    <Image src={"/images/we2.png"} alt="" width={100} height={100} />
                    <span className="logo-text">
                        Wildfire Express
                        <small>OTR · DRY VAN · 48 STATES</small>
                    </span>
                </Link>

                <ul className="nav-links">
                    {NAV.map(({ href, label }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className={isActiveNav(pathname, href) ? "active" : undefined}
                                onClick={handleNavClick(href)}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}

                    {/* Mobile-only CTA — hidden on desktop via CSS */}
                    <li className="nav-mobile-cta">
                        <a href="tel:+1(513)2065093" className="nav-phone">
                            <PhoneStroke />
                            +1(513)206-5093
                        </a>
                        <Link href="/contact" className="btn btn-fire btn-sm" onClick={closeMobile}>
                            <span>Drive With Us</span>
                            <span className="arrow">→</span>
                        </Link>
                    </li>
                </ul>

                <div className="nav-cta">
                    <a href="tel:+1(513)2065093" className="nav-phone">
                        <PhoneStroke />
                        +1(513)206-5093
                    </a>
                    <Link href="/contact" className="btn btn-fire btn-sm sm:hidden" onClick={closeMobile}>
                        <span>Drive With Us</span>
                        <span className="arrow">→</span>
                    </Link>
                    <button
                        type="button"
                        className="nav-toggle"
                        aria-expanded={mobileOpen}
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        onClick={() => setMobileOpen((o) => !o)}
                    >
                        <span />
                    </button>
                </div>
            </div>
        </header>
    );
}
