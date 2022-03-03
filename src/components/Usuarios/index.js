import Login from './Login'
import { connect } from 'react-redux'
import { login } from '../../Store/actions/usuariosActions'
import { reduxForm } from 'redux-form'

const mapStateToProps = (store) => {
  return {
    isFetching: store.auth.isFetching,
    messageError: store.auth.error,
    logged: store.auth.logged,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password)),
  }
}

const onSubmit = (values, dispatch, props) => {
  props.login(values.email, values.password)
}

const reduxFormConfig = {
  form: 'login',
  onSubmit,
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(reduxFormConfig)(Login))