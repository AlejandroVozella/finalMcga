import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addNewCabanaAction } from "../../../Store/actions/cabanasActions";

const NewCabana = ({ history }) => {
  // useState Se utiliza para setear los valores en los campos del formulario
  const [codigo, setCodigo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  
  // Permite utilziar los dispatch
  const dispatch = useDispatch();

  // Acceder al state del Store! [!IMPORTANTE!]
  const { loading, error } = useSelector((state) => state.cabanas);

  // Llama el action
  const addNewCabana = (cabana) => dispatch(addNewCabanaAction(cabana));

  const onSubmit = (e) => {
    e.preventDefault();
    //Validar formulario
    if (
      codigo.trim() === "" ||
      descripcion.trim() === "" ||
      precio.trim() === "" 
    )
      return;

    //Si no hay errores
    //Crear Producto
    const cabana = {
      codigo,
      descripcion,
      precio,
    };

    addNewCabana(cabana);

    // Redireccionar a la lista de Cabanas
    history.push("/cabanas");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8 p-4">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nueva Cabana
            </h2>

            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label>
                  Codigo <span className="text-danger">*</span>
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Codigo de Cabana"
                  name="codigo"
                  value={codigo}
                  onChange={(e) => setCodigo(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>
                  Descripcion <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Descripcion de la Cabana"
                  name="text"
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>
                  Precio <span className="text-danger">*</span>
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio de la Cabana"
                  name="precio"
                  value={precio}
                  onChange={(e) => setPrecio(e.target.value)}
                />
              </div>

              <div className="form-group text-center">
                <span className="font-weight-bold text-danger">
                  * Campos Requeridos
                </span>
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Agregar
              </button>
            </form>
            {loading ? <p> Loading... </p> : null}

            {error ? (
              <p className="alert alert-danger p-2 m-4 text-center">
                Ocurrio un error.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCabana;
