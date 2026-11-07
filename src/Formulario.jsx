export default function Formulario(props){
    return(
        <div id="formulario">
            <input id="query" type="text" value={props.texto} onChange={(e) => props.repintarTexto(e.target.value)}></input>
            <button id="botonsearch" onClick={() => props.buscar("Buscar")}>Buscar</button>
        </div>
    )
}