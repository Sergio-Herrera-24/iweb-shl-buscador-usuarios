export default function Resultados(props){
    return(
        <>
            <ul id="resultado">
                {props.resultado.map(usuario =>{
                    return(
                        <li key={usuario.id}>
                            <p>{`Nombre: ${usuario.firstName} ${usuario.lastName}`}</p>
                            <p>{`Email: ${usuario.email}`}</p>
                            <img src={usuario.image}/>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}