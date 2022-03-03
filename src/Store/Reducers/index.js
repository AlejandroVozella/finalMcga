import { combineReducers } from "redux";
import clientsReducer from "./clientsReducer";
import cabanasReducer from "./cabanasReducer";
import consergesReducer from "./consergesReducer"
// import usuariosReducer from "./usuariosReducer";
import {reducer as authReducer} from  '../Reducers/usuariosReducer'
import { reducer as formReducer } from 'redux-form'

// Se utiliza un reducer Index que integrara todos los demas reducers.

export default combineReducers({
  clients: clientsReducer,
  cabanas: cabanasReducer,
  conserges: consergesReducer,
  auth: authReducer,
  // usuarios: usuariosReducer,
  form: formReducer
  
});
