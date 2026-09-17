# Imuni

Site do projeto **Imuni** — uma carteira de vacinação digital inteligente integrada a um mapa em tempo real. Desenvolvido para a disciplina de **Gestão de Projetos de TI (GPTI)**, do curso de Sistemas de Informação da USP.

O site centraliza os entregáveis da disciplina (proposta, objetivos SMART, Business Model Canvas e documentos futuros) e apresenta o projeto.

## Sobre o projeto

O Imuni cruza o histórico de saúde do usuário com a geolocalização para mostrar quais UBS ou clínicas particulares próximas têm a vacina que ele precisa — indicando o caminho pelo SUS quando a dose é gratuita, ou a alternativa na rede privada quando for o caso.

## Grupo República

- Diego Garcia — 15574221
- Luis Gustavo Cerqueira — 15525959
- Mateus de Sales — 15640371

## Stack

- React 19 + Vite
- Deploy via GitHub Pages (`gh-pages`)

## Rodando localmente

```bash
npm install
npm run dev
```

O site abre em `http://localhost:5173`.

## Build e deploy

```bash
npm run build     # gera a pasta dist/
npm run deploy    # publica no GitHub Pages (branch gh-pages)
```

## Estrutura

O site é uma single-page composta por componentes independentes, cada um com seu próprio CSS:

- `src/App.jsx` — monta a página e chama o hook de animação.
- `src/components/` — seções do site:
  - `Header` / `Footer` — cabeçalho fixo e rodapé (com o `Logo`).
  - `Logo` — wordmark do Imuni (SVG).
  - `Hero` — abertura com a proposta do projeto.
  - `QuemSomos` — descrição do projeto e ficha da disciplina.
  - `Smart` — os cinco objetivos SMART.
  - `Canvas` — o Business Model Canvas.
  - `Integrantes` — a equipe (fotos em `public/integrantes/`).
  - `Documentos` — entregas da disciplina com status e links.
- `src/hooks/useReveal.js` — animação de "reveal" ao rolar a página.
- `src/index.css` — variáveis de tema, base e utilitários de animação.
- `public/docs/` — documentos para download (ex.: PDF da proposta).
- `public/integrantes/` — fotos dos integrantes.

### Como editar o conteúdo

O conteúdo de cada seção fica em arrays no topo do respectivo componente
(ex.: `MEMBROS` em `Integrantes.jsx`, `DOCUMENTOS` em `Documentos.jsx`),
o que torna a edição simples sem mexer no layout.
