import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemove }) => {
  let choose;
  if (cart.length === 0) {
    choose = <h4>Please add at least one items</h4>;
  } else if (cart.length <= 3) {
    choose = <h4>You can add more items</h4>;
  } else {
    choose = <h4>Thanks for adding items</h4>;
  }
  return (
    <div>
      <h2>This is cart section : {cart.length}</h2>
      <h3>{choose}</h3>
      {cart.map((cart) => (
        <p>
          {cart.name.slice(0, 10)}{" "}
          <button className="handle-remove" onClick={() => handleRemove(cart)}>
            X
          </button>
        </p>
      ))}
      {cart.length !== 3 ? "" : <button>Remove One</button>}
      {cart.length === 2 && <button>Remove Another</button>}
      {cart.length === 1 || <button>Remove</button>}
    </div>
  );
};

export default Cart;
