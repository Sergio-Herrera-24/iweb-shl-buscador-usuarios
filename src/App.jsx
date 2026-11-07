import { useState } from 'react'
import './App.css'
import Header from './Header'
import {mock1} from './constants/users.js'
import CONFIG from './config/config.js'
import Resultados from './Resultados.jsx'

function App() {
  const [textoinput, setTexto] = useState("")
  const [resultado, setResultado] = useState(null)

  async function manejarBuscar(input){
    if(!CONFIG.use_server){
      setResultado(mock1.users)
      return
    }
    console.log("Llamando al servidor...")
    try{
      let query;
      if(input === "Ver Todos"){
        query = `${CONFIG.server_url}?limit=${CONFIG.num_items}`
      } else if(input === "Buscar"){
        query = `${CONFIG.server_url}/search?q=${textoinput}`
      }
      const response = await fetch(query)
      const data = await response.json()
      console.log(data)
      setResultado(data.users)
    }catch(e){
      console.log("Error: ", e)
    }
  }

  return (
    <div id="main">
      <Header />
      <h2 id="buscador">Buscador de usuarios</h2>
      <input id="query" type="text" value={textoinput} onChange={(e) => setTexto(e.target.value)}></input>
      <button id="botonsearch" onClick={() => manejarBuscar("Buscar")}>Buscar</button>
      <button id="botonall" onClick={() => manejarBuscar("Ver Todos")}>Ver Todos</button>
      {resultado ? <Resultados resultado={resultado} /> : null}
    </div>
  )
}

export default App
