import { useContext } from "react";

import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const curr = "$";
  const { addItemToCart } = useContext(CartContext);

  const handleClick = () => {
    return addItemToCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{curr + price}</span>
      </div>
      <Button buttonType="inverted" onClick={handleClick}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
