import React from 'react';
import AvailableFood from './AvailableFood';
import './FoodItems.css'
import FoodItemSummary from './FoodItemSummary';

const FoodItems = () => {
    return (
      <>
        <FoodItemSummary />
        <AvailableFood/>
      </>
    );
};

export default FoodItems;