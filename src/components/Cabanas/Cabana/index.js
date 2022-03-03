import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

import {
  deleteCabanaAction,
  editCabanaAction,
} from "../../../Store/actions/cabanasActions";

const Cabana = ({ cabana }) => {
  const { _id, codigo, descripcion, precio } = cabana;

  const dispatch = useDispatch();
  const history = useHistory(); // Habilitar history para redireccionar.

  const onDeleteCabana = (id) => {
    // preguntar al usuario
    Swal.fire({
      title: "¿Estas seguro?",
      text: "Esta accion es irreversible.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value) {
        dispatch(deleteCabanaAction(id));
      }
    });
  };

  const onEditRedirection = (id) => {
    dispatch(editCabanaAction(cabana));
    history.push(`/cabanas/edit/${id}`);
  };

  return (
    <tr>
      <td>
        <span className="font-weight-bold"> {codigo} </span>
      </td>
      <td>{descripcion}</td>
      <td>{precio}</td>
      <td className="actions">
        <button
          type="button"
          onClick={() => onEditRedirection(_id)}
          className="btn btn-primary m-1"
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-danger m-1"
          onClick={() => onDeleteCabana(_id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Cabana;
