import React, { useState } from "react";
import { MdClose } from "react-icons/md";

const CartItem = ({ className, title, price, img }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className={className.cartItem}>
      <img src={img} alt="Product" />
      <h1>{title}</h1>
      <div className={className.amountBox}>
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          min={1}
          id="amount"
          value={quantity}
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
        />
      </div>
      <h3>${price}</h3>
      <MdClose className={className.close} size={30} />
    </div>
  );
};

export default CartItem;
