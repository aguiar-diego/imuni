import './Hero.css'

export default function Hero() {
  return (
    <section id="topo" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__blob hero__blob--a" />
        <span className="hero__blob hero__blob--b" />
      </div>
      <div className="container hero__row">
        <div className="hero__text reveal">
          <p className="hero__eyebrow">Gestão de Projetos de TI · Sistemas de Informação · USP</p>
          <h1>
            Imuni — a carteira de vacinação <br /> que mostra onde se vacinar
          </h1>
          <p className="hero__lead">
            Este site é o nosso painel de acompanhamento do projeto. Aqui reunimos a proposta,
            os objetivos, o modelo de negócio, a equipe e o andamento das entregas da disciplina.
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
        <div className="hero__stamp reveal" data-delay="2" aria-hidden="true">
          <img src="/imuni/seringa.png" alt="" />
        </div>
      </div>
    </section>
  )
}
