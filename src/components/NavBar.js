import React from 'react';
import '../styles/stylesheet.css';
import CartItems from './CartItems';
import CartWidget from './CartWidget';
import {Link, NavLink} from 'react-router-dom';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"></link>


function NavBar() {

    return (
        <nav className="topnav">
            <NavLink className="col-1" activeClassName="selected" exact to="/">Home</NavLink>
            <NavLink className="col-1" activeClassName="selected" to="/Products">Products</NavLink>
            <NavLink className="col-1" activeClassName="selected" to="/Contact">xxx</NavLink>
            <CartItems className="col-1" icon={<CartWidget/>}/>
        </nav>
    )
}

export default NavBar;