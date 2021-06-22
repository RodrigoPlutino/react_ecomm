import React from 'react';
import '../styles/stylesheet.css'
import ItemListContainer from './ItemListContainer'


function ItemList() {

    const ITEMS = [
    {"id":1,"productName":"Bat, little brown","price":"$47.26","maxStock":4,"image":"https://www.guantexindustrial.com.ar/707-large_default/remera-algodon-jersey-blanco-talle-xxxl.jpg"},
    {"id":2,"productName":"Giant heron","price":"$57.20","maxStock":5,"image":"https://www.guantexindustrial.com.ar/707-large_default/remera-algodon-jersey-blanco-talle-xxxl.jpg"},
    {"id":3,"productName":"Crab (unidentified)","price":"$89.18","maxStock":3,"image":"https://www.guantexindustrial.com.ar/707-large_default/remera-algodon-jersey-blanco-talle-xxxl.jpg"},
    {"id":4,"productName":"Long-finned pilot whale","price":"$69.88","maxStock":4,"image":"https://www.guantexindustrial.com.ar/707-large_default/remera-algodon-jersey-blanco-talle-xxxl.jpg"},
    {"id":5,"productName":"Secretary bird","price":"$144.96","maxStock":1,"image":"https://www.guantexindustrial.com.ar/707-large_default/remera-algodon-jersey-blanco-talle-xxxl.jpg"}];

    return (
        <div className="first-box">
            {ITEMS.map((ITEMS, index)=>{return <ItemListContainer id={index} productName={ITEMS.productName} productPrice={ITEMS.price} image={ITEMS.image} maxStock={ITEMS.maxStock}/>})}
        </div>
        )

}

export default ItemList;