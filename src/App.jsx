import React, { useEffect, useState } from 'react'
import { MotionConfig } from 'framer-motion'
import Navbar from './Navbar'
import Hero from './Hero'
import Experience from './Experience'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Lightfall from "./components/Lightfall";

const App = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false

    const savedTheme = window.localStorage.getItem('portfolio-theme')
    if (savedTheme) return savedTheme === 'dark'

    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', isDark ? 'dark' : 'light')
    root.classList.toggle('dark', isDark)
    window.localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <MotionConfig reducedMotion="user">
      <div className="app-canvas">
        <div className="lightfall-background" aria-hidden="true">
          <Lightfall
            colors={isDark ? ['#7dd3fc', '#6366f1', '#f0abfc'] : ['#93c5fd', '#818cf8', '#c4b5fd']}
            backgroundColor={isDark ? '#060816' : '#f8fafc'}
            speed={0.32}
            streakCount={3}
            streakWidth={0.7}
            streakLength={1.35}
            glow={isDark ? 0.85 : 0.6}
            density={0.72}
            twinkle={0.7}
            zoom={3.2}
            backgroundGlow={isDark ? 0.16 : 0.11}
            opacity={isDark ? 0.42 : 0.15}
            mouseInteraction={false}
          />
        </div>
        <div className="page-shell pt-20">
        <Navbar isDark={isDark} onToggleTheme={() => setIsDark((value) => !value)} />
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        </div>
      </div>
    </MotionConfig>
  )
}

export default App
