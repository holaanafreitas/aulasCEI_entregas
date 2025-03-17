const li = document.querySelectorAll('.li');
const bloque = document.querySelectorAll('.bloque');

// CLICK en li
// TODOS .li quitar la clase activo
// TODOS .bloque quitar la clase activo
//.li con la posicion se añadimos la clase activo
//.bloque con la posicion se añadimos la clase activo


li.forEach((cadaLi, i) => {
    cadaLi.addEventListener('click', () => {
        // Eliminar la clase "activo" de todos los bloques
        bloque.forEach((cadaBloque) => cadaBloque.classList.remove('activo'));

        // Añadir la clase "activo" al bloque correspondiente
        bloque[i].classList.add('activo');
    });
});



// ANTES DE SIMPLIFICAR:
//recorriendo todos los LI
// li.forEach((cadaLi, i) => {
//     //Asignando un click a CADALI
//     li[i].addEventListener('click', ()=>{
//         // recorrer TODOS los li
//         li.forEach( (cadaLi, i) => {
//             // Quitando la clase activo de cada li
//             li[i].classList.remove('activo')
//             // Quitando la clase activo de cada bloque
//             bloque[i].classList.remove('activo')
//         })

//         //en el li que hemos click le añadimos la clase activo
//         li[i].classList.add('activo')
//         //En el bloque con la misma posición le añadimos la clase activo
//         bloque[i].classList.add('activo')

//     })
// })