import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  // constructor(props) {
  //   super(props);}

   render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ marginBottom: '30px' }}>
        <Link className="navbar-brand" to="/">Shoping Card111</Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item" key="home">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item" key="cart">
                <Link className="nav-link" to="/cart">Cart</Link>
              </li>,
              <li className="nav-item" key="checkout">
                <Link className="nav-link" to="/checkout">CheckOut</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/orders" >Orders</Link>
              </li> 
          </ul> 
        </div>
      </nav>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     isAuth: state.auth.isAuthenticated
//   };
// }

export default Header;



