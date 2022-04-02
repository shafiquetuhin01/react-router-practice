import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemove }) => {
  return (
    <div>
      <h2>This is cart section : {cart.length}</h2>
      {cart.map((cart) => (
        <p>
          {cart.name.slice(0, 10)}{" "}
          <button className="handle-remove" onClick={() => handleRemove(cart)}>
            X
          </button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
