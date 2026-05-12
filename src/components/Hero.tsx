import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export const Hero = ({
  title,
  subtitle,
  ctaLabel = "Learn More",
  ctaHref = "/about/",
}: HeroProps) => (
  <section className="relative overflow-hidden text-white">
    {/* Background image layer — civic/architectural (placeholder via CSS gradient + pattern) */}
    <div className="absolute inset-0 bg-primary" aria-hidden="true">
      {/* Architectural pattern overlay mimicking myflorida.gov hero approach */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/80 via-primary/60 to-primary-light/40" />
    </div>

    {/* Gold accent strip at bottom — references flgov.com decorative elements */}
    <div className="absolute right-0 bottom-0 left-0 h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0" aria-hidden="true" />

    <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-32 lg:py-40">
      <div className="max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-light">
          Executive Office of the Governor
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
          {title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-white/85 sm:text-xl">
          {subtitle}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 rounded bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-accent-light hover:shadow-xl"
          >
            {ctaLabel}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
          <Link
            href="/contact/"
            className="inline-flex items-center rounded border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  </section>
);
