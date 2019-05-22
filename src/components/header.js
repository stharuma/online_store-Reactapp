import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const Navigation = ({ cart }) =><nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ marginBottom: '30px' }}>
<Link className="navbar-brand" to="/">Shoping Card</Link>

<div className="collapse navbar-collapse">
  <ul className="navbar-nav ml-auto">
    <li className="nav-item" key="home">
      <Link className="nav-link" to="/">Home</Link>
    </li>
    <li className="nav-item" key="cart">
        <Link className="nav-link" to="/cart">Cart ({cart.reduce((acc, item) => {
      return acc + item.quantity
    }, 0)})</Link>
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

class Header extends Component {
    render() {
    return (
      <Navigation { ...this.props } />
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

export default withRouter(connect(mapStateToProps)(Header));



