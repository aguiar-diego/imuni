import './Hero.css'

export default function Hero() {
  return (
    <section id="topo" className="hero">
      <div className="container hero__row">
        <div className="hero__text">
          <p className="hero__eyebrow">Gestão de Projetos · 2026</p>
          <h1>
            Carteira Digital <br /> de Vacinação
          </h1>
          <p className="hero__lead">
            Este site não é o produto do projeto — ele é o nosso painel de acompanhamento.
            Aqui reunimos quem somos, quem faz parte do grupo e o andamento dos documentos
            entregues ao longo da disciplina.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#documentos">
              Ver entregas
            </a>
            <a className="btn btn--ghost" href="#quem-somos">
              Sobre o projeto
            </a>
          </div>
        </div>

        <div className="hero__stamp" aria-hidden="true">
          <img src="/imuni/seringa.png" alt="" />
        </div>
      </div>
    </section>
  )
}
