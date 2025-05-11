const PerfilUsuario = () => {
    const userData = {
        nombre: "El Barto",
        email: "elbarto@fox.com",
        img: "https://i.ebayimg.com/images/g/Z9oAAOSwH7NlKK4J/s-l1200.webp",
        direccion: {
            calle: "Calle Falsa 123",
            ciudad: "Springfield",
            codigoPostal: "12345"
        }
        };

    const {nombre, email, img, direccion} = userData
    const { calle, ciudad, codigoPostal} = direccion;

    return ( 
        <div>
                <div className="Perfil-usuario">
                    <h3>{nombre}</h3>
                    <p>{email}</p>
                    <img src={img} alt={`Imagem de ${nombre}`} style={{width: "150px"}} />
                    <p>Dirección:</p>
                    <ul>
                        <li>{calle}</li>
                        <li>{ciudad}</li>
                        <li>Codigo postal: {codigoPostal}</li>
                    </ul>
                </div>
        </div>
     );
}
 
export default PerfilUsuario;