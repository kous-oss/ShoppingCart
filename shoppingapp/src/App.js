import { useState } from 'react';
import './App.css';
import CartModal from './Components/CartModal/CartModal';
import FoodItems from './Components/FoodItems/FoodItems';
import Header from './Components/Layout/Header';
import CartProvider from './store/CartProvider';

function App() {
 
  const [showCart,setShowCart] = useState(false); 

  function showCartHandler() {
    setShowCart(true);
  } 

  function hideCartHandler  (){
    setShowCart(false);
  }

  return (
    <>
      <CartProvider>
        {showCart && <CartModal handleClose={hideCartHandler} />}

        <Header onShowCart={showCartHandler} onHideCart={hideCartHandler} />

        <main>
          <FoodItems />
        </main>
      </CartProvider>
    </>
  );
}

export default App;
