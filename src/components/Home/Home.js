import React, { useState } from "react";
import Cart from "../Cart/Cart";
import Products from "../Hooks/products";
import Items from "../Items/Items";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = Products();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (selectedItem) => {
    const exists = cart.find((product) => product.id === selectedItem.id);
    if (!exists) {
      const newCart = [...cart, selectedItem];
      setCart(newCart);
    } else {
      alert("Items already added");
    }
  };

  const handleRemove = (selectedItem) => {
    const rest = cart.filter((product) => product.id !== selectedItem.id);
    setCart(rest);
  };
  return (
    <div className="home-container">
      <div className="items-container">
        {products.slice(0, 20).map((product) => (
          <Items
            product={product}
            key={product.id}
            handleAddToCart={handleAddToCart}
          ></Items>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} key={cart.id} handleRemove={handleRemove}></Cart>
      </div>
    </div>
  );
};

export default Home;
