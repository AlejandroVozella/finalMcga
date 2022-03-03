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

  // Cada reducer tiene su propio State.
const initialState = {
    recepcionistas: [],
    error: null,
    loading: false,
    recepcionista: null,
    selectedRecepcionista: null,
  };
  
  export default function recepcionistas(state = initialState, action) {
    switch (action.type) {
      case ADD_CONSERGE:
        return {
          ...state,
          loading: true,
        };
  
      case ADD_CONSERGE_SUCCESS:
        return {
          ...state,
          loading: false,
          recepcionistas: [...state.recepcionistas, action.payload],
          error: false,
        };
  
      case ADD_CONSERGE_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
          // En este caso, el error pasa a true. (Para poder notificar al usuario)
        };
  
      case GET_CONSERGES:
        return {
          ...state,
          loading: true,
        };
  
      case GET_CONSERGES_SUCCESS:
        return {
          ...state,
          loading: false,
          recepcionistas: action.payload,
          error: false,
        };
  
      case GET_CONSERGES_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
          // En este caso, el error pasa a true. (Para poder notificar al usuario)
        };
  
      case DELETE_CONSERGE:
        return {
          ...state,
          loading: true,
        };
  
      case DELETE_CONSERGE_SUCCESS:
        return {
          ...state,
          loading: false,
          recepcionistas: state.recepcionistas.filter(
            (recepcionista) => recepcionista._id !== action.payload
          ),
          error: false,
        };
  
      case DELETE_CONSERGE_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
          // En este caso, el error pasa a true. (Para poder notificar al usuario)
        };
  
      case EDIT_CONSERGE:
        return {
          ...state,
          loading: false,
          selectedRecepcionista: action.payload,
        };
  
      case EDIT_CONSERGE_SUCCESS:
        return {
          ...state,
          loading: false,
          recepcionistas: state.recepcionistas.filter(
            (recepcionista) => recepcionista._id !== action.payload
          ),
          error: false,
        };
  
      case EDIT_CONSERGE_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload,
          // En este caso, el error pasa a true. (Para poder notificar al usuario)
        };
  
      case SET_CONSERGE:
        return {
          ...state,
          loading: false,
          selectedRecepcionista: action.payload,
        };
      default:
        return state;
    }
  }