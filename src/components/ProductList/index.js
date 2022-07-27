import React from "react";

import { useSelector } from "react-redux";
import Card from "../Card";

function ProductList() {
  const products = useSelector((state) => state.products.items);
  console.log("productlist component rendered ", products);
  return (
    <div className="products-container">
      {products &&
        products.map((item) => (
          <Card key={Math.random() * Date.now()} {...item} />
        ))}
    </div>
  );
}

export default ProductList;
