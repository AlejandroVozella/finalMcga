import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Conserge from './Conserge';

import { getAllConsergesAction } from '../../Store/actions/consergesActions';


const Recepcionistas = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getAllConserges = () => dispatch(getAllConsergesAction());
        getAllConserges();
      }, []);

      const { cargando, error, recepcionistas } = useSelector((state) => state.recepcionistas);
      return (
        <>
          <h2 className='text-center my-5'>Listado de Recepcionistas</h2>
          {cargando ? <h4 className='text-center'> Cargando... </h4> : null}
    
          {error ? (
            <p className='alert alert-danger p-2 m-4 text-center'>
              Ocurrio un error.
            </p>
          ) : null}
    
          <div className='row pb-2'>
            <div className='col-12 text-right'>
              <Link
                to={'/Conserges/new'}
                className='btn btn-danger nuevo-post d-block d-md-inline-block'
              >
                Nuevo Recepcionista &#43;
              </Link>
            </div>
          </div>
    
          <table className='table table-striped'>
            <thead className='bg-primary table-dark'>
              <tr>
                <th scope='col'>Usuario</th>
                <th scope='col'>Contraseña</th>
                <th scope='col'>Nombre</th>
                <th scope='col'>Apellido</th>
                
                
              </tr>
            </thead>
            <tbody>
              {recepcionistas.length === 0
                ? 'No hay Recepcionista'
                : recepcionistas.map((recepcionistas) => (
                    <Conserge key={recepcionistas._id} recepcionistas={recepcionistas} />
                  ))}
            </tbody>
          </table>
        </>
      );
    };
    
    export default Recepcionistas;