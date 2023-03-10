import React from 'react'

function Workout({ exercise, calories}) {
  return (
    <div className="workout">
        <p className="workout__text">{exercise}</p>
        <p className="workout__text">{calories} Cal</p>
    </div>
  )
}

export default Workout