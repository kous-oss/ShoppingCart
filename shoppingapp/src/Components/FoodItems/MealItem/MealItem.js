import React,{useContext} from 'react';
import './MealItem.css';
import CartContext from '../../../store/CartContext';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
    
    const cartCtx = useContext(CartContext);

    const addItemHandler = (enteredAmountNumber) => {
        let item = {
            id:props.id,
            name:props.name,
            price:props.price,
            Quantity:enteredAmountNumber
        }

        cartCtx.addItem(item);
    }

    return (
        <li className='meal'>
            <div >
                <h3>{props.name}</h3>
                <div className='description'>{props.description}</div>
                <div className='price'>{`$${props.price.toFixed(2)}`}</div>
            </div>
            <div>
               {props.showForm && <MealItemForm id={props.id} name={props.name} Quantity={props.Quantity || 0} addItemToCart={addItemHandler}/>}
            </div>
        </li>
    );
};

export default MealItem;