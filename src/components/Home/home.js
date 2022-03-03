import React from 'react';
import css from './home.module.css';

class Logout extends React.Component {
 
  render() {
    return (
      <div className={css.app}>
        <div className={css.container}>
          <button className={css.button} onClick={this.loginLogout}>{this.props.logged ? "Logout" : "Login"}</button>
        </div>
      </div>
    );
  }
  
  loginLogout = () => {
    if (this.props.logged) {
       this.props.logout();
    } else {
        this.props.history.push("/login")
    }
  }
}

export default Logout;
  