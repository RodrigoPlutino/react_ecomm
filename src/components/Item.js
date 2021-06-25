import React, {useState} from 'react';
import '../styles/stylesheet.css'
import Button from 'react-bootstrap/Button'
import Counter from './Counter';


function Item(props) {


    return (

        <div className="card" id={props.id}>
            <img src={props.image}></img>
            <div className="container">
                <h4><b>{props.productName}</b></h4>
                <p>{props.productPrice}</p>
                <Counter maxStock={props.maxStock} unidades="1"/>
            </div>
        </div>
    )
}

export default Item;



