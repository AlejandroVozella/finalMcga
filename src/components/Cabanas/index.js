import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Cabana from "./Cabana";

import { getAllCabanasAction } from "../../Store/actions/cabanasActions";

const Cabanas = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllCabanas = () => dispatch(getAllCabanasAction());
    getAllCabanas();
  }, []);

  const { cargando, error, cabanas } = useSelector((state) => state.cabanas);

  return (
    <>
      <h2 className="text-center my-5">Listado de Cabanas</h2>
      {cargando ? <h4 className="text-center"> Cargando... </h4> : null}

      {error ? (
        <p className="alert alert-danger p-2 m-4 text-center">
          Ocurrio un error.
        </p>
      ) : null}

      <div className="row pb-2">
        <div className="col-12 text-right">
          <Link
            to={"/cabanas/new"}
            className="btn btn-danger nuevo-post d-block d-md-inline-block"
          >
            Nueva Cabana &#43;
          </Link>
        </div>
      </div>

      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Codigo</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Precio</th>
          </tr>
        </thead>
        <tbody>
          {cabanas.length === 0
            ? "No hay Cabanas"
            : cabanas.map((cabana) => (
                <Cabana key={cabana._id} cabana={cabana} />
              ))}
        </tbody>
      </table>
    </>
  );
};

export default Cabanas;
