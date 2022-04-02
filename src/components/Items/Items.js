import React from "react";
import "./Items.css";
const Items = ({ handleAddToCart, product }) => {
  const { id, img, name, seller, price } = product;
  return (
    <div className="items">
      <h3>Name: {name.slice(0, 20)}</h3>
      <img src={img} alt="" />
      <h4>ID: {id.slice(0, 8)}</h4>
      <h3>Seller: {seller}</h3>
      <h3>Price: ${price}</h3>
      <button
        onClick={() => {
          handleAddToCart(product);
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Items;
