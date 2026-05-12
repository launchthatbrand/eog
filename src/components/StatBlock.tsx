interface StatBlockProps {
  stats: Array<{
    value: string;
    label: string;
    description?: string;
  }>;
}

export const StatBlock = ({ stats }: StatBlockProps) => (
  <div className="grid gap-px overflow-hidden rounded-lg border border-border/60 bg-border/40 sm:grid-cols-2 lg:grid-cols-4">
    {stats.map((stat, i) => (
      <div
        key={i}
        className="bg-white p-7 text-center"
      >
        <p className="text-3xl font-bold tracking-tight text-primary">{stat.value}</p>
        <p className="mt-1.5 text-sm font-semibold text-text">{stat.label}</p>
        {stat.description && (
          <p className="mt-2 text-xs text-text-muted">{stat.description}</p>
        )}
      </div>
    ))}
  </div>
);
