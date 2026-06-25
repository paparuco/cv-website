import { experience, education, certifications, volunteering } from '../data/cv'

const asset = (p) => `${import.meta.env.BASE_URL}${p}`

function Logo({ src, alt }) {
  if (!src) return null
  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-stone-700/70 bg-white/95 shadow-sm">
      <img src={asset(src)} alt={alt} className="h-full w-full object-contain p-1" loading="lazy" />
    </span>
  )
}

export default function Experience() {
  return (
    <div className="space-y-12">
      {/* Roles */}
      <ol className="space-y-6">
        {experience.map((job) => (
          <li
            key={`${job.company}-${job.role}`}
            className="flex gap-4 rounded-2xl border border-stone-800 bg-stone-900/40 p-5 transition-colors hover:border-accent/40"
          >
            <Logo src={job.logo} alt={`${job.company} logo`} />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <h3 className="text-lg font-semibold text-stone-100">
                  {job.role} <span className="text-accent">· {job.company}</span>
                </h3>
                <span className="font-mono text-xs text-stone-500">{job.period}</span>
              </div>
              {job.location && <p className="mt-0.5 text-sm text-stone-500">{job.location}</p>}
              <ul className="mt-3 space-y-1.5">
                {job.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2 text-sm leading-relaxed text-stone-400">
                    <span className="mt-1.5 text-accent">▹</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      {/* Education + certs */}
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-4 font-mono text-sm font-medium text-accent">Education</h3>
          <ul className="space-y-4">
            {education.map((e) => (
              <li key={e.degree} className="flex gap-3">
                <Logo src={e.logo} alt={`${e.school} logo`} />
                <div>
                  <p className="font-semibold text-stone-200">{e.degree}</p>
                  <p className="text-sm text-stone-400">{e.school}</p>
                  <p className="font-mono text-xs text-stone-500">{e.period}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {certifications.length > 0 && (
          <div>
            <h3 className="mb-4 font-mono text-sm font-medium text-accent">Certifications</h3>
            <ul className="space-y-2">
              {certifications.map((c) => (
                <li key={c} className="flex gap-2 text-sm text-stone-300">
                  <span className="text-accent">✓</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Volunteering */}
      {volunteering.length > 0 && (
        <div>
          <h3 className="mb-4 font-mono text-sm font-medium text-accent">Volunteering</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {volunteering.map((v) => (
              <div key={v.role} className="rounded-xl border border-stone-800 bg-stone-900/40 p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <p className="font-semibold text-stone-200">{v.role}</p>
                  <span className="font-mono text-xs text-stone-500">{v.period}</span>
                </div>
                <p className="text-sm text-stone-400">{v.org}</p>
                <p className="mt-2 text-sm leading-relaxed text-stone-500">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
