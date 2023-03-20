import React from 'react'

function Card({ dailyData }) {
  return (
    <div className="card">
        <p className="card__date">{dailyData.date}</p>
        <p className="card__text">TDEE: {dailyData.tdee} Cal</p>
        <p className="card__text">Calories Eaten: {dailyData.mealCalories} Cal</p>
        <p className="card__text">Calories Burned: {dailyData.workoutCalories} Cal</p> 
        <div className="card__totals">
            <p className="card__total">Deficit: {Number(dailyData.tdee) + Number(dailyData.workoutCalories) - Number(dailyData.mealCalories)} Cal</p>
            <p className="card__total">Protein: {dailyData.protein} g</p>
        </div>
    </div>
  )
}

export default Card