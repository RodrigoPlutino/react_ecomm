import React, { useState } from 'react';
import '../styles/stylesheet.css'
import Button from 'react-bootstrap/Button'

function Counter () {
    const [valor, setvalor] = useState (0);
    function handelSuma(){
        setvalor(valor + 1)
    }
    function handelResta(){
        if (valor >= 1){
        setvalor(valor - 1)
    }
}

    return (
        <div className="counter">
            <Button  variant="outline-secondary" onClick={handelResta}>Restar</Button>
            <p>{valor}</p>
            <Button  variant="outline-secondary" onClick={handelSuma}>Sumar</Button>
        </div>
    )
}

export default Counter;

