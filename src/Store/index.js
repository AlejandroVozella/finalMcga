import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './Reducers';
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  reducer,
  compose(composeWithDevTools(applyMiddleware(thunk)))
);

export default store;

