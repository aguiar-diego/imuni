import { useState, useEffect } from 'react'
import './App.css'

const BASE = import.meta.env.BASE_URL

const NAV_LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#smart', label: 'Objetivos' },
  { href: '#canvas', label: 'Canvas' },
  { href: '#documentos', label: 'Documentos' },
  { href: '#equipe', label: 'Equipe' },
]

const SMART_GOALS = [
  {
    letter: 'S',
    title: 'Específico',
    text: 'Desenvolver um MVP web que exiba UBS e clínicas particulares próximas (via geolocalização) e implemente a interface funcional de uma carteira de vacinação digital (com dados mock-up nesta fase inicial) para o controle pessoal de doses.',
  },
  {
    letter: 'M',
    title: 'Mensurável',
    text: 'Cobrir a região piloto de São Paulo (capital) com dados de locais de vacinação e validar o fluxo da carteira digital para pelo menos um perfil de usuário simulado com seu respectivo histórico de vacinas.',
  },
  {
    letter: 'A',
    title: 'Atingível',
    text: 'Estruturar a lógica do histórico vacinal e consumir fontes de dados abertos governamentais, hospedando a aplicação em infraestrutura de nuvem estudantil (Firebase/AWS) dentro do cronograma e carga horária da disciplina.',
  },
  {
    letter: 'R',
    title: 'Relevante',
    text: 'Reduzir a fragmentação de informações sobre vacinação — hoje dependente de jornais pouco lidos, portais municipais de baixo acesso e boca a boca — oferecendo um controle unificado que abrange campanhas públicas gratuitas e alternativas pagas na rede privada.',
  },
  {
    letter: 'T',
    title: 'Temporal',
    text: 'Entregar o MVP funcional (mapa interativo + carteira digital) até o fim do semestre letivo, tendo validado o Business Model Canvas e os requisitos nas etapas intermediárias da disciplina.',
  },
]

const CANVAS_BLOCKS = [
  {
    title: 'Parcerias principais',
    items: [
      'Universidade de São Paulo (USP) — orientação acadêmica',
      'Governos federal e municipais (dados abertos)',
      'Portais de notícias locais (campanhas de saúde)',
      'Redes de farmácias e clínicas particulares',
    ],
  },
  {
    title: 'Atividades principais',
    items: [
      'Desenvolvimento front-end e back-end (web e mobile)',
      'Modelagem do banco de dados (regras vacinais)',
      'Integração e extração de dados públicos (APIs)',
      'Implementação da lógica da carteira digital',
    ],
  },
  {
    title: 'Recursos principais',
    items: [
      'Equipe de desenvolvimento (estudantes de SI)',
      'Infraestrutura de nuvem estudantil (Firebase, AWS)',
      'APIs de geolocalização (mapas)',
    ],
  },
  {
    title: 'Proposta de valor',
    highlight: true,
    items: [
      'Informação centralizada e atualizada em um só lugar',
      'GPS para encontrar a UBS com a vacina certa',
      'Clareza sobre regras e faixas etárias',
      'Correção das falhas do "Meu SUS Digital"',
      'Carteira de vacinação digital inteligente',
      'Indicação de alternativas na rede privada',
    ],
  },
  {
    title: 'Relacionamento com clientes',
    items: [
      'Serviço automatizado (self-service) por app e web',
      'Notificações push e alertas de doses',
    ],
  },
  {
    title: 'Canais',
    items: [
      'Navegadores web (desktop e mobile)',
      'Lojas de aplicativos (Google Play / App Store)',
    ],
  },
  {
    title: 'Segmentos de clientes',
    items: [
      'Cidadãos que buscam informação clara sobre vacinação',
      'Pais e responsáveis acompanhando o calendário infantil',
      'Foco inicial: região piloto (SP capital)',
    ],
  },
  {
    title: 'Estrutura de custos',
    wide: true,
    items: [
      'Tempo de desenvolvimento da equipe',
      'Custos de hospedagem e servidores',
    ],
  },
  {
    title: 'Fontes de receita',
    wide: true,
    items: [
      'Projeto acadêmico e de utilidade pública (gratuito para o usuário)',
      'Editais de fomento ou licenciamento para o setor público',
      'Taxa de indicação / destaque patrocinado para farmácias e clínicas',
    ],
  },
]

const DOCUMENTS = [
  {
    icon: '📄',
    title: 'Proposta de Projeto',
    desc: 'Documento oficial com descrição, objetivos SMART e Business Model Canvas.',
    href: `${BASE}docs/imuni-proposta.pdf`,
    action: 'Baixar PDF',
    ready: true,
  },
  {
    icon: '🎯',
    title: 'Objetivos SMART',
    desc: 'Metas específicas, mensuráveis, atingíveis, relevantes e temporais do MVP.',
    href: '#smart',
    action: 'Ver no site',
    ready: true,
  },
  {
    icon: '🧩',
    title: 'Business Model Canvas',
    desc: 'Modelo de negócio completo: proposta de valor, segmentos, receitas e custos.',
    href: '#canvas',
    action: 'Ver no site',
    ready: true,
  },
  {
    icon: '📌',
    title: 'Próximas entregas',
    desc: 'Espaço reservado para os documentos que serão adicionados ao longo da disciplina.',
    href: null,
    action: 'Em breve',
    ready: false,
  },
]

const TEAM = [
  { name: 'Diego Garcia', usp: '15574221', initials: 'DG' },
  { name: 'Luis Gustavo Cerqueira', usp: '15525959', initials: 'LC' },
  { name: 'Mateus de Sales', usp: '15640371', initials: 'MS' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a className="nav__brand" href="#topo" onClick={() => setOpen(false)}>
          <span className="nav__logo" aria-hidden="true">💉</span>
          <span className="nav__name">Imuni</span>
        </a>

        <button
          className="nav__toggle"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            className="nav__cta"
            href="https://github.com/aguiar-diego/imuni"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="topo" className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__inner">
        <span className="hero__tag">Projeto GPTI · Sistemas de Informação · USP</span>
        <h1 className="hero__title">
          A carteira de vacinação digital que te mostra <span>onde se vacinar agora</span>
        </h1>
        <p className="hero__lead">
          O Imuni cruza o seu histórico de saúde com a geolocalização para indicar quais UBS e
          clínicas próximas têm exatamente a vacina que você precisa — pelo SUS, de graça, ou na
          rede privada quando for o caso.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#sobre">Conhecer o projeto</a>
          <a className="btn btn--ghost" href="#documentos">Ver documentos</a>
        </div>
        <div className="hero__stats">
          <div><strong>1</strong><span>MVP web até o fim do semestre</span></div>
          <div><strong>SP</strong><span>região piloto (capital)</span></div>
          <div><strong>SUS + privada</strong><span>cobertura de doses</span></div>
        </div>
      </div>
    </section>
  )
}

function Sobre() {
  return (
    <section id="sobre" className="section">
      <div className="section__head">
        <span className="eyebrow">O problema e a solução</span>
        <h2>Informação de vacina não deveria ser uma caça ao tesouro</h2>
      </div>
      <div className="about__grid">
        <article className="about__card about__card--problem">
          <h3>O problema</h3>
          <p>
            Hoje a informação sobre vacinas está espalhada em jornais pouco lidos, portais
            municipais de baixo acesso e no boca a boca. O aplicativo oficial <em>Meu SUS
            Digital</em> exige registro manual das doses e não mostra a disponibilidade atual dos
            postos.
          </p>
        </article>
        <article className="about__card about__card--solution">
          <h3>A solução</h3>
          <p>
            O Imuni consolida o histórico do usuário e cruza esses dados com os requisitos de cada
            vacina — público-alvo, faixa etária e regras de redose. Se a dose é gratuita, mostra o
            caminho pro SUS; se não, aponta a alternativa na rede privada.
          </p>
        </article>
      </div>
      <div className="about__pillars">
        <div className="pillar"><span aria-hidden="true">🗺️</span><h4>Mapa em tempo real</h4><p>Encontre a UBS ou clínica com a vacina certa por perto.</p></div>
        <div className="pillar"><span aria-hidden="true">💳</span><h4>Carteira digital</h4><p>Seu histórico de doses unificado e sempre atualizado.</p></div>
        <div className="pillar"><span aria-hidden="true">📋</span><h4>Regras claras</h4><p>Idade, público-alvo e redose explicados sem burocracia.</p></div>
        <div className="pillar"><span aria-hidden="true">🌐</span><h4>Dados abertos</h4><p>Fontes governamentais viram utilidade pública de verdade.</p></div>
      </div>
    </section>
  )
}

function Smart() {
  return (
    <section id="smart" className="section section--alt">
      <div className="section__head">
        <span className="eyebrow">Objetivos SMART</span>
        <h2>Metas que guiam o desenvolvimento do MVP</h2>
      </div>
      <div className="smart__grid">
        {SMART_GOALS.map((goal) => (
          <article className="smart__card" key={goal.letter}>
            <div className="smart__letter" aria-hidden="true">{goal.letter}</div>
            <div>
              <h3>{goal.title}</h3>
              <p>{goal.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Canvas() {
  return (
    <section id="canvas" className="section">
      <div className="section__head">
        <span className="eyebrow">Business Model Canvas</span>
        <h2>O modelo de negócio do Imuni em um quadro</h2>
      </div>
      <div className="canvas">
        {CANVAS_BLOCKS.map((block) => (
          <div
            key={block.title}
            className={`canvas__cell${block.highlight ? ' is-highlight' : ''}${block.wide ? ' is-wide' : ''}`}
          >
            <h4>{block.title}</h4>
            <ul>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

function Documentos() {
  return (
    <section id="documentos" className="section section--alt">
      <div className="section__head">
        <span className="eyebrow">Entregáveis da disciplina</span>
        <h2>Documentos do projeto</h2>
        <p className="section__sub">
          Repositório central das entregas do Imuni em GPTI. Novos documentos serão adicionados
          conforme a disciplina avança.
        </p>
      </div>
      <div className="docs__grid">
        {DOCUMENTS.map((doc) => (
          <article className={`doc__card${doc.ready ? '' : ' is-pending'}`} key={doc.title}>
            <div className="doc__icon" aria-hidden="true">{doc.icon}</div>
            <h3>{doc.title}</h3>
            <p>{doc.desc}</p>
            {doc.href ? (
              <a
                className="doc__link"
                href={doc.href}
                {...(doc.href.startsWith('#') ? {} : { target: '_blank', rel: 'noreferrer' })}
              >
                {doc.action} →
              </a>
            ) : (
              <span className="doc__link doc__link--disabled">{doc.action}</span>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

function Equipe() {
  return (
    <section id="equipe" className="section">
      <div className="section__head">
        <span className="eyebrow">Grupo República</span>
        <h2>Quem está por trás do Imuni</h2>
      </div>
      <div className="team__grid">
        {TEAM.map((member) => (
          <article className="team__card" key={member.usp}>
            <div className="team__avatar" aria-hidden="true">{member.initials}</div>
            <h3>{member.name}</h3>
            <p>Nº USP {member.usp}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="nav__logo" aria-hidden="true">💉</span>
          <span>Imuni</span>
        </div>
        <p className="footer__text">
          Projeto da disciplina de Gestão de Projetos de TI (GPTI) — Sistemas de Informação, USP.
          Grupo República.
        </p>
        <a
          className="footer__repo"
          href="https://github.com/aguiar-diego/imuni"
          target="_blank"
          rel="noreferrer"
        >
          github.com/aguiar-diego/imuni
        </a>
      </div>
      <div className="footer__bar">
        <span>© {new Date().getFullYear()} Imuni · Grupo República</span>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Smart />
        <Canvas />
        <Documentos />
        <Equipe />
      </main>
      <Footer />
    </>
  )
}

export default App
