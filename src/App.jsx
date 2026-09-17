import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import QuemSomos from './components/QuemSomos.jsx'
import Smart from './components/Smart.jsx'
import Canvas from './components/Canvas.jsx'
import Integrantes from './components/Integrantes.jsx'
import Documentos from './components/Documentos.jsx'
import Footer from './components/Footer.jsx'
import { useReveal, useCardGlow } from './hooks/useReveal.js'

export default function App() {
  useReveal()
  useCardGlow('.smart__card')

  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuemSomos />
        <Smart />
        <Canvas />
        <Integrantes />
        <Documentos />
      </main>
      <Footer />
    </>
  )
}
