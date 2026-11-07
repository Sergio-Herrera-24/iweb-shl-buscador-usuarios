import { useState } from 'react'
import './App.css'
import Header from './Header'

function App() {
  const [textoinput, setTexto] = useState("")
  
  function manejarBuscar(){
    return
  }

  return (
    <div id="main">
      <Header />
      <h2 id="buscador">Buscador de usuarios</h2>
      <input id="query" type="text" value={textoinput} onChange={(e) => setTexto(e.target.value)}></input>
      <button id="botonsearch" onClick={manejarBuscar}>Buscar</button>
    </div>
  )
}

export default App
