const TarjetaUsuario = ({nombre, edad, ocupacion}) => {

    return (
        <div className="Tarjeta-usuario">
            <h2>{nombre}</h2>
            {edad && <p>Edad: {edad}</p>}
            { ocupacion && <p>Ocupación: {ocupacion} </p>}
        </div>
    );
}

export default TarjetaUsuario;