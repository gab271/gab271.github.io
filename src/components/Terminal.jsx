import { useEffect, useRef, useState } from 'react'
import { profile, featured, projects, skills, ai } from '../data'

const PROMPT = 'C:\\gabriel>'

const W = ({ children }) => <span className="text-white">{children}</span>
const M = ({ children }) => <span className="text-mint">{children}</span>
const D = ({ children }) => <span className="text-white/45">{children}</span>
const A = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-mint underline decoration-mint/40 underline-offset-2 hover:decoration-mint">
    {children}
  </a>
)

// Proyectos que se pueden abrir con "abrir <nombre>"
const openable = {
  canary: featured.url,
  'canary-code': featured.repo,
  ...Object.fromEntries(projects.map((p) => [p.key, p.repo])),
  github: profile.github,
}

const snippet = (
  <>
    <M>const</M> gabriel = {'{'}{'\n'}
    {'  '}rol: <W>'Junior Developer'</W>,{'\n'}
    {'  '}stack: [<W>'Java'</W>, <W>'Spring Boot'</W>,{'\n'}
    {'          '}<W>'TypeScript'</W>, <W>'React'</W>],{'\n'}
    {'  '}ia: <W>'en mi día a día'</W>,{'\n'}
    {'  '}base: <W>'Gran Canaria'</W>,{'\n'}
    {'  '}busca: <W>'mi primer equipo'</W>{'\n'}
    {'}'}
  </>
)

const helpRows = [
  ['help', 'muestra esta ayuda'],
  ['whoami', 'quién soy'],
  ['proyectos', 'lista mis proyectos (también: dir, ls)'],
  ['abrir <nombre>', 'abre un proyecto: canary, tcg, ascend'],
  ['stack', 'tecnologías con las que trabajo'],
  ['ia', 'cómo uso la inteligencia artificial'],
  ['contacto', 'email y GitHub'],
  ['cv', 'descarga mi currículum en PDF'],
  ['type gabriel.js', 'muestra el archivo de inicio (también: cat)'],
  ['cls', 'limpia la pantalla (también: clear, Ctrl+L)'],
]

const COMMANDS = ['help', 'ayuda', 'whoami', 'proyectos', 'projects', 'dir', 'ls', 'abrir', 'open', 'stack', 'ia', 'contacto', 'contact', 'cv', 'type', 'cat', 'cls', 'clear', 'echo', 'date', 'exit', 'sudo']

function run(raw, { clear, download }) {
  const input = raw.trim()
  if (!input) return null
  const [cmd, ...args] = input.split(/\s+/)
  const arg = args.join(' ')

  switch (cmd.toLowerCase()) {
    case 'help':
    case 'ayuda':
      return (
        <div className="grid grid-cols-[auto_1fr] gap-x-4">
          {helpRows.map(([c, d]) => (
            <div key={c} className="contents"><M>{c}</M><D>{d}</D></div>
          ))}
        </div>
      )
    case 'whoami':
      return <><W>{profile.name}</W> — {profile.role} · Full Stack{'\n'}<D>{profile.location}</D></>
    case 'proyectos':
    case 'projects':
    case 'dir':
    case 'ls':
      return (
        <>
          <D> Directorio de C:\gabriel\proyectos{'\n\n'}</D>
          <div className="grid grid-cols-[auto_1fr] gap-x-4">
            <M>★ canary</M>
            <span><W>{featured.name}</W> <D>— en producción ·</D> <A href={featured.url}>canaryweather.xyz</A></span>
            {projects.map((p) => (
              <div key={p.name} className="contents">
                <span>{'  '}{p.key}</span>
                <span><W>{p.name}</W> <D>— {p.stack.join(', ')}{p.status ? ` (${p.status.toLowerCase()})` : ''}</D></span>
              </div>
            ))}
          </div>
          {'\n'}<D>Escribe </D><M>abrir canary</M><D> para verlo.</D>
        </>
      )
    case 'abrir':
    case 'open': {
      const key = arg.toLowerCase()
      if (!key) return <>Uso: <M>abrir {'<'}nombre{'>'}</M> <D>({Object.keys(openable).join(', ')})</D></>
      const url = openable[key]
      if (!url) return <>No encuentro «{arg}». Prueba con: <M>{Object.keys(openable).join(', ')}</M></>
      window.open(url, '_blank', 'noopener,noreferrer')
      return <>Abriendo <A href={url}>{url.replace('https://', '')}</A>…</>
    }
    case 'stack':
      return (
        <div className="grid grid-cols-[auto_1fr] gap-x-4">
          {skills.map((g) => (
            <div key={g.group} className="contents"><D>{g.group}</D><W>{g.items.join(', ')}</W></div>
          ))}
        </div>
      )
    case 'ia':
      return <>{ai.text}{'\n'}<D>Herramientas: </D><W>{ai.tools.join(', ')}</W></>
    case 'contacto':
    case 'contact':
      return (
        <>
          <D>email   </D><a href={`mailto:${profile.email}`} className="text-mint underline decoration-mint/40 underline-offset-2">{profile.email}</a>{'\n'}
          <D>github  </D><A href={profile.github}>github.com/gab271</A>
        </>
      )
    case 'cv':
      download()
      return <>Descargando <W>CV_Gabriel_Medina.pdf</W>… <M>✓</M></>
    case 'type':
    case 'cat':
      if (!arg) return <>Uso: <M>{cmd} gabriel.js</M></>
      if (arg.toLowerCase() === 'gabriel.js') return snippet
      return <>El sistema no puede encontrar el archivo especificado: {arg}</>
    case 'cls':
    case 'clear':
      clear()
      return null
    case 'echo':
      return arg
    case 'date':
      return new Date().toLocaleString('es-ES', { dateStyle: 'full', timeStyle: 'short' })
    case 'sudo':
      return <>Acceso denegado. Aunque si buscas a alguien con ganas de aprender, prueba <M>contacto</M>.</>
    case 'exit':
      return <>No tan rápido: aún no has visto <M>proyectos</M>.</>
    default:
      return <>«{cmd}» no se reconoce como un comando interno o externo.{'\n'}Escribe <M>help</M> para ver los comandos disponibles.</>
  }
}

const initial = [
  { id: 0, input: 'type gabriel.js', output: snippet },
  { id: 1, input: null, output: <D>Terminal interactiva. Escribe <M>help</M> y pulsa Enter.</D> },
]

export function Terminal() {
  const [lines, setLines] = useState(initial)
  const [value, setValue] = useState('')
  const [history, setHistory] = useState([])
  const [hIndex, setHIndex] = useState(-1)
  const inputRef = useRef(null)
  const scrollRef = useRef(null)
  const nextId = useRef(initial.length)

  // Solo baja hasta el final cuando el usuario ejecuta algo (no al cargar la página)
  const mounted = useRef(false)
  useEffect(() => {
    if (!mounted.current) { mounted.current = true; return }
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [lines])

  const download = () => {
    const a = document.createElement('a')
    a.href = profile.cv
    a.download = 'CV_Gabriel_Medina.pdf'
    a.click()
  }

  const submit = () => {
    let cleared = false
    const output = run(value, { clear: () => { cleared = true }, download })
    if (cleared) {
      setLines([])
    } else {
      setLines((l) => [...l, { id: nextId.current++, input: value, output }])
    }
    if (value.trim()) setHistory((h) => [value, ...h].slice(0, 50))
    setHIndex(-1)
    setValue('')
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      submit()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const i = Math.min(hIndex + 1, history.length - 1)
      if (history[i] !== undefined) { setHIndex(i); setValue(history[i]) }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const i = hIndex - 1
      setHIndex(Math.max(i, -1))
      setValue(i >= 0 ? history[i] : '')
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const [first, ...rest] = value.split(' ')
      if (rest.length === 0) {
        const match = COMMANDS.find((c) => c.startsWith(first.toLowerCase()) && first)
        if (match) setValue(match + ' ')
      } else if (['abrir', 'open'].includes(first.toLowerCase())) {
        const match = Object.keys(openable).find((k) => k.startsWith(rest.join(' ').toLowerCase()))
        if (match) setValue(`${first} ${match}`)
      }
    } else if (e.key.toLowerCase() === 'l' && e.ctrlKey) {
      e.preventDefault()
      setLines([])
    }
  }

  return (
    <figure
      className="overflow-hidden rounded-2xl bg-graphite font-mono text-[13px] leading-6 text-[#C9CFD6] shadow-2xl shadow-black/10 ring-1 ring-white/5"
      onClick={() => { if (!window.getSelection()?.toString()) inputRef.current?.focus() }}
    >
      <div className="flex items-center gap-3 border-b border-white/5 px-5 py-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-mint/70" />
        </div>
        <span className="text-[11px] text-white/40">gabriel — terminal</span>
      </div>

      <div ref={scrollRef} className="h-[21rem] cursor-text overflow-y-auto px-5 py-4 [scrollbar-color:rgba(255,255,255,.15)_transparent]" role="log" aria-live="polite">
        {lines.map((l) => (
          <div key={l.id} className="mb-2">
            {l.input !== null && (
              <div><span className="text-mint">{PROMPT}</span> <span className="text-white">{l.input}</span></div>
            )}
            {l.output && <div className="whitespace-pre-wrap break-words">{l.output}</div>}
          </div>
        ))}

        <label className="flex items-center">
          <span className="sr-only">Escribe un comando</span>
          <span className="shrink-0 text-mint">{PROMPT}</span>
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKeyDown}
            className="ml-2 min-w-0 flex-1 bg-transparent text-[16px] text-white caret-mint outline-none sm:text-[13px]"
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck="false"
            enterKeyHint="send"
            placeholder={lines.length <= initial.length && !value ? 'help' : ''}
            style={{ outline: 'none' }}
          />
        </label>
      </div>
    </figure>
  )
}
