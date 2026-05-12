import Link from "next/link";

interface InfoCardProps {
  title: string;
  description: string;
  href?: string;
  icon?: React.ReactNode;
}

export const InfoCard = ({ title, description, href, icon }: InfoCardProps) => {
  const content = (
    <div className="group flex h-full flex-col rounded-lg border border-border/60 bg-white p-7 transition-all hover:border-primary/20 hover:shadow-md">
      {icon && (
        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-primary/8 text-primary">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold leading-snug text-text group-hover:text-primary">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-text-muted">
        {description}
      </p>
      {href && (
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          Learn more
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </span>
      )}
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
};
