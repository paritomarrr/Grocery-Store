import { useEffect } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

useEffect(() => {
  fetch('https://grocery-store-8e085-default-rtdb.firebaseio.com/meals.json')
}, [])

const AvailableMeals = () => {
  const meals = DUMMY_MEALS.map((meal) => (
    <MealItem
    key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>{meals}</Card>
    </section>
  );
};

export default AvailableMeals;
