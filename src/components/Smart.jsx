import './Smart.css'

const GOALS = [
  {
    letter: 'S',
    title: 'Específico',
    text: 'Desenvolver um MVP web que exiba UBS e clínicas particulares próximas (via geolocalização) e implemente a interface de uma carteira de vacinação digital, com dados mock-up nesta fase inicial, para o controle pessoal de doses.',
  },
  {
    letter: 'M',
    title: 'Mensurável',
    text: 'Cobrir a região piloto de São Paulo (capital) com dados de locais de vacinação e validar o fluxo da carteira digital para pelo menos um perfil de usuário simulado, com seu respectivo histórico de vacinas.',
  },
  {
    letter: 'A',
    title: 'Atingível',
    text: 'Estruturar a lógica do histórico vacinal e consumir fontes de dados abertos governamentais, hospedando a aplicação em infraestrutura de nuvem estudantil (Firebase/AWS) dentro do cronograma da disciplina.',
  },
  {
    letter: 'R',
    title: 'Relevante',
    text: 'Reduzir a fragmentação das informações sobre vacinação, oferecendo um controle unificado que abrange as campanhas públicas gratuitas e as alternativas pagas na rede privada.',
  },
  {
    letter: 'T',
    title: 'Temporal',
    text: 'Entregar o MVP funcional (mapa interativo + carteira digital) até o fim do semestre letivo, tendo validado o Business Model Canvas e os requisitos nas etapas intermediárias.',
  },
]

export default function Smart() {
  return (
    <section id="objetivos" className="section smart">
      <div className="container">
        <h2 className="reveal">Objetivos SMART</h2>
        <p className="smart__lead reveal">
          As metas que guiam o desenvolvimento do MVP do Imuni.
        </p>
        <ul className="smart__grid">
          {GOALS.map((goal, i) => (
            <li
              className="smart__card reveal"
              data-delay={Math.min(i + 1, 4)}
              key={goal.letter}
            >
              <span className="smart__letter" aria-hidden="true">
                {goal.letter}
              </span>
              <h3>{goal.title}</h3>
              <p>{goal.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
