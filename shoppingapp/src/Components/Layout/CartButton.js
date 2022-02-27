import React, {useContext} from 'react';
import './Header.css'
import CartImage from './CartImage.jpg';
import CartContext from '../../store/CartContext';

const CartButton = (props) => {
    const cartProviderContext = useContext(CartContext);
    return (
      <div className="cart-styling react-cart" onClick={props.showCart}>
        <img src={CartImage} alt="Cart" />
        <h3> Cart </h3>
        <h3 className="badge">
          {" "}
          {cartProviderContext.items.reduce((curr, item) => {
            return curr + item.Quantity;
          }, 0)}{" "}
        </h3>
      </div>
    );
};

export default CartButton;