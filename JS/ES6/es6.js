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
