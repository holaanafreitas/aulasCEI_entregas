'use strict'

const grande = document.querySelector('.grande');
const punto = document.querySelectorAll('.punto')+

// Cuando CLICK en pounto
    // Saber la posición de ese punto
    // Aplicar um transform translateX al grande
    // QUITAR la clase activo de RODOS puntos
    // AÑADIR la clase activo al punto que hemos hecho click

//Recorrer TODOS los puntos
punto.forEach( (cadaPunto, i) ) => {
    punto[i].addEventListener('click', () => {
        
        //Guardar la posicion de ese PUNTO
        let posicion = i
        // posicion es 0 transformX es 0
        // posicion es 1 transform es -50%
        // operacion = posicion *-50
        let operacion = posicion * -50

        //Movemos el grande
        grande.computedStyleMap.transform = `translateX(${operacion}%)`;
        
        //Recorremos TODOS los puntos
        punto.forEach(( cadaPunto, i)=> {
            //Quitamos la Clase ACTIVO a TODOS los puntos
            punto[i].classList.remove('activo');
        })

        //Añadir la clase activo en el puntp que hemos hecho click CLICK
        punto[i].classList.add('activo')
    })
}