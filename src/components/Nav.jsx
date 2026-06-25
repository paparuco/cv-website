import { useEffect, useState } from 'react'
import { profile } from '../data/cv'

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-slate-950/80 backdrop-blur border-b border-slate-800/60' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm font-semibold text-slate-100">
          RC<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-7 text-sm md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className="text-slate-400 transition-colors hover:text-accent">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${profile.email}`}
          className="hidden rounded-full border border-accent/40 px-4 py-1.5 text-sm font-medium text-accent transition-colors hover:bg-accent/10 md:inline-block"
        >
          Get in touch
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="text-slate-300 md:hidden"
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-slate-800/60 bg-slate-950/95 px-6 py-3 text-sm md:hidden">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="block py-2 text-slate-300 hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
