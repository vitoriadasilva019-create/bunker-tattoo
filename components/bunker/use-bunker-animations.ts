'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function useBunkerAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Intro on-load reveal (logo + statement)
      gsap.to('#intro-logo-container', {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: 'power2.out',
      })
      gsap.to('#intro-statement', {
        opacity: 1,
        duration: 2.5,
        delay: 0.5,
        ease: 'power2.out',
      })

      // 1. Intro Dissolve & Zoom Out
      gsap.to('#intro-bg', {
        scrollTrigger: {
          trigger: '#intro',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        scale: 1.3,
        opacity: 0.1,
        y: 100,
        ease: 'none',
      })

      gsap.to('#intro-logo-container, #intro-statement', {
        scrollTrigger: {
          trigger: '#intro',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        opacity: 0,
        scale: 0.9,
        y: -50,
        ease: 'none',
        immediateRender: false,
      })

      // 2. Brand typography reveal & transition
      const brandTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '#marca',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      })

      brandTimeline
        .to('#brand-text-1', { opacity: 0.1, scale: 0.9, duration: 1 })
        .to(
          '#brand-text-2',
          { opacity: 1, scale: 1, duration: 1.5 },
          '-=0.5',
        )
        .to('#brand-subtext', { opacity: 1, y: -20, duration: 1 }, '-=0.5')

      // 4. Process timeline cards depth stack effect.
      // A single scrubbed timeline drives the whole pinned section so every
      // card (I → V) gets an equal reveal window followed by an equal hold,
      // guaranteeing the sequence never "skips" a phase.
      const processCards = gsap.utils.toArray<HTMLElement>('.process-card')
      if (processCards.length > 1) {
        const processTl = gsap.timeline({
          scrollTrigger: {
            trigger: '#processo',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
          },
        })

        processCards.forEach((card, index) => {
          if (index === 0) return

          processTl
            .to(
              card,
              {
                opacity: 1,
                y: 0,
                scale: 1,
                zIndex: 30 + index,
                ease: 'power2.out',
                duration: 1,
              },
              index === 1 ? '+=0.5' : '+=0.6',
            )
            .to(
              processCards[index - 1],
              {
                scale: 0.9 - index * 0.02,
                y: -30,
                opacity: 0.4,
                ease: 'power2.out',
                duration: 1,
              },
              '<',
            )
        })
      }

      // 5. Portfolio horizontal scroll pinning.
      // The scroll distance equals the exact overflow of the inner flex row
      // (its full scrollWidth minus the viewport), so the last piece scrolls
      // fully into view and none get cropped.
      const track = document.getElementById('portfolio-track')
      const inner = track?.firstElementChild as HTMLElement | null
      if (track && inner) {
        const getDistance = () =>
          Math.max(0, inner.scrollWidth - window.innerWidth)

        gsap.to(inner, {
          scrollTrigger: {
            trigger: '#portfolio',
            start: 'top top',
            end: () => `+=${getDistance()}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
          x: () => -getDistance(),
          ease: 'none',
        })
      }

      // 8. CTA cinematic phase transition
      gsap.to('#cta-phase-1', {
        scrollTrigger: {
          trigger: '#cta',
          start: 'top 60%',
          end: 'top 20%',
          scrub: true,
        },
        opacity: 0.3,
        scale: 0.95,
      })

      gsap.to('#cta-phase-2', {
        scrollTrigger: {
          trigger: '#cta',
          start: 'top 40%',
          end: 'top 10%',
          scrub: true,
        },
        opacity: 1,
        scale: 1,
      })

      gsap.to('#cta-button-container', {
        scrollTrigger: {
          trigger: '#cta',
          start: 'top 20%',
          end: 'top top',
          scrub: true,
        },
        opacity: 1,
        y: -10,
      })
    })

    // Refresh after images/layout settle
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    const timeout = setTimeout(refresh, 500)

    return () => {
      window.removeEventListener('load', refresh)
      clearTimeout(timeout)
      ctx.revert()
    }
  }, [])
}
