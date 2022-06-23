/*var edad = +prompt("Ingresa tu edad (recuerda que debes ser mayor de 18 años)")

if (edad >= 18){
    resultado= ("Bienvenido, eres mayor de edad")
}else {
    resultado= ("Eres menos de edad, no podras comprar en el sitio");
}

alert(resultado);*/

let titulo = document.getElementById("titulo")
console.log (titulo.innerText);

let productos = document.getElementsByClassName ("productos"); 

console.log(productos[0].innerHTML);
console.log(productos[1].innerHTML);
console.log(productos[2].innerHTML);
console.log(productos[3].innerHTML);
console.log(productos[4].innerHTML);

/*["cerveza", "vinotinto", "aperitivos", "vinoblanco", "whisky"];

console.log ("Diferentes tipos de bebidas que podes encontrar:")
function mostrarBebidas(){
for (let i=0; i < bebidas.length; i++){
    console.log (`La escala de bebidas mas vendidas ${i+1} es ${bebidas[i]}`);
}
} 
mostrarBebidas();

const array = ["cerveza", "vinotinto", "aperitivos", "vinoblanco", "whisky"];

console.log(array.push(`licores`));
console.log(array)*/

/*let cerveza = +prompt("Ingrese la cantidad de Cervezas que quieras comprar")
let vinoTinto = +prompt("Ingrese la cantidad de Vino tinto que quieras comprar")
let aperitivos = +prompt("Ingrese la cantidad de Aperitivos que quieras comprar")
let vinoBlanco = +prompt("Ingrese la cantidad de Vino blanco que quieras comprar")
let whisky = +prompt("Ingrese la cantidad de Whisky que quieras comprar")

function sumaDeProductos (cerveza,vinoTinto,aperitivos,vinoBlanco,whisky){
resultado = cerveza + vinoTinto + aperitivos + vinoBlanco + whisky;
}
sumaDeProductos (cerveza,vinoTinto,aperitivos,vinoBlanco,whisky);

alert("El total de productos que quieres comprar es " + resultado);*/
