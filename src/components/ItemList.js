import React, { Component } from 'react';
import '../styles/stylesheet.css'
import ItemListContainer from '../components/ItemListContainer'

class ItemList extends Component {
    render () {
    return (
        <div>
        <div className="first-box">
            <ItemListContainer image="https://www.guantexindustrial.com.ar/707-large_default/remera-algodon-jersey-blanco-talle-xxxl.jpg" productName="Remera 1" productPrice="$999"/>
            <ItemListContainer image="https://www.guantexindustrial.com.ar/707-large_default/remera-algodon-jersey-blanco-talle-xxxl.jpg" productName="Remera 2" productPrice="$999"/>
            <ItemListContainer image="https://www.guantexindustrial.com.ar/707-large_default/remera-algodon-jersey-blanco-talle-xxxl.jpg" productName="Remera 3" productPrice="$999"/>
            <ItemListContainer image="https://www.guantexindustrial.com.ar/707-large_default/remera-algodon-jersey-blanco-talle-xxxl.jpg" productName="Remera 4" productPrice="$999"/>
        </div>
        </div>
        )
    }
}

export default ItemList;