import React from 'react'
import Meal from './Meal'

function MealList( { mealList }) {
  return (
    <div className="modal__list container--wide">
        {mealList.map((meal, index) => {
            return (
                <Meal meal={meal.meal} calories={meal.calories} protein={meal.protein} key={index}/>
            )
        })}
    </div>
  )
}

export default MealList