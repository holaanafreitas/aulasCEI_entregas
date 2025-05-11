
const Tarea = ({id, nombre, completada}) => {
    // si esta completada, mostrar un boton para borrar

    return (
            // opcion de boton para verdadero y falso
        <div className="Tarea-tarjeta">
            <h3>{id}</h3>
            <h3>{nombre}</h3>
            <p>{completada ? <button>Borrar</button> : <button>Marcar como completada</button> }</p>

            { // opcion de boton solo si verdadero
              completada  && <button>Borrar 2</button>
            }
        </div>
    )
}
export default Tarea;