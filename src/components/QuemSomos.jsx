import './QuemSomos.css'

const FICHA = [
  { label: 'Disciplina', value: 'Gestão de Projetos' },
  { label: 'Instituição', value: 'Nome da instituição' },
  { label: 'Período letivo', value: '2026 / 2' },
  { label: 'Metodologia', value: 'Scrum adaptado' },
]

export default function QuemSomos() {
  return (
    <section id="quem-somos" className="section quem-somos">
      <div className="container quem-somos__row">
        <div className="quem-somos__text">
          <h2>Quem somos</h2>
          <p>
            Somos um grupo da disciplina de Gestão de Projetos e estamos desenvolvendo a{' '}
            <strong>Carteira Digital de Vacinação</strong>: um sistema pensado para reunir em
            um só lugar o histórico de doses de uma pessoa, avisos de campanhas e datas de
            reforço, facilitando o acesso a essas informações tanto para o cidadão quanto
            para os postos de saúde.
          </p>
          <p>
            Este site que você está vendo agora não é o sistema em si — ele é o nosso espaço
            de acompanhamento do trabalho: aqui documentamos quem participa do grupo e damos
            visibilidade ao andamento das entregas pedidas pela disciplina.
          </p>
        </div>
      </div>
    </section>
  )
}
