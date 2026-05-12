import { type Metadata } from "next";
import { PageHeader } from "~/components/PageHeader";
import { siteConfig } from "~/lib/metadata";

export const metadata: Metadata = {
  title: "Contact Us",
};

const contactMethods = [
  {
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <path d="M22 6l-10 7L2 6" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: "Office Address",
    value: siteConfig.contact.address,
    href: `https://maps.google.com/?q=${encodeURIComponent(siteConfig.contact.address)}`,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Get in touch with the Florida Forward Initiative team."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact methods */}
          <div>
            <h2 className="text-2xl font-bold text-primary">Get in Touch</h2>
            <p className="mt-3 text-text-muted">
              We welcome inquiries from local governments, community organizations,
              employers, media, and the public.
            </p>

            <div className="mt-8 space-y-4">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.label === "Office Address" ? "_blank" : undefined}
                  rel={method.label === "Office Address" ? "noopener noreferrer" : undefined}
                  className="group flex items-start gap-4 rounded-xl border border-border bg-white p-5 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    {method.icon}
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                      {method.label}
                    </p>
                    <p className="mt-1 font-medium text-text group-hover:text-primary">
                      {method.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Office hours and directions */}
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-surface-muted p-6">
              <h2 className="text-lg font-semibold text-primary">Office Hours</h2>
              <dl className="mt-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <dt className="text-text-muted">Monday – Friday</dt>
                  <dd className="font-medium text-text">8:00 AM – 5:00 PM ET</dd>
                </div>
                <div className="flex justify-between text-sm">
                  <dt className="text-text-muted">Saturday – Sunday</dt>
                  <dd className="font-medium text-text">Closed</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-xl border border-border bg-surface-muted p-6">
              <h2 className="text-lg font-semibold text-primary">For Media Inquiries</h2>
              <p className="mt-3 text-sm text-text-muted">
                Members of the press should direct inquiries to the Governor&apos;s
                Communications Office.
              </p>
              <a
                href="https://www.flgov.com/eog/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                Governor&apos;s Communications Office
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M5 11L11 5M11 5H6M11 5v5" />
                </svg>
              </a>
            </div>

            <div className="rounded-xl border border-border bg-surface-muted p-6">
              <h2 className="text-lg font-semibold text-primary">Partnership Opportunities</h2>
              <p className="mt-3 text-sm text-text-muted">
                Local governments, employers, and community organizations interested
                in participating in the Florida Forward Initiative can reach out via email
                with a brief description of their interest and we will connect you with
                the appropriate program area.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
