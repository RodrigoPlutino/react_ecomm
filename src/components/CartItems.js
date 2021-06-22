import React from 'react';
import '../styles/stylesheet.css'




function CartItems(props) {

const carrito = [
    { "id": 1, "first_name": "Lindy", "last_name": "Bloor", "email": "lbloor0@aol.com", "gender": "Genderfluid", "ip_address": "40.163.184.101" },
    { "id": 2, "first_name": "Dara", "last_name": "Creyke", "email": "dcreyke1@nifty.com", "gender": "Genderfluid", "ip_address": "187.47.25.59" },
    { "id": 3, "first_name": "Amberly", "last_name": "Mahood", "email": "amahood2@slideshare.net", "gender": "Polygender", "ip_address": "136.87.197.181" },
    { "id": 4, "first_name": "Emory", "last_name": "Brahams", "email": "ebrahams3@epa.gov", "gender": "Polygender", "ip_address": "229.32.6.202" },
];

function getCartItems() {
    let miPromesa = new Promise((resolve, reject) => {
        setTimeout(function () {
            const error = Math.random() > 0.85;
            if (!error) {
                resolve(carrito);
            }
            reject("Error obteniendo los datos :(");
        }, 500);
    })

    miPromesa.then(function (valor) {
        console.log(valor);
    }).catch(
        function (error) {
            console.log(error);
        })//.finally(
            //function () {
               // alert('Promesa terminada')
           // }
       // ) 
}


return (
        <a id="cart-icon" href="#" onClick={getCartItems}>{props.icon}</a>
)
}

export default CartItems;
