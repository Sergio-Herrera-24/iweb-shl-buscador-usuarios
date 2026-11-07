import { useState } from 'react'
import './App.css'
import Header from './Header'
import {mock1} from './constants/users.js'
import CONFIG from './config/config.js'
import Resultados from './Resultados.jsx'

function App() {
  const [textoinput, setTexto] = useState("")
  const [resultado, setResultado] = useState(null)

  function manejarBuscar(){
    if(!CONFIG.use_server){
      setResultado(mock1.users)
    }
  }

  return (
    <div id="main">
      <Header />
      <h2 id="buscador">Buscador de usuarios</h2>
      <input id="query" type="text" value={textoinput} onChange={(e) => setTexto(e.target.value)}></input>
      <button id="botonsearch" onClick={manejarBuscar}>Buscar</button>
      {resultado ? <Resultados resultado={resultado} /> : null}
    </div>
  )
}

export default App
