//?Iteración #1: Buscar el máximo**
console.log("🚀Iteration#1 : Buscar el máximo");
//*Completa la función que tomando dos números como argumento devuelva el más alto.
//Asigno valores a las variables antes de la funcion
numberOne = Math.random(); //Con este metodo se obtiene un valor aleatorio
numberTwo = Math.random();
function sum(numberOne, numberTwo) {
  const numeroMaximo = Math.max(numberOne, numberTwo);
  return numeroMaximo;
}
let numeroMaximo1 = sum(numberOne, numberTwo); //Llamo a la funcion y almaceno su valor declarando la variable con el resultado
console.log(
  "El primer numero aleatorio es",
  numberOne,
  "y el segundo numero aleatorio es",
  numberTwo,
  "el maximo de los dos será",
  numeroMaximo1
);
//?Iteración #2: Buscar la palabra más larga**
console.log("🚀Iteration#2: Buscar la palabra más larga");

//*Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

//*Puedes usar este array para probar tu función:

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(avengers) {
  let palabraMasLarga = ""; // Declaro una variable vacia de la palabra mas larga hasta el momento para poder compararla luego

  for (let i = 0; i < avengers.length; i++) {
    const palabraActual = avengers[i]; //declaro variable y la guardo en la posicion 0,1..etc

    if (palabraActual.length > palabraMasLarga.length) {
      // condicional para comparar todo el array recorriendolo con el bucle y obtener la palabra mas larga
      palabraMasLarga = palabraActual; // con esta expresion se actualiza la variable
    }
  }
  return palabraMasLarga; //el return siempre dentro de la funcion
}

let palabraMasLarga = findLongestWord(avengers); //llamo a la funcion , importante y declaro la variable palabramaslarga
console.log("La palabra mas larga del array es", palabraMasLarga);

//**?Iteración #3: Calcular la suma**
console.log("🚀Iteration #3: Calcular la suma");
//*Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
//*Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz.
//*Puedes usar este array para probar tu función:

const numbers = [1, 2, 3, 5, 45, 37, 58];
var numeroSumado = 0; //declaro inicilamente como 0 el numerosumado utilizando var ya que cambiará
function sumAll(numbers) {
  for (i = 0; i < numbers.length; i++) {
    const numeroActual = numbers[i]; //recorriendo array con bucle
    numeroSumado = numeroActual + numeroSumado; //actualizando variable
  }
  return numeroSumado;
}
let numeroSumadoTotal = sumAll(numbers);
console.log("La suma total del array será de", numeroSumadoTotal);

//**?Iteración #4: Calcular el promedio**
console.log("🚀Iteration #4: Calcular el promedio");

//*Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers1 = [12, 21, 38, 5, 45, 37, 6];
var numeroSumado1 = 0;
function average(numbers1) {
  for (i = 0; i < numbers.length; i++) {
    const numeroActual1 = numbers[i]; //recorriendo array con bucle
    numeroSumado1 = numeroActual1 + numeroSumado1; //actualizando variable
  }
  return numeroSumado1 / numbers.length; //igual al ejercicio anterior pero dividiendo entre la longitud del array
}
let numeroMedio = average(numbers1); //lo que me devuelve la funcion lo guardo en una variable
console.log("La media aritmética del array es de", numeroMedio);

//**?Iteración #5: Calcular promedio de strings**
console.log("🚀Iteration #5: Calcular promedio de strings");

//*Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

function averageWord(mixedElements) {
  var numeroSumado2 = 0; //inicializo valores
  var mixedElementsSumado = 0; //inicializo valores

  for (let i = 0; i < mixedElements.length; i++) {
    if (typeof mixedElements[i] === "string") {
      //uso condicion con metodo typeof para ver si es string o numero
      mixedElementsSumado += mixedElements[i].length; // Suma la longitud del string
    } else if (typeof mixedElements[i] === "number") {
      numeroSumado2 += mixedElements[i]; // Empleando operador += para simplificar, es lo mismo que numeroSumado2 += mixedElements[i] +
    }
  }

  return numeroSumado2 + mixedElementsSumado;
}

let numeroSumadoTotal2 = averageWord(mixedElements);
console.log(
  "La suma total del array tanto de numeros como de longitud de palabras es de",
  numeroSumadoTotal2
);
//*?Iteración #6: Valores únicos**
console.log("🚀Iteration #6: Valores únicos");

//*Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:
const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

function removeDuplicates(duplicates) {
  const arrayLimpio = []; //declaro un array vacio inicialmente para luego ir añadiendo

  for (let i = 0; i < duplicates.length; i++) {
    if (!arrayLimpio.includes(duplicates[i])) {
      //metodo includes para saber si el arraylimpio contiene el valor especifico del array inicial
      arrayLimpio.push(duplicates[i]); // si no contiene el elemento del array lo añade con el metodo push
    }
  }

  return arrayLimpio;
}

const ArrayFinal = removeDuplicates(duplicates);
console.log(ArrayFinal);
//**Iteración #7: Buscador de nombres**
console.log("🚀Iteration#7:Buscador de nombres")

//*Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:

const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];
function finderName(nameFinder) {
  const finder = nameFinder.find(el => el === "Bruce"); //metodo find ... y empleo la nomenlcatura el => el === ...para encontrar en el array
  return finder;
}
let comprobacion = finderName(nameFinder);
console.log(comprobacion);


//Importante diferencia , en la iteracion 6  includes y en la 8 hasownproperty, metodos distintos para cada caso particular.

//*Iteration #8: Contador de repeticiones
console.log("🚀Iteration#8: Contador de repeticiones");
//*Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:
const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];

function repeatCounter(counterWords) {
  var contador = []; //creo un array vacio para el contador
  for (let i = 0; i < counterWords.length; i++) {
    const word = counterWords[i]; // la nueva constante word es igual a cada una de las iteraciones del bucle

    // Comprobar si la palabra ya está en el array counterWords
    if (contador.hasOwnProperty(word)) {
      //empleo el metodo hasownproperty , si el contador que es un array vacio contiene esa palabra
      contador[word]++; // incrementar el contador de esa palabra
    } else {
      contador[word] = 1; // Inicializar el contador a 1 si es la primera vez que se encuentra la palabra
    }
  }

  return contador;
}

const contadorFinal = repeatCounter(counterWords);
console.log(contadorFinal);

