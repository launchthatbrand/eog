import Link from "next/link";

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
}

export const PageHeader = ({ title, description, breadcrumbs }: PageHeaderProps) => (
  <div className="border-b border-border/60 bg-primary/[0.02]">
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex items-center gap-2 text-sm text-text-muted">
            <li>
              <Link href="/" className="transition-colors hover:text-primary">
                Home
              </Link>
            </li>
            {breadcrumbs.map((crumb, i) => (
              <li key={i} className="flex items-center gap-2">
                <span aria-hidden="true" className="text-border">/</span>
                {crumb.href ? (
                  <Link href={crumb.href} className="transition-colors hover:text-primary">
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="font-medium text-text">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}
      <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-text-muted">{description}</p>
      )}
    </div>
  </div>
);
