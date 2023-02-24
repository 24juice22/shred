import React from 'react'

function AddWorkout({ setModal, setAddWorkoutModalVisible }) {

  function handleAddWorkoutClick() {
    setAddWorkoutModalVisible(true);
    setModal(true);
  }

  return (
    <button className="btn btn--add btn--add-workout"onClick={handleAddWorkoutClick}><i className="fa-solid fa-person-running"></i></button>
  )
}

export default AddWorkout