export default class animales{
    constructor(especie, age, largo)
    {
        this.especie = especie
        this.age = age
        this.largo = largo
    }
    mostrarInformacion(){
        console.log(`${this.especie} tiene ${this.age} de edad, y un largo de ${this.largo}`)
    }

}
