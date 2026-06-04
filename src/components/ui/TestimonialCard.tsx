interface TestimonialCardProps {
  quote: string;
  name: string;
  brand: string;
  source: string;
}

export default function TestimonialCard({ quote, name, brand, source }: TestimonialCardProps) {
  return (
    <div className="flex-shrink-0 w-80 bg-surface border border-white/8 rounded-sm p-6 mx-3">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1l1.39 2.82L10.5 4.27l-2.25 2.19.53 3.09L6 8.02 3.22 9.55l.53-3.09L1.5 4.27l3.11-.45L6 1z" fill="#C9A84C" />
          </svg>
        ))}
      </div>
      <blockquote className="font-body text-sm text-text-primary/80 leading-relaxed mb-4">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div>
        <p className="font-body text-sm font-semibold text-text-primary">{name}</p>
        <p className="font-mono text-xs text-muted">{brand} · {source}</p>
      </div>
    </div>
  );
}
