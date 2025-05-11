import { useState } from 'react'
import '@/css/App.css'
import TarjetaUsuario from '@/components/TarjetaUsuario'
import {ListaTareas} from './components/ListaTareas';
import PerfilUsuario from './components/PerfilUsuario';
import GaleriaImg from './components/galeria/GaleriaImg';
import {BlogPost} from './components/BlogPost';




function App() {
  
  const listaTareas = [
    { id: 1, nombre: 'Estudiar React', completada: true },
    { id: 2, nombre: 'Leer un libro', completada: false },
    { id: 3, nombre: 'Mejorar mi nivel de Escalada', completada: false },
    { id: 4, nombre: 'Aprender a cocinar', completada: true },
    { id: 5, nombre: 'Ver series', completada: false },
    { id: 6, nombre: 'ir un día a la nieve', completada: false }
    ];
  
  return (
    <>
      <h2>Tarjetas de usuários</h2>
      <div className='Container-tarjetas'>
        <TarjetaUsuario nombre="Ana" edad={31} ocupacion="Programadora"/>
        <TarjetaUsuario nombre="Rafael" edad={33} ocupacion="geólogo" />
        <TarjetaUsuario nombre="Iara" edad={36} ocupacion="médica" />
        <TarjetaUsuario nombre="Pedro" edad={38} />
      </div>

      <hr />

      <h2>Lista de Tareas</h2>
      <ListaTareas tareas={listaTareas} />

      <hr />

      <h2>El Barto perfil</h2>
      <PerfilUsuario />

      <hr />
      <h2>Galería con imágenes</h2>
      <GaleriaImg />

      <hr />
      <h2>Imágenes</h2>
      <img src="./imgs/bird.png" alt="Imagen pásaro" style={{width:"500px", borderRadius:"20px"}}/>

      <hr />
      <h2>Blog Post: uso <del></del> prop children</h2>
      <BlogPost titulo="Mi Primer Post" autor="Tomi" fecha="2024-07-01">
            <p>Lorem ipsum dolor, adipisci unde tempora recusandae tenetur...</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </BlogPost>
    </>
  )
}



export default App
