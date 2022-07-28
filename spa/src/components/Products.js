/* props.match, para capturar el contenido que viene por rutas parametrizadas o dinámicas
props.match es un Obj Lit, que tiene vs propiedades, pero por ahora usaremos params
Teniendo: <Route path="/products/:id" element={<Products />}></Route> */

/* VERSION 5 ************************************************************************************
  console.log(props); //ahí dentro veré a match / params / id
  //console.log(props.match.params.id);
  IMPORTANTE! TODO LO QUE VENGA DE LA RUTA, SERÁ EL TIPO STRING! TENER EN CUENTA PARA COMPARARLO
  console.log(typeof props.match.params.id) //"string"
  const id = props.match.params.id; //guardo el valor de esa propiedad dentro de la constante "id"
  const id = Number(props.match.params.id); // lo paso a número - en lugar de tener un string
  const product = productsList.find((product) => product.id === id);
  console.log(id);
  console.log(typeof id);*/

import { useParams, Link } from "react-router-dom"; // NECESARIO PARA CAPTURAR EL PARÁMETRO EN V6

function Products(props) {
  const productsList = [
    { id: 1, name: "TV", price: 123, category: "electro" },
    { id: 2, name: "Radio", price: 1234, category: "diversion" },
    { id: 3, name: "Lavarropas", price: 1235, category: "electro" },
  ];

  // const id = useParams();
  // console.log(id);
  // console.log(typeof id); // Object
  const { id } = useParams();
  console.log(id);
  console.log(typeof id); // String
  //IMPORTANTE - Lo paso a Nro, para poder realizar la comparación
  const product = productsList.find((product) => product.id === Number(id));
  console.log(product); // el objeto product

  return (
    <div>
      <h2>Soy el Componente Products</h2>
      <Link to="/products/1">Producto 1</Link>
      <Link to="/products/2">Producto 2</Link>
      <Link to="/products/3">Producto 3</Link>

      {/* Renderizado condicional: Si tengo producto, hago lo que está dentro del <></>.
      Si me excedo en el parámetro, o pongo cualquier cosa como parámetro, NO va a funcionar el NotFound.
      Por lo que me daría un error si no pongo este condicional */}
      {product && (
        <>
          <p>
            <b>ID: {product.id}</b>
          </p>
          <p>
            <b>Nombre: {product.name}</b>
          </p>
          <p>
            <b>Categoria: {product.category}</b>
          </p>
        </>
      )}
      {
        //cuando es undefined:
        !product && <p> No hay producto con ese ID</p>
      }
    </div>
  );
}

export default Products;
