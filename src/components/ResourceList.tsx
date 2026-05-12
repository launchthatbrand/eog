interface Resource {
  title: string;
  description: string;
  type: "pdf" | "link" | "doc";
  href: string;
  size?: string;
}

interface ResourceListProps {
  resources: Resource[];
}

const typeIcons: Record<Resource["type"], string> = {
  pdf: "PDF",
  doc: "DOC",
  link: "URL",
};

export const ResourceList = ({ resources }: ResourceListProps) => (
  <div className="flex flex-col gap-3">
    {resources.map((resource, i) => (
      <a
        key={i}
        href={resource.href}
        className="group flex items-start gap-4 rounded-lg border border-border bg-white p-4 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
        target={resource.type === "link" ? "_blank" : undefined}
        rel={resource.type === "link" ? "noopener noreferrer" : undefined}
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
          {typeIcons[resource.type]}
        </div>
        <div className="flex-1">
          <p className="font-medium text-text group-hover:text-primary">
            {resource.title}
          </p>
          <p className="mt-1 text-sm text-text-muted">{resource.description}</p>
          {resource.size && (
            <p className="mt-1 text-xs text-text-muted">{resource.size}</p>
          )}
        </div>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="shrink-0 text-text-muted transition-colors group-hover:text-primary"
          aria-hidden="true"
        >
          {resource.type === "link" ? (
            <path d="M5 15L15 5M15 5H8M15 5v7" />
          ) : (
            <path d="M10 3v10M6 9l4 4 4-4M4 15h12" />
          )}
        </svg>
      </a>
    ))}
  </div>
);
