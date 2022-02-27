import React, { useReducer } from 'react';
import CartContext from './CartContext';

const defaultCartState = {
    items:[],
    totalAmount :0
}

const cartReducer = (state,action) => {
    if(action.type === 'AddItem'){
        let upAmount = state.totalAmount + (action.item.price  * action.item.Quantity);
        let existingIndex = state.items.findIndex(item => item.id === action.item.id);
        let existingItem = state.items[existingIndex];
        let updatedItems;
        if(existingItem){
            let updatedItem ={
                ...existingItem,
                Quantity:existingItem.Quantity + action.item.Quantity
            };
            updatedItems = [...state.items];
            updatedItems[existingIndex] = updatedItem;
        }else{
            updatedItems = state.items.concat(action.item);
        }
       
        return {items:updatedItems,totalAmount:upAmount};
    }
    if(action.type === 'DeleteItem'){
        let existingIndex = state.items.findIndex(item => item.id === action.id);
        let existingItem = state.items[existingIndex];
        let upAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.Quantity === 1) {
            updatedItems = state.items.filter(i=> i.id !== action.id);
        } 
        else {
           let updatedItem = {...existingItem, Quantity:existingItem.Quantity -1 };
            updatedItems = [...state.items];
            updatedItems[existingIndex] = updatedItem;
        }
        return {items:updatedItems,totalAmount:upAmount};
    }
}

const CartProvider = (props) => {

    const [cartState,dispatchcartActionFn] = useReducer(cartReducer,defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchcartActionFn({ type:'AddItem', item:item})
    }

    const removeItemFromHandler = (id) => {
        dispatchcartActionFn({type:'DeleteItem',id:id});
    }
    

    const cartContext = {
      items: cartState.items,
      totalAmount: cartState.totalAmount,
      addItem: addItemToCartHandler,
      removeItem:removeItemFromHandler,
    };

    return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
}; 

export default CartProvider;