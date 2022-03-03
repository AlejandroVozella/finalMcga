import Swal from "sweetalert2"; // Se usa para personalizar las ventanas emergentes
import axios from "../../config/axios";

import {
  ADD_CONSERGE,
  ADD_CONSERGE_ERROR,
  ADD_CONSERGE_SUCCESS,
  EDIT_CONSERGE,
  EDIT_CONSERGE_ERROR,
  EDIT_CONSERGE_SUCCESS,
  DELETE_CONSERGE,
  DELETE_CONSERGE_ERROR,
  DELETE_CONSERGE_SUCCESS,
  GET_CONSERGES_ERROR,
  GET_CONSERGES_SUCCESS,
  GET_CONSERGES,
  SET_CONSERGE,
} from "../../types/conserges";

const clientUrl = "/recepcionistas";

// Obtener todos los Recepcionistas.
export function getAllConsergesAction() {
  return async (dispatch) => {
    dispatch(getAllConserges());
    try {
      const { data } = await axios.get(`${clientUrl}`);
      dispatch(getAllConsergesSuccess(data));
    } catch (error) {
      console.error(error);
      dispatch(getAllConsergesError(true));
    }
  };
}

const getAllConserges = () => ({
  type: GET_CONSERGES,
});

const getAllConsergesSuccess = (recepcionistas) => ({
  type: GET_CONSERGES_SUCCESS,
  payload: recepcionistas.data,
});

const getAllConsergesError = (status) => ({
  type: GET_CONSERGES_ERROR,
  payload: status,
});

// Crear Nuevo Cliente.
export function addNewConsergeAction(recepcionista) {
  return async (dispatch) => {
    dispatch(addNewConserge());
    try {
      // Primero intenta cargar un cliente. Cargando = True.
      await axios.post(`${clientUrl}`, recepcionista);
      // Si lo agrega correctamente, dispara la accion con el objeto de cliente cargado correctamente.
      dispatch(addNewConsergeSuccess(recepcionista));

      // Alerta exitosa.
      Swal.fire("Correcto", "El cliente se agrego correctamente...", "success");
    } catch (error) {
      console.error(error);
      // Si falla, envia una notificacion de error.
      dispatch(addNewConsergeError(true));
      // Alerta de error.
      Swal.fire({
        icon: "error",
        title: "Ocurrio un error.",
        text: "Ocurrio un error, intenta de nuevo.",
      });
    }
  };
}

const addNewConserge = () => ({
  type: ADD_CONSERGE,
});

// Si el cliente se guarda en la base de datos.
const addNewConsergeSuccess = (recepcionista) => ({
  type: ADD_CONSERGE_SUCCESS,
  payload: recepcionista,
});

// Si ocurre un error en el guardado del cliente.
const addNewConsergeError = (status) => ({
  type: ADD_CONSERGE_ERROR,
  payload: status,
});

// Eliminar Cliente.
export const deleteConsergeAction = (id) => {
  return async (dispatch) => {
    dispatch(deleteConserge());
    try {
      await axios.delete(`${clientUrl}/${id}`);
      dispatch(deleteConsergeSuccess(id));
      Swal.fire(
        "Eliminado",
        "El cliente se elimino correctamente...",
        "success"
      );
    } catch (error) {
      console.error(error);
      dispatch(deleteConsergeError(true));
      Swal.fire({
        icon: "error",
        title: "Ocurrio un error.",
        text: "Ocurrio un error al eliminar el cliente, intenta de nuevo.",
      });
    }
  };
};

const deleteConserge = () => ({
  type: DELETE_CONSERGE,
});

const deleteConsergeSuccess = (id) => ({
  type: DELETE_CONSERGE_SUCCESS,
  payload: id,
});

const deleteConsergeError = (status) => ({
  type: DELETE_CONSERGE_ERROR,
  payload: status,
});

// Editar Cliente.
export const editConsergeAction = (recepcionista) => {
  return async (dispatch) => {
    try {
      // Primero intenta cargar un cliente. Cargando = True.
      await axios.put(`${clientUrl}/${recepcionista?._id}`, recepcionista);
      //await axios.put(`https://app-finalmcga.herokuapp.com/clientes/${client._id}`, client);
      // Si lo agrega correctamente, dispara la accion con el objeto de cliente cargado correctamente.
      dispatch(editConsergeSuccess(recepcionista));
      dispatch(getAllConsergesAction());
      // Alerta exitosa.
      Swal.fire("Correcto", "El cliente se edito correctamente...", "success");
    } catch (error) {
      // Si falla, envia una notificacion de error.
      dispatch(editConsergeError(true));
      // Alerta de error.
      Swal.fire({
        icon: "error",
        title: "Ocurrio un error.",
        text: "Ocurrio un error, intenta de nuevo.",
      });
    }
  };
};

const editConsergeSuccess = (recepcionistas) => ({
  type: EDIT_CONSERGE_SUCCESS,
  payload: recepcionistas,
});

const editConsergeError = (status) => ({
  type: EDIT_CONSERGE_ERROR,
  payload: status,
});

export const setConsergeAction = (recepcionistas) => {
  return async (dispatch) => {
    dispatch(setConserge(recepcionistas));
  };
};

const setConserge = (recepcionista) => ({
  type: SET_CONSERGE,
  payload: recepcionista,
});
