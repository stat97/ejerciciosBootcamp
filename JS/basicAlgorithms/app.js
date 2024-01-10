//!Guía de práctica//

//?Iteración #1: Variables//
console.log("Iteración #1: Variables")
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
console.log("Iteración #2: Variables avanzadas")
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
let finalPricetoy = toy1.price + toy2.price
console.log("El precio total de ambos productos es de",finalPricetoy)

//*1.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 
//*y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
//*basePrice más el valor de la variable globalBasePrice.

const car1 = {name: 'BMW m&m', basePrice: 50000, globalBasePrice : 25000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, globalBasePrice : 25000};
let finalPricebmw = car1.basePrice + car1.globalBasePrice
let finalPricechevrolet = car2.basePrice + car2.globalBasePrice

console.log("El precio final del BMW será de",finalPricebmw,"€ y el del Chevrolet",finalPricechevrolet,"€");
//?Iteración #3: Operadores//
//*1.1 Multiplica 10 por 5 y muestra el resultado mediante console.
console.log(10*5)
//*1.2 Divide 10 por 2 y muestra el resultado en un console.

//*1.3 Muestra mediante un console el resto de dividir 15 por 9.

//*1.4 Usa el correcto operador de asignación que resultará en o = 15, 
//*teniendo dos variables p = 10 y j = 5.

//*1.5 Usa el correcto operador de asignación que resultará en i = 50,
//*teniendo dos variables c = 10 y m = 5.
//?Iteración #4: Arrays//

//?Iteración #5: Condicionales//

//?Iteración #6: Bucles//
