export const CardCharacter = ({ name, image, status, gender, species }) => {
    return (
        <div className="Card-charac">
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <div className="Card-info">
                <p style={{
                    color: status === "Alive" ? "darkgreen"
                        : status === "Dead" ? "red" : "gray"
                }}>
                    {status}</p>|
                <p>{species}</p>|
                <p>{gender}</p>
            </div>
        </div>
    );
}