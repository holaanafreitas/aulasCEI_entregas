import { useState, useEffect } from "react";

const PokeApi = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [detailsList, setDetailsList] = useState([]);
  
    useEffect(() => {
      loadLanguages();
    }, []);
  
    const loadLanguages = async () => {
      try {
        setLoading(true);
        setError("");
  
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
        const data = await response.json();
  
        const detailsPromises = data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          const detail = await res.json();
          return detail;
        });
  
        const details = await Promise.all(detailsPromises);
  
        setDetailsList(details);
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    return ( 
        <section className="Main-container">
        
        <div>
            <h2>Pokemóns!</h2>
            {loading && <p>Loading data...</p>}
            {error && <p className="Error-txt">{error}</p>}
        </div>
        
        <div className="Card-pokemon">
          {detailsList.map((pokemon) => (
            <div key={pokemon.id} className="Card-pokemonInfo">
              <p><strong>Name:</strong> {pokemon.name}</p>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <p><strong>Height:</strong> {pokemon.height+ " feet" || "No info"}</p>
              <p><strong>Weight:</strong> {pokemon.weight+" g"|| "No info"}</p>
            </div>
          ))}
        </div>
      </section>
     );
}
 
export default PokeApi;