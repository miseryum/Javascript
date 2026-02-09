/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let newArray = []

newArray = [
    "Perro",
    "toro",
    "oveja",
    "loro",
    "elefante"
]
console.log(newArray)
// 2. Añade dos más. Uno al principio y otro al final
newArray.push("Gato")
newArray.unshift("Pato")
console.log(newArray)

// 3. Elimina el que se encuentra en tercera posición
newArray.splice(1 , 2)
console.log(newArray)


// 4. Crea un set que almacene cinco libros
let mySet = new Set([
    "Valle de la calma",
    "Libro Negro",
    "Luna de Pluton",
    "Escape",
    "Festival de la Blasfemia"
])
console.log(mySet)

// 5. Añade dos más. Uno de ellos repetido

mySet.add("Guerra de jisak" , "Escape")
console.log(mySet)

// 6. Elimina uno concreto a tu elección

console.log(mySet.delete("Guerra de jisak"))
console.log(mySet)


// 7. Crea un mapa que asocie el número del mes a su nombre
    let myMap = new Map()
    myMap = new Map([
[1, "Enero"],
[2, "Febrero"],               
[3, "Marzo"],
[4, "Abril"],        
[5, "Mayo"],
[6, "Junio"],        
[7, "Julio"],
[8, "Agosto"],        
[9, "Septiembre"],
[10, "Octubre"],        
[11, "Noviembre"],
[12, "Diciembre"] 
    ])
    console.log(myMap)


// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
    console.log(myMap.has(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano
let vacas = ["Diciembre", "Enero", "Febrero"]

myMap.set("Summer", vacas)
console.log(myMap)
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let finalArray = []
finalArray = [1,2,3]
console.log(finalArray)

let finalSet = new Set(finalArray)
console.log(finalSet)

let finalMap = new Map()

finalMap = new Map([["setFinal", finalSet]])

console.log(finalMap)

