import { useState } from 'react'

import './App.css'
import Alside from './Components/About_Alside/Alside'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Alside />
    </>
  )
}

export default App
