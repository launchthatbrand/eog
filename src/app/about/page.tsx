import { type Metadata } from "next";
import { PageHeader } from "~/components/PageHeader";
import { getPageContent } from "~/lib/content";

export const metadata: Metadata = {
  title: "About the Initiative",
};

export default async function AboutPage() {
  const { html, frontmatter } = await getPageContent("about");

  return (
    <>
      <PageHeader
        title={frontmatter.title}
        description={frontmatter.description}
        breadcrumbs={[{ label: "About" }]}
      />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-12 lg:grid-cols-3">
          <article
            className="prose prose-lg max-w-none lg:col-span-2
              prose-headings:font-bold prose-headings:text-primary
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-p:text-text-muted prose-p:leading-relaxed prose-p:mb-5
              prose-strong:text-text prose-strong:font-semibold
              prose-li:text-text-muted"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          <aside className="space-y-6">
            <div className="rounded-xl border border-border bg-surface-muted p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-text-muted">
                At a Glance
              </h2>
              <dl className="mt-4 space-y-4">
                <div>
                  <dt className="text-xs font-medium text-text-muted">Established</dt>
                  <dd className="mt-1 text-sm font-semibold text-text">2026</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-text-muted">Oversight</dt>
                  <dd className="mt-1 text-sm font-semibold text-text">
                    Executive Office of the Governor
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-text-muted">Focus Areas</dt>
                  <dd className="mt-1 text-sm font-semibold text-text">
                    Infrastructure, Workforce, Economy, Resilience
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-text-muted">Partner Agencies</dt>
                  <dd className="mt-1 text-sm font-semibold text-text">
                    DEO, FDOT, DOE, Enterprise Florida
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <p className="text-xs text-text-muted">
                Last updated: {frontmatter.lastUpdated}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
