"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="masthead">
      <div className="wrap masthead-inner">
        <Link href="/" className="wordmark" onClick={() => setOpen(false)}>STUDIO <span>POINT ZERO</span></Link>
        <button type="button" className="menu-toggle" aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
        <nav id="primary-nav" aria-label="Main navigation" className={open ? "nav open" : "nav"}>
          {links.map(({ href, label }) => (
            <Link key={href} href={href} aria-current={path === href || path.startsWith(href + "/") ? "page" : undefined} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
