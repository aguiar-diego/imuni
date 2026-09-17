import './Documentos.css'

const BASE = import.meta.env.BASE_URL

// Entregas da disciplina e o status atual de cada uma.
// status: 'entregue' | 'andamento' | 'pendente'
// href (opcional): link para o documento (PDF em public/docs/ ou âncora do site).
const DOCUMENTOS = [
  {
    nome: 'Proposta de projeto (descrição, SMART e Canvas)',
    data: '05 set',
    status: 'entregue',
    href: `${BASE}docs/imuni-proposta.pdf`,
    acao: 'Baixar PDF',
  },
  {
    nome: 'Objetivos SMART',
    data: '05 set',
    status: 'entregue',
    href: '#objetivos',
    acao: 'Ver no site',
  },
  {
    nome: 'Business Model Canvas',
    data: '05 set',
    status: 'entregue',
    href: '#canvas',
    acao: 'Ver no site',
  },
  {
    nome: 'Próximas entregas da disciplina',
    data: 'a definir',
    status: 'pendente',
  },
]

const STATUS_LABEL = {
  entregue: 'Entregue',
  andamento: 'Em andamento',
  pendente: 'Pendente',
}

export default function Documentos() {
  return (
    <section id="documentos" className="section documentos">
      <div className="container">
        <span className="eyebrow reveal">Entregáveis</span>
        <h2 className="reveal">Documentos</h2>
        <p className="documentos__lead reveal">
          Entregas exigidas pela disciplina ao longo do semestre e o status atual de cada uma.
        </p>
        <ul className="documentos__lista reveal" data-delay="1">
          {DOCUMENTOS.map((doc) => (
            <li className="documento" key={doc.nome}>
              <span className={`status status--${doc.status}`}>
                {STATUS_LABEL[doc.status]}
              </span>
              <span className="documento__nome">{doc.nome}</span>
              {doc.href ? (
                <a
                  className="documento__link"
                  href={doc.href}
                  {...(doc.href.startsWith('#')
                    ? {}
                    : { target: '_blank', rel: 'noreferrer' })}
                >
                  {doc.acao} →
                </a>
              ) : null}
              <span className="documento__data">{doc.data}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
