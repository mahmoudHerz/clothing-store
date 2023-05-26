import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <header className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <nav>
          <ul className="nav-links-container">
            <li>
              <Link className="nav-link" to="/shop">
                SHOP
              </Link>
            </li>
            <li>
              {currentUser ? (
                <span className="nav-link" onClick={signOutUser}>
                  SIGN OUT
                </span>
              ) : (
                <Link className="nav-link" to="/auth">
                  SIGN IN
                </Link>
              )}
            </li>
            <li>
              <CartIcon />
            </li>
          </ul>
        </nav>
        {isCartOpen && <CartDropdown />}
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
