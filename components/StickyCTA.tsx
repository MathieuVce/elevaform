'use client'

import { useEffect, useState } from 'react'

export default function StickyCTA() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const hero = document.querySelector('.hero')
    if (!hero) return

    const check = () => {
      setShow(hero.getBoundingClientRect().bottom < 60)
    }

    window.addEventListener('scroll', check, { passive: true })
    return () => window.removeEventListener('scroll', check)
  }, [])

  function open() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setTimeout(() => window.dispatchEvent(new CustomEvent('openBookingModal')), 700)
  }

  return (
    <button
      className={`sticky-cta${show ? ' show' : ''}`}
      onClick={open}
      aria-label="Prendre rendez-vous — 1er rendez-vous offert"
    >
      <span className="sticky-cta-icon">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      </span>
      <span className="sticky-cta-meta">
        Prendre RDV
        <small>1er rendez-vous offert</small>
      </span>
    </button>
  )
}
