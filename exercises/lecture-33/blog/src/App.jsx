import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const jsxElement = <h1>I am a JSX element</h1>
  const headerElement =  <header>
    <h1>Welcome to React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
  </header>
  const footer = <p>Copyright &copy; 2024</p>

  return (
    <>
      {jsxElement}
      {headerElement}
      <>
        <h1>Welcome to React</h1>
        <h2>Getting Started React</h2>
        <h3>JavaScript Library</h3>
      </>

      {footer}
    </>
  )
}

export default App
