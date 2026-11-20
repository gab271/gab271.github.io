// Todo el contenido del portfolio vive aquí: edítalo sin tocar los componentes.

export const profile = {
  name: 'Gabriel Medina',
  role: 'Desarrollador de Software Junior',
  location: 'Las Palmas de Gran Canaria',
  email: 'gabrielmedinaxl@gmail.com',
  github: 'https://github.com/gab271',
  cv: '/CV_Gabriel_Medina.pdf',
  intro:
    'Desarrollador full stack titulado en DAW. Construyo aplicaciones web de principio a fin y uso la IA como parte natural de mi forma de trabajar.',
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

export const projects = [
  {
    name: 'Cine API',
    description: 'API REST con CRUD completo de películas y géneros y relaciones uno a muchos.',
    stack: ['NestJS', 'TypeScript', 'MySQL'],
    repo: 'https://github.com/gab271/cine-nestjs',
  },
  {
    name: 'GameVault',
    description: 'Catálogo de videojuegos full stack: app híbrida que consume una API REST propia.',
    stack: ['Angular', 'Ionic', 'Express', 'MySQL'],
    repo: 'https://github.com/gab271/Videogames-Project',
  },
  {
    name: 'TBOI React',
    description: 'Web interactiva con mapa, fichas de contenido y datos de la API de Steam.',
    stack: ['React', 'Vite', 'Leaflet', 'Firebase'],
    repo: 'https://github.com/gab271/tboi-react',
  },
  {
    name: 'Ronda',
    description: 'Gestor de torneos amateur: el organizador comparte un enlace y los jugadores ven su calendario.',
    stack: ['TypeScript', 'Supabase', 'PostgreSQL'],
    repo: 'https://github.com/gab271/ronda',
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
