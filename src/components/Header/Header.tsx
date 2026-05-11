"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import { LogoFlame, PhoneStroke } from "../icons/WildfireIcons";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/fleet", label: "Fleet" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
] as const;

function isActiveNav(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <header
      className={`site-header${mobileOpen ? " nav-mobile-open" : ""}`}
    >
      <div className="wf-container nav">
        <Link href="/" className="logo" aria-label="Wild Fire Express home">
          <span className="logo-mark" aria-hidden>
            <LogoFlame />
          </span>
          <span className="logo-text">
            Wild Fire Express
            <small>OTR · DRY VAN · 48 STATES</small>
          </span>
        </Link>

        <ul className="nav-links">
          {NAV.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={isActiveNav(pathname, href) ? "active" : undefined}
                onClick={closeMobile}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-cta">
          <a href="tel:+10000000000" className="nav-phone">
            <PhoneStroke />
            +1 (000) 000-0000
          </a>
          <Link href="/careers" className="btn btn-fire btn-sm" onClick={closeMobile}>
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
