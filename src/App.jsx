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
            colors={isDark ? ['#7dd3fc', '#6366f1', '#f0abfc'] : ['#93c5fd', '#818cf8', '#f9a8d4']}
            backgroundColor={isDark ? '#060816' : '#f4f6fb'}
            speed={0.32}
            streakCount={3}
            streakWidth={0.7}
            streakLength={1.35}
            glow={0.85}
            density={0.72}
            twinkle={0.7}
            zoom={3.2}
            backgroundGlow={0.16}
            opacity={isDark ? 0.42 : 0.22}
            mouseInteraction={false}
          />
        </div>
        <div className="page-shell">
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
