import React from "react";
import add from "../../utilities/calculate";

const Cosmetics = () => {
  const first = 30;
  const second = 40;
  const total = add(first, second);
  return (
    <div>
      <h1>I am from Store</h1>
      <p>{total}</p>
    </div>
  );
};

export default Cosmetics;
