export default function Section({ id, index, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16 md:py-20">
      <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-slate-100">
        {index && <span className="font-mono text-base font-medium text-accent">{index}.</span>}
        {title}
        <span className="ml-2 h-px flex-1 bg-slate-800" />
      </h2>
      {children}
    </section>
  )
}
