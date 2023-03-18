import React from 'react'

function WorkoutTotal({ workoutList }) {
    console.log(workoutList)

    let totalCalories = workoutList.reduce((a, b) => {
        return a + Number(b.calories);
    }, 0);

  return (
    <div className="total">
        <p className="total__description">Total Calories Burned:</p>
        <p className="total__value">{totalCalories}</p>
    </div>
  )
}

export default WorkoutTotal