import React from 'react'

function WorkoutButton({ setModal, setWorkoutModalVisible }) {

  function handleAddWorkoutClick() {
    setWorkoutModalVisible(true);
    setModal(true);
  }

  return (
    <button className="btn btn--add btn--add-workout"onClick={handleAddWorkoutClick}><i className="fa-solid fa-person-running"></i></button>
  )
}

export default WorkoutButton