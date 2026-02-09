/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/
console.clear()
import nombre from "./31-default.js";
import animales from "./31-default2.js";
import mostrarDefault, { constante, Franco, FrancoClass } from "./31-exportfile.js";
import { claseLejana, constanteLejana, funcionLejana } from "./otrodirectorio/exportextranjero.js";
// 1. Exporta una función
// Archivo 31-exportfile.js
// 2. Exporta una constante
// Archivo 31-exportfile.js
// 3. Exporta una clase
// Archivo 31-exportfile.js
// 4. Importa una función
Franco()
// 5. Importa una constante
console.log(constante)
// 6. Importa una clase
const persona1 = new FrancoClass("Franco", 27, 1.75)
persona1.Mostrar()
// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)
//Esto no es posible, solo se permite una exportación por defecto,
// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
mostrarDefault("Franco")
console.log(nombre)
const animal1 = new animales("Tigre", 3, "1,5 metros")
animal1.mostrarInformacion()
// 9. Exporta una función, una constante y una clase desde una carpeta
// resuelto en './otrodirectorio/exportextranjero.js'
// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
funcionLejana()
console.log(constanteLejana)
const objetoLejano = new claseLejana("Franco")
objetoLejano.Mostrar()