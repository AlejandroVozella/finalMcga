import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

import {
  deleteConsergeAction,
  setConsergeAction,
} from '../../../Store/actions/consergesActions';

const Recepcionista = ({ recepcionista }) => {
  const { _id, usuario, password, Nombre, Apellido } = recepcionista;

  const dispatch = useDispatch();
  const history = useHistory(); // Habilitar history para redireccionar.

  const onDeleteConserge = (id) => {
    // preguntar al usuario
    Swal.fire({
      title: '¿Estas seguro?',
      text: 'Esta accion es irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
        dispatch(deleteConsergeAction(id));
      }
    });
  };

  const onEditRedirection = (id) => {
    dispatch(setConsergeAction(recepcionista));
    history.push(`/conserge/edit/${id}`);
    //console.log(id)      // Debug
  };

  return (
    <tr>
      <td>
        <span className='font-weight-bold'> {usuario} </span>
      </td>
      <td>{password}</td>
      <td>{Nombre}</td>
      <td>{Apellido}</td>
      
      
      <td className='actions'>
        <button
          type='button'
          onClick={() => onEditRedirection(_id)}
          className='btn btn-primary m-1'
        >
          Editar
        </button>
        <button
          type='button'
          className='btn btn-danger m-1'
          onClick={() => onDeleteConserge(_id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Recepcionista;