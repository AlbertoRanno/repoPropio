import React from "react";

//Nav se va a encargar de actualizar los Gifs
function Nav(props) {
  return (
    // <!-- Navigation -->
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="http://localhost:3000/">
          GIPHY APP
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="nav ml-auto">
          <li className="nav-item">
            <button className="btn btn-success" onClick={props.evento}>
              Cargar random
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
