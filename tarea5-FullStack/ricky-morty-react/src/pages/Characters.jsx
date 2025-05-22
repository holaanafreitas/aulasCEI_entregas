import { useState, useEffect } from "react";
import characMock from "@/data/characMock";
import {CardCharacter} from "@/components/CardCharacter";
import FilterSearch from "@/components/FilterSearch";

const Characters = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [pagina, setPagina] = useState(1);

    const [characList, setCharacList] = useState([]);
    const [info, setInfo] = useState ({
        "count":0,
        "pages": 1,
        "next": null,
        "prev": null
    })

    const [filterParam, setFilterParam] = useState({
        "status": "",
        "species": "",
        "gender": ""
    });

    useEffect(() => {
        // llamar a la función cuando cargo ael componente
        loadCharacters();
    },[pagina, filterParam])

    const loadCharacters =  async () => {
        try {
            // Activamos la carga de datos..
            setLoading(true);

            // Limpiamos el error
            setError(null);

            // const response = await fetch(`https://rickandmortyapi.com/api/character?page=${pagina}&species=${filterParam.species}&status=${filterParam.status}`);

            let url = `https://rickandmortyapi.com/api/character?page=${pagina}`;

            if (filterParam.species) {
            url += `&species=${filterParam.species}`;
            }
            if (filterParam.status) {
            url += `&status=${filterParam.status}`;
            }
            if (filterParam.gender) {
            url += `&gender=${filterParam.gender}`;
            }

            const response = await fetch(url);

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

    const loadFilterParam = () => {

    }
    // const characList = characMock.results;
    // const info = characMock.info;

    // console.log(characMock);

    const handlePrev = () => {
        if (pagina-1 < 1) return;

        setPagina(prev => prev -1);
    }

    const handleNext = () => {
        if (!info.next) return;
        if(pagina+1 > info.pages) return;

        setPagina(prev => prev+1);
    }

    return ( 
        <div>
            <h3>Characters</h3>

            <FilterSearch  setFilterParam={setFilterParam}/>

            <div className="Card">
                { characList.map( p => {
                    return (
                        <CardCharacter key={p.id} {...p} />
                    )
                })}
            </div>


            <button onClick={handlePrev}>Prev</button>
            <span>items: {info.count}</span>
            &nbsp; | &nbsp; {pagina} &nbsp; | &nbsp;
            <span> info: {info.pages}</span>
            <button onClick={handleNext}>Next</button>
        </div>
     );
}
 
export default Characters;