import Hero from "./Hero"
import Nav from "./Nav"
import ThemeContext from "./ThemeContext"

let App = () => {
  return <>
    <ThemeContext>
      <Nav />
      <Hero />
    </ThemeContext>
  </>
}

export default App