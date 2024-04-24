import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Product = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`
    )
      .then((res) => res.json())
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {data.map((product) => (
        <>
          <Link key={product.id} to={`/productDetails/${product.id}`}>
            <div>
              <h2>{product.id}</h2>
              <h2>{product.title}</h2>
              <h2>{product.category}</h2>
            </div>
          </Link>
        </>
      ))}
    </div>
  );
};
