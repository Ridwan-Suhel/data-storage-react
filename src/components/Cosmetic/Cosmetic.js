import React from "react";
import "./Cosmetic.css";
const Cosmetic = (props) => {
  const { id, name, price } = props.cosmetic;
  return (
    <div className="product">
      <h2>Buy This: {name}</h2>
      <p>Only For: ${price}</p>
      <p>
        <small>It has id: {id}</small>
      </p>
    </div>
  );
};

export default Cosmetic;
