let titulo = document.getElementById("titulo")
console.log (titulo.innerText);

let container = document.getElementById("subtitulo");
container.innerHTML = "<h2>Distintos tipos de Bebidas que Vendemos</h2>"
container.className = "subtitulo"
console.log (document.getElementsByClassName("subtitulo"));
console.log (container);

const productos =  [{id:1, nombre: "Cerveza Lata Stella Artois", precio: 2900},
                    {id:2, nombre: "Cerveza Lata Heineken", precio: 3700},
                    {id:3, nombre: "Trumpeter-Malbec", precio: 5500},
                    {id:4, nombre: "Fernet Branca 750", precio: 1000},
                    {id:5, nombre: "Santa Julia Chennin Dulce", precio: 4000},
                    {id:6, nombre: "Johnnie Walker Red Label", precio: 3800}
]
for (const producto of productos) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h4> ID: ${producto.id}</h4>
                            <p> Producto: ${producto.nombre}</p>
                            <b> $ ${producto.precio}</b>`;
    document.body.appendChild(contenedor);
}


/*let productos = document.getElementsByClassName ("productos"); 

console.log(productos[0].innerHTML);
console.log(productos[1].innerHTML);
console.log(productos[2].innerHTML);
console.log(productos[3].innerHTML);
console.log(productos[4].innerHTML);*/


/*document.getElementById("cerveza1").value = "Lata Stella Artois x 24u.";
document.getElementById("cerveza1valor").value = 2900;
document.getElementById("cerveza2").value = "Lata Heineken x 24 u.";
document.getElementById("cerveza2valor").value = 3700;
document.getElementById("vinoTinto1").value = "Trumpeter-Malbec";
document.getElementById("vinoTinto1valor").value = 5500;
document.getElementById("vinoTinto2").value = "Nicasia-Malbec";
document.getElementById("vinoTinto2valor").value = 6200;
document.getElementById("vinoBlanco1").value = "Santa Julia Chennin Dulce";
document.getElementById("vinoBlanco1valor").value = 4000;
document.getElementById("aperitivo1").value = "Fernet Branca 750";
document.getElementById("aperitivo1valor").value = 1000;
document.getElementById("whisky1").value = "Johnnie Walker Red Label";
document.getElementById("whisky1valor").value = 3800;
*/

/*var edad = +prompt("Ingresa tu edad (recuerda que debes ser mayor de 18 años)")

if (edad >= 18){
    resultado= ("Bienvenido, eres mayor de edad")
}else {
    resultado= ("Eres menos de edad, no podras comprar en el sitio");
}

alert(resultado);*/

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
