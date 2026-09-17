import './Integrantes.css'

// Edite este array com os dados reais do grupo.
// Para adicionar a foto de um integrante, coloque o arquivo em public/integrantes/
// e informe o caminho em `foto` (ex.: 'integrantes/nome.jpg').
const MEMBROS = [
  {
    nome: 'Diego Garcia',
    papel: 'Gerente de projeto',
    ra: 'Nº USP 15574221',
    foto: 'integrantes/diego_gpti.jpg',
  },
  {
    nome: 'Luis Gustavo Cerqueira',
    papel: 'Desenvolvimento back-end',
    ra: 'Nº USP 15525959',
    foto: 'integrantes/gustavo.jpg',
  },
  {
    nome: 'Mateus de Sales',
    papel: 'Desenvolvimento front-end',
    ra: 'Nº USP 15640371',
  },
]

function iniciais(nome) {
  return nome
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((parte) => parte[0])
    .join('')
    .toUpperCase()
}

export default function Integrantes() {
  return (
    <section id="integrantes" className="section integrantes">
      <div className="container">
        <span className="eyebrow reveal">Grupo República</span>
        <h2 className="reveal">Integrantes</h2>
        <p className="integrantes__lead reveal">
          Grupo República — responsável pela concepção e desenvolvimento do Imuni.
        </p>
        <ul className="integrantes__grid">
          {MEMBROS.map((membro, i) => (
            <li className="membro reveal" data-delay={Math.min(i + 1, 4)} key={i}>
              <div className="membro__foto">
                {membro.foto ? (
                  <img src={`/imuni/${membro.foto}`} alt={membro.nome} />
                ) : (
                  <span className="membro__iniciais" aria-hidden="true">
                    {iniciais(membro.nome)}
                  </span>
                )}
              </div>
              <div className="membro__info">
                <p className="membro__nome">{membro.nome}</p>
                <p className="membro__papel">{membro.papel}</p>
                <p className="membro__ra">{membro.ra}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
