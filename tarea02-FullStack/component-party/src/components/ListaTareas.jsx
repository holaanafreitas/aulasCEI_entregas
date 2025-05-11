import Tarea from '@/components/Tarea.jsx'

export const ListaTareas = ({tareas}) => {
    return ( 
        // sin indice, sin return, sin desconstruccion
        <div className='Tarea-listing'>
            {   // Version ampla
            
                tareas.map((tarea, idx)=> {
                    const {id, nombre, completada} = tarea;
                    return (
                        <Tarea key={idx} nombre={nombre} isCompletada={completada} id={id} />)})
            }

            <hr />
            {
                // sin indice, sin return, con desconstruccion
                tareas.map(({id, nombre, completada}) => (
                            <Tarea key={id} nombre={nombre} isCompletada={completada} id={id} />
                        ))    
            }

            <hr />
            {
                // utilizando el spread operator {...objeto}
                // el spread genera una copia del objeto leido
                tareas.map(tarea => (<Tarea key={tarea.id} {...tarea} /> ))
            }
        </div>

    );
}
 