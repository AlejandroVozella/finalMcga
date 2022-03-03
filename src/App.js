import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './Store';
//

// Components - Layout
import Header from './Shared/Header';
import Sidebar from './Shared/Sidebar';
import Footer from './Shared/Footer';
// Componentes - Home
import Home from './components/Home';
// Componentes - Clients branch
import Clients from './components/Clients';
import NewClient from './components/Clients/NewClient';
import EditClient from './components/Clients/EditClient';
// Componentes - Cabañas branch
import Cabanas from './components/Cabanas';
import NewCabana from './components/Cabanas/NewCabana';
import EditCabana from './components/Cabanas/EditCabana';
// Componnetes - Usuarios
import Login from './components/Usuarios'

//Conserges
import Conserges from './components/Conserges';
import NewConserge from './components/Conserges/NewConserge';
import EditConserge from './components/Conserges/EditConserge'


function App() {
  return (
    <Router>
      <Header />
      <Provider store={store}>
      <Route exact path='/login' component={Login} />
        <div className='flex'>
          <Sidebar />
          <div className='mainOptions'>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path='/clients' component={Clients} />
              <Route exact path='/clients/new' component={NewClient} />
              <Route exact path='/clients/edit/:id' component={EditClient} />
              <Route exact path='/cabanas' component={Cabanas} />
              <Route exact path='/cabanas/new' component={NewCabana} />
              <Route exact path='/cabanas/edit/:id' component={EditCabana} />
              <Route exact path='/conserges' component={Conserges} />
              <Route exact path='/conserges/new' component={NewConserge} />
              <Route exact path='/conserges/edit/:id' component={EditConserge} />
            </Switch>
          </div>
        </div>
      </Provider>
      <Footer />
    </Router>
  );
}

export default App;