import { useEffect, useState } from 'react'
import './Header.css'
import './Logo.css'
import Logo from './Logo.jsx'

const LINKS = [
  { href: '#quem-somos', label: 'Quem somos' },
  { href: '#objetivos', label: 'Objetivos' },
  { href: '#canvas', label: 'Canvas' },
  { href: '#integrantes', label: 'Integrantes' },
  { href: '#documentos', label: 'Documentos' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
      <div className="container site-header__row">
        <a className="brand" href="#topo" aria-label="Imuni — início">
          <Logo className="brand__logo" title="Imuni" />
        </a>
        <nav className="site-nav" aria-label="Navegação principal">
          <ul>
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
