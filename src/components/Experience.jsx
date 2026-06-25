import { experience, education, certifications, volunteering } from '../data/cv'

export default function Experience() {
  return (
    <div className="space-y-12">
      {/* Roles */}
      <ol className="relative space-y-8 border-l border-slate-800 pl-6">
        {experience.map((job) => (
          <li key={`${job.company}-${job.role}`} className="relative">
            <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-slate-950" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
              <h3 className="text-lg font-semibold text-slate-100">
                {job.role} <span className="text-accent">· {job.company}</span>
              </h3>
              <span className="font-mono text-xs text-slate-500">{job.period}</span>
            </div>
            {job.location && <p className="mt-0.5 text-sm text-slate-500">{job.location}</p>}
            <ul className="mt-3 space-y-1.5">
              {job.bullets.map((b, i) => (
                <li key={i} className="flex gap-2 text-sm leading-relaxed text-slate-400">
                  <span className="mt-1.5 text-accent">▹</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      {/* Education + certs */}
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-4 font-mono text-sm font-medium text-accent">Education</h3>
          <ul className="space-y-4">
            {education.map((e) => (
              <li key={e.school}>
                <p className="font-semibold text-slate-200">{e.degree}</p>
                <p className="text-sm text-slate-400">{e.school}</p>
                <p className="font-mono text-xs text-slate-500">{e.period}</p>
              </li>
            ))}
          </ul>
        </div>

        {certifications.length > 0 && (
          <div>
            <h3 className="mb-4 font-mono text-sm font-medium text-accent">Certifications</h3>
            <ul className="space-y-2">
              {certifications.map((c) => (
                <li key={c} className="flex gap-2 text-sm text-slate-300">
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
              <div key={v.role} className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <p className="font-semibold text-slate-200">{v.role}</p>
                  <span className="font-mono text-xs text-slate-500">{v.period}</span>
                </div>
                <p className="text-sm text-slate-400">{v.org}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
