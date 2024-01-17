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
const pointsList = [32, 54, 21, 64, 75, 43]
pointsListCopy = [...pointsList]
console.log("Usando spread operator , el array copiado es",pointsListCopy)



