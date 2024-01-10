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
