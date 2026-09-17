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

O site publicado fica em: https://aguiar-diego.github.io/imuni/

## Estrutura

- `src/App.jsx` — todas as seções do site (Navbar, Hero, Sobre, Objetivos SMART, Canvas, Documentos, Equipe, Footer). O conteúdo fica em arrays no topo do arquivo, fáceis de editar.
- `src/App.css` — estilos das seções.
- `src/index.css` — estilos base e variáveis de cor (tema).
- `public/docs/` — documentos para download (PDF da proposta, etc.).
