import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import QuemSomos from './components/QuemSomos.jsx'
import Integrantes from './components/Integrantes.jsx'
import Documentos from './components/Documentos.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuemSomos />
        <Integrantes />
        <Documentos />
      </main>
      <Footer />
    </>
  )
}
