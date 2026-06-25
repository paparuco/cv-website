import { skills } from '../data/cv'
import { iconMap } from '../icons'

// Render a bundled Simple Icon as inline SVG. `color` overrides the brand hex
// (used for near-black logos like Linux/Copilot so they stay visible on dark).
function BrandIcon({ slug, color }) {
  const icon = iconMap[slug]
  if (!icon) return null
  return (
    <svg
      role="img"
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0"
      fill={`#${color || icon.hex}`}
    >
      <path d={icon.path} />
    </svg>
  )
}

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
                key={item.name}
                className="inline-flex items-center gap-1.5 rounded-md bg-slate-800/70 px-2.5 py-1 text-sm text-slate-300"
              >
                {item.icon && <BrandIcon slug={item.icon} color={item.color} />}
                {item.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
