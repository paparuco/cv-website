import { projects } from '../data/cv'

export default function Projects() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {projects.map((p) => (
        <a
          key={p.name}
          href={p.url}
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col rounded-xl border border-slate-800 bg-slate-900/40 p-6 transition-all hover:-translate-y-1 hover:border-accent/50"
        >
          <div className="mb-4 flex items-center justify-between">
            <svg className="h-7 w-7 text-accent" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.21 3.44 9.63 8.21 11.19.6.11.82-.25.82-.57 0-.28-.01-1.02-.02-2-3.34.71-4.04-1.58-4.04-1.58-.55-1.36-1.34-1.73-1.34-1.73-1.09-.73.08-.71.08-.71 1.2.08 1.84 1.21 1.84 1.21 1.07 1.79 2.81 1.27 3.5.97.11-.76.42-1.27.76-1.56-2.67-.29-5.47-1.31-5.47-5.81 0-1.28.47-2.33 1.24-3.15-.12-.29-.54-1.47.12-3.07 0 0 1.01-.32 3.3 1.2a11.6 11.6 0 0 1 6 0c2.29-1.52 3.3-1.2 3.3-1.2.66 1.6.24 2.78.12 3.07.77.82 1.23 1.87 1.23 3.15 0 4.51-2.81 5.51-5.49 5.8.43.36.81 1.08.81 2.18 0 1.57-.01 2.84-.01 3.23 0 .32.21.69.83.57A12.01 12.01 0 0 0 24 12.29C24 5.78 18.63.5 12 .5Z" />
            </svg>
            <span className="text-xs font-medium text-slate-500 transition-colors group-hover:text-accent">
              View repo ↗
            </span>
          </div>
          <h3 className="mb-2 font-mono text-base font-semibold text-slate-100 group-hover:text-accent">
            {p.name}
          </h3>
          <p className="flex-1 text-sm leading-relaxed text-slate-400">{p.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="font-mono text-xs text-slate-500">
                {t}
              </span>
            ))}
          </div>
        </a>
      ))}
    </div>
  )
}
