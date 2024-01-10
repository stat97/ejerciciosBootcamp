//!Guía de práctica//

//?Iteración #1: Variables//
//*1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.

let myFavoriteHero; //declaro variable usando let
myFavoriteHero = "Hulk"; //le asigno un string como valor usando ""
console.log("Mi primer variable string es",myFavoriteHero)

//*1.2 Crea una variable llamada x, asigna el valor 50 a ella.
let x;
x = 50;

//*1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10.
let h, y;
h = 5;
y = 10;
console.log("Las variables del tercer apartado son ",h,"y",y);
//*1.4 Crea una otra variable 'z' y asignale el valor de 'h' + 'y'
let z;
z = h + y;
console.log("La suma de las variables anteriores es igual a ",z);

//?Iteración #2: Variables avanzadas//
//*1.1 Dado el siguiente javascript, cambia el valor de la propiedad age a 25.
const character = {name: 'Jack Sparrow', age: 25};

//*1.2 Declara 3 variables con los nombres y valores siguientes 
	firstName = "Jon"; 
	lastName = "Snow"; 
	let age = 24; 
//*Muestralos por consola de esta forma: 
	//*'Soy Jon Snow, tengo 24 años y me gustan los lobos.'
console.log("Hola soy",firstName,lastName,",tengo",age,"años y me gustan los lobos.")

//*1.3 Dado el siguiente javascript, imprime con un console.log la suma del precio de
//*ambos juguetes.
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
const finalPrice = (toy1,toy2) => toy1+toy2;
console.log("El precio total de ambos productos es de",finalPrice)

//*1.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 
//*y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
//*basePrice más el valor de la variable globalBasePrice.
//*let globalBasePrice = 10000;
//*const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
//*const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

//?Iteración #3: Operadores//

//?Iteración #4: Arrays//

//?Iteración #5: Condicionales//

//?Iteración #6: Bucles//
