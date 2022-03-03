import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

import {
  deleteClientAction,
  setClientAction,
} from '../../../Store/actions/clientsActions';

const Client = ({ client }) => {
  const { _id, nombre, apellido, mail, tipo_documento, numero_documento, fecha_nacimiento, domicilio, telefono } = client;

  const dispatch = useDispatch();
  const history = useHistory(); // Habilitar history para redireccionar.

  const onDeleteClient = (id) => {
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
        dispatch(deleteClientAction(id));
      }
    });
  };

  const onEditRedirection = (id) => {
    dispatch(setClientAction(client));
    history.push(`/clients/edit/${id}`);
    //console.log(id)      // Debug
  };

  return (
    <tr>
      <td>
        <span className='font-weight-bold'> {nombre} </span>
      </td>
      <td>{apellido}</td>
      <td>{mail}</td>
      <td>{tipo_documento}</td>
      <td>{numero_documento}</td>
      <td>{fecha_nacimiento}</td>
      <td>{domicilio}</td>
      <td>{telefono}</td>
      
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
          onClick={() => onDeleteClient(_id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Client;
