import { Nav } from './components/Nav'
import { Hero, Featured, Stack, Timeline, Contact, Footer } from './components/Sections'

export default function App() {
  return (
    <>
      <a href="#proyectos" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-paper focus:px-3 focus:py-2">
        Saltar al contenido
      </a>
      <Nav />
      <main>
        <Hero />
        <Featured />
        <Stack />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
