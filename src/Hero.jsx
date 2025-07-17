import React, { useContext } from 'react'
import Hero_top from './Hero_top'
import Hero_main from './Hero_main'

import { themeContext } from './ThemeContext'
const Hero = () => {
  let {theme} =useContext(themeContext)
  let root = document.getElementById('root')
  root.style.background = theme === 'light' ? 'linear-gradient(to bottom,#3690ff,#1f1f1f,#1f1f1f,#1f1f1f,#1f1f1f,#1f1f1f)' : '#fff'
  root.style.color = theme === 'light'?'#fff':'#1f1f1f'
  return (
    <section className="hero_main_container">
      <Hero_top/>
      <Hero_main/>
    </section>
  )
}

export default Hero