/**
 * Wordmark "imuni" — o pingo do primeiro "i" é uma cruz de saúde (verde)
 * e o do último "i" é um pin de localização (azul). Uma rota pontilhada
 * liga os dois, contando a história do produto: da saúde ao local da vacina.
 *
 * O corpo das letras usa currentColor, então herda a cor do contexto.
 */
export default function Logo({ className = '', animated = true, title = 'Imuni' }) {
  return (
    <svg
      className={`logo-mark${animated ? ' logo-mark--animated' : ''} ${className}`}
      viewBox="0 0 320 140"
      role="img"
      aria-label={title}
    >
      {/* Rota da vacina (pontilhada) ligando o 1º ao último "i" */}
      <path
        className="logo-mark__route"
        d="M 45 35 Q 160 -5, 270 25"
        fill="none"
        stroke="#94a3b8"
        strokeWidth="4"
        strokeDasharray="8 8"
        strokeLinecap="round"
      />

      {/* Corpo das letras */}
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="30" y1="75" x2="30" y2="115" />
        <path d="M 70 115 L 70 75 C 70 55, 95 55, 95 75 L 95 115 M 95 75 C 95 55, 120 55, 120 75 L 120 115" />
        <path d="M 160 75 L 160 100 C 160 120, 185 120, 185 100 L 185 75" />
        <line x1="185" y1="100" x2="185" y2="115" />
        <path d="M 225 115 L 225 75 C 225 55, 250 55, 250 75 L 250 115" />
        <line x1="290" y1="75" x2="290" y2="115" />
      </g>

      {/* Pingo do 1º "i": cruz médica */}
      <g stroke="var(--mint, #10b981)" strokeWidth="8" strokeLinecap="round">
        <line x1="22" y1="35" x2="38" y2="35" />
        <line x1="30" y1="27" x2="30" y2="43" />
      </g>

      {/* Pingo do último "i": pin de localização */}
      <path
        d="M 290 60 C 290 60, 275 35, 275 25 A 15 15 0 1 1 305 25 C 305 35, 290 60, 290 60 Z"
        fill="var(--sky, #0ea5e9)"
      />
      <circle cx="290" cy="25" r="5" fill="var(--surface, #ffffff)" />
    </svg>
  )
}
