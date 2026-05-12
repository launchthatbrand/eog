"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig, navLinks } from "~/lib/metadata";

export const Header = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* State of Florida official banner — mirrors myflorida.gov/flgov.com pattern */}
      <div className="bg-primary text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5">
          <div className="flex items-center gap-3">
            <FloridaSeal size={28} />
            <div className="flex flex-col">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-white/70">
                State of Florida
              </span>
              <span className="text-xs font-medium leading-tight text-white/90">
                Executive Office of the Governor
              </span>
            </div>
          </div>
          <a
            href="https://www.myflorida.gov"
            className="hidden text-[11px] text-white/60 transition-colors hover:text-white sm:inline"
            target="_blank"
            rel="noopener noreferrer"
          >
            MyFlorida.gov
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className="border-b border-border bg-white shadow-sm"
        aria-label="Primary navigation"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-0">
          <Link
            href="/"
            className="py-4 text-base font-bold text-primary sm:text-lg"
          >
            {siteConfig.name}
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-0.5 md:flex" role="menubar">
            {navLinks.map((link) => (
              <li key={link.href} role="none">
                <Link
                  href={link.href}
                  role="menuitem"
                  className={`px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "border-b-2 border-primary text-primary"
                      : "text-text-muted hover:text-primary"
                  }`}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            className="rounded-md p-2 text-text-muted md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            id="mobile-menu"
            className="border-t border-border bg-white px-4 pb-4 md:hidden"
          >
            <ul className="flex flex-col gap-1 pt-2" role="menu">
              {navLinks.map((link) => (
                <li key={link.href} role="none">
                  <Link
                    href={link.href}
                    role="menuitem"
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? "bg-primary/10 text-primary"
                        : "text-text-muted hover:bg-surface-muted"
                    }`}
                    aria-current={isActive(link.href) ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

const FloridaSeal = ({ size = 36 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="18" cy="18" r="17" stroke="currentColor" strokeWidth="2" opacity="0.6" />
    <circle cx="18" cy="18" r="13" stroke="#BF8B2E" strokeWidth="1.5" />
    <text
      x="18"
      y="15"
      textAnchor="middle"
      fill="currentColor"
      fontSize="5"
      fontWeight="bold"
      fontFamily="system-ui"
    >
      STATE
    </text>
    <text
      x="18"
      y="21"
      textAnchor="middle"
      fill="currentColor"
      fontSize="4"
      fontFamily="system-ui"
    >
      OF
    </text>
    <text
      x="18"
      y="27"
      textAnchor="middle"
      fill="currentColor"
      fontSize="5"
      fontWeight="bold"
      fontFamily="system-ui"
    >
      FLORIDA
    </text>
  </svg>
);
