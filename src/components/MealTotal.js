import React from 'react'

function MealTotal({ mealList }) {

    const totalCalories = mealList.reduce((a, b) => {
        return a + Number(b.calories);
    }, 0);

    const totalProtein = mealList.reduce((a, b) => {
        return a + Number(b.protein);
    }, 0)

  return (
    <div className="total total--meal">
        <p className="total__description">Total Calories Consumed:</p>
        <p className="total__value">{totalCalories}</p>
        <p className="total__description">Total Protein Consumed:</p>
        <p className="total__value">{totalProtein}</p>
    </div>
  )
}

export default MealTotal