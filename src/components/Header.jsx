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
  return (
    <header className="site-header">
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
