import React, { useState } from 'react';
import '../styles/stylesheet.css';
import Item from './Item';
import Counter from './Counter';



function ItemList() {
    
    const [items, setItems ] = useState(null)

    const apiItems = [
        {"id":1,"productName":"Bat, little brown","price":"$47.26","maxStock":4,"image":"https://www.guantexindustrial.com.ar/707-large_default/remera-algodon-jersey-blanco-talle-xxxl.jpg"},
        {"id":2,"productName":"Giant heron","price":"$57.20","maxStock":5,"image":"https://www.guantexindustrial.com.ar/707-large_default/remera-algodon-jersey-blanco-talle-xxxl.jpg"},
        {"id":3,"productName":"Crab (unidentified)","price":"$89.18","maxStock":3,"image":"https://www.guantexindustrial.com.ar/707-large_default/remera-algodon-jersey-blanco-talle-xxxl.jpg"},
        {"id":4,"productName":"Long-finned pilot whale","price":"$69.88","maxStock":4,"image":"https://www.guantexindustrial.com.ar/707-large_default/remera-algodon-jersey-blanco-talle-xxxl.jpg"},
        {"id":5,"productName":"Secretary bird","price":"$144.96","maxStock":1,"image":"https://www.guantexindustrial.com.ar/707-large_default/remera-algodon-jersey-blanco-talle-xxxl.jpg"}
    ]


    let miPromesa = new Promise((resolve, reject) => {
        setTimeout(function() {
            const error = false

            if (!error) {
                resolve(apiItems)
            }
            reject("Cargando aun")
        }, 1000)
    })

    miPromesa.then(function(valor){
        setItems(valor)
        console.log('valor -->', valor)
        console.log('items -->', items)
    }).catch(
        function(error) {
            console.log(error)
        }
    )

    return (
        <div className="first-box">
        {items === null?(<h3>Cargando..</h3>):(items.map((item, index)=>{
            return(
            <Item
            id={index}
            productName={item.productName}
            productPrice={item.price}
            image={item.image}

            unidades={item.unidades}
            maxStock={item.maxStock}/>
            );
        })
        )}
        </div>
    )
}

export default ItemList;
