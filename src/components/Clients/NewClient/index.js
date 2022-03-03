import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addNewClientAction } from '../../../Store/actions/clientsActions';

const NewClient = ({ history }) => {
  // useState Se utiliza para setear los valores en los campos del formulario.
  const [nombre, setearNombre] = useState('');
  const [apellido, setearApellido] = useState('');
  const [mail, setearMail] = useState('');
  const [telefono, setearTelefono] = useState('');
  const [tipo_documento, setearTipoDoc] = useState('');
  const [numero_documento, setearNumeroDoc] = useState('');
  const [domicilio, setearDomicilio] = useState('');
  const [fecha_nacimiento, setearfecha_nacimiento] = useState('');

  // Permite utilziar los dispatch.
  const dispatch = useDispatch();

  // Acceder al state del Store! [!IMPORTANTE!]
  const { loading, error } = useSelector((state) => state.clients);

  // Llama el action.
  const addNewClient = (client) => dispatch(addNewClientAction(client));

  const onSubmit = (e) => {
    e.preventDefault();
    //Validar formulario.
    if (
      nombre.trim() === '' ||
      apellido.trim() === '' ||
      mail.trim() === '' ||
      telefono.trim() === '' ||
      tipo_documento.trim() === '' ||
      numero_documento.trim() === '' ||
      domicilio.trim() === '' ||
      fecha_nacimiento.trim() === ''
    )
      return;

    //Si no hay errores.
    //Crear Cliente.
    const client = {
      nombre,
      apellido,
      mail,
      telefono,
      tipo_documento,
      numero_documento,
      domicilio,
      fecha_nacimiento
    };

    addNewClient(client);

    // Redireccionar a la lista de clientes.
    history.push('/clients');
  };

  return (
    <div className='row justify-content-center'>
      <div className='col-md-8 p-4'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 font-weight-bold'>
              Agregar Nuevo Cliente
            </h2>

            <form onSubmit={onSubmit}>
              <div className='form-group'>
                <label>
                  Nombre Cliente <span className='text-danger'>*</span>
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Nombre del Cliente'
                  name='name'
                  value={nombre}
                  onChange={(e) => setearNombre(e.target.value)}
                />
              </div>

              <div className='form-group'>
                <label>
                  Apellido Cliente <span className='text-danger'>*</span>
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Apellido del Cliente'
                  name='lastName'
                  value={apellido}
                  onChange={(e) => setearApellido(e.target.value)}
                />
              </div>

              <div className='form-group'>
                <label>
                  Email Cliente <span className='text-danger'>*</span>
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Email del Cliente'
                  name='email'
                  value={mail}
                  onChange={(e) => setearMail(e.target.value)}
                />
              </div>

              <div className='form-group'>
                <label>
                  Telefono Cliente <span className='text-danger'>*</span>
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Telefono del Cliente'
                  name='phone'
                  value={telefono}
                  onChange={(e) => setearTelefono(e.target.value)}
                />
              </div>

              <div className='form-group'>
                <label>
                  Tipo documento Cliente <span className='text-danger'>*</span>
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Tipo documento Cliente'
                  name='tipo_documento'
                  value={tipo_documento}
                  onChange={(e) => setearTipoDoc(e.target.value)}
                />
              </div>

              <div className='form-group'>
                <label>
                  Numero documento Cliente <span className='text-danger'>*</span>
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Numero documento Cliente'
                  name='numero_documento'
                  value={numero_documento}
                  onChange={(e) => setearNumeroDoc(e.target.value)}
                />
              </div>

              <div className='form-group'>
                <label>
                  Direccion Cliente <span className='text-danger'>*</span>
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Direccion Cliente'
                  name='domicilio'
                  value={domicilio}
                  onChange={(e) => setearDomicilio(e.target.value)}
                />
              </div>

              <div className='form-group'>
                <label>
                  Fecha Nacimiento <span className='text-danger'>*</span>
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Fecha Nacimiento'
                  name='fecha_nacimiento'
                  value={fecha_nacimiento}
                  onChange={(e) => setearfecha_nacimiento(e.target.value)}
                />
              </div>

              <div className='form-group text-center'>
                <span className='font-weight-bold text-danger'>
                  * Campos Requeridos
                </span>
              </div>

              <button
                type='submit'
                className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
              >
                Agregar
              </button>
            </form>
            {loading ? <p> Loading... </p> : null}

            {error ? (
              <p className='alert alert-danger p-2 m-4 text-center'>
                Ocurrio un error.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewClient;
