/*
Clase 60 - APIs
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=18710
*/

// 1. Realiza una petición GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones
function url(post=""){
    return "https://jsonplaceholder.typicode.com/posts/"+post
}
/* fetch(url())
.then(response => {
    return response.json()
})
.then(data =>
    console.log(data)
)
.catch(error =>
    console.log(error)
) */



// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error
/* fetch(url())
.then(response => {
    if (response.ok){
        return response.json()
    }}
)
.then(data => console.log(data))
.catch(error => console.log(error)) */
// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas
async function iniciarFetch(){
try{
    const response = await fetch(url())
    const data = await response.json()
    console.log(data)
}
catch(error){
console.log(error)
}
}
iniciarFetch()
// 4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. Envía un objeto con propiedades como title o body
async function crearPost(){
    try {
    const newPost = {
        userid: 34,
        title: "Mi nuevo titulo",
        body: "Mi nuevo body"
    }
    const response = await fetch(url(),{
        method: "POST",
        headers:{
            "Content-Type": "Application/json"

        },
        body: JSON.stringify(newPost)
    })
    const data = await response.json()
    console.log(data)

    } catch (error) {
        console.log(error)
    }
}
// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación) en JSONPlaceholder
async function actualizar(){
    try {
    const newPost = {
        userId: 20,
        title: "Mi nuevo titulo",
        body: "Mi nuevo body"
    }
    const response = await fetch(url(100),{
        method: "PUT",
        headers:{
            "Content-Type": "application/json"

        },
        body: JSON.stringify(newPost)
    })
    const data = await response.json()
    console.log(data)

    } catch (error) {
        console.log(error)
    }
}


// 6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso existente
async function actualizarPost(post){
    try {

    const response = await fetch(url(post),{
        method: "PATCH",
        headers:{
            "Content-Type": "application/json"

        },
        body: JSON.stringify({body: "Parche 21.2.3.1.3", userId: 8000})
    })
    const data = await response.json()
    console.log(data)

    } catch (error) {
        console.log(error)
    }
}
/* actualizarPost(45)
iniciarFetch() */
// 7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta

async function obliterar(post){
    try {
        const response = await fetch(url(post), {
            method: "DELETE",
            headers:{
                "Content-Type": "application/json"
            }
        })
        if (response.ok){
            console.log(`Se eliminó correctamente la publicacion: ${post}`)
        }else {
            console.log("No se pudo eliminar")
        }

    } catch (error) {
        console.log(error)
    }
}
// obliterar(99)
// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap

// 9. Utiliza la PokéAPI para obtener los datos de un Pokémon concreto, a continuación los detalles de la especie y, finalmente, la cadena evolutiva a partir de la especie
async function traerPokemon(pokemon){
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        const data = await response.json()
        
        if (response.ok){
            
            const responseSpecies = await fetch(data.species.url)
            const informacionSpecies = await responseSpecies.json()
            
            if (responseSpecies.ok){
             
                const responseCE = await fetch(informacionSpecies.evolution_chain.url)
                const informacionCE = await responseCE.json()
               
                console.log(informacionCE)

            }
        }
    } catch (error) {
        console.log(error)
    }
}
//traerPokemon("bulbasaur")

// 10. Utiliza una herramienta como Postman o Thunder Client para probar diferentes endpoint de una API
