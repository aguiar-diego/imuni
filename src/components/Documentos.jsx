import './Documentos.css'

// Edite este array conforme o cronograma real da disciplina.
const DOCUMENTOS = [
  {
    nome: 'Termo de abertura do projeto',
    data: '05 set',
    status: 'entregue',
  }
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
        <h2>Documentos</h2>
        <p className="documentos__lead">
          Entregas exigidas pela disciplina ao longo do semestre e o status atual de cada uma.
        </p>

        <ul className="documentos__lista">
          {DOCUMENTOS.map((doc) => (
            <li className="documento" key={doc.nome}>
              <span className={`status status--${doc.status}`}>
                {STATUS_LABEL[doc.status]}
              </span>
              <span className="documento__nome">{doc.nome}</span>
              <span className="documento__data">{doc.data}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
