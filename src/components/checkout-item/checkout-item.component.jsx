import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const curr = "$";
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const increaseItemHandler = () => addItemToCart(cartItem);
  const decreaseItemHandler = () => removeItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <span className="name"> {name} </span>
      <span className="quantity">
        <div className="arrow" onClick={decreaseItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={increaseItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price"> {curr + price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
