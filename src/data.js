// Todo el contenido del portfolio vive aquí: edítalo sin tocar los componentes.

export const profile = {
  name: 'Gabriel Medina',
  role: 'Desarrollador de Software Junior',
  location: 'Las Palmas de Gran Canaria',
  email: 'gabrielmedinaxl@gmail.com',
  github: 'https://github.com/gab271',
  cv: '/CV_Gabriel_Medina.pdf',
  intro:
    'Desarrollador full stack titulado en DAW. Construyo aplicaciones web de principio a fin e integro la IA en mi flujo de desarrollo.',
}

export const featured = {
  name: 'Canary Weather',
  url: 'https://canaryweather.xyz',
  repo: 'https://github.com/gab271/canary-weather',
  period: '2025 — 2026',
  summary: 'Plataforma meteorológica para las Islas Canarias, desarrollada en equipo y en producción.',
  metrics: [
    { value: '~200', label: 'commits propios' },
    { value: 'Full stack', label: 'front-end + API' },
    { value: 'Online', label: 'en producción' },
  ],
  highlights: [
    'Mapa interactivo con Leaflet, previsión por horas y versión bilingüe español / inglés.',
    'Asistente meteorológico conectado a la API de OpenAI.',
    'Avisos oficiales vía Meteoalarm, filtrados por nivel de severidad.',
    'API REST con autenticación JWT, validación, caché y tests con Vitest y Jest.',
  ],
  stack: ['React', 'Tailwind', 'Node.js', 'Express', 'PostgreSQL', 'Sequelize', 'Socket.io', 'Render'],
}

// "key" es el nombre que se usa en la terminal: abrir tcg, abrir ascend…
export const projects = [
  {
    key: 'tcg',
    name: 'TCG Tracker',
    description: 'Gestor de colecciones de cartas (Pokémon, One Piece, Yu-Gi-Oh!) con precios, lista de deseos y evolución del valor de la colección.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
    repo: 'https://github.com/gab271/tcg-tracker/tree/develop',
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
