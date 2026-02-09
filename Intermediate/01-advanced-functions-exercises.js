/*
Clase 12 - Funciones avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=4112
*/

// 1. Crea una función que retorne a otra función
console.log("Ejercicio 1")
function primerEjercicio(nombre){
    const namereturn = nombre;
    return function primerEjercicioReturn(){console.log(`Hola ${namereturn}`);} 
}

const llamada = primerEjercicio("Franco")
llamada()
// 2. Implementa una función currificada que multiplique 3 números
console.log("Ejercicio 2")
    function segundoEjercicio(a){
        return b => c => a*b*c;
    }
const resultado = segundoEjercicio(5)(3)(5);
console.log(`El resultado es : ${resultado}`)
// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
console.log("Ejercicio 3")
function potencia(a, b){
  if (b === 0) return 1;
  return a * potencia(a, b - 1); // a * potencia quedapendiente hasta que retorne un valor, eso va a ocurrir cuando b = 0. Que se cumpla arriba, mientras tanto
}                                // se esta haciendo una escalera que la funciones anteriores estan esperando recibir el numero para terminar la potencia

console.log(potencia(5, 2));

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado
console.log("Ejercicio 4")
    function createCounter(valorInicial){
        let value = valorInicial;

        return {
            increment() {value++},
            decrement() {value--}, 
            getValue() {return value}
        };
        }
const counter = createCounter(10);
console.log(counter.getValue());
counter.decrement();
console.log(counter.getValue());
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getValue());

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier
console.log("Ejercicio 5")
function sumManyTimes(multiplier, ...numbers){
    let resultsum = 0;
    for (let numssum of numbers){
        resultsum +=  numssum;
    }
    return resultsum * multiplier;

}
console.log(sumManyTimes(5, 1,2,3))
// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función
console.log("Ejercicio 6") // , no veas el codigo de abajo, volve a hacerlo por tu merito. 
function sum(callback, ...nums){

    let resultado = 0;
    for (let number of nums)
    {
        resultado += number
    }
    return callback(resultado)
}

function mostrarResultado(callback){
    console.log(`tu resultado es ${callback}`)
}

sum(mostrarResultado, 1,2,3,4,5)

/*function sumEje6(...numbers){
    let resultsum = 0;
    for (let numssum of numbers){
        resultsum +=  numssum;
    }
    return resultsum;

}


function resultadoespacial(data, callback){
    const resultadodelasuma = sumEje6(...data);
    callback (resultadodelasuma); 
}
function showResult(resultadodelasuma){
    console.log(`El resultadoespacial de tu suma es : ${resultadodelasuma}`);
}

resultadoespacial([1,2,3,4], showResult);
 */
// 7. Desarrolla una función parcial
console.log("Ejercicio 7");
function partialFunct(a){
    return (b,c) =>  a *b *c;

}
const parcial = partialFunct(5);
console.log(parcial(2,2));
// 8. Implementa un ejemplo que haga uso de Spread
console.log("Ejercicio 8");
const numeritos = [1,2,4,5,6];
function spreadNums(a,b,c,d,f)
{
return `A, vale ${a}. b, vale ${b}. c, vale ${c}. d, vale ${d}. f, vale ${f}.`;
}
console.log(spreadNums(...numeritos))

// 9. Implementa un retorno implícito
console.log("Ejercicio 9");

const sumatoriaImplicita = (a,b,c) => a+b+c;
console.log(sumatoriaImplicita(1,5,6))
// 10. Haz uso del this léxico
console.log("Ejercicio 9");
let persona1 = {
        name: "franco",
        age : 27,
        thislexico() {
            const f = () => console.log(this.name) 
            f()
        }
    }
console.log(persona1.name)
persona1.thislexico()



class objetoThis {
        constructor (name, age){
            this.name = name,
            this.age = age 
        }
        Metodo(){
            const invocarlexico = () => console.log(`Bienvenido ${this.name}`)
            invocarlexico()
        }
}

const primerObjeto = new objetoThis("franco" , 27)
primerObjeto.Metodo()