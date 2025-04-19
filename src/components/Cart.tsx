import React from "react";

interface Props {
  cartItems: String[];
  onClick: () => void;
}
const Cart = ({ cartItems, onClick }: Props) => {
  return (
    <>
      <ul>
        Cart
        {cartItems.map((item) => (
          <li>{item} </li>
        ))}
      </ul>
      <button onClick={onClick}>Clear Cart</button>
    </>
  );
};

export default Cart;
