const FilterSearch = ({setFilterParam}) => {
    
    
    return ( 
        <div className="Filters-nav">
            <p>Species</p>
            <button onClick={() => setFilterParam(prev => ({...prev, species: "human"}))}>
                <i className="fa-solid fa-person"></i>
            </button>
            <button onClick={() => setFilterParam(prev => ({...prev, species: "alien"}))}>
                <i className="fa-brands fa-reddit-alien"></i>
            </button>
            <button onClick={() => setFilterParam(prev => ({...prev, species: ""}))}>
                <i className="fa-brands fa-reddit-alien"></i>
                <i className="fa-solid fa-person"></i>
            </button>

            <p>Status</p>
            <button onClick={() => setFilterParam(prev => ({...prev, status: "alive"}))}>
                <i className="fa-solid fa-heart-pulse"></i>
            </button>
            <button onClick={() => setFilterParam(prev => ({...prev, status: "dead"}))}>
                <i className="fa-solid fa-skull"></i>
            </button>
            <button onClick={() => setFilterParam(prev => ({...prev, status: "unknown"}))}>
                <i className="fa-solid fa-question"></i>
            </button>
        </div>
     );
}
 
export default FilterSearch;