import { useEffect } from 'react'

/**
 * Ativa a animação de "reveal" nos elementos com a classe `.reveal`
 * assim que eles entram na viewport, adicionando a classe `.is-visible`.
 * Respeita prefers-reduced-motion (o CSS já neutraliza a animação nesse caso).
 */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.is-visible)')
    if (!els.length) return

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
