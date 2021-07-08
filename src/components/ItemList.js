import React, { useState, useEffect } from "react";
import "../styles/stylesheet.css";
import ItemListSkeleton from "./ItemListSkeleton";
import ItemLoader from "./ItemLoader";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
></link>;

function FetchAPI(props) {
  const [data, setData] = useState(null);

  const apiLoader = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
  ];

  useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA1648")
      .then((res) => res.json())
      .then((res) => setData(res.results));
  }, []);

  return (
    <div className="col-12 space d-flex justify-content-around flex-wrap">
      {data === null
        ? apiLoader.map(() => {
            return <ItemLoader />;
          })
        : data.map((item) => {
            return (
              <ItemListSkeleton
                id={item.id}
                productName={item.title}
                productPrice={item.price}
                image={item.thumbnail}
                unidades={item.unidades}
                maxStock={item.available_quantity}
              />
            );
          })}
    </div>
  );
}

export default FetchAPI;
