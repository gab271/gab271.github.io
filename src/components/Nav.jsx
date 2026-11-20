import { useEffect, useState } from 'react'
import { Icon } from './Icon'

const links = [
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#stack', label: 'Stack' },
  { href: '#trayectoria', label: 'Trayectoria' },
  { href: '#contacto', label: 'Contacto' },
]

function useTheme() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch (e) { /* almacenamiento no disponible */ }
  }, [dark])
  return [dark, setDark]
}

export function Nav() {
  const [dark, setDark] = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? 'border-b border-line bg-paper/85 backdrop-blur-md' : 'border-b border-transparent'}`}>
      <nav className="mx-auto flex h-16 max-w-content items-center justify-between px-5 sm:px-8" aria-label="Principal">
        <a href="#inicio" className="font-mono text-sm font-semibold text-ink">
          <span className="text-ink-3">~/</span>gabriel-medina
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-ink-2 transition hover:text-accent">{l.label}</a>
          ))}
          <button onClick={() => setDark(!dark)} className="rounded-full p-2 text-ink-2 transition hover:text-accent" aria-label={dark ? 'Activar modo claro' : 'Activar modo oscuro'}>
            <Icon name={dark ? 'sun' : 'moon'} />
          </button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <button onClick={() => setDark(!dark)} className="rounded-full p-2 text-ink-2" aria-label={dark ? 'Activar modo claro' : 'Activar modo oscuro'}>
            <Icon name={dark ? 'sun' : 'moon'} />
          </button>
          <button onClick={() => setOpen(!open)} className="rounded-full p-2 text-ink" aria-label="Menú" aria-expanded={open}>
            <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-b border-line bg-paper px-5 pb-4 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-base text-ink-2 hover:text-accent">{l.label}</a>
          ))}
        </div>
      )}
    </header>
  )
}
