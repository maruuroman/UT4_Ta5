import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setIsVisible((false))}>
          visualizar
        </button>
        <button onClick={() => setIsVisible((true))}>
          Ocultar
        </button>
      </div>
      {}
      {!isVisible && <p>Estas visualizando el texto.</p>}
    </>
  )
}

export default App