import {
  ADD_CABANA,
  ADD_CABANA_SUCCESS,
  ADD_CABANA_ERROR,
  GET_CABANAS,
  GET_CABANAS_SUCCESS,
  GET_CABANAS_ERROR,
  DELETE_CABANA,
  DELETE_CABANA_SUCCESS,
  DELETE_CABANA_ERROR,
  EDIT_CABANA,
  EDIT_CABANA_SUCCESS,
  EDIT_CABANA_ERROR,
  SET_CABANA,
} from '../../types/cabanas';

// Cada reducer tiene su propio State.
const initialState = {
  cabanas: [],
  error: null,
  loading: false,
  cabana: null,
  selectedCabana: null,
};

export default function cabanas(state = initialState, action) {
  switch (action.type) {
    case ADD_CABANA:
      return {
        ...state,
        loading: true,
      };

    case ADD_CABANA_SUCCESS:
      return {
        ...state,
        loading: false,
        cabanas: [...state.cabanas, action.payload],
        error: false,
      };

    case ADD_CABANA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        // En este caso, el error pasa a true. (Para poder notificar al usuario)
      };

    case GET_CABANAS:
      return {
        ...state,
        loading: true,
      };

    case GET_CABANAS_SUCCESS:
      return {
        ...state,
        loading: false,
        cabanas: action.payload,
        error: false,
      };

    case GET_CABANAS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        // En este caso, el error pasa a true. (Para poder notificar al usuario)
      };

    case DELETE_CABANA:
      return {
        ...state,
        loading: true,
      };

    case DELETE_CABANA_SUCCESS:
      return {
        ...state,
        loading: false,
        cabanas: state.cabanas.filter(
          (cabana) => cabana._id !== action.payload
        ),
        error: false,
      };

    case DELETE_CABANA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        // En este caso, el error pasa a true. (Para poder notificar al usuario)
      };

    case EDIT_CABANA:
      return {
        ...state,
        loading: false,
        selectedCabana: action.payload,
      };

    case EDIT_CABANA_SUCCESS:
      return {
        ...state,
        loading: false,
        cabanas: state.cabanas.filter(
          (cabana) => cabana._id !== action.payload
        ),
        error: false,
      };

    case EDIT_CABANA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        // En este caso, el error pasa a true. (Para poder notificar al usuario)
      };
    case SET_CABANA:
      return {
        ...state,
        loading: false,
        selectedCabana: action.payload,
      };
    default:
      return state;
  }
}
