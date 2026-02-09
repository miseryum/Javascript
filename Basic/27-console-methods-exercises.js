/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente
function mostrarEdad(age){
    if (typeof(age) == "number"){
        console.log(`El usuario tiene ${age} ages`) // el teclado no tiene enie xd
    }else{
        console.error('No estas enviando un numero')
    }
}
mostrarEdad("asd")


// 2. Crea una función que utilice warn correctamente
function mostrarEdad2(age){
    if (typeof(age) == "number"){
        console.log(`El usuario tiene ${age} ages`) // el teclado no tiene enie xd
    }else if(age == 0){
        console.warn('Cuidado! no pusiste ningun valor! Vuelve a intentarlo')

    }else{
        console.error('No estas enviando un numero')

    }
}
 
mostrarEdad2('')


// 3. Crea una función que utilice info correctamente


// 4. Utiliza table

// 5. Utiliza group

// 6. Utiliza time

// 7. Valida con assert si un número es positivo

// 8. Utiliza count

// 9. Utiliza trace

// 10. Utiliza clear