import { type Metadata } from "next";
import { PageHeader } from "~/components/PageHeader";
import { StatBlock } from "~/components/StatBlock";
import { getPageContent } from "~/lib/content";

export const metadata: Metadata = {
  title: "Initiative Details",
};

const stats = [
  { value: "$14B+", label: "Infrastructure", description: "Transportation, broadband, utilities" },
  { value: "50,000", label: "New Credentials", description: "High-demand fields by 2028" },
  { value: "$5B", label: "Private Investment", description: "Across priority sectors" },
  { value: "$2.3B", label: "Resilience Funding", description: "Federal and state combined" },
];

const milestones = [
  { quarter: "Q1 2026", title: "Initiative Launch", description: "Coordinating council established, baseline metrics published." },
  { quarter: "Q2 2026", title: "Priority Selections", description: "First round of projects announced. Workforce agreements signed with 12 state colleges." },
  { quarter: "Q3 2026", title: "Fast-Track Permitting", description: "Streamlined permitting process goes live. First quarterly progress report published." },
  { quarter: "Q4 2026", title: "Mid-Year Review", description: "Updated targets and second round of project selections." },
  { quarter: "2027", title: "Full Operations", description: "All four program areas at full capacity. Annual economic impact report." },
];

export default async function InitiativePage() {
  const { html, frontmatter } = await getPageContent("initiative");

  return (
    <>
      <PageHeader
        title={frontmatter.title}
        description={frontmatter.description}
        breadcrumbs={[{ label: "Initiative" }]}
      />

      {/* Stats */}
      <section className="bg-surface-muted py-12" aria-label="Key metrics">
        <div className="mx-auto max-w-6xl px-4">
          <StatBlock stats={stats} />
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-4 py-12">
        <article
          className="prose prose-lg max-w-3xl
            prose-headings:font-bold prose-headings:text-primary
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-text-muted prose-p:leading-relaxed prose-p:mb-5
            prose-strong:text-text prose-strong:font-semibold
            prose-li:text-text-muted"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>

      {/* Timeline */}
      <section className="bg-surface-muted py-14" aria-labelledby="timeline-heading">
        <div className="mx-auto max-w-6xl px-4">
          <h2 id="timeline-heading" className="text-2xl font-bold text-primary">
            Implementation Timeline
          </h2>
          <div className="mt-8 space-y-0">
            {milestones.map((m, i) => (
              <div key={i} className="relative flex gap-6 pb-8 last:pb-0">
                {/* Vertical line */}
                {i < milestones.length - 1 && (
                  <div className="absolute top-6 left-[19px] h-full w-0.5 bg-border" aria-hidden="true" />
                )}
                {/* Dot */}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-white">
                  <div className="h-3 w-3 rounded-full bg-primary" />
                </div>
                {/* Content */}
                <div className="rounded-lg border border-border bg-white p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-wider text-accent">
                    {m.quarter}
                  </p>
                  <h3 className="mt-1 text-base font-semibold text-text">{m.title}</h3>
                  <p className="mt-1 text-sm text-text-muted">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
