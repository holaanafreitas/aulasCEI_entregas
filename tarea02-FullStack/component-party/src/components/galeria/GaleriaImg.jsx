const GaleriaImg = () => {
    const imgs = [
        {id:1, url:"https://rickandmortyapi.com/api/character/avatar/1.jpeg", nombre:"Morty"},
        {id:2, url:"https://rickandmortyapi.com/api/character/avatar/2.jpeg", nombre: "Ricky"},
        {id:3, url: "https://rickandmortyapi.com/api/character/avatar/3.jpeg", nombre: "Chica"}
    ]

    return ( 
        imgs.map (({id, url, nombre}) => {
            return (
            <div className="Img-card" key={id}>
                <h3>{nombre}</h3>
                <img src={url} alt={`Imagem de ${nombre}`} />
            </div>
            )
        })
     );
}
 
export default GaleriaImg;