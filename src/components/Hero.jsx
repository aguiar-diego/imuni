import { useEffect, useRef } from 'react'
import './Hero.css'

const STATS = [
  { alvo: 1, sufixo: '', label: 'MVP web até o fim do semestre' },
  { alvo: 100, sufixo: '%', label: 'foco em dados abertos' },
  { alvo: 2, sufixo: '', label: 'redes cobertas: SUS + privada' },
]

const CHIPS = ['Mapa em tempo real', 'Carteira digital', 'Regras claras', 'SUS + rede privada']

function useCountUp(ref, alvo) {
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduzido) {
      el.textContent = String(alvo)
      return
    }

    let raf
    const obs = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return
        obs.disconnect()
        const dur = 1100
        const t0 = performance.now()
        const tick = (t) => {
          const p = Math.min((t - t0) / dur, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          el.textContent = String(Math.round(alvo * eased))
          if (p < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => {
      obs.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [ref, alvo])
}

function Stat({ alvo, sufixo, label }) {
  const ref = useRef(null)
  useCountUp(ref, alvo)
  return (
    <div className="hero__stat">
      <strong>
        <span ref={ref}>0</span>
        {sufixo}
      </strong>
      <span>{label}</span>
    </div>
  )
}

export default function Hero() {
  const stampRef = useRef(null)

  useEffect(() => {
    const el = stampRef.current
    if (!el) return
    const reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduzido) return

    let raf
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const y = window.scrollY
        el.style.transform = `translateY(${y * 0.08}px)`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section id="topo" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__aurora hero__aurora--a" />
        <span className="hero__aurora hero__aurora--b" />
        <span className="hero__grid" />
      </div>

      <div className="container hero__row">
        <div className="hero__text">
          <span className="eyebrow reveal">Gestão de Projetos de TI · SI · USP</span>
          <h1 className="reveal" data-delay="1">
            A carteira de vacinação que mostra{' '}
            <span className="grad-text">onde se vacinar agora</span>
          </h1>
          <p className="hero__lead reveal" data-delay="2">
            O Imuni cruza o seu histórico de saúde com a geolocalização para indicar quais UBS e
            clínicas próximas têm a vacina que você precisa — no SUS, de graça, ou na rede privada
            quando for o caso. Este site é o nosso painel de acompanhamento do projeto.
          </p>

          <div className="hero__chips reveal" data-delay="3">
            {CHIPS.map((c) => (
              <span className="hero__chip" key={c}>{c}</span>
            ))}
          </div>

          <div className="hero__actions reveal" data-delay="3">
            <a className="btn btn--primary" href="#documentos">Ver entregas</a>
            <a className="btn btn--ghost" href="#quem-somos">Sobre o projeto</a>
          </div>

          <div className="hero__stats reveal" data-delay="4">
            {STATS.map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </div>
        </div>

        <div className="hero__stamp reveal" data-delay="2" aria-hidden="true">
          <div className="hero__stamp-glow" />
          <img ref={stampRef} src="/imuni/seringa.png" alt="" />
        </div>
      </div>
    </section>
  )
}
