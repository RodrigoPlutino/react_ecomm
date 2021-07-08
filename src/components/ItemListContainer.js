import React, { Component } from 'react';
import '../styles/stylesheet.css';
import ItemList from '../components/ItemList';
import FetchAPI from './ItemList';


function ItemListContainer() {


return (
        <div>
            <FetchAPI/>
        </div>
)
}

export default ItemListContainer;
