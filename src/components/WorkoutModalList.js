import React from 'react'
import Workout from './Workout'

function WorkoutModalList({ workoutList }) {
  return (
    <div className="modal__list container--small">
        {workoutList.map((workout,index) => {
            return (
                <Workout exercise={workout.exercise} calories={workout.calories} key={index}/>
            )
        })}
    </div>
  )
}

export default WorkoutModalList