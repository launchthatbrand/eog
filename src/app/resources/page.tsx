import { type Metadata } from "next";
import { PageHeader } from "~/components/PageHeader";
import { ResourceList } from "~/components/ResourceList";

export const metadata: Metadata = {
  title: "Resources",
};

const reports = [
  {
    title: "Florida Forward Initiative — Program Overview",
    description: "Comprehensive overview of the initiative's four program areas, goals, and governance structure.",
    type: "pdf" as const,
    href: "#",
    size: "2.4 MB",
  },
  {
    title: "Q1 2026 Progress Report",
    description: "First quarterly report covering initiative milestones, expenditures, and performance metrics.",
    type: "pdf" as const,
    href: "#",
    size: "1.8 MB",
  },
  {
    title: "Infrastructure Investment Map",
    description: "Interactive map of priority infrastructure projects across Florida's 67 counties.",
    type: "link" as const,
    href: "#",
  },
  {
    title: "Workforce Partnership Directory",
    description: "List of participating state colleges, CareerSource offices, and employer partners.",
    type: "pdf" as const,
    href: "#",
    size: "890 KB",
  },
  {
    title: "Community Resilience Vulnerability Index — Methodology",
    description: "Technical documentation for the data-driven index used to prioritize resilience investments.",
    type: "pdf" as const,
    href: "#",
    size: "1.2 MB",
  },
];

const externalLinks = [
  {
    title: "Enterprise Florida",
    description: "Florida's primary economic development organization and initiative partner.",
    type: "link" as const,
    href: "https://www.enterpriseflorida.com",
  },
  {
    title: "Florida Department of Transportation",
    description: "Transportation infrastructure planning and project delivery.",
    type: "link" as const,
    href: "https://www.fdot.gov",
  },
  {
    title: "Florida Department of Economic Opportunity",
    description: "Workforce development, community planning, and economic opportunity programs.",
    type: "link" as const,
    href: "https://www.floridajobs.org",
  },
  {
    title: "CareerSource Florida",
    description: "Statewide workforce investment network connecting employers and job seekers.",
    type: "link" as const,
    href: "https://careersourceflorida.com",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        title="Resources"
        description="Reports, documents, and reference materials related to the Florida Forward Initiative."
        breadcrumbs={[{ label: "Resources" }]}
      />

      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="space-y-12">
          {/* Reports */}
          <section aria-labelledby="reports-heading">
            <h2 id="reports-heading" className="text-2xl font-bold text-primary">
              Reports & Publications
            </h2>
            <p className="mt-2 text-text-muted">
              Official reports, fact sheets, and program documentation.
            </p>
            <div className="mt-6">
              <ResourceList resources={reports} />
            </div>
          </section>

          {/* External links */}
          <section aria-labelledby="links-heading">
            <h2 id="links-heading" className="text-2xl font-bold text-primary">
              Partner Organizations
            </h2>
            <p className="mt-2 text-text-muted">
              State agencies and organizations participating in the initiative.
            </p>
            <div className="mt-6">
              <ResourceList resources={externalLinks} />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
