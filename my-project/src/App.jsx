import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About__Section from './Components/About__Section/About__Section'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <About__Section />
    </>
  )
}

export default App
