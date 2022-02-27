import React, { useContext } from 'react';
import './CartModal.css';
import Modal from '../UI/Modal/Modal';
import CartContext from '../../store/CartContext';
import CartItem from './CartItem';


const CartModal = (props) => {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;

  const removeItem = (id) => {
    cartCtx.removeItem(id);
  }

  const addItem = (item) => {
    cartCtx.addItem({...item,Quantity:1});
  }

  const mealsList = cartCtx.items.map((m) => (
    <CartItem 
    key={m.id} name={m.name} description={m.description} price={m.price} Quantity ={m.Quantity} 
    id={m.id} 
    onRemove= {removeItem.bind(null,m.id)} 
    onAdd={addItem.bind(null,m)}/>
  ));

 
    return (
      <Modal handleClose={props.handleClose}>
        {mealsList}
        <div className="total">
          <span>Total Amount </span>
          <span>{cartCtx.items.reduce((curr,item) =>{
            return curr+(item.price * item.Quantity)
          } ,0)}</span>
        </div>
        <div className="actions">
          <button className="button--alt" onClick={props.handleClose}>Close</button>
          {hasItems && <button className="button">Order</button>}
        </div>
      </Modal>
    );
};

export default CartModal;