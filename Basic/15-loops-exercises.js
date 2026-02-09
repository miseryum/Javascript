/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
   /*  for (let i = 0; i<20; i++){
        console.log(i)
    } */
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
/* let f = 0
    for (let o =  1; o<=100; o++){
        f = o + f
    }        
    console.log(f)
         */
// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
     /* for (let i = 1; i<=50; i++){
        if(i % 2 === 1)
        {continue}
        console.log(i)
    }  */
        /* for (let i = 1; i<=50; i++){
        if(i % 2 === 0)
        {console.log(i)}
    }  */

   /*   for (let i = 1; i<=50; i++){
        let division = i/2
        division = `${division}`
        if(division.includes("."))
        {continue}
        console.log(i)
    }  */
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
        
       /* let myArray=[
            "Franco",
            "Ayelen",
            "Maximiliano",
            "Zaira"
        ]
        for(let f=0; f<myArray.length; f++){
            console.log(myArray[f])
        } */
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
/*         let Nombre = "Francisco de la juana XD"
        let contador = 0
        for(let valor of Nombre){
            if(
                valor =="a" ||
                valor =="o" ||
                valor =="e" ||
                valor =="u" ||
                valor =="i"
            )
            {contador++}
        }
        console.log(contador) */
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
/*         let Numeros = [5,5,5]
        let prodct = 1
        for (let i = 0;i<Numeros.length;i++)
                {
                prodct *=  Numeros[i]                    
                }
                console.log(prodct) */
// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
  /*       for (let i=1; i<=10;i++)
        {   
            console.log(`5 * ${i} = ${i*5}`)
        }
 */
// 8. Usa un bucle para invertir una cadena de texto

        /* let frase = "¡Hola, soy Franco!"
        let x = frase.length - 1
        for (let i=x;i>=0;i--)
                {
                console.log(frase[i])
                } */
// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
       /*  let x = 0
        let f = 1
        for (let i=0;i<10;i++)
        {
            console.log(x)
            x = f + x  
            f = x - f   
        } */

/* let actual = 0
let siguiente = 1

for (let i = 0; i < 10; i++) {
    console.log(actual)

    let nuevo = actual + siguiente
    actual = siguiente
    siguiente = nuevo
} */
// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
/* 
let Numeritos = [1, 2, 4 ,5 ,6, 10 ,20, 32, 14 ,13]
let nuevo = []

for (let i=0;i<Numeritos.length;i++){
        if(Numeritos[i]>10)
        {
            nuevo.push(Numeritos[i])
        }
}
console.log(nuevo)
 */