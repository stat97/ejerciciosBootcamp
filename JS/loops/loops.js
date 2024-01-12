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