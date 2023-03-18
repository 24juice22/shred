import React from 'react'

function MealTotal({ dailyData }) {

  return (
    <div className="total total--meal">
        <p className="total__description">Total Calories Consumed:</p>
        <p className="total__value">{dailyData.mealCalories}</p>
        <p className="total__description">Total Protein Consumed:</p>
        <p className="total__value">{dailyData.protein}</p>
    </div>
  )
}

export default MealTotal