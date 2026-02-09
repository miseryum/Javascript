/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente
function Edad(x){
    if (x < 0 || x === 0){
        console.error("Edad invalida, volve a intentarlo")
    }
}
Edad(0)
// 2. Crea una función que utilice warn correctamente

function Edad2(x){
    if (x < 0 || x === 0){
        console.error("Edad invalida, volve a intentarlo")
    }else if (x == ""){
        console.warn("Cuidado! Estás intentando enviar un valor vacío!")
    }
}
Edad2("")
// 3. Crea una función que utilice info correctamente
function Edad3(x){
    if (x < 0 || x === 0){
        console.error("Edad invalida, volve a intentarlo")
    }else if (x == ""){
        console.warn("Cuidado! Estás intentando enviar un valor vacío!")
    }else{
        console.info(`Tu edad es ${x}`)
    }
}
Edad3(24)

// 4. Utiliza table

const Tabla = {name : "Franco", age : 27, ocupacion: "musico"}
console.table(Tabla)


// 5. Utiliza group
console.group("Usuario :")
console.log("Franco")
console.log("Casal")
console.groupEnd()
// 6. Utiliza time
console.time("1")
for (let i = 0; i < 5000; i++)
{}
console.timeEnd("1")
// 7. Valida con assert si un número es positivo
const numero = -24
console.assert(numero >= 0, "Me parece que no")
// 8. Utiliza count
console.count("Esto es un count")
console.count("Esto es un count")
console.count("Esto es un count")
console.count("Esto es un count")
console.count("Esto es un count")
console.count("Esto es un count")
console.count("Esto es un count")
console.count("Esto es un count")
console.count("Esto es un count")
console.count("Esto es un count")
console.count("Esto es un count")

console.countReset("Esto es un count")
// 9. Utiliza trace
function A(){
console.trace("Trace de funcion A y B")
}

function B(){
A()
}
B()

// 10. Utiliza clear
//console.clear()

