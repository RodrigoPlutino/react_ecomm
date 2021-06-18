import React, { Component } from 'react';
import '../styles/stylesheet.css'
import Counter from './Counter'

class ItemListContainer extends Component {
    render () {
    return (
        <div className="card">
            <img src={this.props.image}></img>
            <div className="container">
                <h4><b>{this.props.productName}</b></h4>
                <p>{this.props.productPrice}</p>
                <Counter unidades="1" maxStock="5"/>
            </div>
        </div>
        )
    }
}

export default ItemListContainer;