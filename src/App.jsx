import Nav from './components/Nav'
import Hero from './components/Hero'
import Section from './components/Section'
import Skills from './components/Skills'
import Experience from './components/Experience'
import { profile, socials } from './data/cv'

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />

        <Section id="about" index="01" title="About">
          <div className="grid gap-8 md:grid-cols-3">
            <p className="text-base leading-relaxed text-slate-400 md:col-span-2">
              {profile.about}
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-500">Location</span>
                <span className="text-slate-300">{profile.location}</span>
              </li>
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-500">Email</span>
                <a href={`mailto:${profile.email}`} className="text-accent hover:underline">
                  {profile.email}
                </a>
              </li>
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-500">GitHub</span>
                <a href="https://github.com/paparuco" target="_blank" rel="noreferrer" className="text-accent hover:underline">
                  @paparuco
                </a>
              </li>
            </ul>
          </div>
        </Section>

        <Section id="skills" index="02" title="Skills & Tooling">
          <Skills />
        </Section>

        <Section id="experience" index="03" title="Experience & Education">
          <Experience />
        </Section>

        <Section id="contact" index="04" title="Get in touch">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 text-center md:p-12">
            <h3 className="text-2xl font-bold text-slate-100">Let's build something that automates the boring parts.</h3>
            <p className="mx-auto mt-3 max-w-lg text-slate-400">
              Whether you have an opportunity, a question, or just want to connect — my inbox is always open.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.03]"
            >
              Say hello
            </a>
          </div>
        </Section>
      </main>

      <footer className="border-t border-slate-800/60 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 text-sm text-slate-500 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <div className="flex gap-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="transition-colors hover:text-accent"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
