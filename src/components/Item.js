import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  return (
    <li className={inCart? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {!inCart && <button onClick={() => setInCart(true)} className="add">Add to Cart</button>}
      {inCart && <button onClick={() => setInCart(false)} className="remove">Remove from Cart</button>}
    </li>
  );
}

export default Item;
