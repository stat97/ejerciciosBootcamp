//*Iteración #1: Arrows**

//*Crea una arrow function que tenga dos parametros a y b y
//*que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre
//*por consola la suma de los dos parametros.
//*1.1 Ejecuta esta función sin pasar ningún parametro
const arrowFunction = (a = 10, b = 5) => a + b;
const firstCall = arrowFunction(); //Llamo a la funcion sin pasar ningun parametro
console.log(firstCall);
//*1.2 Ejecuta esta función pasando un solo parametro
const newCall = arrowFunction(6); //Llamo a la funcion pasando un solo parametro
console.log(newCall);
//*1.3 Ejecuta esta función pasando dos parametros
const secondCall = arrowFunction(6, 24);
console.log(secondCall);
//**Iteración #2: Destructuring**

//*2.1 En base al siguiente javascript, crea variables en base a las propiedades
//*del objeto usando object destructuring e imprimelas por consola. Cuidado,
//*no hace falta hacer destructuring del array, solo del objeto.

const game = {
  title: "The last us 2",
  gender: ["action", "zombie", "survival"],
  year: 2020,
};
const { title, gender, year } = game;
console.log(`title: ${title} , gender: ${gender}, year: ${year}`);
//*2.2 En base al siguiente javascript, usa destructuring para crear 3 variables
//*llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
//*imprimelo por consola.

const fruits = ["Banana", "Strawberry", "Orange"];
const [fruit1, fruit2, fruit3] = fruits;
console.log(`${fruit1}, ${fruit2} y ${fruit3}`);
//*2.3 En base al siguiente javascript, usa destructuring para crear 2
//*variables igualandolo a la función e imprimiendolo por consola.

const animalFunction = () => {
  return { name: "Bengal Tiger", race: "Tiger" };
};
const { name, race } = animalFunction();
let resultado = animalFunction();
console.log(resultado);

//*2.4 En base al siguiente javascript, usa destructuring para crear las
//*variables name y itv con sus respectivos valores. Posteriormente crea
//*3 variables usando igualmente el destructuring para cada uno de los años
//*y comprueba que todo esta bien imprimiendolo.

const car = { namecar: "Mazda 6", itv: [2015, 2011, 2020] };
const { namecar, itv } = car;
const [year1, year2, year3] = itv;
console.log(`${namecar}, Años ITV ${year1},${year2} y ${year3}`);

//**Iteración #3: Spread Operator**

//*3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43];
pointsListCopy = [...pointsList];
console.log("Usando spread operator , el array copiado es", pointsListCopy);

//*3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
toyCopy = { ...toy };
console.log("Usando spread operator , el objeto copiado es", toyCopy);

//*3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando
//*spread operatos.
const pointList = [32, 54, 21, 64, 75, 43];
const pointLits2 = [54, 87, 99, 65, 32];
pointListTogether = [...pointList, ...pointLits2]; //concatenar ambos arrays
console.log(pointListTogether);

//*3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos
//*con spread operators.
const toys = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };
toysTogether = { ...toys, ...toyUpdate };
console.log(toysTogether);

//*3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2
//*pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];
const [, , , ...colorsCopy] = colors;
const colorsTogether = [colors[0], colors[1], ...colorsCopy];
console.log(colorsTogether);

//**Iteración #4: Map**

//*4.1 Dado el siguiente array, devuelve un array con sus nombres
//*utilizando .map().
const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];
const newUsers = [...users];
const userNames = newUsers.map((user) => {
  return user.name;
});
console.log("El array mapeado es", userNames);

//*4.2 Dado el siguiente array, devuelve una lista que contenga los valores
//*de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que
//*empiece por 'A'.
const users1 = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];
const newUsers1 = [...users];
const userNames1 = newUsers.map((user) => {
  if (user.name.startsWith("A")) {
    user.name = "Anacleto";
  }
  return user.name;
});
console.log("El array mapeado es", userNames1);
//*4.3 Dado el siguiente array, devuelve una lista que contenga los valores
//*de la propiedad .name y añade al valor de .name el string ' (Visitado)'
//*cuando el valor de la propiedad isVisited = true.
const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];
const citiesVisitado = cities.map((city) => {
  //hago un mapeo del objeto cities, aplico condicion
  if (city.isVisited == true) {
    city.name = "Visitado";
  }
  return city.name;
});
console.log(citiesVisitado);
//*Iteración #5: Filter**

//*5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
//*con los valores que sean mayor que 18

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const newAges =ages.filter((ages) => ages > 18)
    console.log(newAges)

//*5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
//*con los valores que sean par.
 const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
 const parAges = ages1.filter((ages1) => ages1%2 === 0 )
 console.log(parAges)

//*5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
//*con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const newStreamers = streamers.filter((streamers) => streamers.gameMorePlayed === 'League of Legends');
console.log(newStreamers);

//*5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
//*con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
//*usar la funcion .includes() para la comprobación.
const streamers1 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const newStreamer1 = streamers1.filter((streamers1) => streamers1.name.includes('u'))
console.log(newStreamer1)


//*5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
//*el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
//*.includes() para la comprobación.
//*Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
//*.age sea mayor que 35.

const newStreamer2 = streamers1.filter((streamers1) => streamers1.gameMorePlayed.includes('Legends'))
console.log(newStreamer2)
const newStreamer3 = newStreamer2.map((newStreamer2) => {
if(newStreamer2.age > 35){
    newStreamer2.gameMorePlayed =  newStreamer2.gameMorePlayed.toUpperCase();
}
return newStreamer2
});
console.log(newStreamer3)
//*5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
//*los streamers que incluyan la palabra introducida en el input. De esta forma, si 
//*introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
//*introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
const streamers3 = [
    {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
    {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
    {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
    {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
  ];
  


function filterList2(streamers3) {
  const inputValue = document.querySelector('[data-function="toFilterStreamers"]').value
  const streamersFiltredByInput = streamers3.filter(stream => stream.name.toLowerCase().includes(inputValue.toLowerCase()))
  console.log(streamersFiltredByInput);
}

//**Iteración #6: Find**


//*6.1 Dado el siguiente array, usa .find() para econtrar el número 100.
const numbers = [32, 21, 63, 95, 100, 67, 43];
const newNumbers = numbers.find((number,index) => number === 100)
console.log(newNumbers)


//*6.2 Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.
const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];
const findMovies = movies.find((movie,index) => movie.date === 2010)
console.log(findMovies)

//*6.3 Dado el siguiente javascript, usa .find() para econtrar el alien de nombre 
//*'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, usa 
//*spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación 
//*lo queremos meter en la propiedad .mutation del objeto fusionado.
const aliens = [
	{name: 'Zalamero', planet: 'Eden', age: 4029},
	{name: 'Paktu', planet: 'Andromeda', age: 32},
	{name: 'Cucushumushu', planet: 'Marte', age: 503021}
];
const mutations = [
	{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
	{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
	{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
];

const findAliens = aliens.find((alien) => alien.name === "Cucushumushu")
const findMutations = mutations.find((mutation) => mutation.name === "Porompompero")
objectTogether = {... findAliens, ...findMutations}
console.log(objectTogether)

//**Iteración #7: Reduce**


//*7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
//*los alumnos usando la función .reduce().

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

//*Se mapea para obtener un array de scores
 const exams1 = exams.map((exams,index) => exams.score)
console.log(exams1)
//*Reduce para la suma empezando de 0
const sumExams = exams1.reduce((acc,num) => acc+num,0)

console.log(`La suma de los scores es de ${sumExams}`)