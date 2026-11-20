// Todo el contenido del portfolio vive aquí: edítalo sin tocar los componentes.

export const profile = {
  name: 'Gabriel Medina',
  role: 'Desarrollador de Software Junior',
  location: 'Las Palmas de Gran Canaria',
  email: 'gabrielmedinaxl@gmail.com',
  github: 'https://github.com/gab271',
  cv: '/CV_Gabriel_Medina_2026.pdf',
  intro:
    'Desarrollador junior titulado en DAW. Construyo aplicaciones web y integro la IA para ayudar a crearlas.',
}

export const featured = {
  key: 'tboi',
  name: 'TBOI Codex',
  url: 'https://gab271.github.io/tboi-react/',
  repo: 'https://github.com/gab271/tboi-react',
  period: '2025 — 2026',
  summary: 'Enciclopedia y seguimiento de progreso para The Binding of Isaac. Mi proyecto personal más trabajado, de principio a fin.',
  metrics: [
    { value: '117', label: 'commits' },
    { value: '700+', label: 'objetos' },
    { value: 'Full stack', label: 'front-end + API' },
  ],
  highlights: [
    'Códice con más de 700 objetos, personajes, jefes y sinergias, con búsqueda y filtros.',
    'Lectura de partidas guardadas para seguir el progreso hacia el 100 % (Dead God).',
    'Zona de comunidad: builds compartidas, tier list con votaciones y seeds.',
    'API REST en Express con Supabase (PostgreSQL, Auth, Storage), JWT y rate limiting.',
  ],
  stack: ['React', 'Vite', 'Tailwind', 'React Query', 'Framer Motion', 'i18next', 'Express', 'Supabase'],
}

// "key" es el nombre que se usa en la terminal: abrir canary, abrir ascend…
export const projects = [
  {
    key: 'canary',
    name: 'Canary Weather',
    description: 'Plataforma meteorológica de Canarias desarrollada en equipo: mapa interactivo, asistente con OpenAI y API REST con JWT.',
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    url: 'https://canaryweather.xyz',
    repo: 'https://github.com/gab271/canary-weather',
    status: 'En producción',
  },
  {
    key: 'ascend',
    name: 'Ascend',
    description: 'App de progreso personal gamificada: misiones semanales, XP, rangos, recompensas y ranking entre usuarios.',
    stack: ['React', 'Supabase', 'PostgreSQL', 'Framer Motion'],
    repo: 'https://github.com/gab271/ascend/tree/develop',
    status: 'En desarrollo',
  },
]

export const skills = [
  { group: 'Lenguajes', items: ['Java', 'TypeScript', 'JavaScript', 'SQL'], key: ['Java', 'TypeScript'] },
  { group: 'Back-end', items: ['Spring Boot', 'Node.js', 'Express', 'NestJS', 'APIs REST'], key: ['Spring Boot'] },
  { group: 'Front-end', items: ['React', 'Angular', 'Tailwind CSS'], key: ['React'] },
  { group: 'Datos y testing', items: ['PostgreSQL', 'MySQL', 'Jest', 'Vitest'], key: [] },
  { group: 'Entorno', items: ['Git', 'GitHub', 'Linux', 'Render'], key: [] },
]

export const ai = {
  text: 'Programo a diario con asistentes y agentes de IA, y la he integrado en producto con la API de OpenAI.',
  tools: ['Claude Code', 'Cursor', 'ChatGPT', 'Claude'],
  uses: ['Depuración y análisis de código', 'Prototipado e iteración rápida', 'Revisión crítica del resultado'],
}

export const timeline = [
  {
    period: 'ENE — ABR 2026',
    title: 'Desarrollo de software y datos',
    place: 'Farmalitics · Prácticas FP Dual',
    detail: 'Desarrollo de una aplicación web y análisis de datos en bases de datos relacionales y ERP.',
  },
  {
    period: '2024 — 2026',
    title: 'CFGS Desarrollo de Aplicaciones Web',
    place: 'IES El Rincón',
  },
  {
    period: '2022 — 2024',
    title: 'CFGM Sistemas Microinformáticos y Redes',
    place: 'IES 7 Palmas',
  },
]
