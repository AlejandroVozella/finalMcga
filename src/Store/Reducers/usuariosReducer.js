import {
    LOGIN_FETCHING,
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    LOGOUT_USER
  } from '../../types/usuarios';


const initialStore = {
    isFetching: false,
    logged: false,
    error: '',
    usuario: undefined,
}

export const reducer = (store = initialStore, action) => {
    switch (action.type) {
        case LOGIN_FETCHING: {
            return {
                ...store,
                isFetching: true,
                error: ''
            };
        }
        case LOGIN_SUCCESS: {
            return {
                ...store,
                isFetching: false,
                user: action.payload,
                logged: true,
                error: ''
            };
        }
        case LOGIN_ERROR: {
            return {
                ...store,
                isFetching: false,
                error: action.payload,
                logged: false,
            };
        }
        case LOGOUT_USER: {
            return {
                ...store,
                isFetching: false,
                logged: false,
                error: ''
            };
        }
        default:
            return store;
    }
}