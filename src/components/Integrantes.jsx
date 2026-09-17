import './Integrantes.css'

// Edite este array com os dados reais do grupo.
const MEMBROS = [
  { nome: 'Diego Aguiar Garcia', papel: 'Gerente de projeto', ra: 'RA 15574221', foto: 'integrantes/diego_gpti.jpg' },
  { nome: 'Mateus de Sales Francisco', papel: 'Desenvolvimento front-end', ra: 'RA 000000' },
  { nome: 'Luis Gustavo Cerqueira', papel: 'Desenvolvimento back-end', ra: 'RA 000000' },
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
        <h2>Integrantes</h2>
        <p className="integrantes__lead">
          Time responsável pela concepção e desenvolvimento da Carteira Digital de Vacinação.
        </p>

        <ul className="integrantes__grid">
          {MEMBROS.map((membro, i) => (
            <li className="membro" key={i}>
              {membro.foto ? (
                <img className="membro__avatar" src={membro.foto} alt={membro.nome} />
              ) : (
                <span className="membro__avatar" aria-hidden="true">
                  {iniciais(membro.nome)}
                </span>
              )}
              <div>
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
