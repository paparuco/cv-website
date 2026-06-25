import { profile, socials } from '../data/cv'
import { socialIcons } from '../icons'

// Social icons inherit the button's text color (currentColor) so the near-black
// GitHub mark stays visible and recolors on hover.
function SocialIcon({ label }) {
  const icon = socialIcons[label]
  if (!icon) return null
  return (
    <svg role="img" aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d={icon.path} />
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="top" className="backdrop-grid relative">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-8 px-6 pb-20 pt-36 md:flex-row md:items-center md:pt-44">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="h-32 w-32 animate-float-slow rounded-full border-2 border-accent/30 object-cover shadow-xl shadow-accent/10 ring-4 ring-stone-900/60 md:h-40 md:w-40"
        />

        <div className="animate-fade-up">
          <h1 className="font-display text-5xl font-semibold tracking-tight text-stone-50 sm:text-6xl md:text-7xl">
            {profile.name}
          </h1>
          <h2 className="mt-3 text-xl font-medium text-accent sm:text-2xl">
            {profile.title}
          </h2>
          <p className="mt-3 flex items-center gap-1.5 text-sm text-stone-500">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-6-5.686-6-10a6 6 0 1 1 12 0c0 4.314-6 10-6 10z" />
              <circle cx="12" cy="11" r="2" />
            </svg>
            {profile.location}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#experience"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-stone-950 shadow-lg shadow-accent/20 transition-transform hover:scale-[1.03]"
            >
              View my experience
            </a>
            {profile.resumeUrl && (
              <a
                href={`${import.meta.env.BASE_URL}${profile.resumeUrl}`}
                target="_blank"
                rel="noreferrer"
                download
                className="inline-flex items-center gap-2 rounded-full border border-accent/50 px-5 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent/10"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
                </svg>
                Download CV
              </a>
            )}
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={s.label}
                className="inline-flex items-center gap-2 rounded-full border border-stone-700 px-4 py-2.5 text-sm font-medium text-stone-300 transition-colors hover:border-accent hover:text-accent"
              >
                <SocialIcon label={s.label} />
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
