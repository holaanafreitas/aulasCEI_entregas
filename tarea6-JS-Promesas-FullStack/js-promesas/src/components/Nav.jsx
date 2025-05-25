const NavSearchParams = () => {
    return ( 
        <nav className="Nav">
            <a className="Nav-a" href="?page=pokeapi">PokeAPI</a>
            <a className="Nav-a" href="?page=randomuser">Random User</a>
            <a className="Nav-a" href="?page=ded">D&D</a>
        </nav>
     );
}
 
export default NavSearchParams;