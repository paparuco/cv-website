import { skills } from '../data/cv'

// Build a Simple Icons CDN URL. Optional brand-color override keeps near-black
// logos (Linux, Copilot) visible on the dark background.
function iconUrl({ icon, color }) {
  return `https://cdn.simpleicons.org/${icon}${color ? `/${color}` : ''}`
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
                {item.icon && (
                  <img
                    src={iconUrl(item)}
                    alt=""
                    aria-hidden="true"
                    width="16"
                    height="16"
                    loading="lazy"
                    className="h-4 w-4"
                    // Hide gracefully if a logo ever 404s, leaving just the label.
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                )}
                {item.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
