import { type Metadata } from "next";
import { Hero } from "~/components/Hero";
import { InfoCard } from "~/components/InfoCard";
import { StatBlock } from "~/components/StatBlock";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Florida Forward Initiative — Executive Office of the Governor",
};

const highlights = [
  {
    title: "Infrastructure Modernization",
    description:
      "Coordinating over $14 billion in planned investments across transportation, broadband, water, and energy systems statewide.",
    href: "/initiative/",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M3 21h18M3 7l9-4 9 4M4 7v14M20 7v14M8 11h0M12 11h0M16 11h0M8 15h0M12 15h0M16 15h0" />
      </svg>
    ),
  },
  {
    title: "Workforce Development",
    description:
      "Creating 50,000 new credentialed positions in high-demand fields through earn-while-you-learn programs and employer partnerships.",
    href: "/initiative/",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: "Economic Growth",
    description:
      "Attracting $5 billion in new private investment across aerospace, life sciences, financial technology, and advanced logistics.",
    href: "/initiative/",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Community Resilience",
    description:
      "Deploying $2.3 billion in hazard mitigation, affordable housing, and essential services for Florida's most vulnerable communities.",
    href: "/initiative/",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "$14B+", label: "Infrastructure Investment", description: "Planned across all systems" },
  { value: "50,000", label: "New Positions", description: "Credentialed by 2028" },
  { value: "$5B", label: "Private Investment", description: "Target over three years" },
  { value: "23M+", label: "Floridians Served", description: "Statewide impact" },
];

const quickLinks = [
  { label: "About the Initiative", href: "/about/" },
  { label: "Program Details", href: "/initiative/" },
  { label: "Resources & Documents", href: "/resources/" },
  { label: "Contact Us", href: "/contact/" },
];

export default function HomePage() {
  return (
    <>
      <Hero
        title="Building a Stronger Florida"
        subtitle="The Florida Forward Initiative coordinates strategic investment in infrastructure, workforce development, and economic resilience for 23 million Floridians."
        ctaLabel="About the Initiative"
        ctaHref="/about/"
      />

      {/* Stats */}
      <section className="bg-surface-muted py-16" aria-label="Key metrics">
        <div className="mx-auto max-w-6xl px-4">
          <StatBlock stats={stats} />
        </div>
      </section>

      {/* Program highlights */}
      <section className="py-20" aria-labelledby="programs-heading">
        <div className="mx-auto max-w-6xl px-4">
          <h2 id="programs-heading" className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            Program Areas
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-text-muted">
            Four interconnected programs driving measurable outcomes across the state.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {highlights.map((item) => (
              <InfoCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured news */}
      <section className="border-t border-border/60 bg-surface-muted py-20" aria-labelledby="news-heading">
        <div className="mx-auto max-w-6xl px-4">
          <h2 id="news-heading" className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            Latest Update
          </h2>
          <article className="mt-8 rounded-lg border border-border/60 bg-white p-8">
            <time className="text-xs font-medium uppercase tracking-wide text-text-muted" dateTime="2026-05-01">
              May 1, 2026
            </time>
            <h3 className="mt-3 text-xl font-semibold text-text">
              Governor Announces First Round of Florida Forward Priority Projects
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-text-muted">
              The Executive Office of the Governor today announced 47 priority projects across
              28 counties as part of the Florida Forward Initiative&apos;s first funding round.
              Projects span transportation infrastructure, broadband expansion, workforce
              training centers, and community resilience investments totaling $3.2 billion.
            </p>
            <Link
              href="/news/"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              All news and updates
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </article>
        </div>
      </section>

      {/* Quick links — button-style grid matching flgov.com footer pattern */}
      <section className="py-16" aria-labelledby="quicklinks-heading">
        <div className="mx-auto max-w-6xl px-4">
          <h2 id="quicklinks-heading" className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            Quick Links
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between rounded-lg border border-border/60 bg-white px-5 py-4 text-sm font-medium text-text transition-all hover:border-primary/30 hover:bg-primary/[0.02] hover:shadow-sm"
              >
                {link.label}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-muted" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
