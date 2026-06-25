import { profile, socials } from '../data/cv'

export default function Hero() {
  return (
    <section id="top" className="backdrop-grid relative">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-8 px-6 pb-20 pt-36 md:flex-row md:items-center md:pt-44">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="h-28 w-28 rounded-2xl border border-slate-700/60 object-cover shadow-lg shadow-accent/5 md:h-36 md:w-36"
        />

        <div className="animate-fade-up">
          <p className="mb-3 font-mono text-sm text-accent">Hi, my name is</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl md:text-6xl">
            {profile.name}
          </h1>
          <h2 className="mt-2 text-2xl font-semibold text-slate-400 sm:text-3xl">
            {profile.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400">
            {profile.tagline}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#experience"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.03]"
            >
              View my experience
            </a>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="rounded-full border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:border-accent hover:text-accent"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
