import './Header.css'

const LINKS = [
  { href: '#quem-somos', label: 'Quem somos' },
  { href: '#integrantes', label: 'Integrantes' },
  { href: '#documentos', label: 'Documentos' },
]

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__row">
        <a className="brand" href="#topo">
          <span className="brand__mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
              <path
                d="M4 12.5 9.5 18 20 6"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="brand__text">
            Carteira Digital <em>de Vacinação</em>
          </span>
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
