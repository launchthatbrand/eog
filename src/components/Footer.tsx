import Link from "next/link";
import { siteConfig, navLinks } from "~/lib/metadata";

export const Footer = () => (
  <footer className="border-t border-border bg-primary-dark text-white" role="contentinfo">
    {/* Main footer content */}
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {/* Brand / Identity */}
        <div>
          <p className="text-lg font-bold tracking-tight">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-white/60">{siteConfig.tagline}</p>
          <p className="mt-5 text-sm leading-relaxed text-white/60">
            {siteConfig.contact.address}
          </p>
        </div>

        {/* Quick Links — styled as button-like links per flgov.com pattern */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-white/40">
            Quick Links
          </p>
          <ul className="mt-4 flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-block rounded px-3 py-1.5 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + External Links */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-white/40">
            Contact
          </p>
          <div className="mt-4 flex flex-col gap-2.5 text-sm text-white/80">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="transition-colors hover:text-white"
            >
              {siteConfig.contact.email}
            </a>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`}
              className="transition-colors hover:text-white"
            >
              {siteConfig.contact.phone}
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://www.flgov.com"
              className="rounded border border-white/20 px-3 py-1.5 text-xs text-white/70 transition-colors hover:border-white/40 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Governor&apos;s Office
            </a>
            <a
              href="https://www.myflorida.gov"
              className="rounded border border-white/20 px-3 py-1.5 text-xs text-white/70 transition-colors hover:border-white/40 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              MyFlorida.gov
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-white/10 bg-primary-dark/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-white/40 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} State of Florida. All rights reserved.</p>
        <div className="flex gap-5">
          <Link href="/about/" className="transition-colors hover:text-white/70">
            Accessibility
          </Link>
          <Link href="/about/" className="transition-colors hover:text-white/70">
            Privacy Policy
          </Link>
          <Link href="/about/" className="transition-colors hover:text-white/70">
            Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </div>
  </footer>
);
