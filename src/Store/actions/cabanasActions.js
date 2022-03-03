import Swal from 'sweetalert2';
import axios from '../../config/axios';
import {
  ADD_CABANA,
  ADD_CABANA_SUCCESS,
  ADD_CABANA_ERROR,
  EDIT_CABANA_SUCCESS,
  EDIT_CABANA_ERROR,
  DELETE_CABANA,
  DELETE_CABANA_SUCCESS,
  DELETE_CABANA_ERROR,
  GET_CABANAS,
  GET_CABANAS_SUCCESS,
  GET_CABANAS_ERROR,
  SET_CABANA,
} from '../../types/cabanas';

const cabanaUrl = '/cabanas';

// Obtener todos las Cabanas
export function getAllCabanasAction() {
  return async (dispatch) => {
    dispatch(getAllCabanas());
    try {
      //const { data } = await axios.get(`https://app-finalmcga.herokuapp.com//cabanas`);
      const { data } = await axios.get(`${cabanaUrl}`);
      dispatch(getAllCabanasSuccess(data));
    } catch (error) {
      console.error(error);
      dispatch(getAllCabanasError(true));
    }
  };
}

const getAllCabanas = () => ({
  type: GET_CABANAS,
});

const getAllCabanasSuccess = (cabanas) => ({
  type: GET_CABANAS_SUCCESS,
  payload: cabanas.data,
});

const getAllCabanasError = (status) => ({
  type: GET_CABANAS_ERROR,
  payload: status,
});

// Agregar Nueva Cabana
export function addNewCabanaAction(cabana) {
  return async (dispatch) => {
    dispatch(addNewCabana());
    try {
      // Intenta cargar una Cabana -- Cargando = True.
      //await axios.post(`https://app-finalmcga.herokuapp.com//cabanas`, cabana);
      await axios.post(`${cabanaUrl}`, cabana);
      // Si lo agrega correctamente, dispara la accion con el objeto de Producto cargado correctamente.
      dispatch(addNewCabanaSuccess(cabana));

      // Alerta exitosa.
      Swal.fire(
        'Correcto',
        'La Cabana se agrego correctamente...',
        'success'
      );
    } catch (error) {
      console.error(error);
      // Si falla, envia una notificacion de error.
      dispatch(addNewCabanaError(true));
      // Alerta de error.
      Swal.fire({
        icon: 'error',
        title: 'Ocurrio un error.',
        text: 'Ocurrio un error, intenta de nuevo.',
      });
    }
  };
}

const addNewCabana = () => ({
  type: ADD_CABANA,
});

// Si la cabana se guarda en la base de datos
const addNewCabanaSuccess = (cabana) => ({
  type: ADD_CABANA_SUCCESS,
  payload: cabana,
});

// Si ocurre un error en el guardado del Cliente
const addNewCabanaError = (status) => ({
  type: ADD_CABANA_ERROR,
  payload: status,
});

// Borrar Cliente.
export const deleteCabanaAction = (id) => {
  return async (dispatch) => {
    dispatch(deleteCabana());
    try {
      //await axios.delete(`https://app-finalmcga.herokuapp.com//cabanas/${id}`);
      await axios.delete(`${cabanaUrl}/${id}`);
      dispatch(deleteCabanaSuccess(id));
      Swal.fire(
        'Eliminado',
        'La Cabana se elimino correctamente...',
        'success'
      );
    } catch (error) {
      console.error(error);
      dispatch(deleteCabanaError(true));
      Swal.fire({
        icon: 'error',
        title: 'Ocurrio un error.',
        text: 'Ocurrio un error al eliminar el Producto, intenta de nuevo.',
      });
    }
  };
};

const deleteCabana = () => ({
  type: DELETE_CABANA,
});

const deleteCabanaSuccess = (id) => ({
  type: DELETE_CABANA_SUCCESS,
  payload: id,
});

const deleteCabanaError = (status) => ({
  type: DELETE_CABANA_ERROR,
  payload: status,
});

// Editar Cabana.
export const editCabanaAction = (cabana) => {
  return async (dispatch) => {
    try {
      // Primero intenta cargar un producto. Cargando = True.
      //await axios.put(`https://app-finalmcga.herokuapp.com/cabanas/${cabana._id}`, cabana);
      await axios.put(`${cabanaUrl}/${cabana?._id}`, cabana);
      // Si lo agrega correctamente, dispara la accion con el objeto de producto cargado correctamente.
      dispatch(editCabanaSuccess(cabana));
      dispatch(getAllCabanasAction());
      // Alerta exitosa.
      Swal.fire('Correcto', 'La Cabana se edito correctamente...', 'success');
    } catch (error) {
      // Si falla, envia una notificacion de error.
      dispatch(editCabanaError(true));
      // Alerta de error.
      Swal.fire({
        icon: 'error',
        title: 'Ocurrio un error.',
        text: 'Ocurrio un error, intenta de nuevo.',
      });
    }
  };
};

const editCabanaSuccess = (cabana) => ({
  type: EDIT_CABANA_SUCCESS,
  payload: cabana,
});

const editCabanaError = (status) => ({
  type: EDIT_CABANA_ERROR,
  payload: status,
});

export const setCabanaAction = (cabana) => {
  return async (dispatch) => {
    dispatch(setCabana(cabana));
  };
};

const setCabana = (cabana) => ({
  type: SET_CABANA,
  payload: cabana,
});
