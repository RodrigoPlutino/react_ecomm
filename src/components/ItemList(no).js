import React, { useState } from 'react';
import '../styles/stylesheet.css';
import Item from './Item';
import ItemLoader from './ItemLoader';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"></link>


function ItemList() {
    
    const [items, setItems ] = useState(null)

    const apiLoader = [{"id":1},{"id":2,},{"id":3,},{"id":4,},{"id":5,},{"id":6,},{"id":7,},{"id":8,},{"id":9,}]

    const apiItems = [
        {"id":1,"productName":"Bat, little brown","price":"$47.26","maxStock":4,"image":"https://www.guantexindustrial.com.ar/707-large_default/remera-algodon-jersey-blanco-talle-xxxl.jpg"},
        {"id":2,"productName":"Giant heron","price":"$57.20","maxStock":5,"image":"https://www.guantexindustrial.com.ar/707-large_default/remera-algodon-jersey-blanco-talle-xxxl.jpg"},
        {"id":3,"productName":"Crab (unidentified)","price":"$89.18","maxStock":3,"image":"https://www.guantexindustrial.com.ar/707-large_default/remera-algodon-jersey-blanco-talle-xxxl.jpg"},
        {"id":4,"productName":"Long-finned pilot whale","price":"$69.88","maxStock":4,"image":"https://www.guantexindustrial.com.ar/707-large_default/remera-algodon-jersey-blanco-talle-xxxl.jpg"},
        {"id":5,"productName":"Secretary bird","price":"$144.96","maxStock":1,"image":"https://www.guantexindustrial.com.ar/707-large_default/remera-algodon-jersey-blanco-talle-xxxl.jpg"},
        {"id":6,"productName":"Secretary bird","price":"$144.96","maxStock":1,"image":"https://www.guantexindustrial.com.ar/707-large_default/remera-algodon-jersey-blanco-talle-xxxl.jpg"}
    ]


    let miPromesa = new Promise((resolve, reject) => {
        setTimeout(function() {
            const error = false

            if (!error) {
                resolve(apiItems)
            }
            reject("Cargando aun")
        }, 2000)
    })

    miPromesa.then(function(valor){
        setItems(valor)
    }).catch(
        function(error) {
            console.log(error)
        }
    )

    return (
        <div className="col-12 space d-flex justify-content-around flex-wrap">
        {items === null?
        
        ((apiLoader.map(()=>{
            return(<ItemLoader/>);
        })))

        :

        (items.map((item, index)=>{
            return(
            <Item
            id={index}
            productName={item.productName}
            productPrice={item.price}
            image={item.image}

            unidades={item.unidades}
            maxStock={item.maxStock}/>
            );
            }))
        }
        </div>
    )
}

export default ItemList;
