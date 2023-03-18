import React from 'react'

function Card({ tdee, dailyData }) {
  return (
    <div className="card">
        <p>Calories Eaten: {dailyData.mealCalories}</p>
        <p>-</p>
        <p>Calories Burned: {dailyData.workoutCalories}</p> 
        <p>-</p>
        <p>TDEE: {tdee}</p>
    </div>
  )
}

export default Card