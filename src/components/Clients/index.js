import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Client from './Cliente';

import { getAllClientsAction } from '../../Store/actions/clientsActions';

const Clients = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllClients = () => dispatch(getAllClientsAction());
    getAllClients();
  }, []);

  const { cargando, error, clients } = useSelector((state) => state.clients);

  return (
    <>
      <h2 className='text-center my-5'>Listado de Clientes</h2>
      {cargando ? <h4 className='text-center'> Cargando... </h4> : null}

      {error ? (
        <p className='alert alert-danger p-2 m-4 text-center'>
          Ocurrio un error.
        </p>
      ) : null}

      <div className='row pb-2'>
        <div className='col-12 text-right'>
          <Link
            to={'/Clients/new'}
            className='btn btn-danger nuevo-post d-block d-md-inline-block'
          >
            Nuevo Cliente &#43;
          </Link>
        </div>
      </div>

      <table className='table table-striped'>
        <thead className='bg-primary table-dark'>
          <tr>
            <th scope='col'>Nombre</th>
            <th scope='col'>Apellido</th>
            <th scope='col'>mail</th>
            <th scope='col'>tipo_documento</th>
            <th scope='col'>numero_documento</th>
            <th scope='col'>fecha_nacimiento</th>
            <th scope='col'>domicilio</th>
            <th scope='col'>telefono</th>
            
          </tr>
        </thead>
        <tbody>
          {clients.length === 0
            ? 'No hay Clientes'
            : clients.map((client) => (
                <Client key={client._id} client={client} />
              ))}
        </tbody>
      </table>
    </>
  );
};

export default Clients;
