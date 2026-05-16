'use client'

import { useEffect } from 'react'

export default function ScrollEffects() {
  useEffect(() => {
    const thread = document.getElementById('scroll-thread')

    function updateThread() {
      if (!thread) return
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0
      thread.style.width = Math.min(100, Math.max(0, pct)) + '%'
    }

    let observer: IntersectionObserver

    function reveal(el: Element) {
      if (el.classList.contains('in')) return
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.classList.add('in')
        })
      })
    }

    function initReveals() {
      if (observer) observer.disconnect()
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              reveal(e.target)
              observer.unobserve(e.target)
            }
          })
        },
        { threshold: 0.05, rootMargin: '0px 0px -40px 0px' },
      )
      document.querySelectorAll('[data-fx],[data-stagger]').forEach((el) => {
        if (!el.classList.contains('in')) observer.observe(el)
      })
      setTimeout(() => {
        document.querySelectorAll('[data-fx],[data-stagger]').forEach((el) => {
          const r = el.getBoundingClientRect()
          if (r.top < window.innerHeight && !el.classList.contains('in')) {
            el.classList.add('in', 'no-animate')
          }
        })
      }, 2000)
    }

    function updateParallax() {
      document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
        const speed = parseFloat(el.dataset.parallax ?? '0.2')
        const r = el.getBoundingClientRect()
        const center = r.top + r.height / 2 - window.innerHeight / 2
        el.style.transform = `translate3d(0,${center * -speed}px,0)`
      })
    }

    function updateSticky() {
      const sticky = document.querySelector<HTMLElement>('.sticky-cta')
      if (!sticky) return
      const hero = document.querySelector('.hero')
      if (!hero) return
      sticky.classList.toggle('show', hero.getBoundingClientRect().bottom < 60)
    }

    function updateHeader() {
      const header = document.querySelector<HTMLElement>('.app-header')
      if (!header) return
      header.classList.toggle('scrolled', window.scrollY > 80)
    }

    function setupMagnetic() {
      document.querySelectorAll<HTMLElement>('.btn-gold').forEach((btn) => {
        if (btn.dataset.magnetic) return
        btn.dataset.magnetic = '1'
        btn.addEventListener('mousemove', (e) => {
          const r = btn.getBoundingClientRect()
          const x = (e.clientX - r.left - r.width / 2) * 0.18
          const y = (e.clientY - r.top - r.height / 2) * 0.18
          btn.style.transform = `translate(${x}px,${y}px) translateY(-2px)`
        })
        btn.addEventListener('mouseleave', () => {
          btn.style.transform = ''
        })
      })
    }

    function handleAnchorClick(e: MouseEvent) {
      const a = (e.target as Element).closest<HTMLAnchorElement>('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href')!.slice(1)
      if (!id) return
      const target = document.getElementById(id)
      if (target) {
        e.preventDefault()
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    function handleBookingClick(e: MouseEvent) {
      const btn = (e.target as Element).closest('[data-open-booking]')
      if (!btn) return
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setTimeout(() => window.dispatchEvent(new CustomEvent('openBookingModal')), 700)
    }

    function handleModalClick(e: MouseEvent) {
      const btn = (e.target as Element).closest('[data-booking-modal]')
      if (!btn) return
      window.dispatchEvent(new CustomEvent('openBookingModal'))
    }

    let raf: number
    function onScroll() {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        updateThread()
        updateParallax()
        updateSticky()
        updateHeader()
      })
    }

    document.addEventListener('click', handleAnchorClick)
    document.addEventListener('click', handleBookingClick)
    document.addEventListener('click', handleModalClick)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener(
      'resize',
      () => {
        updateThread()
        updateParallax()
        updateSticky()
      },
      { passive: true },
    )

    initReveals()
    setupMagnetic()
    updateThread()
    updateParallax()
    updateSticky()
    updateHeader()

    return () => {
      if (observer) observer.disconnect()
      document.removeEventListener('click', handleAnchorClick)
      document.removeEventListener('click', handleBookingClick)
      document.removeEventListener('click', handleModalClick)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return null
}
