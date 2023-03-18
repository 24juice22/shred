import React from 'react'

function WorkoutTotal({ workoutCalories }) {

  return (
    <div className="total">
        <p className="total__description">Total Calories Burned:</p>
        <p className="total__value">{workoutCalories}</p>
    </div>
  )
}

export default WorkoutTotal