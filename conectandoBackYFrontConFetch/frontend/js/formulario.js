window.onload = () => {
  const agregar = document.querySelector(".botonAgregar");
  const editar = document.querySelector(".botonModificar");
  const eliminar = document.querySelector(".botonBorrar");

  agregar.addEventListener("click", function () {
    let title = document.querySelector("#title").value;
    let rating = document.querySelector("#rating").value;
    let awards = document.querySelector("#awards").value;
    let release_date = document.querySelector("#release_date").value;
    let length = document.querySelector("#length").value;
    let data = {
      title: title,
      rating: rating,
      awards: awards,
      release_date: release_date,
      length: length,
    };
      let settings = {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      };
    fetch("http://localhost:3031/api/movies/create", settings)
      .then(function (response) {
        return response.json();
      })
      .then(function (info) {
        console.log(info);
      })
      .catch(function (error) {
        alert("Error! " + error);
      });
  });
};
