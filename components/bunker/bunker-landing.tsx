'use client'

import { Icon } from '@iconify/react'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useBunkerAnimations } from './use-bunker-animations'
import { translations, type Lang } from './translations'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

export function BunkerLanding() {
  useBunkerAnimations()

  // Language — English is the primary/default language.
  const [lang, setLang] = useState<Lang>('en')
  const t = translations[lang]

  const cursorRef = useRef<HTMLDivElement>(null)

  // Fire the Meta Pixel "Schedule" conversion event when the user clicks the
  // booking CTA. The link still navigates normally afterwards.
  const handleBookingClick = () => {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'Schedule')
    }
  }

  // Custom luxury cursor
  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return
    const onMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    }
    document.addEventListener('mousemove', onMove)
    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  // Scroll progress bar
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const total =
        document.documentElement.scrollHeight - window.innerHeight
      const percentage = total > 0 ? (window.scrollY / total) * 100 : 0
      setProgress(percentage)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Keep the <html lang> attribute in sync and refresh ScrollTrigger when the
  // language changes, since translated copy can change section heights.
  useEffect(() => {
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR'
    gsap.registerPlugin(ScrollTrigger)
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 100)
    return () => window.clearTimeout(id)
  }, [lang])

  return (
    <>
      {/* Custom Luxury Cursor */}
      <div
        ref={cursorRef}
        className="hidden md:block fixed w-8 h-8 border border-gold/40 rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />

      {/* Language Toggle — fixed, outside the blend-mode header for legibility.
          Centered on mobile (free space between logo and CTA); tucked just
          below the header on the right for desktop to avoid the centered nav. */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 md:top-28 md:left-auto md:right-6 md:translate-x-0 z-[60] flex items-center bg-zinc-950/70 backdrop-blur-sm border border-zinc-800 rounded-full px-1 py-1 text-[0.65rem] tracking-widest uppercase font-light">
        <button
          type="button"
          onClick={() => setLang('en')}
          aria-pressed={lang === 'en'}
          className={`px-3 py-1 rounded-full transition-colors duration-300 pointer-events-auto ${
            lang === 'en'
              ? 'bg-gold text-black'
              : 'text-zinc-400 hover:text-gold'
          }`}
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => setLang('pt')}
          aria-pressed={lang === 'pt'}
          className={`px-3 py-1 rounded-full transition-colors duration-300 pointer-events-auto ${
            lang === 'pt'
              ? 'bg-gold text-black'
              : 'text-zinc-400 hover:text-gold'
          }`}
        >
          PT-BR
        </button>
      </div>

      {/* Global Header/Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12 flex justify-between items-center mix-blend-difference">
        <a href="#" className="block group" aria-label="Bunker Tattoo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/bunker-logo.png"
            alt="Bunker Tattoo"
            className="h-12 md:h-16 w-auto object-contain group-hover:opacity-80 transition-opacity duration-500"
          />
        </a>
        <div className="hidden md:flex space-x-8 text-xs tracking-widest uppercase font-light">
          <a href="#marca" className="hover:text-gold transition-colors duration-300">
            {t.nav.brand}
          </a>
          <a href="#processo" className="hover:text-gold transition-colors duration-300">
            {t.nav.process}
          </a>
          <a href="#portfolio" className="hover:text-gold transition-colors duration-300">
            {t.nav.collections}
          </a>
          <a href="#artistas" className="hover:text-gold transition-colors duration-300">
            {t.nav.artists}
          </a>
        </div>
        <div>
          <a
            href="#cta"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest border-b border-gold/40 pb-1 hover:border-gold transition-all duration-300 text-gold font-light"
          >
            <span>{t.nav.start}</span>
            <Icon icon="solar:arrow-right-linear" className="text-sm" />
          </a>
        </div>
      </header>

      {/* Progress Indicator */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col space-y-4 items-center">
        <span className="text-[0.6rem] font-light tracking-widest text-gold/60 rotate-90 mb-4 uppercase">
          {t.progress}
        </span>
        <div className="w-px h-32 bg-zinc-800 relative">
          <div
            className="absolute top-0 left-0 w-full bg-gold transition-all duration-100"
            style={{ height: `${progress}%` }}
          />
        </div>
      </div>

      {/* SECTION 1 — INTRO (Cinematic Intro) */}
      <section
        id="intro"
        className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-black z-10"
      >
        <div
          id="intro-bg"
          className="absolute inset-0 opacity-45 mix-blend-color-dodge pointer-events-none scale-110"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/ink-fluid.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover grayscale contrast-125 brightness-50"
          />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <div
            id="intro-logo-container"
            className="mb-12 opacity-0 scale-95 transition-all duration-[2000ms]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/bunker-logo-hero-transparent.png"
              alt="Bunker Tattoo"
              className="w-[75vw] md:w-[50vw] max-w-2xl h-auto object-contain select-none"
            />
            <span className="sr-only">{t.intro.logoAlt}</span>
          </div>

          <div
            id="intro-statement"
            className="space-y-4 opacity-0 transition-all duration-[2500ms] delay-500"
          >
            <p className="text-xl md:text-3xl font-display font-extralight tracking-tight text-zinc-400">
              {t.intro.line1}
            </p>
            <p className="text-3xl md:text-5xl font-display font-light tracking-tight text-white uppercase">
              {t.intro.line2}
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-2 opacity-60 animate-bounce">
          <span className="text-[0.65rem] tracking-[0.3em] uppercase text-zinc-500 font-light">
            {t.intro.scroll}
          </span>
          <Icon icon="solar:mouse-minimalistic-linear" className="text-xl text-gold" />
        </div>
      </section>

      {/* SECTION 2 — THE BRAND (Dynamic Scroll Text) */}
      <section
        id="marca"
        className="relative min-h-[200vh] bg-dark flex items-start justify-center py-[20vh]"
      >
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center px-6 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-zinc-900/40 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-6xl mx-auto text-center relative z-10 w-full">
            <div className="relative h-[30vh] md:h-[40vh] flex items-center justify-center">
              <h2
                id="brand-text-1"
                className="absolute text-[8vw] md:text-[6vw] font-display font-light tracking-tight leading-none text-zinc-800 uppercase select-none"
              >
                {t.brand.text1}
              </h2>
              <h2
                id="brand-text-2"
                className="absolute text-[8vw] md:text-[6vw] font-display font-normal tracking-tight leading-none text-gold uppercase opacity-0 scale-90 select-none"
              >
                {t.brand.text2}
              </h2>
            </div>

            <p
              id="brand-subtext"
              className="text-sm md:text-base text-zinc-500 max-w-xl mx-auto font-light mt-8 tracking-wide leading-relaxed opacity-0"
            >
              {t.brand.subtext}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — IMMERSION (Macro Cinema Reels) */}
      <section id="imersao" className="relative bg-black py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3 font-light">
                {t.immersion.eyebrow}
              </p>
              <h3 className="text-3xl md:text-5xl font-display font-extralight tracking-tight uppercase leading-none text-white">
                {t.immersion.title}
              </h3>
            </div>
            <div className="mt-6 md:mt-0 max-w-sm">
              <p className="text-xs md:text-sm text-zinc-400 font-light tracking-wide leading-relaxed">
                {t.immersion.desc}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Frame 1 */}
            <div className="col-span-1 md:col-span-7 overflow-hidden relative group aspect-[16/10] bg-zinc-900 rounded-sm">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700 z-10" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/close-01.jpeg"
                alt={t.immersion.frame1Title}
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 contrast-105 brightness-95"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <span className="text-[0.65rem] tracking-widest uppercase text-white/60 block mb-1">
                  {t.immersion.close01}
                </span>
                <span className="text-sm font-display font-light text-gold uppercase tracking-wider">
                  {t.immersion.frame1Title}
                </span>
              </div>
            </div>

            {/* Frame 2 */}
            <div className="col-span-1 md:col-span-5 overflow-hidden relative group aspect-square bg-zinc-900 rounded-sm">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700 z-10" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/obra-gladiator.jpeg"
                alt={t.immersion.frame2Title}
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 contrast-105 brightness-95"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <span className="text-[0.65rem] tracking-widest uppercase text-white/60 block mb-1">
                  {t.immersion.close02}
                </span>
                <span className="text-sm font-display font-light text-gold uppercase tracking-wider">
                  {t.immersion.frame2Title}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — THE PROCESS (3D Layered Timeline) */}
      <section id="processo" className="relative min-h-[350vh] bg-dark py-20">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center px-6 overflow-hidden">
          <div className="absolute top-12 left-6 md:left-20 z-10">
            <span className="text-xs uppercase tracking-[0.4em] text-gold block mb-2 font-light">
              {t.process.eyebrow}
            </span>
            <h3 className="text-2xl md:text-3xl font-display font-extralight tracking-tight uppercase text-white">
              {t.process.title}
            </h3>
          </div>

          <div className="relative w-full max-w-3xl h-[60vh] md:h-[50vh] flex items-center justify-center">
            {t.process.cards.map((card, i) => (
              <div
                key={card.num}
                className={`process-card absolute w-full max-w-md md:max-w-xl p-8 md:p-12 bg-zinc-950/90 border border-zinc-900 rounded-sm flex flex-col justify-between aspect-[16/10] shadow-2xl transition-all duration-500 ${
                  i === 0
                    ? 'z-30'
                    : 'z-10 opacity-0 translate-y-20 scale-95'
                }`}
              >
                <div className="flex justify-between items-start">
                  <span className="text-[0.7rem] font-light tracking-widest uppercase text-gold">
                    {card.phase}
                  </span>
                  <span className="text-5xl font-display font-extralight text-zinc-800 leading-none">
                    {card.num}
                  </span>
                </div>
                <div className="my-6">
                  <h4 className="text-xl md:text-2xl font-display font-light text-white uppercase tracking-wider mb-2">
                    {card.title}
                  </h4>
                  <p className="text-xs md:text-sm text-zinc-400 font-light tracking-wide leading-relaxed">
                    {card.text}
                  </p>
                </div>
                <div className="flex items-center space-x-2 text-[0.65rem] tracking-[0.2em] text-zinc-500 uppercase">
                  <Icon icon={card.icon} className="text-gold text-sm" />
                  <span>{card.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — PORTFOLIO (Contemporary Museum Gallery — Horizontal Scroll) */}
      <section
        id="portfolio"
        className="relative h-screen bg-black overflow-hidden flex flex-col justify-center"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-24 mb-12 w-full">
          <span className="text-xs uppercase tracking-[0.3em] text-gold mb-3 block font-light">
            {t.portfolio.eyebrow}
          </span>
          <h3 className="text-3xl md:text-5xl font-display font-extralight tracking-tight uppercase text-white leading-none">
            {t.portfolio.title}
          </h3>
        </div>

        <div id="portfolio-track" className="relative w-full flex">
          <div className="flex gap-8 md:gap-12 px-6 md:px-24 flex-nowrap w-max">
            {t.portfolio.items.map((item) => (
              <div
                key={item.obra}
                className="w-[78vw] sm:w-[46vw] md:w-[30vw] lg:w-[24vw] flex-shrink-0 group"
              >
                <div className="aspect-[4/5] w-full bg-zinc-900 overflow-hidden relative rounded-sm">
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src || '/placeholder.svg'}
                    alt={item.alt}
                    className={`w-full h-full object-cover ${item.filter} group-hover:scale-105 transition-transform duration-700`}
                  />
                </div>
                <div className="mt-6 flex justify-between items-start">
                  <div>
                    <span className="text-[0.65rem] font-light tracking-widest text-zinc-500 uppercase">
                      {item.obra}
                    </span>
                    <h4 className="text-lg font-display font-light text-white uppercase tracking-wider mt-1">
                      {item.title}
                    </h4>
                  </div>
                  <span className="text-xs text-gold uppercase tracking-wider font-light">
                    {item.style}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — ARTISTS (Film Cast Presentation) */}
      <section id="artistas" className="relative bg-black py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-xs uppercase tracking-[0.4em] text-gold mb-3 block font-light">
              {t.artistsSection.eyebrow}
            </span>
            <h3 className="text-3xl md:text-5xl font-display font-extralight tracking-tight uppercase text-white leading-none">
              {t.artistsSection.title}
            </h3>
            <p className="text-sm text-zinc-500 max-w-md mx-auto font-light mt-4 tracking-wide leading-relaxed">
              {t.artistsSection.subtitle}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {t.artistsSection.list.map((artist) => (
              <div
                key={artist.name}
                className="group grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
              >
                <div className="aspect-[3/4] w-full max-w-sm mx-auto overflow-hidden bg-zinc-950 relative rounded-sm border border-zinc-900 flex flex-col items-center justify-center">
                  {artist.photo ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={artist.photo || '/placeholder.svg'}
                        alt={artist.photoAlt || artist.name}
                        className="absolute inset-0 w-full h-full object-cover grayscale contrast-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    </>
                  ) : (
                    <>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-gold/5 rounded-full blur-[80px] pointer-events-none" />
                      <span className="relative z-10 text-7xl md:text-8xl font-display font-extralight text-zinc-700 tracking-widest select-none">
                        {artist.initials}
                      </span>
                      <span className="relative z-10 text-[0.6rem] tracking-[0.35em] uppercase text-zinc-600 font-light mt-4">
                        {t.artistsSection.portraitSoon}
                      </span>
                    </>
                  )}
                  <div className="absolute bottom-6 left-6 z-20">
                    <span className="text-xs text-gold uppercase tracking-widest font-light block mb-1">
                      {artist.index}
                    </span>
                    <span className="text-xl font-display font-light text-white uppercase tracking-wider">
                      {artist.name}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <span className="text-[0.7rem] tracking-[0.3em] uppercase text-gold font-light">
                    {artist.spec}
                  </span>
                  <h4 className="text-3xl md:text-4xl font-display font-light text-white uppercase tracking-wider">
                    {artist.name}
                  </h4>
                  <p className="text-sm text-zinc-400 font-light leading-relaxed max-w-md mx-auto md:mx-0">
                    {artist.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — FINAL CTA (Dark Epilogue) */}
      <section
        id="cta"
        className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-black z-10"
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-gradient-to-t from-gold/10 to-transparent blur-[150px] pointer-events-none" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <div id="cta-headline-container" className="space-y-6">
            <p
              id="cta-phase-1"
              className="text-xl md:text-3xl font-display font-extralight tracking-tight text-zinc-500 leading-normal"
            >
              &quot;{t.cta.phase1}&quot;
            </p>
            <p
              id="cta-phase-2"
              className="text-3xl md:text-6xl font-display font-light tracking-tight text-white uppercase leading-none opacity-0 scale-95 transition-all duration-1000"
            >
              {t.cta.phase2}
            </p>
          </div>

          <div
            id="cta-button-container"
            className="mt-16 opacity-0 transition-all duration-1000 delay-500"
          >
            <a
              href="https://app.bunkerbarbershopusa.com/booking"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleBookingClick}
              className="inline-flex items-center space-x-4 bg-zinc-950/80 border border-gold/40 text-gold hover:text-black hover:bg-gold px-8 py-5 text-sm uppercase tracking-[0.3em] font-light transition-all duration-500 group rounded-sm shadow-xl shadow-gold/5"
            >
              <span>{t.cta.button}</span>
              <Icon
                icon="solar:calendar-linear"
                className="text-lg group-hover:scale-110 transition-transform duration-300"
              />
            </a>
            <span className="block text-[0.65rem] text-zinc-600 mt-4 tracking-widest uppercase font-light">
              {t.cta.note}
            </span>
          </div>
        </div>

        <footer className="absolute bottom-8 left-0 w-full px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-[0.65rem] tracking-widest uppercase font-light space-y-4 md:space-y-0">
          <div>
            <span>{t.footer.copyright}</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gold transition-colors">
              {t.footer.privacy}
            </a>
            <a
              href="https://instagram.com/bunkertattoousa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              {t.footer.instagram}
            </a>
            <a
              href="https://share.google/daMDCzhYJ5PbMM9A3"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              {t.footer.location}
            </a>
          </div>
        </footer>
      </section>
    </>
  )
}
