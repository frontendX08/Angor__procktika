import { useState } from 'react'
import './App.css'
import About__Section from './Components/About__Section/About__Section'
import AboutLogin from './Components/About__Login/AboutLogin'
import Alside from './Components/About_Alside/Alside'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <About__Section />
      <AboutLogin />
      {/* <Alside /> */}
    </>
  )
}

export default App
