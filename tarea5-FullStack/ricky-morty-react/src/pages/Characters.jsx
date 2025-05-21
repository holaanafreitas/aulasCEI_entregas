import { useState, useEffect } from "react";
import characMock from "@/data/characMock";
import {CardCharacter} from "@/components/CardCharacter";

const Characters = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [characList, setCharacList] = useState([]);
    const [info, setInfo] = useState ({
        "count":0,
        "pages": 1,
        "next": null,
        "prev": null
    })

    useEffect(() => {
        // llamar a la función cuando cargo ael componente
        loadCharacters();
    },[])

    const loadCharacters =  async () => {
        try {
            // Activamos la carga de datos..
            setLoading(true);

            // Limpiamos el error
            setError(null);

            const response = await fetch(`https://rickandmortyapi.com/api/character`);

            //verificamos se la resposta é correcta
            if(!response.ok){
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }

            //convertimos nuestra respuesta JSON a JS
            const data = await response.json();

            //Guardamos los personajes
            setCharacList(data.results);

            //Guardamos la info de la página
            setInfo(data.info);

        } catch (err) {
            console.error("Tuvimos un error:", error);
            setError(err.message);
        } finally {
            // Desactivamos el flag cuando termina (con exito o con error)
            setLoading(false);
        }
    }

    // const characList = characMock.results;
    // const info = characMock.info;

    console.log(characMock);
    return ( 
        <div>
            <h3>Characters</h3>
            <div className="Card">
                { characList.map( p => {
                    return (
                        <CardCharacter key={p.id} {...p} />
                    )
                })}
            </div>


            <button>Prev</button>
            <span>items: {info.count}</span>
            &nbsp; | &nbsp;
            <span> info: {info.pages}</span>
            <button>Next</button>
        </div>
     );
}
 
export default Characters;