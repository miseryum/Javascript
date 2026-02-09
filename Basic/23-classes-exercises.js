/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
class Person {
    constructor(name, age)
    {
    this.name = name
    this.age = age
    }

    static play(name, band){
        console.log(`${name} Está escuchando ${band}`)

    }
    move(){
        console.log(`${this.name} está caminando`)
    }
}

// 2. Añade un método a la clase que utilice las propiedades

// 3. Muestra los valores de las propiedades e invoca a la función
const persona1 = new Person("Ayelen", 30)
console.log(persona1)
persona1.move()

// 4. Añade un método estático a la primera clase


// 5. Haz uso del método estático
Person.play("Franco","Slipknot")

// 6. Crea una clase que haga uso de herencia
    class Musico extends Person{
        constructor(name, instrumento){
            super(name)
            this.intrumento = instrumento

        }
    }
// 7. Crea una clase que haga uso de getters y setters
    class cuentaBancaria{
        #banco
        #number
        constructor(name, banco, number)
        {
            this.name = name
            this.#banco = banco
            this.#number = number
        }
        get banco(){
            return this.#banco
        }
        set number(newNum){
            this.#number = newNum
        }
        // Corroborar que Se haga el Setter
        get number(){
            return this.#number
        }

    }

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores
    let usuario1 = new cuentaBancaria("Franco", "BBVA", "11585254")
    console.log(usuario1.banco)
    usuario1.number = "new Password"
    console.log(usuario1.number) // consulta de cambio


// 10. Sobrescribe un método de una clase que utilice herencia
    
    class Atleta extends Person{
        constructor (name, age)
        {
            super(name, age)
        }
        move(){
            console.log(`${this.name} está corriendo`)
        }
    }

    //Comprobacion
    const atleta1 = new Atleta("franco", 27)
    console.log(atleta1)
    atleta1.move()