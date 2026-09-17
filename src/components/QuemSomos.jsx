import './QuemSomos.css'

const FICHA = [
  { label: 'Projeto', value: 'Imuni' },
  { label: 'Disciplina', value: 'Gestão de Projetos de TI (GPTI)' },
  { label: 'Curso', value: 'Sistemas de Informação · USP' },
  { label: 'Grupo', value: 'República' },
]

export default function QuemSomos() {
  return (
    <section id="quem-somos" className="section quem-somos">
      <div className="container quem-somos__row">
        <div className="quem-somos__text reveal">
          <span className="eyebrow">O projeto</span>
          <h2>Quem somos</h2>
          <p>
            Somos o grupo <strong>República</strong>, da disciplina de Gestão de Projetos de TI,
            e estamos desenvolvendo o <strong>Imuni</strong>: uma carteira de vacinação digital
            integrada a um mapa em tempo real, que cruza o histórico de saúde do usuário com a
            geolocalização para mostrar onde ele pode tomar a vacina que precisa — pelo SUS, de
            graça, ou na rede privada quando for o caso.
          </p>
          <p>
            O objetivo é resolver a fragmentação das informações sobre vacinação, hoje espalhadas
            em jornais, portais municipais e no boca a boca, e superar as limitações do aplicativo
            oficial <em>Meu SUS Digital</em>.
          </p>
          <p>
            Este site não é o produto em si — é o nosso painel de acompanhamento, onde reunimos a
            proposta, os objetivos, o modelo de negócio e o andamento das entregas da disciplina.
          </p>
        </div>
        <dl className="ficha reveal" data-delay="2">
          {FICHA.map((item) => (
            <div className="ficha__item" key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
