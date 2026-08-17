"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const nav = [
  ["/", "Home"],
  ["/products", "Products"],
  ["/companies", "Companies"],
  ["/requirements", "Buyer Requirements"],
  ["/about", "About"],
  ["/contact", "Contact"],
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="top-strip">
        <div className="site-wrap top-strip-inner">
          <span>HOME &nbsp; | &nbsp; CONTACT US &nbsp; | &nbsp; DISCLAIMER</span>
          <span>India&apos;s verified SME network &nbsp; | &nbsp; Buyer &amp; supplier support</span>
        </div>
      </div>
      <header className="main-header">
        <div className="site-wrap main-header-inner">
          <Link href="/" className="brand" aria-label="Foundry Marketplace home">
            FOUND<span className="brand-accent">RY</span>
          </Link>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">☰</button>
          <nav className={`nav-links ${menuOpen ? "open" : ""}`} aria-label="Primary navigation">
            {nav.map(([href, label]) => {
              const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
              return <Link key={href} className={active ? "active" : ""} href={href} onClick={() => setMenuOpen(false)}>{label}</Link>;
            })}
          </nav>
          <div className="header-actions">
            <Link className="button button-outline button-small" href="/login">Sign in</Link>
            <Link className="button button-red button-small" href="/register">Join marketplace</Link>
          </div>
        </div>
      </header>
    </>
  );
}
