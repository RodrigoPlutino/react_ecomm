import React, { Component } from 'react';
import '../styles/stylesheet.css'

class ItemListContainer extends Component {
    render () {
    return (
        <div class="card">
            <img src={this.props.image}></img>
            <div class="container">
                <h4><b>{this.props.productName}</b></h4>
                <p>{this.props.productPrice}</p>
            </div>
        </div>
        )
    }
    }


export default ItemListContainer;