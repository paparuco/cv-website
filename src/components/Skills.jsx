import { skills } from '../data/cv'

export default function Skills() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {skills.map((s) => (
        <div
          key={s.group}
          className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 transition-colors hover:border-slate-700"
        >
          <h3 className="mb-3 font-mono text-sm font-medium text-accent">{s.group}</h3>
          <div className="flex flex-wrap gap-2">
            {s.items.map((item) => (
              <span
                key={item}
                className="rounded-md bg-slate-800/70 px-2.5 py-1 text-sm text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
