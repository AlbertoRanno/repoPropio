import React from "react";

//Se va a encargar de mostrar la informacion de un gif

function Gif(props) {

  //console.log(props.images.downsized.url);
  /* Gracias al spread operator, es que puedo trabajar con el objeto limpio. Y de forma genérica
  (para que este componente se reutilice para todos los objetos que haya) */

  return (
    <>
      <div className="col-lg-3 col-md-6 mb-4">
        <div className="card h-100">
          <img className="card-img-top" src="" alt="" />
          <div className="card-body">
            <img src={props.images.downsized.url} alt="" width={200}></img>
          </div>
        </div>
      </div>
      <h4 className="card-title">{props.username}</h4>
    </>
  );
}

export default Gif;
