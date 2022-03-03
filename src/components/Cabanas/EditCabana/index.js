import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editCabanaAction } from '../../../Store/actions/cabanasActions';

const EditCabana = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [cabanaState, setCabana] = useState({
    _id: '',
    codigo: '',
    descripcion: '',
    precio: '',
  });

  const { loading, error, selectedCabana } = useSelector(
    (state) => state?.cabanas
  );

  useEffect(() => {
    setCabana(selectedCabana);
  }, [selectedCabana]);

  if (!cabanaState) return history.push('/');

  console.log(cabanaState);

  const { codigo, descripcion, precio } = cabanaState;

  const onFormChange = (e) => {
    console.log(e.target.value);
    setCabana({
      ...cabanaState,
      [e.target.name]: e.target.value,
    });
  };

  const editCabana = (cabana) => dispatch(editCabanaAction(cabana));

  const onSubmit = (e) => {
    e.preventDefault();

    //Validar formulario.
    if (
      codigo.trim() === '' ||
      descripcion.trim() === '' ||
      precio.trim() === ''      // Esta guardado como Number en la base de datos
    )
      return;

    //Si no hay errores.
    //Crear Cabana.
    const cabana = {
      _id: cabanaState._id,
      codigo,
      descripcion,
      precio,
    };

    editCabana(cabana);
    // Redireccionar a la lista de cabanas.
    history.push('/Cabanas');
  };

  return (
    <div className='row justify-content-center'>
      <div className='col-md-8 p-4'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 font-weight-bold'>
              Editar Cabana
            </h2>

            <form onSubmit={onSubmit}>
              <div className='form-group'>
                <label>
                  Codigo Cabana <span className='text-danger'>*</span>
                </label>
                <input
                  type='number'
                  className='form-control'
                  placeholder='Codigo de la Cabana'
                  name='codigo'
                  value={codigo}
                  onChange={onFormChange}
                />
              </div>

              <div className='form-group'>
                <label>
                  Descripcion de la Cabana <span className='text-danger'>*</span>
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Descripcion de la Cabana'
                  name='descripcion'
                  value={descripcion}
                  onChange={onFormChange}
                />
              </div>

              <div className='form-group'>
                <label>
                  Precio <span className='text-danger'>*</span>
                </label>
                <input
                  type='number'
                  className='form-control'
                  placeholder='Precio de la Cabana'
                  name='precio'
                  value={precio}
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

export default EditCabana;
