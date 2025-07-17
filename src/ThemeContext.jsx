import React, { createContext, useState } from 'react'
export let themeContext = createContext()

const ThemeContext = ({ children }) => {
  let [theme, setTheme] = useState('light')
  let toogleTheme = () => {
    setTheme(value => value === 'light' ? 'dark' : 'light')
  }
  return (
    <>
      <themeContext.Provider value={{ theme, toogleTheme }}>
        {children}
      </themeContext.Provider>
    </>
  )
}

export default ThemeContext