import React from 'react';
import Card from '../UI/Card';
import './FoodItems.css';
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];


const AvailableFood = () => {
    const mealsList = DUMMY_MEALS.map((m) => (
      <MealItem key={m.id} name={m.name} description={m.description} price={m.price} id={m.id} Quantity={m.Quantity || 0} showForm='true'/>
    ));
    return (
      <div className="meals-div">
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      </div>
    );
};

export default AvailableFood; 