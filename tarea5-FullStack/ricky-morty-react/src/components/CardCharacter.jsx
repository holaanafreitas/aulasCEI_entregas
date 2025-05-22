export const CardCharacter = ({name, image, status, species}) => {
    return ( 
        <div className="Card-charac">
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <p>{status} | {species}</p>
        </div>
     );
}