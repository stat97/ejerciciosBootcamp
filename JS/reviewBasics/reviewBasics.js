//**Iteración #1: Mix for e includes**
//*Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse. Para filtrar las categorías puedes ayudarte de la función **.includes()**
const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]
const newMovies=[];
//*Necesario usar dos bucles forof, uno para iterar dentro de peliculas y otro para iterar dentro de categorias...
for (const iterator of movies){
for (const category of iterator.categories) {
    if(!newMovies.includes(category)){
     newMovies.push(category)
    }
}
}
console.log(newMovies)
//**Iteración #2: Mix Fors**

//*Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.
const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]
//for...of se utiliza para iterar sobre los elementos del array users, y for...in se utiliza para iterar sobre las propiedades del objeto
const newSounds=[];
let volumenTotal=0 ;
for (const clave of users) {
    for (const key in clave.favoritesSounds) {
        if (clave.favoritesSounds.hasOwnProperty.call(clave.favoritesSounds, key)) {
            const element  = clave.favoritesSounds[key];
            newSounds.push(element);
            volumenTotal += element.volume
        }
    }
}
console.log(`La media de volumen entre todos los usuarios es de ${volumenTotal/newSounds.length}`)
//**Iteración #3: Mix Fors**
//*Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito. Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
//*Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.
//*Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y oportunidad para comprender que hay muchas formas de hacer las cosas en javascript.


const users1 = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]
const newSounds1 = [];
for (const clave of users) {
  for (const key in clave.favoritesSounds) {
    if (clave.favoritesSounds.hasOwnProperty.call(clave.favoritesSounds, key)) {
      const element = clave.favoritesSounds[key];
      if (!newSounds1[key]) {
        newSounds1[key] = 1; //si no esta el sonido favorito , es la primera vez que lo encuentra añade 1
      } else {
        newSounds1[key]++; //si esta repetido se le suma 1
      }
    }
  }
}
console.log(newSounds1);
//*Iteración #4: Métodos findArrayIndex**
//*Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.

arrayInsectos = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']
const texto = "Salamandra"
function findArrayIndex(arrayInsectos,texto) {
for(let i=0 ;i<arrayInsectos.length ; i++){
    if(arrayInsectos[i] == texto){
        console.log(`${texto} esta en la posicion ${i}`)
        
    }
}
}
findArrayIndex(arrayInsectos,texto);







