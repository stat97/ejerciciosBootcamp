//?Iteración #1: Buscar el máximo**

//*Completa la función que tomando dos números como argumento devuelva el más alto.
//Asigno valores a las variables antes de la funcion
numberOne = Math.random(); //un valor aleatorio
numberTwo = Math.random();
function sum(numberOne, numberTwo) {
  console.log(
    "El primer numero aleatorio es",
    numberOne,
    "y el segundo numero aleatorio es",
    numberTwo,
    "el maximo de los dos será",
    Math.max(numberOne, numberTwo)
  );
}
sum(numberOne, numberTwo); //Llamo a la funcion
//?Iteración #2: Buscar la palabra más larga**

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

//**Iteración #3: Calcular la suma**
//*Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
//*Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz.
//*Puedes usar este array para probar tu función:

const numbers = [1, 2, 3, 5, 45, 37, 58];
var numeroSumado = 0; //declaro inicilamente como 0 el numerosumado utilizando var ya que cambiará
function sumAll(numbers) {
  for (i = 0; i < numbers.length; i++) {
    const numeroActual = numbers[i]; //recorriendo array con buble
    numeroSumado = numeroActual + numeroSumado; //actualizando variable
  }
  return numeroSumado;
}
let numeroSumadoTotal = sumAll(numbers);
console.log("La suma total del array será de",numeroSumadoTotal);
