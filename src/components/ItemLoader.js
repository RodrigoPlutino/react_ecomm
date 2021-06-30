import '../styles/stylesheet.css'
import Card from 'react-bootstrap/Card'
import Skeleton from 'react-loading-skeleton';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"></link>



function ItemLoader() {


    return (
        <div className="col-12 col-sm-6 space d-flex justify-content-around">
            <Card className="d-flex align-items-center flex-row justify-content-around mb-3" style={{ width: '45rem' }}>
            <Card.Body className="d-flex align-items-center flex-column justify-content-around mb-3"><Skeleton height={272}/></Card.Body>
            <Card.Body>
                <Card.Title><Skeleton/></Card.Title>
                <Card.Text><Skeleton/></Card.Text>
                <Card.Text><Skeleton/></Card.Text>
                <Card.Text><Skeleton/></Card.Text>
            </Card.Body>
            </Card>
        </div>

    )
}

export default ItemLoader;