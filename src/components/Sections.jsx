import { Icon } from './Icon'
import { Terminal } from './Terminal'
import { profile, featured, projects, skills, ai, timeline } from '../data'

function Label({ n, children }) {
  return (
    <h2 className="section-label mb-10">
      <span className="text-accent">{n}</span>
      {children}
    </h2>
  )
}

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden border-b border-line">
      <div className="absolute left-5 top-0 h-1.5 w-16 bg-accent sm:left-8" aria-hidden="true" />
      <div className="mx-auto grid max-w-content gap-14 px-5 pb-20 pt-36 sm:px-8 md:grid-cols-[1.25fr_1fr] md:items-end md:pb-28 md:pt-44">
        <div>
          <p className="mb-5 font-mono text-sm text-accent">
            <span className="text-ink-3">~/</span>gabriel-medina <span className="text-ink-3">$</span> whoami
          </p>
          <h1 className="font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.035em] text-ink sm:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 font-display text-xl font-bold text-ink-2 sm:text-2xl">
            {profile.role} <span className="text-accent">·</span> Full Stack
          </p>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-2">{profile.intro}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#proyectos" className="btn btn-primary">Ver proyectos</a>
            <a href={profile.cv} className="btn btn-ghost" download>
              <Icon name="download" /> Descargar CV
            </a>
          </div>
        </div>

        <Terminal />
      </div>
    </section>
  )
}

export function Featured() {
  return (
    <section id="proyectos" className="mx-auto max-w-content px-5 py-24 sm:px-8 md:py-32">
      <Label n="01">Proyecto destacado</Label>

      <article className="grid gap-10 rounded-2xl border border-line p-6 sm:p-10 md:grid-cols-[1.3fr_1fr]">
        <div className="border-l-[3px] border-accent pl-6">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="font-display text-3xl font-extrabold tracking-tight text-ink">{featured.name}</h3>
            <span className="font-mono text-xs text-ink-3">{featured.period}</span>
          </div>
          <p className="mt-3 text-lg text-ink-2">{featured.summary}</p>

          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-5">
            {featured.metrics.map((m) => (
              <div key={m.label}>
                <dt className="sr-only">{m.label}</dt>
                <dd className="font-display text-2xl font-extrabold tracking-tight text-ink">{m.value}</dd>
                <dd className="font-mono text-[11px] uppercase tracking-wider text-ink-3">{m.label}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href={featured.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Ver la web <Icon name="arrow" />
            </a>
            <a href={featured.repo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <Icon name="github" /> Código
            </a>
          </div>
        </div>

        <div>
          <ul className="space-y-4">
            {featured.highlights.map((h) => (
              <li key={h} className="grid grid-cols-[1.25rem_1fr] text-ink-2">
                <span className="mt-3 h-px w-3 bg-accent" aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-2">
            {featured.stack.map((s) => <span key={s} className="tag">{s}</span>)}
          </div>
        </div>
      </article>

      <h3 className="mb-6 mt-20 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-ink-3">Otros proyectos</h3>
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p) => (
          <a key={p.name} href={p.url || p.repo} target="_blank" rel="noopener noreferrer"
             className="group flex flex-col rounded-xl border border-line p-6 transition hover:-translate-y-0.5 hover:border-accent/60">
            <div className="flex items-center justify-between gap-3">
              <h4 className="font-display text-lg font-bold text-ink">{p.name}</h4>
              {p.status
                ? <span className="rounded-full bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] text-accent">{p.status}</span>
                : <Icon name="arrow" className="h-4 w-4 text-ink-3 transition group-hover:text-accent" />}
            </div>
            <p className="mt-2 flex-1 text-ink-2">{p.description}</p>
            <p className="mt-5 font-mono text-xs text-ink-3">{p.stack.join(' · ')}</p>
          </a>
        ))}
      </div>
    </section>
  )
}

export function Stack() {
  return (
    <section id="stack" className="border-y border-line bg-panel">
      <div className="mx-auto grid max-w-content gap-14 px-5 py-24 sm:px-8 md:grid-cols-[1.3fr_1fr] md:py-32">
        <div>
          <Label n="02">Stack</Label>
          <dl className="grid gap-8 sm:grid-cols-2">
            {skills.map((g) => (
              <div key={g.group}>
                <dt className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-3">{g.group}</dt>
                <dd className="flex flex-wrap gap-2">
                  {g.items.map((s) => <span key={s} className={`tag ${g.key.includes(s) ? 'tag-key' : ''}`}>{s}</span>)}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <aside className="self-start rounded-2xl bg-graphite p-8 text-[#C9CFD6]" style={{ backgroundImage: 'radial-gradient(circle at 100% 0, rgba(46,196,170,.28), transparent 40%)' }}>
          <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-white">
            <span className="text-mint">03</span>&nbsp;&nbsp;Desarrollo con IA
          </h2>
          <p className="mt-5 leading-relaxed">{ai.text}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {ai.tools.map((t) => <span key={t} className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-xs text-white">{t}</span>)}
          </div>
          <ul className="mt-6 space-y-2">
            {ai.uses.map((u) => (
              <li key={u} className="flex gap-3 text-[#DDE2E7]"><span className="font-bold text-mint">›</span>{u}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}

export function Timeline() {
  return (
    <section id="trayectoria" className="mx-auto max-w-content px-5 py-24 sm:px-8 md:py-32">
      <Label n="04">Trayectoria</Label>
      <ol className="divide-y divide-line border-y border-line">
        {timeline.map((t) => (
          <li key={t.title} className="grid gap-2 py-7 md:grid-cols-[11rem_1fr] md:gap-10">
            <span className="font-mono text-xs text-ink-3 md:pt-1.5">{t.period}</span>
            <div>
              <h3 className="font-display text-xl font-bold text-ink">{t.title}</h3>
              <p className="mt-1 font-medium text-accent">{t.place}</p>
              {t.detail && <p className="mt-3 max-w-2xl text-ink-2">{t.detail}</p>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contacto" className="border-t border-line bg-panel">
      <div className="mx-auto max-w-content px-5 py-24 text-center sm:px-8 md:py-32">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">05 · Contacto</p>
        <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          ¿Hablamos?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-ink-2">
          Busco mi primer puesto como desarrollador en un equipo exigente del que aprender y en el que aportar.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href={`mailto:${profile.email}`} className="btn btn-primary"><Icon name="mail" /> {profile.email}</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><Icon name="github" /> github.com/gab271</a>
        </div>
        <p className="mt-8 inline-flex items-center gap-2 text-sm text-ink-3"><Icon name="pin" /> {profile.location}</p>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-2 px-5 py-8 font-mono text-xs text-ink-3 sm:flex-row sm:px-8">
        <span>© {new Date().getFullYear()} Gabriel Medina</span>
        <span>Hecho con React, Vite y Tailwind</span>
      </div>
    </footer>
  )
}
