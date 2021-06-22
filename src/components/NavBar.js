import React, { Component } from 'react';
import '../styles/stylesheet.css'
import CartItems from './CartItems';
import CartWidget from './CartWidget'

class NavBar extends Component {
    render () {
    return (
        <div className="topnav">
            <a className="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <CartItems icon={<CartWidget/>}/>
        </div>
        )
    }
}

export default NavBar;