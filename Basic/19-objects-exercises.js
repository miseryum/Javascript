/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
    const primerObjeto = {
        name: "Franco",
        age: 27,
        estado: "Soltero",
        programador: true

    }
// 2. Accede y muestra su valor
    console.log(primerObjeto)
    // 3. Agrega una nueva propiedad
    primerObjeto.estado = "casado"
    console.log(primerObjeto)
    // 4. Elimina una de las 3 primeras propiedades
    delete primerObjeto.age
    console.log(primerObjeto)
// 5. Agrega una función e invócala
    primerObjeto.estudiar = function(){console.log(`${this.name} está estudiando`)}
    primerObjeto.estudiar()
// 6. Itera las propiedades del objeto
    for (let key in primerObjeto){
        console.log(`${key} : ${primerObjeto[key]}`)
    }
// 7. Crea un objeto anidado
    const segundoObjeto = {
        name: "Ayelen",
        age: 30,
        estado: "casado",
        trabajos:{
            niñera: "Hace 4 años",
            bailarina: "Hace 15 años"
        }
    }
    console.log(segundoObjeto)
    
    // 8. Accede y muestra el valor de las propiedades anidadas
    for (let key2 in segundoObjeto.trabajos){
        console.log(`${key2} : ${segundoObjeto.trabajos[key2]}`)
    }

// 9. Comprueba si los dos objetos creados son iguales
    if (primerObjeto == segundoObjeto)
    {console.log("Esto jamas va a ser true por que no son iguales a nivel identidad ni a tipo.")}else{console.log("Falso aunque tengan las mismas propiedades y valores")}
// 10. Comprueba si dos propiedades diferentes son iguales
    if (primerObjeto.estado == segundoObjeto.estado)
    {console.log("Ambos estan casados")}else{console.log("No son iguales")}

    let primerObjetoset = new Set([])
    for (let key3 in primerObjeto){
        if (typeof primerObjeto[key3] !== "function")
            {primerObjetoset.add(primerObjeto[key3])}
    }

    console.log(primerObjetoset)

