/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
/*     const Franco = (a, b) =>  {
        a + b 
        return (a + b)
    }
    console.log (Franco(1,7)) */

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
/*     const unArray = [1,2,3,4,5,6,7,8,10,20,15,122,2]
    const mayor = (a) => {
        let f = a[0]
        for (let i=0; i<a.length; i++)
        {
            
            if (f < a[i]){
                f=a[i]
            }
                    
        }
        return f;
    }
console.log(mayor(unArray)) */
// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
   /*      const frase = "TengoOOO una funcion que devuelve vocales"
        const vocalesset = new Set(["a", "e", "i", "o", "u"])
        const vocalesf = (a) => {
            let vocalCont= 0
            a = a.toLowerCase()
            for(let i=0; i<a.length; i++)
            {
                
                if (vocalesset.has(a[i]))
                {vocalCont++}
            }
            return vocalCont
        }
        console.log(vocalesf(frase)) */

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
      /*   const array = [
            "fRanco",
            "MaxxxXi",
            "ayElen",
            "zaIra",
            "luis",
            "fraan"
        ]
        const upperArray = (a) => {
            const newArray = []
            a.forEach((value) => newArray.push(value.toUpperCase()))
            return newArray
            
        }
        
        console.log(upperArray(array)) */

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
 /*    let numero = 4
    function Franco(x){
        let divisor = Math.floor(x ** 0.5)
        if (x<2){
            console.log(false)
        }else if(x <= 3){
            console.log(true)
        }
            else
            {
                let resultado = true
            for(let i= divisor;i>=2;i--)
            {
                if (x % i == 0){
                    
                    resultado = false
                    break
                    }
                    
                 
                }
                console.log(resultado)

            }
  
            
        }

    Franco(numero) */
// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

/*     const Array1 = ["Franco", "Maximiliano", "Marcos"]
    const Array2 = ["Marcos", "Franco", "Capararo"]

    function arraySimetry(x,y){
        const newArray = []
        const set2 = new Set(y)
        x.forEach(valor => {
            if(set2.has(valor)){
                newArray.push(valor)
            }});
            return newArray
    }

    const resultado = arraySimetry(Array1, Array2);
    console.log(resultado) */
    
// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
  /*   const arrayNueva = [1,5,2,3,7,8,6,42,256,643,47,48,86,35,14,754,35,564,76,98,23]
    function mequierenvolverloco(x){
        let z = 0
        for (let i = 0; i<x.length;i++)
        {
            if (x[i] % 2 == 0)
            {z += x[i] }
        }
        return z
    }
const arrayPares = mequierenvolverloco(arrayNueva);
console.log(arrayPares) */

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
/*     const numeros = [1,23,5,6,1,2,3,1,52,11,23,16,54,65,76,87,67,45,23,12,8,4,65]
    const arrayalCuadrado = (x) => { 
        let newArray = []
        for(let i = 0; i<x.length;i++){
            newArray.push(x[i]**2)
        }
        return newArray
    }
    const invocacion = arrayalCuadrado(numeros)
    console.log(invocacion) */

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso


/* 

const frase = "Esto es una cadena de texto y ya quiero dejar de hacer funciones"

function dereversa(x){
let xy = x.split(" ")
let Porfin = []
xy.forEach(valor => {Porfin.unshift(valor)})
Porfin = Porfin.join(" ")
return Porfin
}
const Show = dereversa(frase)
console.log(Show) */
// 10. Crea una función que calcule el factorial de un número dado
/* const numerofinal = 6

const arrowfinal = (x) => {
    let variablefinal = 1
    for (let i = x; i>1; i--)
    {
        variablefinal *= i;
    }
    return variablefinal
}
const Final = arrowfinal(numerofinal)
console.log(Final)
 */