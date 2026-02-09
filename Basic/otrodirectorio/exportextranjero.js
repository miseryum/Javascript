export function funcionLejana() {
    console.log("funcion lejana")
}

export const constanteLejana = "Esta es una constante importada... De otro directorio!!"

export class claseLejana {
    constructor(name)
    {
        this.name = name
    }
    Mostrar(){
        console.log(`Hola ${this.name}! Este es un mensaje de otro directorio!`)
    }

}

