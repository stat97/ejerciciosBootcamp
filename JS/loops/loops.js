//*Guía de práctica
//*?Iteración #1: Usa includes
//*Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.

const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];
const nuevoArray=[]; //Declaro array vacio
function incluir(products){
    for(i=0 ; i<products.length ; i++){
        if(products[i].includes("Camiseta"))//metodo includes para comprobar valor especifico
        {
            nuevoArray.push(products[i]) //Lo añade al array vacio
        }
    }
return nuevoArray
}
let arrayFinal = incluir (products) //Llamo a la funcion
console.log(arrayFinal)
//*Iteración #2: Condicionales avanzados
//*Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruébalo con un console.log. 
//*( Mirar abajo en pistas ).
//*Puedes usar este array para probar tu función:
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
];
let aprobado = [];
const comprobarTrimestres = (alumns) => {
alumns.forEach((alumns) => {
  if(alumns.T1 == true && alumns.T2 == true && alumns.T3 ==true || alumns.T1 == true && alumns.T2 == true && alumns.T3 ==false || alumns.T1 == true && alumns.T2 == false && alumns.T3 ==true || alumns.T1 == false && alumns.T2 == true && alumns.T3 ==true){
    
    aprobado.push(alumns.name) ; //meto la informacion del alumno en el array vacio si tiene al menos dos trimestres aprobados
  }})
return aprobado 
  }

let aprobadoFinal = comprobarTrimestres(alumns)
console.log (`Los alumnos con almenos dos trimestres aprobados son ${aprobadoFinal}`)

//**Iteración #3: Probando For...of**
//Usa un bucle forof para recorrer todos los destinos del array. Imprime en un ***console.log*** sus valores.
//Puedes usar este array:
const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for (const iterator of placesToTravel) {
  console.log(iterator)
}
//**Iteración #4: Probando For...in**
//*Usa un **for...in** para imprimir por consola los datos del alienígena.. Puedes usar este objeto:

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
let element=[];
for (const key in alien) {
  if (alien.hasOwnProperty.call(alien, key)) {
    element = alien[key];
  }
  console.log(`${key}: ${element}`);
  
}
//**Iteración #5: Probando For**

//*Usa un bucle **for** para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un ***console log*** el array. Puedes usar este array:

const placesToGo = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]
const placesToGoFreeArray = [];
for(i=0 ; i<placesToGo.length ;i++){
  if(placesToGo[i].id === 11 || placesToGo[i].id === 40){
    delete placesToGo[i];
  }
  else{
  placesToGoFreeArray.push(placesToGo[i])
  }
}
console.log(placesToGoFreeArray)
//**Iteración #6: Mixed For...of e includes**

//*Usa un bucle **for...of** para recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda que puedes usar la función ***.includes()*** para comprobarlo.Puedes usar este array:
const toys = [
{id: 5, name: 'Buzz MyYear'}, 
{id: 11, name: 'Action Woman'}, 
{id: 23, name: 'Barbie Man'}, 
{id: 40, name: 'El gato con Guantes'},
{id: 40, name: 'El gato felix'}
]
const freeToys=[];
for (const iterator of toys) {
  if(!iterator.name.includes('gato')){
    freeToys.push(iterator);
  }
}
console.log(freeToys)

//**Iteración #7: For...of avanzado**

//*Usa un bucle **for...of** para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) al array popularToys. Imprimelo por consola.. Puedes usar este array:
const popularToys = [];
const toysx = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]
for (const iterator of toysx) {
  if(iterator.sellCount> 15){
    popularToys.push(iterator)
  }
  
}
console.log(popularToys)
