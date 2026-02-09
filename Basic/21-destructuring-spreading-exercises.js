/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let myArray = ["Franco", 27, "programador"]
let [nombre, edad] = myArray
console.log(nombre)
console.log(edad)
// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [nombre2, edad2, trabajo, experiencia="no definido"] = myArray
console.log(nombre2)
console.log(edad2)
console.log(trabajo)
console.log(experiencia)

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let myObject = {
    name: "Franco",
    edad: 27,
    ocupacion: "Programador",
    contratado: true,
    experiencia: {
        lenguajes: "JavaScript, HTML, CSS",
        años: "6 meses",
        anotacion:"Estudió de manera autodidacta"

    }
}
let {name, ocupacion} = myObject
console.log(name)
console.log(ocupacion)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let {edad : suedad, contratado : estatrabajando} = myObject
console.log(suedad)
console.log(estatrabajando)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let {lenguajes, años} = myObject.experiencia
console.log(`Desarolla hace ${años} con ${lenguajes}`)


// 6. Usa propagación para combinar dos arrays en uno nuevo
let Myarray2 = ["Ayelen", 30, "Bailarina"]
let myArrayNuevo = [... myArray, ...Myarray2]
console.log(myArrayNuevo)
// 7. Usa propagación para crear una copia de un array
let myArraycopia = [...myArrayNuevo]
console.log(myArraycopia)
// 8. Usa propagación para combinar dos objetos en uno nuevo
let myObject2 = {
    apellido: "Smith",
    trajabar: function(){console.log("Trabajando")},
}
let myObjetnuevo = {...myObject, ...myObject2}
console.log(myObjetnuevo)

// 9. Usa propagación para crear una copia de un objeto
let myObjectCopia = {...myObjetnuevo}
console.log(myObjectCopia)
// 10. Combina desestructuración y propagación
let myObjetFinal = {
    ...myObject,
    Nacionalidad: "Argentino",
    edad: myObject.edad + 0.1,
    Familiares : {
        name: "Luciano",
        parentesco: "Hijastro"},
    experiencia : {
        ...myObject.experiencia,
        años: "8 meses"
    }}


console.log(myObjetFinal)