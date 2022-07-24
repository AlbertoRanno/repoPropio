//INICIARLO CON NPM TEST

let main = document.querySelector("main");
let h2 = document.querySelector("h2");
let a = document.querySelector("a");
let losP = document.querySelectorAll("p");

var nombre = prompt("ingrese su nombre");
console.log(nombre);
if (nombre) {
  h2.innerHTML += nombre;
} else {
  h2.innerText += " Invitado";
}

h2.style.textTransform = "uppercase";
a.style.color = "#E51B3E";

var confirma = confirm("¿Desea colocar un fondo de pantalla?");
if (confirma) {
  main.classList.add("fondo");
}

console.log(losP);
for (let i = 0; i < losP.length; i++) {
  if (i % 2 == 0) {
    losP[i].classList.add("destacadoPar");
  } else {
    losP[i].classList.add("destacadoImpar");
  }
}

main.style.display = "block";

//Eventos
/*Micro desafío - Paso 1:
● En index.ejs, agregar un evento para que cada vez que el usuario haga clic sobre el
logo de Digital House se muestre el menú lateral con id="menu". El estilo y el menú
lateral ya existe en el proyecto de base. Tips: podemos usar el atributo classList
con el método toggle para agregar o quitar la clase class="menu".
● En index.ejs, agregar un evento que permita ocultar el menú lateral cuando el
mouse deje el área del menú.
● En movies.ejs, modificar el práctico de la clase anterior para que el modo oscuro se
aplique si el usuario pasa el mouse sobre el logo de Digital House, en la vista del
listado de películas.
● En moviesAdd.ejs, establecer que, cada vez que se pase el mouse por el título
'AGREGAR PELÍCULA', este cambie su color.
*/
let logo = document.querySelector(".logoDH");
console.log(logo);
// conviene agregar una clase a lo que quiera seleccionar
logo.addEventListener("click", function () {
  logo.classList.toggle("menu");
});
