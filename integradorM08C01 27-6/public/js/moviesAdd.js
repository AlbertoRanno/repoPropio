/*Micro desafío - Paso 3:
● Crear un archivo JavaScript: /public/js//moviesAdd.js, y vincularlo con el archivo;
/views//moviesAdd.ejs.
● Desde el archivo /public/js/moviesAdd.js, capturar los siguientes elementos: <h1>,
<section> y <article>, ubicados en el archivo: /views//moviesAdd.ejs.
● Agregar a la etiqueta <h1> el mensaje: “AGREGAR PELÍCULAS”.
● Agregar a la etiqueta <h1> la clase: “titulo”.
● Agregar al artículo la clase: “fondoTransparente”.
● Agregar a la sección la clase: “fondoCRUD”.*/

let h1 = document.querySelector("h1");
let section = document.querySelector("section");
let article = document.querySelector("article");

h1.innerText += "AGREGAR PELÍCULAS";
h1.classList.add("titulo");
section.classList.add("fondoTransparente");
article.classList.add("fondoCRUD");