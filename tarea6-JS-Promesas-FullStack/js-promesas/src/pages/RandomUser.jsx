// import mockUsers from "@/data/mockUsers";
import { useState, useEffect } from "react";

const RandomUser = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    // const [pagina, setPagina] = useState(1);

    const [usersList, setUsersList] = useState([]);
    // const [info, setInfo] = useState ({
    //     "count":0,
    //     "pages": 1,
    //     "next": null,
    //     "prev": null
    // })

    // const [filterParam, setFilterParam] = useState([]);

    useEffect(() => {
        // llamar a la función cuando cargo ael componente
        loadUsers();
    },[])

    const loadUsers =  async () => {
        try {
            setLoading(true);
            setError("");


            const url = `https://randomuser.me/api/?results=50`;
            const response = await fetch(url);

            if(!response.ok){
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }

            //convertimos nuestra respuesta JSON a JS
            const data = await response.json();

            //Guardamos los personajes
            setUsersList(data.results);

            // //Guardamos la info de la página
            // setInfo(data.info);

        } catch (error) {
            console.error("Tuvimos un error:", error);
            setError(error.message);
        } finally {
            // Desactivamos el flag cuando termina (con exito o con error)
            setLoading(false);
        }
    }


    // const handlePrev = () => {
    //     if (pagina-1 < 1) return;

    //     setPagina(prev => prev -1);
    // }

    // const handleNext = () => {
    //     if (!info.next) return;
    //     if(pagina+1 > info.pages) return;

    //     setPagina(prev => prev+1);
    // }

    return ( 
        <section className="Main-container">
            <div>
                <h2>Ramdom users for your data</h2>
              
                <p>Refresh for new users!</p>
                {loading && <p>Loading data...</p>}
     
                {error && <p className="Error-txt">{error}</p>}
            </div>
    
            <div className="Card-ded">
                {usersList.map((user, index) => (
                    <div key={index} className="Card-userInfo">
                        <img src={user.picture.large} alt={user.name.first}/>
                        <p><strong>Name:</strong> {`${user.name.first} ${user.name.last}`}</p>
                        <p><strong>Gender:</strong> {user.gender}</p>
                        <p><strong>City:</strong> {user.location.city}</p>
                        <p><strong>Country:</strong> {user.location.country}</p>
                    </div>
            ))}
            </div>
      </section>

     );
}
 
export default RandomUser;