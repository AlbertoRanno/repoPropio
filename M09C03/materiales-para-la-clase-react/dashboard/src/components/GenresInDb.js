import React, { Component } from "react";
import Genre from "./Genre";

// let genres = [
//   { genre: "Acción" },
//   { genre: "Animación" },
//   { genre: "Aventura" },
//   { genre: "Ciencia Ficción" },
//   { genre: "Comedia" },
//   { genre: "Documental" },
//   { genre: "Drama" },
//   { genre: "Fantasia" },
//   { genre: "Infantiles" },
//   { genre: "Musical" },
// ];

class GenresInDb extends Component {
  constructor() {
    super();
    this.state = {
      genresList: [],
    };
  }

  componentDidMount() {
    fetch("/api/genres")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((genres) => {
        console.log(genres)
        this.setState({ genresList: genres.data })
      })
      .catch((error) => console.log(error))
   
  }

  render() {
    return (
      <React.Fragment>
        {/*<!-- Aquí va todo el contenido estático que tenemos en
Genres in DB -->*/}
        <div className="col-lg-6 mb-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-gray-800">
                Genres in Data Base
              </h6>
            </div>
            <div className="card-body fondoCaja">
              <div className="row">
                {this.state.genresList.map((genre, index) => {
                  return <Genre {...genre} key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
        {/*<!-- Aquí es donde vamos a enviar los datos obtenidos
al componente Genre para que renderice de forma dinámica
-->*/}
      </React.Fragment>
    );
  }
}
export default GenresInDb;
