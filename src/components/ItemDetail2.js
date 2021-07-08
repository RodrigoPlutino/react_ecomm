import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/stylesheet.css";
import Item from "./Item";
import ItemLoader from "./ItemLoader";
import ItemPage from "./ItemPage";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
></link>;

function ItemDetail2() {
  const [detail, setDetail] = useState([]);

  let { id } = useParams();

  const apiLoader = [{ id: 1 }];

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/items/${id}?include_attributes-all`)
      .then((res) => res.json())
      .then((res) => {
        setDetail(res);
      });
  }, [id]);

  return (
    <div className="col-12 space d-flex justify-content-around flex-wrap">
      {detail === null ? (
        apiLoader.map(() => {
          return <ItemLoader />;
        })
) : (
        <ItemPage
          id={detail.id}
          productName={detail.title}
          productPrice={detail.price}
          image={detail.thumbnail}
          unidades={detail.unidades}
          maxStock={detail.available_quantity}
        />
      )}
    </div>
  );
}

export default ItemDetail2;
