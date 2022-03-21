import React from "react";
import { addToDb, removeFromDb } from "../../utilities/fakeDb";
import "./Cosmetic.css";
const Cosmetic = (props) => {
  const { id, name, price } = props.cosmetic;
  const addToCart = (id) => {
    addToDb(id);
  };
  const removeFromCart = (id) => {
    removeFromDb(id);
  };

  return (
    <div className="product">
      <h2>Buy This: {name}</h2>
      <p>Only For: ${price}</p>
      <p>
        <small>It has id: {id}</small>
      </p>
      <button onClick={() => addToCart(id)}>Add to cart</button>
      <button onClick={() => removeFromCart(id)}>Remove cart</button>
    </div>
  );
};

export default Cosmetic;
