import '@/css/Style.css'
import './css/App.css'
import NavSearchParams from '@/components/Nav'
import Footer from '@/components/Footer'

// pages
import PokeApi from '@/pages/PokeApi'
import DED from '@/pages/DED'
import RandomUser from '@/pages/RandomUser'

function App() {
  const params = new  URLSearchParams(window.location.search);
  const pagina = params.get("page") || "pokeapi";

  let page = null;

  switch (pagina) {
    case "pokeapi": page = <PokeApi />; break;
    case "randomuser": page = <RandomUser />; break;
    case "ded": page = <DED />; break;
    default: page = <PokeApi />
  }
  
  return (
    <>
     <h3>Choose which content you want to see:</h3>
     <NavSearchParams />

     {page}

     <Footer />

    </>
  )
}


export default App
