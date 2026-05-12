import { type Metadata } from "next";
import { PageHeader } from "~/components/PageHeader";

export const metadata: Metadata = {
  title: "News & Updates",
};

const articles = [
  {
    date: "2026-05-01",
    dateLabel: "May 1, 2026",
    title: "Governor Announces First Round of Florida Forward Priority Projects",
    summary:
      "47 priority projects across 28 counties selected for the first funding round, spanning transportation infrastructure, broadband expansion, workforce training centers, and community resilience investments totaling $3.2 billion.",
  },
  {
    date: "2026-04-15",
    dateLabel: "April 15, 2026",
    title: "Workforce Partnership Agreements Signed with 12 State Colleges",
    summary:
      "The Florida Forward Initiative has formalized workforce development agreements with 12 state colleges, establishing earn-while-you-learn programs in advanced manufacturing, healthcare technology, cybersecurity, and logistics.",
  },
  {
    date: "2026-03-20",
    dateLabel: "March 20, 2026",
    title: "Community Resilience Vulnerability Index Published",
    summary:
      "The initiative's data-driven vulnerability index is now publicly available, providing transparent methodology for how resilience investment priorities are determined across Florida's 67 counties.",
  },
  {
    date: "2026-02-10",
    dateLabel: "February 10, 2026",
    title: "Florida Forward Initiative Officially Launched",
    summary:
      "The Executive Office of the Governor formally established the Florida Forward Initiative with the signing of Executive Order 2026-12, creating the coordinating council and authorizing the program office.",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHeader
        title="News & Updates"
        description="Latest announcements and press releases from the Florida Forward Initiative."
        breadcrumbs={[{ label: "News" }]}
      />

      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="space-y-6">
          {articles.map((article) => (
            <article
              key={article.date}
              className="rounded-xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <time
                className="text-xs font-medium uppercase tracking-wider text-accent"
                dateTime={article.date}
              >
                {article.dateLabel}
              </time>
              <h2 className="mt-2 text-xl font-semibold text-text">
                {article.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {article.summary}
              </p>
              <button
                type="button"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                aria-label={`Read full article: ${article.title}`}
              >
                Read full release
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </button>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
