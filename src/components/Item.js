import React, { useState } from 'react';
import '../styles/stylesheet.css'
import Button from 'react-bootstrap/Button'


function Item(props) {

    const [valor, setvalor] = useState (1);
    function handelSuma(){
        if (valor < props.maxStock){
            setvalor(valor + 1)
        }
    }
    function handelResta(){
        if (valor > props.unidades){
        setvalor(valor - 1)
        }
    }

    return (

        <div className="card" id={props.id}>
            <img src={props.image}></img>
            <div className="container">
                <h4><b>{props.productName}</b></h4>
                <p>{props.productPrice}</p>

                <div className="counter">
                <Button  variant="outline-secondary" onClick={handelResta}>-</Button>
                <p>{valor}</p>
                <Button  variant="outline-secondary" onClick={handelSuma}>+</Button>
                </div>
        </div>
        </div>
    )
}

export default Item;



