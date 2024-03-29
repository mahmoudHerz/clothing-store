import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";

const CheckOut = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  const curr = "$";

  return (
    <div className="checkout-container">
      <h2 className="checkout-header">Shopping Cart</h2>
      {/* <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div> */}
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: {curr + cartTotal}</div>
    </div>
  );
};

export default CheckOut;
