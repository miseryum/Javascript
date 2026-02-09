export function Franco() {
    console.log("Esta es la funcion de Franco")
}

export const constante = "Esta es una constante importada"

export class FrancoClass {
    constructor(name, age, altura)
    {
        this.name = name
        this.age = age
        this.altura = altura
    }
    Mostrar(){
        console.log(`Tu nombre es ${this.name}. Tenes ${this.age} años y medís ${this.altura}`)
    }

}
export default function mostrarDefault(x){
    console.log(`Function Default, llamada por ${x}`)
}
