import React, { useContext, useRef, useState } from 'react';
import ReusableInput from '../../UI/ReusableInput';

const MealItemForm = (props) => {

  const inputRef = useRef(0);
  const [showErr,setShowErr] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    let userEnteredValue = inputRef.current.value; 
    let amount = +userEnteredValue;
    if(amount < 1 || amount > 5 ){
      setShowErr(true);
      return;
    }
    props.addItemToCart(amount);
  };

  return (
    <form className="form" onSubmit = {submitHandler}>
      <ReusableInput
        label="Quantity"
        ref={inputRef}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "0",
        }}
      />
      <button> + Add </button>
      {showErr && <p>An Error Occured!! Enter a Valid Input in Text Field</p>}
    </form>
  );
};

export default MealItemForm;