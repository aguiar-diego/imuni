import './Footer.css'
import './Logo.css'
import Logo from './Logo.jsx'

export default function Footer() {
  const ano = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container site-footer__row">
        <div className="site-footer__brand">
          <Logo className="site-footer__logo" animated={false} title="Imuni" />
          <p>
            Imuni — carteira de vacinação digital inteligente. Projeto acadêmico da disciplina
            de Gestão de Projetos de TI (GPTI), Sistemas de Informação · USP. Grupo República.
          </p>
        </div>
        <p className="site-footer__year">© {ano}</p>
      </div>
    </footer>
  )
}
