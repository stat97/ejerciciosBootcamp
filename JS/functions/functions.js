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
      // condicional para comparar todo el array y obtener la palabra mas larga
      palabraMasLarga = palabraActual;
    }
  }
  console.log(palabraMasLarga);
}

findLongestWord(avengers); //llamo a la funcion , importante
