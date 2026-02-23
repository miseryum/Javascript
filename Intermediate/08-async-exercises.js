/*
Clase 45 - Asincronía
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=14558
*/

// 1. Crea una función para saludar que reciba un nombre y un callback. 
//    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".
function saludar(callback, nombre){
setTimeout(() => {
    callback(nombre)
}, 2000)
}
saludar((nombre)=>{console.log(`Hola, ${nombre}`)},"Franco")


// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback). 
//    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.
function task1(callback){
setTimeout(()=> {
    console.log("Paso 1 completado")
    callback()
},1000)}
function task2(callback){
    setTimeout(()=> {
    console.log("Paso 2 completado")
    callback()
},1000)}
function task3(callback){
setTimeout(()=> {
    console.log("Paso 3 completado")
    callback()
},1000)}

task1(()=>{
    task2(()=>{
        task3(()=>{
        console.log("todos los pasos fueron completados")
        })
    })
})
// 3. Crea una función para verificar un número que retorne una Promesa. 
//    Si el número es par, la promesa se resuelve con el mensaje "Número par". 
//    Si el número es impar, la promesa se rechaza con el mensaje "Número impar".
function pares(num){
    return new Promise((resolve,reject) =>{
        if (num % 2 == 0){
            resolve("Es Par!")
        }else{
            reject("No es par. :(")
        }
    })
}
pares(5).then(result => console.log(result)).catch(reject => console.log(reject))

// 4. Crea tres funciones que devuelvan promesas:
//    firstTask(): tarda 1s y muestra "Primera tarea completada".
//    secondTask(): tarda 2s y muestra "Segunda tarea completada".
//    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".
function firstTask(){
    return new Promise((resolve) => {
        setTimeout (() => {
        console.log("Primer tarea Completada")
        resolve()
    }, 1000)
})
}
function secondTask(){
    return new Promise((resolve) => {
        setTimeout (() =>{
        console.log("Segunda tarea completada")
        resolve()
    }, 2000)
    
})
}

function thirdTask(){
    return new Promise((resolve) => {
        setTimeout (()=>{
        console.log("Tercer tarea completada")
        resolve()
        }, 1500)
    })
}
firstTask()
    .then(()=>secondTask())
    .then(()=>thirdTask())
    .then(()=>{
        console.log("Se completaron todas las tareas")
})


// 5. Transforma el ejercicio anterior de Promesas en una función async/await llamada executeTasks().
async function main(){
    await firstTask()
    await secondTask()
    await thirdTask()
    console.log("Todas completadas")
}
main()




// 6. Crea una función getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//    Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.
function getUser(id){
    return new Promise((resolve,reject)=>{
        console.log("Realizando consulta...")
        setTimeout(() => {
            if(id<5){
                resolve({id, nombre: "Usuario "+ id})
            }else{
                reject("Usuario no encontrado")
            }
        }, 2000);
    })
}
async function ejecutar(){
try{
const usuario = await getUser(2)
console.log(usuario)
}catch(error){
    console.log(error)
}
}
ejecutar()
// 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:
//    console.log("Inicio")
//    setTimeout(() => console.log("setTimeout ejecutado"), 0)
//    Promise.resolve().then(() => console.log("Promesa resuelta"))
//    console.log("Fin")
/* INICIO
FIN
PROMESA
setTIMEOUT EJECUTADO */ 
// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen.
function primera(){
    return new Promise((resolve) =>
    setTimeout(() => {
    resolve("1° promesa")
    }, 2000)
    )
}
function segunda(){
    return new Promise((resolve) =>
    setTimeout(() => {
    resolve("2° promesa")
    }, 1000)
    )
}
function tercera(){
    return new Promise((resolve) =>
    setTimeout(() => {
    resolve("3° promesa")
    }, 3000)
)    
}

Promise.all([primera(),segunda(),tercera()]).then(([resolve1, resolve2, resolve3]) => {
    console.log(resolve1)
    console.log(resolve2)
    console.log(resolve3)
    console.log("Todas Cumplidas")
})
// 9. Crea una función waitSeconds(segundos) que use setTimeout dentro de una Promesa para esperar la cantidad de segundos indicada.
//    A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.
function waitSeconds(s){
    return new Promise((resolve) => setTimeout(resolve, s*1000))
}

async function Hola(){
    console.log("Hola Franco!")
    await waitSeconds(1)
    console.log("1 segundo")
    await waitSeconds(2)
    console.log("2 segundos")
}
Hola()
// 10. Crea una simulación de un cajero automático usando asincronía.
//     - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
//     - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
//     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más.
//     
//     Posible salida esperada:
//     Saldo disponible: 500$
//     Retirando 300$...
//     Operación exitosa, saldo restante: 200$
//     Retirando 300$...
//     Error: Fondos insuficientes
function wait(s){
    return new Promise(resolve => setTimeout(resolve, s*1000))
}
let fondos = 500
async function checkBalance(){
        console.log("Consultando saldo..")
        await wait(1)
        return(`Tu saldo es: ${fondos}$`)
}

async function withdrawMoney(extraccion){
        await wait(0.5)
        console.log("Realizando Extracción..")
        await wait (2)
        if (fondos >= extraccion){
            fondos -= extraccion
            return(`Extracción exitosa. Tu saldo es ${fondos}$`)
        }else{
            throw new Error("Fondos insuficientes")
        }
}

async function Main(){
try{
console.log(await checkBalance())
console.log(await withdrawMoney(300))
console.log(await withdrawMoney(300))
}catch(error){
console.error("Algo salió mal: ",error)
}
}
Main()
