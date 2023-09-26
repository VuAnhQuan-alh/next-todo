"use client";

import { useState } from "react";

const AddToCart = () => {
  const [amount, setAmount] = useState(0);
  return (
    <button onClick={() => console.log("add to cart")}>Add to Cart</button>
  );
};

export default AddToCart;
