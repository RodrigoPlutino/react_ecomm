import react from 'react';
import '../styles/stylesheet.css'
import Counter from './Counter';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"></link>



function Item(props) {


    return (
        
        <div className="col-12 col-sm-6 space d-flex justify-content-around">
        <Card className="d-flex align-items-center flex-row justify-content-around mb-3" id={props.id} style={{ width: '45rem' }}>
            <Card.Img  variant="top" src={props.image}/>
            <Card.Body className="d-flex align-items-center flex-column justify-content-around mb-3">
                <Card.Title>{props.productName}</Card.Title>
                <Card.Text>{props.productPrice}</Card.Text>
                <Counter maxStock={props.maxStock} unidades="1"/>
                <Link to={`products/${props.id}`}><Button variant="primary">Go somewhere</Button></Link>
            </Card.Body>
        </Card>
        </div>
            
    )
}

export default Item;



