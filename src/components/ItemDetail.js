import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ItemPage from './ItemPage';
import ItemLoader from './ItemLoader';
import Item from './Item';

function ItemDetail() {


const {id} = useParams;

const [data, setData] = useState(null);

const apiLoader = [{"id":1},{"id":2,},{"id":3,},{"id":4,},{"id":5,},{"id":6,},{"id":7,},{"id":8,},{"id":9,}]


    useEffect(() => {
        fetch(`https://api.mercadolibre.com/items/${id}?include_attributes-all`)
        .then((res)=>res.json())
        .then((res)=>setData(res.results))
    }, []);

    return (

        <div className="col-12 space d-flex justify-content-around flex-wrap">
            {data === null?
            
            ((apiLoader.map(()=>{
                return(<ItemLoader/>);
            })))

            :

            (data.map((item)=>{
                return(
                <Item
                id={item.id}
                productName={item.title}
                productPrice={item.price}
                image={item.thumbnail}

                unidades={item.unidades}
                maxStock={item.available_quantity}/>
                );
                }))
                }
        </div>
      
    );
}

export default ItemDetail;