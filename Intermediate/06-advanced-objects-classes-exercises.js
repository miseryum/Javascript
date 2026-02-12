/*
Clase 38 - Objetos y clases avanzados
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=11832
*/

// 1. Agregega una función al prototipo de un objeto
class Persona {
    constructor(name, age){
        this.name = name,
        this.age = age
    }
}
const speakAll = { speak () {console.log(`Hola soy ${this.name}`);}}
const persona1 = new Persona("franco", 27);

Object.assign(Persona.prototype, speakAll);
persona1.speak()

// 2. Crea un objeto que herede de otro
class Musico extends Persona{
}
class Programador extends Persona{
}

const Programador1 = new Programador("Franco")
Programador1.speak()
const Cantante = new Musico("Luis")
Cantante.speak()


// 3. Define un método de instancia en un objeto
// Diferencia con el ejercicio 1, es que aca estamos dandole un metodo de instacia a un OBJETO, no a la clase comppleta

const Ejecutar = {
    Cantar ()
    {
        console.log("Esta produciendo una Melodia con su Voz")
    }
}
Object.assign(Cantante, Ejecutar)
Cantante.Cantar()




// 4. Haz uso de get y set en un objeto
class claseVIP{
    constructor(name,salario)
    {
        this.name = name,
        this._salario = salario,
        this._claveID = Math.random()
    }

get id(){
    return this._claveID;
}

get salary(){
    return this._salario;
}

set salary(newSalary){
    if (newSalary < 0)
    {
        console.log("❌ Salario insuficiente ❌");
        return;
    }
    this._salario = newSalary;
    
}
}

const person1VIP = new claseVIP("Francis", 500);
console.log(person1VIP.salary);
console.log(person1VIP.id);

person1VIP.salary = -200;
person1VIP.salary = 200;
console.log(person1VIP.salary);



// 5. Utiliza la operación assign en un objeto

const objeto1 = {a: 0};
const objeto2 = {a: 24};

Object.assign(objeto1, objeto2)
console.log(objeto1)

// 6. Crea una clase abstracta

class programadores {
    constructor (name){
        if(new.target === programadores){
            throw new Error("No podes instanciar una clase Abstracta");
        }
        this.name = name;
    }

    programar()
    {
        throw new Error("Funcion no estanciada.");    
    }

}
class desarrolladorWeb extends programadores{
    programar()
    {
        console.log("Esta desarrollando en js");
    }
}

class desarrolladorJuegos extends programadores{
    programar()
    {
        console.log("Esta programando en c++");
    }
}
const programador2 = new desarrolladorWeb("Franco")
const programador3 = new desarrolladorJuegos("Luis")
programador2.programar()

// 7. Utiliza polimorfismo en dos clases diferentes
class personitas{
    constructor(name,age,descripcion)
    {
        this.name = name,
        this.age = age,
        this.descripcion = descripcion
    }

    ejecutarAccion(){
        throw new Error("Debe tener una accion propia, no la base.");   
    }
}
class programador extends personitas{
    ejecutarAccion(){
        console.log(`${this.name} esta haciendo una pagina. Porque ${this.descripcion}`)
    }
}

class atleta extends personitas{
    ejecutarAccion(){
        console.log(`${this.name} esta haciendo ejercicio. Porque ${this.descripcion}`)
    }
}

const sujeto1 = new programador("Luis", 27, "Es un Desarrollador Web")
const sujeto2 = new atleta("Franco", 27, "Es un Gimnasta")
sujeto1.ejecutarAccion()
sujeto2.ejecutarAccion()
// 8. Implementa un Mixin
class Electrodomesticos{
    constructor(name){
        this.name = name
    }
}
class Cocina extends Electrodomesticos{ }

class Living extends Electrodomesticos{ }


const funcionarMixin = {Encender()
{
    console.log(`${this.name} se esta encendiendo`);

}}
const aparato1 = new Cocina("Heladera");
const aparato2 = new Living("Televisor");
[Cocina.prototype,Living.prototype].forEach(x => {Object.assign(x, funcionarMixin)});

aparato1.Encender();
aparato2.Encender();

// 9. Crea un Singleton

// 10. Desarrolla un Proxy