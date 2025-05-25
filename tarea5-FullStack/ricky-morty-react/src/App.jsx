import { useState, useEffect } from 'react'

import '@/css/App.css'
import { NavSearchParams } from './components/Nav'
import Characters from '@/pages/Characters'
import Places from '@/pages/Places'
import Episodes from '@/pages/Episodes'


function App() {
   
  const params = new URLSearchParams(window.location.search);
  const pagina = params.get("page") || "characters"; 

  let page = null;
  
  switch (pagina) {
    case "characters": page = <Characters />; break;
    case "episodes": page = <Episodes />; break;
    case "places": page = <Places />; break;
    default: page = <Characters />; 
  }

  return (
    <>
      <NavSearchParams />
      {page}
    </>
  )
}

export default App
