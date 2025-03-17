const bloque = document.querySelectorAll('.bloque')
const h2 = document.querySelectorAll('.h2')

//Cuando haga ClICK EN H2,
    // QUITAR la clas activo de TODOS los bloque
    //Vamos a añadir la clase activo al BLOQUE con la POSICION del h2

    //Recorrer TODOS los 2
    h2.forEach((cadaH2 , i) => {
        //Asignando un CLICK a cada H2
        h2[i].addEventListener('click', () => {

            //Recorrer TODOS los bloque
            bloque.forEach((cadaBloque, i) => {
                //Quitamos la clase activo de TODOS los bloques
                bloque[i].classList.remove('activo')
            })

            //Añadiendo la clase activo al bloque cuya posición sea igual al del h2
            // el linea 12
            bloque[i].classList.add('activo')
        })
    })  


//ANTES DE SIMPLIFICAR:
//  //Recorrer TODOS los 2
//  h2.forEach((cadaH2 , i) => {
//     //Asignando un CLICK a cada H2
//     h2[i].addEventListener('click', () => {

//         //Recorrer TODOS los bloque
//         bloque.forEach((cadaBloque, i) => {
//             //Quitamos la clase activo de TODOS los bloques
//             bloque[i].classList.remove('activo')
//         })

//         //Añadiendo la clase activo al bloque cuya posición sea igual al del h2
//         // el linea 12
//         bloque[i].classList.add('activo')
//     })
// })  