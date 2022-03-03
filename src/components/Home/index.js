import Login from './home'
import { connect } from 'react-redux'
// import { fetchProductos } from '../../redux
import { logout } from '../../Store/actions/usuariosActions'

const mapStateToProps = (store) => {
    return {
        logged: store.auth.logged
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout:() => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)