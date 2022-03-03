import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editClientAction } from '../../../Store/actions/clientsActions';

const EditClient = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [clientState, setClient] = useState({
    _id: '',
    nombre: '',
    apellido: '',
    mail: '',
    tipo_documento: '',
    numero_documento: '',
    fecha_nacimiento: '',
    domicilio: '',
    telefono: '',
    
  });

  const { loading, error, selectedClient } = useSelector(
    (state) => state?.clients
  );

  useEffect(() => {
    setClient(selectedClient);
  }, [selectedClient]);

  if (!clientState) return history.push('/');

  console.log(clientState);

  const { nombre, apellido, mail, tipo_documento, numero_documento, fecha_nacimiento, domicilio, telefono } = clientState;

  const onFormChange = (e) => {
    console.log(e.target.value);
    setClient({
      ...clientState,
      [e.target.name]: e.target.value,
    });
  };

  const editClient = (client) => dispatch(editClientAction(client));

  const onSubmit = (e) => {
    e.preventDefault();

    //Validar formulario.
    if (
      nombre.trim() === '' ||
      apellido.trim() === '' ||
      mail.trim() === '' ||
      tipo_documento.trim() == '' ||
      numero_documento === '' ||
      fecha_nacimiento.trim() === '' ||
      domicilio.trim() === '' ||
      telefono == ''               // Esta guardado como Number en la base de datos
       
    )
      return;

    //Si no hay errores.
    //Crear Cliente.
    const client = {
      _id: clientState._id,
      nombre,
      apellido,
      mail,
      tipo_documento,
      numero_documento,
      fecha_nacimiento,
      domicilio,
      telefono,
           
    };

    editClient(client);
    // Redireccionar a la lista de clientes.
    history.push('/clients');
  };

  return (
    <div className='row justify-content-center'>
      <div className='col-md-8 p-4'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 font-weight-bold'>
              Editar Cliente
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
                  name='nombre'
                  value={nombre}
                  onChange={onFormChange}
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
                  name='apellido'
                  value={apellido}
                  onChange={onFormChange}
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
                  name='mail'
                  value={mail}
                  onChange={onFormChange}
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
                  onChange={onFormChange}
                />
              </div>

              <div className='form-group'>
                <label>
                  Numero documento Cliente <span className='text-danger'>*</span>
                </label>
                <input
                  type='number'
                  className='form-control'
                  placeholder='Numero documento del Cliente'
                  name='numero_documento'
                  value={numero_documento}
                  onChange={onFormChange}
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
                  onChange={onFormChange}
                />
              </div>

              <div className='form-group'>
                <label>
                  Domicilio Cliente <span className='text-danger'>*</span>
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Domicilio del Cliente'
                  name='domicilio'
                  value={domicilio}
                  onChange={onFormChange}
                />
              </div>

              <div className='form-group'>
                <label>
                  Telefono Cliente <span className='text-danger'>*</span>
                </label>
                <input
                  type='number'
                  className='form-control'
                  placeholder='Telefono del Cliente'
                  name='telefono'
                  value={telefono}
                  onChange={onFormChange}
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

export default EditClient;
