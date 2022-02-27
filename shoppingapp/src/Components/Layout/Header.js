import React, { useContext } from 'react';
import CartProvider from '../../store/CartProvider';
import CartButton from './CartButton';
import './Header.css';
import MealsImg from './Meals.jpg';

const Header = (props) => {

  
    return (
      <>
        <header className='header'>
          <h1 className='react-meals'>React Meals</h1>
          <CartButton showCart = {props.onShowCart} hideCart ={props.onHideCart}/>
        </header>
        <div className='main-image'>
          <img src={MealsImg} alt="There You Go :)"/>
        </div>
      </>
    );
};

export default Header;