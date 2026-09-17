import './Canvas.css'

const BLOCKS = {
  parcerias: {
    icon: '🤝',
    title: 'Parcerias principais',
    items: [
      'Universidade de São Paulo (USP) — orientação acadêmica',
      'Governos federal e municipais (dados abertos)',
      'Portais de notícias locais (campanhas de saúde)',
      'Redes de farmácias e clínicas particulares',
    ],
  },
  atividades: {
    icon: '⚙️',
    title: 'Atividades principais',
    items: [
      'Desenvolvimento front-end e back-end (web e mobile)',
      'Modelagem do banco de dados (regras vacinais)',
      'Integração e extração de dados públicos (APIs)',
      'Implementação da lógica da carteira digital',
    ],
  },
  recursos: {
    icon: '🧱',
    title: 'Recursos principais',
    items: [
      'Equipe de desenvolvimento (estudantes de SI)',
      'Infraestrutura de nuvem estudantil (Firebase, AWS)',
      'APIs de geolocalização (mapas)',
    ],
  },
  valor: {
    icon: '💡',
    title: 'Proposta de valor',
    items: [
      'Informação centralizada e atualizada em um só lugar',
      'GPS para encontrar a UBS com a vacina certa',
      'Clareza sobre regras e faixas etárias',
      'Correção das falhas do "Meu SUS Digital"',
      'Carteira de vacinação digital inteligente',
      'Indicação de alternativas na rede privada',
    ],
  },
  relacionamento: {
    icon: '💬',
    title: 'Relacionamento com clientes',
    items: [
      'Serviço automatizado (self-service) por app e web',
      'Notificações push e alertas de doses',
    ],
  },
  canais: {
    icon: '📡',
    title: 'Canais',
    items: [
      'Navegadores web (desktop e mobile)',
      'Lojas de aplicativos (Google Play / App Store)',
    ],
  },
  segmentos: {
    icon: '👥',
    title: 'Segmentos de clientes',
    items: [
      'Cidadãos que buscam informação clara sobre vacinação',
      'Pais e responsáveis acompanhando o calendário infantil',
      'Foco inicial: região piloto (SP capital)',
    ],
  },
  custos: {
    icon: '💰',
    title: 'Estrutura de custos',
    items: [
      'Tempo de desenvolvimento da equipe',
      'Custos de hospedagem e servidores',
    ],
  },
  receita: {
    icon: '📈',
    title: 'Fontes de receita',
    items: [
      'Projeto acadêmico e de utilidade pública (gratuito para o usuário)',
      'Editais de fomento ou licenciamento para o setor público',
      'Taxa de indicação / destaque patrocinado para farmácias e clínicas',
    ],
  },
}

function Block({ block, className = '', highlight = false }) {
  return (
    <div className={`bmc__block${highlight ? ' bmc__block--valor' : ''} ${className}`}>
      <div className="bmc__head">
        <span className="bmc__icon" aria-hidden="true">{block.icon}</span>
        <h3>{block.title}</h3>
      </div>
      <ul>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default function Canvas() {
  return (
    <section id="canvas" className="section canvas">
      <div className="container">
        <h2 className="reveal">Business Model Canvas</h2>
        <p className="canvas__lead reveal">
          O modelo de negócio do Imuni nos nove blocos clássicos do BMC.
        </p>

        <div className="bmc reveal" data-delay="1">
          <Block block={BLOCKS.parcerias} className="bmc__parcerias" />
          <Block block={BLOCKS.atividades} className="bmc__atividades" />
          <Block block={BLOCKS.recursos} className="bmc__recursos" />
          <Block block={BLOCKS.valor} className="bmc__valor" highlight />
          <Block block={BLOCKS.relacionamento} className="bmc__relacionamento" />
          <Block block={BLOCKS.canais} className="bmc__canais" />
          <Block block={BLOCKS.segmentos} className="bmc__segmentos" />
          <Block block={BLOCKS.custos} className="bmc__custos" />
          <Block block={BLOCKS.receita} className="bmc__receita" />
        </div>
      </div>
    </section>
  )
}
