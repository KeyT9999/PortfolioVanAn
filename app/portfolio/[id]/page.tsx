import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { portfolioAccentStyles, portfolioItems } from '@/data/portfolio'

export function generateStaticParams() {
  return portfolioItems.map((item) => ({
    id: String(item.id),
  }))
}

export default function PortfolioDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const id = Number(params.id)
  const item = portfolioItems.find((entry) => entry.id === id)

  if (!item) {
    notFound()
  }

  const accent = portfolioAccentStyles[item.accent]

  return (
    <div className="min-h-screen bg-[var(--color-paper)] py-8 text-[var(--color-ink)] md:py-12">
      <div className="section-shell">
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-[var(--color-ink)] transition hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Quay lại portfolio
        </Link>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <section className="space-y-6">
            <span
              className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] ${accent.badge}`}
            >
              {item.category}
            </span>
            <div>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                {item.title}
              </h1>
              <p className="mt-3 text-lg font-medium text-[var(--color-accent)]">
                {item.role}
              </p>
              <p className="muted-copy mt-5 max-w-3xl">{item.summary}</p>
            </div>

            <div className="surface-card p-6 md:p-7">
              <span className="eyebrow">Impact snapshot</span>
              <p className="mt-4 text-lg leading-8 text-[var(--color-ink)]">
                {item.highlight}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {item.star.map((block) => (
                <article key={block.title} className="surface-card p-6">
                  <p className="eyebrow">{block.title}</p>
                  <ul className="mt-4 space-y-3">
                    {block.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-7 text-[var(--color-ink)]"
                      >
                        <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <article
              className={`surface-card overflow-hidden border ${accent.border}`}
            >
              <div className={`bg-gradient-to-br ${accent.panel} p-6 md:p-7`}>
                <span className="eyebrow text-[var(--color-ink)]">Timeline</span>
                <p className="mt-3 text-2xl font-semibold text-[var(--color-ink)]">
                  {item.timeline}
                </p>
                <p className="mt-4 text-sm leading-7 text-[var(--color-ink)]/78">
                  {item.mediaNote}
                </p>
              </div>

              <div className="space-y-5 p-6 md:p-7">
                <div>
                  <span className="eyebrow">Metrics</span>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {item.metrics.map((metric) => (
                      <div
                        key={`${item.id}-${metric.label}`}
                        className="rounded-2xl border border-black/8 bg-[var(--color-surface)] px-4 py-4"
                      >
                        <p className="text-lg font-semibold">{metric.value}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="eyebrow">Proof points</span>
                  <ul className="mt-4 space-y-2">
                    {item.proofPoints.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-7 text-[var(--color-ink)]"
                      >
                        <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="eyebrow">Skills</span>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-black/5 px-3 py-1 text-xs font-medium text-[var(--color-ink)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-5 py-3 text-sm font-semibold text-[var(--color-paper)] transition hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                  >
                    {item.linkLabel ?? 'Xem thêm'}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </article>
          </aside>
        </div>
      </div>
    </div>
  )
}
