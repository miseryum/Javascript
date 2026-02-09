/*
Clase 23 - Estructuras avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=7514
*/

// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección
console.log("ejercicio 1")
let myArray = ["franco", "ayelen", "luciano", "zaira", "gustavo", "andrea"]
let parejas = ["gustavo", "franco", "andrea", "ayelen"]

console.log(myArray.map(element => element.charAt(0).toUpperCase() + element.slice(1)))

console.log(myArray.filter(element => parejas.includes(element)))

console.log(myArray.reduce((previous, next) => previous + " " + next, ""))
//console.log(myArray.join(" "))
// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares
console.log("ejercicio 2")
console.log("")
const arrayNums = [1,2,3,4,5,6,7,8,9,10,11,22,23]
const parescubos = arrayNums
.map(element => element ** 3)
.filter(element => element % 2 === 0) // regla matematica, si necesitas los pares de los cubos,
console.log(parescubos) //  impar ** 3 es impar, si se filtra primero es lo mismo y ahorras procesamiento

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección
console.log("ejercicio 3")
console.log("")

let arrayAnidado = ["mantel", "platos","botellas",["vasos"], ["tenedor", "cuchara",["cucharita"], "cuchillo"]]
//let arrayAnidado = [1,[2,[3]],4,[[5]]]
console.log(arrayAnidado)
let arrayFlat = arrayAnidado.flat(2)
console.log(arrayFlat)

let lista = ["tenedor, platos, mantel, servilletas, cucharas, cuchillos, vasos"]
let listaMesa = lista.flatMap(objeto => objeto.split(", "))
console.log(listaMesa)


// 4. Ordena un array de números de mayor a menor
let desorden = [5,1,7,6,0,3,2,32,2,5,4,1,6,26,54,37,4,8]
let ordernadoA = desorden.sort((a,b) => {
    if (a < b) return -1
    if (a > b) return 1
    return 0
}
)
let ordenadoD = [...desorden].sort((a, b) => b - a)
//ordenadoD.reverse() // al igual que el sort, sobreescribe , por lo que hay que copiar los valores en una variable
                      // Por lo que tenes que manipular la array donde nacio desorden[]
console.log(ordernadoA)
console.log(ordenadoD)


// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
let set1 = new Set([4,8,12,16,20,24])
let set2 = new Set([2,4,6,8,10,12,14,16])
let union = new Set([...set1, ...set2])
console.log(union)
let inter = new Set([...set1].filter(element => set2.has(element)))
console.log(inter)
const simetry = (a,b) => new Set([
    ...[...a].filter(x => !b.has(x)),
    ...[...b].filter(x => !a.has(x))]
    )
console.log(simetry(set1, set2))

// 6. Itera los resultados del ejercicio anterior


// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos

// 8. Dado el mapa anterior, crea un array con los nombres

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario