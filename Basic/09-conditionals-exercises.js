// 1. Imprime por consola tu nombre si una variable toma su valor

    const name = "stuart";

    if (name=="Franco"){
        console.log("¡Hola " + name + "!")
    }else{
        console.log("Vos no sos Franco, sos "+name);
    }

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

    let nombre = "Franco";
    let password = "franco2803"

    nombre = nombre.toLowerCase()
    console.log(nombre)
    if (nombre=="franco" && password == "franco2803"){

        console.log("Bienvenido "+nombre)
    }else{
        console.log("Usuario o contraseña incorrectos")
    }
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

    const num = 0

    if (num > 0){
        console.log("El numero es positivo")
    }else if (num < 0){
        console.log("El numero es negativo")
    }else{
        console.log("El numero es 0")
    }

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

    let edad = 14
    if (edad >= 18){
        console.log("Esta persona puede votar")
    }else{
        console.log("Sos menor flaco tomatela")
    }




// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

    let age = 15
    age >= 18 ? console.log("es mayor de edad") : console.log("es menor de edad");

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

    let mes = 23

    if (mes=="enero" | mes == "febrero" | mes == "marzo"){
        console.log("Es verano")
        }else if (mes=="abril" | mes == "mayo" | mes == "junio"){
            console.log("Es Otoño")
        }else if (mes=="julio" | mes =="agosto" | mes =="septiembre"){
            console.log("Es invierno")
        }else{
            console.log("Es Primavera")
        }
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

        if (mes == "enero" | mes == "diciembre" | mes == "octubre" | mes == "julio" | mes =="marzo" | mes=="agosto" | mes =="mayo")
        {
            console.log("El mes tiene 31 dias")
        }else if (mes =="febrero"){
            console.log("El mes tiene entre 28 a 29 dias")
        }else{
            console.log("el mes tiene 30 dias")
        }

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

        let idioma = "fr"
                switch (idioma){
                case "es":
                console.log("Hola Como estas?");
                break;
                case "en":
                console.log("Hi, how are you?");
                break;
                case "pt":
                console.log("mano cu");
                break;
                case "fr":
                console.log("ulala señor frances");
                break;

        }

// 9. Usa un switch para hacer de nuevo el ejercicio 6

        switch(mes){
            case "enero":
            console.log("Es verano")
            break;

            case "febrero":
            console.log("Es verano")
            break;

            case "marzo":
            console.log("Es verano")
            break;

            case "abril":
            console.log("Es otoño")
            break;

            case "mayo":
            console.log("Es otoño")
            break;

            case "junio":
            console.log("Es otoño")
            break;

            case "julio":
            console.log("Es invierno")
            break;

            case "agosto":
            console.log("Es invierno")
            break;

            case "septiembre":
            console.log("Es invierno")
            break;
            case "octubre":
            console.log("Es Primavera")
            break;

            case "noviembre":
            console.log("Es Primavera")
            break;

            case "diciembre":
            console.log("Es Primavera")
            break;
        }

// 10. Usa un switch para hacer de nuevo el ejercicio 7

        switch(mes){
            case 12:
            case 1:
            case 2:
            console.log("Es verano hijo de puta");
            break;
            case 3:
            case 4:
            case 5:
            console.log("Autumn");
            break;
            case 6: 
            case 7:        console.log("Sos menor flaco tomatela")

            case 8:
            console.log("Nos cagamos de frio");
            break;
            case 9:
            case 10:
            case 11:
            console.log("Primaverita")
            break;

            default:
            console.log("Pone un mes del 1 al 12 forro")
        }