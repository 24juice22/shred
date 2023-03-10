import React from 'react'

function WorkoutTotal({ workoutList }) {
    console.log(workoutList)

    let totalCalories = workoutList.reduce((a, b) => {
        console.log(a)
        return a + Number(b.calories);
    }, 0);

  return (
    <div className="workout-total">
        <p className="workout-total__description">Total Calories Burned:</p>
        <p className="workout-total__value">{totalCalories}</p>
    </div>
  )
}

export default WorkoutTotal