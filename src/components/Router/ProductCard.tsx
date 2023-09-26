import { memo } from "react";

import AddToCart from "./AddToCard";

const ProductCard = () => {
  return (
    <section>
      <AddToCart />
    </section>
  );
};

export default memo(ProductCard);
