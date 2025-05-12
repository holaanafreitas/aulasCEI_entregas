import { listaLinks } from "@/data/pixar";

const NavHeader = () => {


    return ( 
        <nav className='Header-nav'>
            {/* <a href="#">FILMS</a>
            <a href="#">TECHNOLOGHY</a>
            <a href="#">CARRERS</a>
            <a href="#">MORE</a> */}

            {listaLinks.map(({id, url, title}) => {
                return(
                    <a key={id} href={url}>{title}</a>
                )
            })}
        </nav>
     );
}
 
export default NavHeader;