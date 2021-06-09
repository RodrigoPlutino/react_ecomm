import React, { Component } from 'react';
import '../styles/stylesheet.css'
import CartWidget from './CartWidget'


class NavBar extends Component {
    render () {
    return (
        <div class="topnav">
            <a class="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a id="cart-icon" href="#cart"><CartWidget/></a>
        </div>
        )
    }
    }


export default NavBar;